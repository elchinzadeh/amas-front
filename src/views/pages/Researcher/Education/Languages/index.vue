<template>
    <vx-card class="mb-4">
        <div class="flex justify-between items-center mb-4">
            <h3>Xarici dil</h3>
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
                v-for="item in foreignLanguages"
                :key="item.id"
                class="vs-list--item"
            >
                <div class="list-titles">
                    <div class="vs-list--title">
                        <span>
                            {{ item.language.name }}
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
                        <div>{{ item.level.name }}</div>
                    </div>
                </div>
            </div>
        </vs-list>

        <LanguageModal
            :active.sync="modalActive"
            @afterInsert="getForeignLanguages"
        />
    </vx-card>
</template>

<script>
import API from '@/api';
import LanguageModal from './Modal';

export default {
    name: 'Languages',
    components: {
        LanguageModal
    },
    data() {
        return {
            foreignLanguages: [],
            modalActive: false
        };
    },
    mounted() {
        this.getForeignLanguages();
    },
    methods: {
        getForeignLanguages() {
            const config = {
                params: {
                    user_id: this.$store.state.user.id
                }
            };

            API.ResearcherLanguage.getAll(config).then(res => {
                if (res.data) {
                    this.foreignLanguages = res.data;
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

            API.ResearcherLanguage.destroy(config).then(res => {
                this.getForeignLanguages();
            });
        }
    }
};
</script>;