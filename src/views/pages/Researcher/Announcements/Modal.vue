<template>
    <vs-popup
        title="Əlaqə məlumatı əlavə et"
        :active.sync="popupActive"
    >
        <ValidationObserver v-slot="{ invalid }">
            <div class="form-field">
                <ValidationProvider
                    v-slot="{ errors }"
                    rules="required"
                    name="Başlıq"
                >
                    <label
                        for="title"
                    >
                        Başlıq:
                    </label>
                    <vs-input
                        id="title"
                        v-model="formData.title"
                    />
                    <span
                        v-show="errors"
                        class="text-danger text-sm"
                    >
                        {{ errors[0] }}
                    </span>
                </ValidationProvider>
            </div>
            <div class="form-field">
                <ValidationProvider
                    v-slot="{ errors }"
                    rules="required"
                    name="Təsvir"
                >
                    <label
                        for="description"
                    >
                        Təsvir:
                    </label>
                    <vs-textarea
                        id="description"
                        v-model="formData.description"
                    />
                    <span
                        v-show="errors"
                        class="text-danger text-sm"
                    >
                        {{ errors[0] }}
                    </span>
                </ValidationProvider>
            </div>

            <div class="popup-footer">
                <vs-button
                    color="primary"
                    type="border"
                    @click="popupActive = false"
                >
                    Ləğv et
                </vs-button>
                <vs-button
                    color="primary"
                    type="filled"
                    icon="add"
                    :disabled="invalid"
                    @click="submit"
                >
                    Əlavə et
                </vs-button>
            </div>
        </ValidationObserver>
    </vs-popup>
</template>

<script>
import API from '@/api';

export default {
    name: 'AnnouncementModal',
    props: {
        active: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    data() {
        return {
            formData: {
                title: null,
                description: null
            }
        };
    },
    computed: {
        popupActive: {
            get () {
                return this.active;
            },
            set (val) {
                this.$emit('update:active', val);
            }
        }
    },
    methods: {
        submit() {
            const {
                title,
                description
            } = this.formData;

            const body = {
                title,
                description
            };

            API.Announcement.insert(body).then(res => {
                this.popupActive = false;
                this.$emit('afterInsert');
            });
        }
    }
};
</script>