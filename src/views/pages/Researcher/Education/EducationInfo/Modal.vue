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
                    name="Təhsil forması"
                >
                    <label
                        for="education-form"
                    >
                        Təhsil forması:
                    </label>
                    <v-select
                        id="education-form"
                        v-model="selectedValues.educationForm"
                        :options="educationForms"
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
                    name="Təhsil səviyyəsi"
                >
                    <label
                        for="education-level"
                    >
                        Təhsil səviyyəsi:
                    </label>
                    <v-select
                        id="education-level"
                        v-model="selectedValues.educationLevel"
                        :options="educationLevels"
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
                    name="Təhsil müəsssisəsi"
                >
                    <label
                        for="education-organization"
                    >
                        Təhsil müəsssisəsi:
                    </label>
                    <v-select
                        id="education-organization"
                        v-model="selectedValues.organization"
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
                    name="Ölkə"
                >
                    <label
                        for="country"
                    >
                        Ölkə:
                    </label>
                    <v-select
                        id="country"
                        v-model="selectedValues.country"
                        :options="countries"
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
                    name="Təhsil aldığınız dil"
                >
                    <label
                        for="language"
                    >
                        Təhsil aldığınız dil:
                    </label>
                    <v-select
                        id="language"
                        v-model="selectedValues.language"
                        :options="languages"
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
                    name="İxtisas"
                >
                    <label
                        for="profession"
                    >
                        İxtisas:
                    </label>
                    <v-select
                        id="profession"
                        v-model="selectedValues.profession"
                        :options="professions"
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
                        v-model="selectedValues.startDate"
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
                        v-model="selectedValues.endDate"
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
            educationForms: [],
            educationLevels: [],
            organizations: [],
            countries: [],
            languages: [],
            professions: [],
            selectedValues: {
                educationForm: null,
                educationLevel: null,
                organization: null,
                country: null,
                language: null,
                profession: null,
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
    mounted() {
        this.getEducationForms();
        this.getEducationLevels();
        this.getOrganizations();
        this.getCountries();
        this.getLanguages();
        this.getProfessions();
    },
    methods: {
        getEducationForms() {
            API.EducationForm.getAll().then(res => {
                if (res.data) {
                    this.educationForms = res.data;
                }
            });
        },
        getEducationLevels() {
            API.EducationLevel.getAll().then(res => {
                if (res.data) {
                    this.educationLevels = res.data;
                }
            });
        },
        getOrganizations() {
            API.Organization.getAll().then(res => {
                if (res.data) {
                    this.organizations = res.data;
                }
            });
        },
        getCountries() {
            API.Country.getAll().then(res => {
                if (res.data) {
                    this.countries = res.data;
                }
            });
        },
        getLanguages() {
            API.Language.getAll().then(res => {
                if (res.data) {
                    this.languages = res.data;
                }
            });
        },
        getProfessions() {
            API.Profession.getAll().then(res => {
                if (res.data) {
                    this.professions = res.data;
                }
            });
        },
        submit() {
            const {
                educationForm,
                educationLevel,
                organization,
                country,
                language,
                profession,
                startDate,
                endDate
            } = this.selectedValues;

            const body = {
                formId: educationForm.id,
                levelId: educationLevel.id,
                organizationId: organization.id,
                countryId: country.id,
                languageId: language.id,
                professionId: profession.id,
                startDate: startDate,
                endDate: endDate
            };
            API.ResearcherEducation.insert(body).then(res => {
                this.popupActive = false;
                this.$emit('afterInsert');
            });
        }
    }
};
</script>
