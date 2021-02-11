<template>
    <vs-popup
        title="Müəllif və ya həmmüəllif əlavə et"
        :active.sync="popupActive"
    >
        <ValidationObserver v-slot="{ invalid }">
            <!-- Internal or External -->
            <div class="form-field">
                <vs-radio
                    v-model="isInternalResearcher"
                    vs-name="isInternalResearcher"
                    :vs-value="true"
                    checked
                >
                    Daxili tədqiqatçı
                </vs-radio>
                <br>
                <vs-radio
                    v-model="isInternalResearcher"
                    vs-name="isInternalResearcher"
                    :vs-value="false"
                >
                    Xarici tədqiqatçı
                </vs-radio>
            </div>

            <!-- Internal researcher -->
            <div
                v-if="isInternalResearcher"
                class="form-field"
            >
                <ValidationProvider
                    v-slot="{ errors }"
                    rules="required"
                    name="Tədqiqatçılar"
                >
                    <label
                        for="internalResearcher"
                    >
                        Tədqiqatçılar:
                    </label>
                    <v-select
                        id="internalResearcher"
                        v-model="formData.internalResearcher"
                        searchable
                        :options="internalResearchers"
                        :filterable="false"
                        label="id"
                        @search="getInternalResearchers"
                    >
                        <template v-slot:option="option">
                            {{ `${option.firstName} ${option.lastName} ${option.patronymic}` }}
                        </template>
                        <template v-slot:selected-option="option">
                            {{ `${option.firstName} ${option.lastName} ${option.patronymic}` }}
                        </template>
                        <template v-slot:no-options="{ search }">
                            {{ search ? 'Nəticə tapılmadı' : '' }}
                        </template>
                    </v-select>
                    <span
                        v-show="errors"
                        class="text-danger text-sm"
                    >
                        {{ errors[0] }}
                    </span>
                </ValidationProvider>
            </div>

            <!-- External researcher -->
            <div
                v-if="!isInternalResearcher"
                class="form-field"
            >
                <ValidationProvider
                    v-slot="{ errors }"
                    rules="required"
                    name="Tədqiqatçılar"
                >
                    <label
                        for="externalResearcher"
                    >
                        Tədqiqatçılar:
                    </label>
                    <v-select
                        id="externalResearcher"
                        v-model="formData.externalResearcher"
                        searchable
                        :options="externalResearchers"
                        :filterable="false"
                        label="name"
                        taggable
                        @search="getExternalResearchers"
                    >
                        <template v-slot:no-options="{ search }">
                            {{ search ? 'Nəticə tapılmadı' : '' }}
                        </template>
                    </v-select>
                    <span
                        v-show="errors"
                        class="text-danger text-sm"
                    >
                        {{ errors[0] }}
                    </span>
                </ValidationProvider>
            </div>

            <!-- External researcher organization -->
            <div
                v-if="!isInternalResearcher && formData.externalResearcher && !formData.externalResearcher.id"
                class="form-field"
            >
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
                    />
                    <span
                        v-show="errors"
                        class="text-danger text-sm"
                    >
                        {{ errors[0] }}
                    </span>
                </ValidationProvider>
            </div>

            <!-- Is main author -->
            <div class="form-field">
                <vs-radio
                    v-model="formData.isMainAuthor"
                    vs-name="isMainAuthor"
                    :vs-value="true"
                >
                    Müəllif
                </vs-radio>
                <br>
                <vs-radio
                    v-model="formData.isMainAuthor"
                    vs-name="isMainAuthor"
                    :vs-value="false"
                >
                    Həmmüəllif
                </vs-radio>
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
    name: 'AuthorModal',
    props: {
        active: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    data() {
        return {
            isInternalResearcher: true,
            internalResearchers: [],
            externalResearchers: [],
            organizations: [],
            formData: {
                internalResearcher: null,
                externalResearcher: null,
                organization: null,
                isMainAuthor: false
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
    watch: {
        popupActive(val) {
            if (!val) {
                this.resetData();
            }
        }
    },
    mounted(){
        this.getOrganizations();
    },
    methods: {
        getInternalResearchers(search) {
            if (!search) return;

            const config = {
                params: {
                    userName: search
                }
            };

            API.InternalUser.getAll(config).then(res => {
                if (res.data) {
                    this.internalResearchers = res.data;
                } else {
                    this.internalResearchers = [];
                }
            });
        },
        getExternalResearchers(search) {
            if (!search) return;

            const config = {
                params: {
                    userName: search
                }
            };

            API.ExternalUser.getAll(config).then(res => {
                if (res.data) {
                    this.externalResearchers = res.data;
                } else {
                    this.externalResearchers = [];
                }
            });
        },
        getOrganizations() {
            API.Organization.getAll().then(res => {
                if (res.data) {
                    this.organizations = res.data;
                } else {
                    this.organizations = [];
                }
            });
        },
        submit() {
            if (this.isInternalResearcher) {
                this.$emit('addInternalAuthor', {
                    researcher: this.formData.internalResearcher,
                    isMainAuthor: this.formData.isMainAuthor
                });
                this.popupActive = false;
            } else {
                if (typeof this.formData.externalResearcher === 'string') {
                    this.insertExternalResearcher({
                        name: this.formData.externalResearcher,
                        organizationId: this.formData.organization.id
                    }).then((res) => {
                        console.log(res);
                        this.$emit('addExternalAuthor', {
                            researcher: {
                                id: res.data,
                                name: this.formData.externalResearcher
                            },
                            isMainAuthor: this.formData.isMainAuthor
                        });
                        this.popupActive = false;
                    }).catch(error => {
                        console.log({error});
                    });
                } else {
                    this.$emit('addExternalAuthor', {
                        researcher: this.formData.externalResearcher,
                        isMainAuthor: this.formData.isMainAuthor
                    });
                    this.popupActive = false;
                }
            }
        },
        insertExternalResearcher(body) {
            return new Promise((resolve, reject) => {
                API.ExternalUser.insert(body).then(res => {
                    if (res.data) {
                        resolve(res.data);
                    }
                });
                reject();
            });
        },
        resetData() {
            this.isInternalResearcher = true,
            this.internalResearchers = [],
            this.externalResearchers = [],
            this.formData = {
                internalResearcher: null,
                externalResearcher: null,
                organization: null,
                isMainAuthor: false
            };
        }
    }
};
</script>
