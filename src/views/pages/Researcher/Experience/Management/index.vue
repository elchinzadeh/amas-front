<template>
    <vx-card class="mb-4">
        <div class="flex justify-between items-center mb-4">
            <h3>
                İdarəetmə təcrübəsi
            </h3>
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
                v-for="item in experience"
                :key="item.id"
                class="vs-list--item"
            >
                <div class="list-titles">
                    <div class="vs-list--title">
                        <span>
                            {{ `${item.name} (${formatDate(item.startDate)} - ${formatDate(item.endDate)})` }}
                        </span>
                        <vs-button
                            color="danger"
                            type="flat"
                            icon="icon-trash-2"
                            icon-pack="feather"
                            @click="openDestroyDialog(item.id)"
                        />
                    </div>
                    <div class="vs-list--subtitle mt-2">
                        <div>
                            <b>
                                Müəssisə:
                            </b>
                            {{ item.organization.name }}
                        </div>
                    </div>
                </div>
            </div>
        </vs-list>

        <ManagementModal
            :active.sync="modalActive"
            @afterInsert="getManagementExperience"
        />
    </vx-card>
</template>

<script>
import API from '@/api';
import ManagementModal from './Modal';
import { formatDate } from '@/helpers';

export default {
    name: 'Management',
    components: {
        ManagementModal
    },
    data() {
        return {
            experience: [],
            modalActive: false
        };
    },
    mounted() {
        this.getManagementExperience();
    },
    methods: {
        formatDate,
        getManagementExperience() {
            const config = {
                params: {
                    user_id: this.$store.state.user.id
                }
            };

            API.ManagementExperience.getAll(config).then(res => {
                if (res.data) {
                    this.experience = res.data;
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

            API.ManagementExperience.destroy(config).then(res => {
                this.getManagementExperience();
            });
        }
    }
};
</script>