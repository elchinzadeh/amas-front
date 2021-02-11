<template>
    <div class="w-full">
        <vx-card class="mb-4">
            <div class="flex justify-between items-center mb-4">
                <h3>
                    Patentlər
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
                    v-for="patent in patents"
                    :key="patent.id"
                    class="vs-list--item"
                >
                    <div class="list-titles">
                        <div class="vs-list--title">
                            <span>
                                {{ patent.name }}&nbsp;
                                ( {{ formatDate(patent.registrationDate) }} )
                            </span>
                            <vs-button
                                color="danger"
                                type="flat"
                                icon="icon-trash-2"
                                icon-pack="feather"
                                @click="openDestroyDialog(patent.id)"
                            />
                        </div>
                        <div class="vs-list--subtitle mt-2">
                            <div>
                                <b>Müəssisə:</b>
                                {{ patent.organization ? patent.organization.name : '' }}
                            </div>
                            <div>
                                <b>Müraciət tarixi:</b>
                                {{ formatDate(patent.applyDate) }}
                            </div>
                        </div>
                    </div>
                </div>
            </vs-list>
        </vx-card>

        <PatentModal
            :active.sync="modalActive"
            @afterInsert="getPatents"
        />
    </div>
</template>

<script>
import API from '@/api';
import PatentModal from './Modal';
import { formatDate } from '@/helpers';
import './style.scss';

export default {
    name: 'Patent',
    components: {
        PatentModal
    },
    data() {
        return {
            patents: [],
            modalActive: false
        };
    },
    mounted() {
        this.getPatents();
    },
    methods: {
        getPatents() {
            const config = {
                params: {
                    user_id: this.$store.state.user.id
                }
            };

            API.Patent.getAll(config).then(res => {
                if (res.data) {
                    this.patents = res.data;
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
                    patentId: id
                }
            };

            API.Patent.destroy(config).then(res => {
                this.getPatents();
            });
        },
        formatDate
    }
};
</script>