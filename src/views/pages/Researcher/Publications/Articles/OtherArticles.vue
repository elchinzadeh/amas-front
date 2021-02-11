<template>
    <vx-card class="mb-4">
        <div class="flex justify-between items-center mb-4">
            <h3>
                Digər məqalələr
            </h3>
            <vs-button
                color="success"
                type="flat"
                icon="add"
                class="whitespace-no-wrap"
                @click="toggleModal"
            >
                Əlavə et
            </vs-button>
        </div>

        <vs-list>
            <div
                v-for="article in articles"
                :key="article.id"
                class="vs-list--item"
            >
                <div class="list-titles">
                    <div class="vs-list--title">
                        <span class="left-side">
                            {{ article.name }}

                            <span class="vs-list--urls">
                                <a
                                    v-for="(url, index) in article.urls"
                                    :key="index"
                                    :href="url.url"
                                    target="_blank"
                                >
                                    <img
                                        v-if="publicationURLTypes.find(({ key }) => key == url.urlType).image"
                                        :src="publicationURLTypes.find(({ key }) => key == url.urlType).image"
                                        :alt="publicationURLTypes.title"
                                        width="20"
                                        height="20"
                                    >
                                    <span v-else>
                                        Link
                                    </span>
                                </a>
                            </span>
                        </span>
                        <vs-button
                            color="danger"
                            type="flat"
                            icon="icon-trash-2"
                            icon-pack="feather"
                            @click="openDestroyDialog(article.id)"
                        />
                    </div>
                    <div class="vs-list--subtitle">
                        <a
                            v-for="author in article.researchers.internal"
                            :key="'i'+author.id"
                            href="#"
                            class="mr-2"
                        >
                            {{ author.firstName }}
                            {{ author.lastName }}
                        </a>
                        <a
                            v-for="author in article.researchers.external"
                            :key="'e'+author.id"
                            href="#"
                            class="mr-2"
                        >
                            {{ author.name }}
                        </a>
                    </div>
                    <div class="vs-list--subtitle mt-2">
                        <div>
                            <b>
                                Jurnal:
                            </b>
                            {{ article.journal.name }},
                            cild {{ article.volume }},
                            səhifə {{ article.pageStart }}-{{ article.pageEnd }}
                        </div>
                        <div>
                            <b>
                                Tarix:
                            </b>
                            {{ formatDate(article.date) }}
                        </div>
                    </div>
                </div>
            </div>
        </vs-list>

        <ArticleModal
            :active.sync="modalActive"
            :is-indexed="false"
            @afterInsert="getArticles"
        />
    </vx-card>
</template>

<script>
import API from '@/api';
import ArticleModal from './Modal';
import { formatDate } from '@/helpers';
import publicationURLTypes from '@/data/publicationURLTypes.json';
import './styles.scss';

export default {
    name: 'IndexedArticles',
    components: {
        ArticleModal
    },
    data() {
        return {
            articles: [],
            publicationURLTypes,
            modalActive: false
        };
    },
    mounted() {
        this.getArticles();
    },
    methods: {
        getArticles() {
            const config = {
                params: {
                    UserId: this.$store.state.user.id,
                    Indexed: false
                }
            };

            API.Article.getAll(config).then(res => {
                if (res.data) {
                    this.articles = res.data;
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
                    articleId: id
                }
            };

            API.Article.destroy(config).then(res => {
                this.getArticles();
            });
        },
        formatDate
    }
};
</script>