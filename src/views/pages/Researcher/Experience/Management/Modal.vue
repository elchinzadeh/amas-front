<template>
    <vs-popup
        title="Təcrübə əlavə et"
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
                    name="Müəssisə"
                >
                    <label
                        for="organization"
                    >
                        Müəssisə:
                    </label>
                    <v-select
                        id="organization"
                        v-model="formData.organization"
                        :options="organizations"
                        label="name"
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
    name: 'ManagementModal',
    props: {
        active: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    data() {
        return {
            organizations: [],
            formData: {
                startDate: null,
                endDate: null,
                organization: null,
                name: null
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
    mounted() {
        this.getOrganizations();
    },
    methods: {
        getOrganizations() {
            API.Organization.getAll().then(res => {
                if (res.data) {
                    this.organizations = res.data;
                }
            });
        },
        submit() {
            const {
                startDate,
                endDate,
                organization,
                name
            } = this.formData;

            const body = {
                startDate,
                endDate,
                organizationId: organization.id,
                name
            };

            API.ManagementExperience.insert(body).then(res => {
                this.popupActive = false;
                this.$emit('afterInsert');
            });
        }
    }
};
</script>