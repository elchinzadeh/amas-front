<template>
    <div class="w-full">
        <vx-card class="mb-4">
            <div class="flex justify-between items-center mb-4">
                <h3>
                    Tədqiqat sahələri
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
                    v-for="item in researchAreas"
                    :key="item.id"
                    class="vs-list--item"
                >
                    <div class="list-titles">
                        <div class="vs-list--title">
                            <span>
                                {{ item.area.name }}
                            </span>
                            <vs-button
                                color="danger"
                                type="flat"
                                icon="icon-trash-2"
                                icon-pack="feather"
                                @click="openDestroyDialog(item.id)"
                            />
                        </div>
                    </div>
                </div>
            </vs-list>

            <ResearchAreaModal
                :active.sync="modalActive"
                @afterInsert="getResearchAreas"
            />
        </vx-card>
    </div>
</template>

<script>
import API from '@/api';
import ResearchAreaModal from './Modal';
import './style.scss';

export default {
    name: 'ResearchAreas',
    components: {
        ResearchAreaModal
    },
    data() {
        return {
            researchAreas: [],
            modalActive: false
        };
    },
    mounted() {
        this.getResearchAreas();
    },
    methods: {
        getResearchAreas() {
            const config = {
                params: {
                    user_id: this.$store.state.user.id
                }
            };

            API.ResearcherResearchArea.getAll(config).then(response => {
                if (response.data) {
                    this.researchAreas = response.data;
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

            API.ResearcherResearchArea.destroy(config).then(res => {
                this.getResearchAreas();
            });
        }
    }
};
</script>
