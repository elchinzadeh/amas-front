<template>
    <div class="w-full">
        <vx-card class="mb-4">
            <div class="flex justify-between items-center mb-4">
                <h3>
                    Əlaqə məlumatları
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
                    v-for="item in contacts"
                    :key="item.id"
                    class="vs-list--item"
                >
                    <div class="vs-list--avatar">
                        <vs-avatar
                            class="mr-4"
                            size="large"
                            icon-pack="feather"
                            :icon="'icon-' + item.type.icon"
                            color="primary"
                        />
                    </div>
                    <div class="list-titles">
                        <div class="vs-list--title">
                            <span>
                                {{ item.name }}
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
        </vx-card>

        <ContactModal
            :active.sync="modalActive"
            @afterInsert="getContacts"
        />
    </div>
</template>

<script>
import API from '@/api';
import ContactModal from './Modal';
import './style.scss';

export default {
    name: 'Contact',
    components: {
        ContactModal
    },
    data() {
        return {
            contacts: [],
            modalActive: false
        };
    },
    mounted() {
        this.getContacts();
    },
    methods: {
        getContacts() {
            const config = {
                params: {
                    user_id: this.$store.state.user.id
                }
            };

            API.Contact.getAll(config).then(res => {
                if (res.data) {
                    this.contacts = res.data;
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

            API.Contact.destroy(config).then(res => {
                this.getContacts();
            });
        }
    }
};
</script>
