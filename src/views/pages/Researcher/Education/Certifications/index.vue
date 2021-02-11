<template>
    <vx-card class="mb-4">
        <div class="flex justify-between items-center mb-4">
            <h3>İxtisas üzrə yerli və beynəlxalq sertifikatlar</h3>
            <vs-button
                color="success"
                type="flat"
                icon="add"
                @click="toggleModal"
            >
                Əlavə et
            </vs-button>
        </div>

        <vs-list>
            <div
                v-for="item in certificates"
                :key="item.id"
                class="vs-list--item"
            >
                <div class="list-titles">
                    <div class="vs-list--title">
                        <span>
                            {{ item.name }} ({{ formatDate(item.startDate) }} - {{ formatDate(item.endDate) }})
                        </span>
                        <vs-button
                            color="danger"
                            type="flat"
                            icon="icon-trash-2"
                            icon-pack="feather"
                            @click="openDestroyDialog(item.id)"
                        />
                    </div>
                    <div class="vs-list--subtitle">
                        <div>
                            {{ item.description }}
                        </div>
                    </div>
                </div>
            </div>
        </vs-list>

        <CertificateModal
            :active.sync="modalActive"
            @afterInsert="getCertificates"
        />
    </vx-card>
</template>

<script>
import API from '@/api';
import CertificateModal from './Modal';
import { formatDate } from '@/helpers';

export default {
    name: 'Certificates',
    components: {
        CertificateModal
    },
    data() {
        return {
            certificates: [],
            modalActive: false
        };
    },
    mounted() {
        this.getCertificates();
    },
    methods: {
        formatDate,
        getCertificates() {
            const config = {
                params: {
                    user_id: this.$store.state.user.id
                }
            };

            API.Certificate.getAll(config).then(res => {
                if (res.data) {
                    this.certificates = res.data;
                }
            });
        },
        toggleModal(value) {
            if (value === true || value === false) {
                this.modalActive = value;
            } else {
                this.modalActive = !this.modalActive;
            }
        },
        openDestroyDialog (id) {
            const that = this;

            const dialogConfig = {
                type: 'confirm',
                color: 'danger',
                title: 'Silməyə əminsiniz?',
                text: 'Bu məlumatı sildikdən sonra geri qaytara bilməyəcəksiniz.',
                acceptText: 'Bəli, sil',
                cancelText: 'Xeyr',
                accept() { return that.destroy(id); }
            };

            this.$vs.dialog(dialogConfig);
        },
        destroy(id) {
            const config = {
                params: {
                    id
                }
            };

            API.Certificate.destroy(config).then(res => {
                this.getCertificates();
            });
        }
    }
};
</script>