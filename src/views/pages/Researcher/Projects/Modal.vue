<template>
    <vs-popup
        title="Layihə əlavə et"
        :active.sync="popupActive"
        class="projectModal"
    >
        <ValidationObserver v-slot="{ invalid }">
            <!-- Organization -->
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
                        searchable
                        :options="organizations"
                        label="name"
                        taggable
                    />
                    <span
                        v-show="errors"
                        class="text-danger text-sm"
                    >
                        {{ errors[0] }}
                    </span>
                </ValidationProvider>
            </div>

            <!-- Name -->
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

            <!-- Description -->
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
                        height="100px"
                    />
                    <span
                        v-show="errors"
                        class="text-danger text-sm"
                    >
                        {{ errors[0] }}
                    </span>
                </ValidationProvider>
            </div>

            <!-- Start Date -->
            <div class="form-field">
                <ValidationProvider
                    v-slot="{ errors }"
                    rules="required"
                    name="Başlama tarixi"
                >
                    <label
                        for="startDate"
                    >
                        Başlama tarixi:
                    </label>
                    <v-datepicker
                        id="startDate"
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

            <!-- End Date -->
            <div class="form-field">
                <ValidationProvider
                    v-slot="{ errors }"
                    rules="required"
                    name="Bitmə tarixi"
                >
                    <label
                        for="endDate"
                    >
                        Bitmə tarixi:
                    </label>
                    <v-datepicker
                        id="endDate"
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

            <!-- Authors -->
            <div class="authors mt-8">
                <h5 class="mb-2">
                    Müəllif və həmmüəlliflər
                </h5>
                <div>
                    <vs-chip
                        v-for="({isMainAuthor, researcher}, index) in formData.internalResearchers"
                        :key="researcher.id"
                        closable
                        @click="removeInternalResearcher(index)"
                    >
                        <vs-avatar />
                        {{ researcher.firstName }}
                        {{ researcher.lastName }}
                        {{ researcher.patronymic }}
                        ({{ isMainAuthor ? 'Müəllif' : 'Həmmüəllif' }})
                    </vs-chip>
                    <vs-chip
                        v-for="({isMainAuthor, researcher}, index) in formData.externalResearchers"
                        :key="researcher.id"
                        closable
                        @click="removeExternalResearcher(index)"
                    >
                        <vs-avatar />
                        {{ researcher.name }}
                        ({{ isMainAuthor ? 'Müəllif' : 'Həmmüəllif' }})
                    </vs-chip>
                    <vs-button
                        color="success"
                        type="filled"
                        icon="add"
                        @click="toggleAuthorModal"
                    >
                        Əlavə et
                    </vs-button>
                </div>
            </div>

            <!-- Modal Footer -->
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
                    :disabled="invalid || submitButtonDeactive"
                    @click="submit"
                >
                    Əlavə et
                </vs-button>
            </div>
        </ValidationObserver>

        <AuthorModal
            :active.sync="authorModalOpen"
            @addInternalAuthor="addInternalAuthor"
            @addExternalAuthor="addExternalAuthor"
        />
    </vs-popup>
</template>

<script>
import API from '@/api';
import AuthorModal from './AuthorModal';

export default {
    name: 'ProjectModal',
    components: {
        AuthorModal
    },
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
                name: null,
                description: null,
                startDate: null,
                endDate: null,
                organization: null,
                internalResearchers: [],
                externalResearchers: []
            },
            authorModalOpen: false
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
        },
        submitButtonDeactive() {
            return Boolean(
                (
                    this.formData.internalResearchers.length +
                    this.formData.externalResearchers.length
                ) === 0
            );
        }
    },
    watch: {
        popupActive(val) {
            if(val) {
                this.getOrganizations();
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
                name,
                description,
                startDate,
                endDate,
                organization,
                internalResearchers,
                externalResearchers
            } = this.formData;

            const body = {
                project: {
                    name,
                    description,
                    startDate: startDate.toISOString(),
                    endDate: endDate.toISOString()
                },
                researchers: {
                    internals: internalResearchers.map(({isMainAuthor, researcher}) => ({
                        id: researcher.id,
                        type: isMainAuthor
                    })),
                    externals: externalResearchers.map(({isMainAuthor, researcher}) => ({
                        id: researcher.id,
                        type: isMainAuthor
                    }))
                }
            };

            if (organization.id) {
                body.project.organizationId = organization.id;
            } else {
                body.organization = organization || organization.name;
            }

            API.Project.insert(body).then(() => {
                this.popupActive = false;
                this.$emit('afterInsert');
            });
        },
        toggleAuthorModal(value) {
            if (value === true || value === false) {
                this.authorModalOpen = value;
            } else {
                this.authorModalOpen = !this.authorModalOpen;
            }
        },
        addInternalAuthor(data) {
            this.formData.internalResearchers.push(data);
        },
        addExternalAuthor(data) {
            this.formData.externalResearchers.push(data);
        },
        removeInternalResearcher(index) {
            this.formData.internalResearchers.splice(index, 1);
        },
        removeExternalResearcher(index) {
            this.formData.externalResearchers.splice(index, 1);
        }
    }
};
</script>