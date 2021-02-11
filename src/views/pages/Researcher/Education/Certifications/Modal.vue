<template>
    <vs-popup
        title="Təhsil məlumatı əlavə et"
        :active.sync="popupActive"
    >
        <ValidationObserver v-slot="{ invalid }">
            <div class="form-field">
                <ValidationProvider
                    v-slot="{ errors }"
                    rules="required"
                    name="Adı"
                >
                    <label
                        for="name"
                    >
                        Adı:
                    </label>
                    <vs-input
                        id="name"
                        v-model="formData.name"
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
            <div class="form-field">
                <ValidationProvider
                    v-slot="{ errors }"
                    rules="required"
                    name="Başlama tarixi"
                >
                    <label
                        for="start-date"
                    >
                        Başlama tarixi:
                    </label>
                    <v-datepicker
                        v-model="formData.startDate"
                        placeholder="Tarixi seçin"
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
                    name="Bitmə tarixi"
                >
                    <label
                        for="end-date"
                    >
                        Bitmə tarixi:
                    </label>
                    <v-datepicker
                        v-model="formData.endDate"
                        placeholder="Tarixi seçin"
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
    name: 'EducationInfoModal',
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
                name: null,
                description: null,
                startDate: null,
                endDate: null
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
                name,
                description,
                startDate,
                endDate
            } = this.formData;

            const body = new FormData();

            body.append('name', name);
            body.append('description', description);
            body.append('startDate', startDate.toISOString());
            body.append('endDate', endDate.toISOString());

            API.Certificate.insert(body).then(res => {
                this.popupActive = false;
                this.$emit('afterInsert');
            });
        }
    }
};
</script>