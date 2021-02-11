<template>
    <div class="w-full">
        <vx-card class="mb-4">
            <div class="flex justify-between items-center mb-4">
                <h3>
                    Dəstəklənən layihələr
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
                    v-for="project in projects"
                    :key="project.id"
                    class="vs-list--item"
                >
                    <div class="list-titles">
                        <div class="vs-list--title">
                            <span>
                                {{ project.name }}&nbsp;
                                ( {{ formatDate(project.startDate) }} -
                                {{ formatDate(project.endDate) }} )
                            </span>
                            <vs-button
                                color="danger"
                                type="flat"
                                icon="icon-trash-2"
                                icon-pack="feather"
                                @click="openDestroyDialog(project.id)"
                            />
                        </div>
                        <div class="vs-list--subtitle mt-2">
                            {{ project.organization ? project.organization.name : '' }}
                        </div>
                    </div>
                </div>
            </vs-list>
        </vx-card>

        <ProjectModal
            :active.sync="modalActive"
            @afterInsert="getProjects"
        />
    </div>
</template>

<script>
import API from '@/api';
import ProjectModal from './Modal';
import { formatDate } from '@/helpers';
import './style.scss';

export default {
    name: 'Project',
    components: {
        ProjectModal
    },
    data() {
        return {
            projects: [],
            modalActive: false
        };
    },
    mounted() {
        this.getProjects();
    },
    methods: {
        getProjects() {
            const config = {
                params: {
                    user_id: this.$store.state.user.id
                }
            };

            API.Project.getAll(config).then(res => {
                if (res.data) {
                    this.projects = res.data;
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
                    projectId: id
                }
            };

            API.Project.destroy(config).then(res => {
                this.getProjects();
            });
        },
        formatDate
    }
};
</script>