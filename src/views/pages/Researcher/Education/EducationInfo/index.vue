<template>
    <div>
        <vx-card class="mb-4">
            <div class="flex justify-between items-center mb-4">
                <h3>Təhsil məlumatları</h3>
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
                    v-for="item in educationInfo"
                    :key="item.id"
                    class="vs-list--item"
                >
                    <div class="list-titles">
                        <div class="vs-list--title">
                            <span>
                                {{ item.level.name }} ({{ formatDate(item.startDate) }} - {{ formatDate(item.endDate) }})
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
                                <b>Müəssisə:</b>
                                {{ item.organization.name }}
                            </div>
                            <div>
                                <b>İxtisas:</b>
                                {{ item.profession.name }}
                            </div>
                            <div>
                                <b>Ölkə:</b>
                                {{ item.country.name }}
                            </div>
                        </div>
                    </div>
                </div>
            </vs-list>
        </vx-card>

        <EducationInfoModal
            :active.sync="modalActive"
            @afterInsert="getEducationInfo"
        />
    </div>
</template>

<script>
import API from '@/api';
import EducationInfoModal from './Modal';
import { formatDate } from '@/helpers';

export default {
    name: 'EducationInfo',
    components: {
        EducationInfoModal
    },
    data() {
        return {
            educationInfo: [],
            modalActive: false
        };
    },
    mounted() {
        this.getEducationInfo();
    },
    methods: {
        formatDate,
        getEducationInfo() {
            const config = {
                params: {
                    user_id: this.$store.state.user.id
                }
            };

            API.ResearcherEducation.getAll(config).then(res => {
                if (res.data) {
                    this.educationInfo = res.data;
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
                text: 'Təhsil məlumatı ona bağlı olan Dissertasiyalar ilə birlikdə silinəcək. Bu əməliyyat geri qaytarıla bilməz.',
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

            API.ResearcherEducation.destroy(config).then(res => {
                this.getEducationInfo();
            });
        }
    }
};
</script>