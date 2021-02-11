<template>
    <vs-popup
        title="Dil əlavə et"
        :active.sync="popupActive"
    >
        <ValidationObserver v-slot="{ invalid }">
            <div class="form-field">
                <ValidationProvider
                    v-slot="{ errors }"
                    rules="required"
                    name="Dil"
                >
                    <label
                        for="language"
                    >
                        Dil:
                    </label>
                    <v-select
                        id="language"
                        v-model="formData.language"
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
                    name="Səviyyə"
                >
                    <label
                        for="level"
                    >
                        Səviyyə:
                    </label>
                    <v-select
                        id="level"
                        v-model="formData.level"
                        :options="languageLevels"
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
    name: 'LanguageModal',
    props: {
        active: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    data() {
        return {
            languages: [],
            languageLevels: [],
            formData: {
                language: null,
                level: null
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
        this.getLanguages();
        this.getLanguageLevels();
    },
    methods: {
        getLanguages() {
            API.ForeignLanguage.getAll().then(res => {
                if (res.data) {
                    this.languages = res.data;
                }
            });
        },
        getLanguageLevels() {
            API.LanguageLevel.getAll().then(res => {
                if (res.data) {
                    this.languageLevels = res.data;
                }
            });
        },
        submit() {
            const {
                language,
                level
            } = this.formData;

            const body = new FormData();
            body.append('languageId', language.id);
            body.append('levelId', level.id);

            API.ResearcherLanguage.insert(body).then(res => {
                this.popupActive = false;
                this.$emit('afterInsert');
            });
        }
    }
};
</script>