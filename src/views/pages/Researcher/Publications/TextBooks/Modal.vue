<template>
    <vs-popup
        title="Dərslik və ya monqrafiya əlavə et"
        :active.sync="popupActive"
        fullscreen
        class="textBookModal"
    >
        <ValidationObserver v-slot="{ invalid }">
            <!-- Publisher -->
            <div class="form-field">
                <ValidationProvider
                    v-slot="{ errors }"
                    rules="required"
                    name="Nəşriyyatçı"
                >
                    <label
                        for="publisher"
                    >
                        Nəşriyyatçı:
                    </label>
                    <v-select
                        id="publisher"
                        v-model="formData.publisher"
                        searchable
                        :options="publishers"
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

            <!-- Date -->
            <div class="form-field">
                <ValidationProvider
                    v-slot="{ errors }"
                    rules="required"
                    name="Tarix"
                >
                    <label
                        for="date"
                    >
                        Tarix:
                    </label>
                    <v-datepicker
                        id="date"
                        v-model="formData.date"
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

            <!-- URLs -->
            <div class="urls mt-8">
                <h5 class="mb-2">
                    Linklər
                </h5>
                <div
                    v-for="(url, index) in formData.URLs"
                    :key="url.key"
                    class="url-input-field mb-2"
                >
                    <v-select
                        id="publisher"
                        :value="url"
                        :options="publicationURLTypes"
                        :clearable="false"
                        :searchable="false"
                        label="title"
                        @input="e => handleURLSelect(index, e)"
                    >
                        <template v-slot:selected-option="{ type }">
                            {{ type.title }}
                        </template>
                    </v-select>
                    <vs-input
                        :value="url.URL"
                        placeholder="https://website.com..."
                        @input="e => handleURLInput(index, e)"
                    />
                    <vs-button
                        color="danger"
                        type="flat"
                        icon-pack="feather"
                        icon="icon-trash"
                        class="ml-2"
                        @click="removeURL(index)"
                    />
                </div>
                <vs-button
                    color="success"
                    type="filled"
                    icon="add"
                    @click="addNewURLField"
                >
                    URL əlavə et
                </vs-button>
            </div>

            <!-- File -->
            <div class="mt-8">
                <h5 class="mb-2">
                    Fayl
                </h5>
                <label for="file">
                    <input
                        id="file"
                        ref="file"
                        type="file"
                        class="hidden"
                        accept="application/pdf"
                        @input="formData.file = $event.target.files[0]"
                    >
                    <vs-button
                        color="primary"
                        type="filled"
                        icon="add"
                        @click="$refs.file.click()"
                    >
                        {{ formData.file ? 'Yeni fayl seç' : 'Fayl əlavə et' }}
                    </vs-button>

                    {{ formData.file ? 'Seçilmiş fayl: '+ formData.file.name : '' }}
                </label>
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
import { serialize } from 'object-to-formdata';
import publicationURLTypes from '@/data/publicationURLTypes.json';

export default {
    name: 'TextBookModal',
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
            publishers: [],
            publicationURLTypes,
            formData: {
                name: null,
                description: null,
                date: null,
                publisher: null,
                internalResearchers: [],
                externalResearchers: [],
                URLs: [],
                file: null
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
                || this.formData.URLs.filter(({URL}) => URL).length === 0
            );
        }
    },
    watch: {
        popupActive(val) {
            if(val) {
                this.getPublishers();
            }
        }
    },
    mounted() {
        // this.getPublishers();
        this.addNewURLField();
    },
    methods: {
        getPublishers() {
            API.Publisher.getAll().then(res => {
                if (res.data) {
                    this.publishers = res.data;
                }
            });
        },
        submit() {
            const {
                name,
                description,
                date,
                publisher,
                internalResearchers,
                externalResearchers,
                URLs,
                file
            } = this.formData;

            const body = {
                textbook: {
                    name,
                    description,
                    date: date.toISOString()
                },
                urls: URLs.map(url => ({
                    urlType: url.type.key,
                    url: url.URL
                })),
                researchers: {
                    internals: internalResearchers.map(({isMainAuthor, researcher}) => ({
                        id: researcher.id,
                        type: isMainAuthor
                    })),
                    externals: externalResearchers.map(({isMainAuthor, researcher}) => ({
                        id: researcher.id,
                        type: isMainAuthor
                    }))
                },
                file
            };

            if (publisher.id) {
                body.textBook.publisherId = publisher.id;
            } else {
                body.publisher = publisher || publisher.name;
            }

            const formData = serialize(body, {
                indices: true
            });

            API.TextBook.insert(formData).then(() => {
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
        },
        addNewURLField() {
            this.formData.URLs.push({
                type: publicationURLTypes[0],
                URL: ''
            });
        },
        removeURL(index) {
            this.formData.URLs.splice(index, 1);
        },
        handleURLSelect(index, type) {
            this.formData.URLs[index].type = type;
        },
        handleURLInput(index, URL) {
            this.formData.URLs[index].URL = URL;
        }
    }
};
</script>