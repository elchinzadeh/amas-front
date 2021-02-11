<template>
    <vs-popup
        title="Dissertasiya əlavə et"
        :active.sync="active"
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
                    name="Təhsil"
                >
                    <label
                        for="education"
                    >
                        Təhsil:
                    </label>
                    <v-select
                        id="education"
                        v-model="formData.education"
                        :options="educations"
                    >
                        <template v-slot:option="option">
                            {{ `${option.profession.name} - ${option.level.name}, ${option.organization.name}` }}
                        </template>
                        <template v-slot:selected-option="option">
                            <div>
                                {{ `${option.profession.name} - ${option.level.name}, ${option.organization.name}` }}
                            </div>
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
    name: 'DissertationModal',
    props: {
        active: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    data() {
        return {
            educations: [],
            formData: {
                name: null,
                education: null
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
        this.getEducations();
    },
    methods: {
        getEducations() {
            const config = {
                params: {
                    user_id: this.$store.state.user.id
                }
            };

            API.ResearcherEducation.getAll(config).then(res => {
                if (res.data) {
                    this.educations = res.data;
                }
            });
        },
        submit() {
            const {
                name,
                education
            } = this.formData;

            const body = new FormData();
            body.append('name', name);
            body.append('educationId', education.id);

            API.Dissertation.insert(body).then(res => {
                this.popupActive = false;
                this.$emit('afterInsert');
            });
        }
    }
};
</script>