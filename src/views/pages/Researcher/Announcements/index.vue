<template>
    <div class="w-full">
        <vx-card class="mb-4">
            <div class="flex justify-between items-center mb-4">
                <h3>
                    Elanlar
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
                    v-for="item in announcements"
                    :key="item.id"
                    class="vs-list--item"
                >
                    <div class="list-titles">
                        <div class="vs-list--title">
                            <span>
                                {{ item.title }}
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
                            {{ item.description }}
                        </div>
                    </div>
                </div>
            </vs-list>
        </vx-card>

        <AnnouncementModal
            :active.sync="modalActive"
            @afterInsert="getAnnouncements"
        />
    </div>
</template>

<script>
import API from '@/api';
import AnnouncementModal from './Modal';
import './style.scss';

export default {
    name: 'Announcement',
    components: {
        AnnouncementModal
    },
    data() {
        return {
            announcements: [],
            modalActive: false
        };
    },
    mounted() {
        this.getAnnouncements();
    },
    methods: {
        getAnnouncements() {
            const config = {
                params: {
                    user_id: this.$store.state.user.id
                }
            };

            API.Announcement.getAll(config).then(res => {
                if (res.data) {
                    this.announcements = res.data;
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

            API.Announcement.destroy(config).then(res => {
                this.getAnnouncements();
            });
        }
    }
};
</script>
