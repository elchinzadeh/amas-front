<template>
    <div>
        <vs-row>
            <!-- Sidebar -->
            <vs-col
                vs-w="3"
                class="pr-4"
            >
                <vx-card>
                    <div class="flex flex-col">
                        <vs-button
                            v-for="item in menuItems"
                            :key="item.id * Math.random()"
                            :type="
                                item.key === activeMenuKey ? 'filled' : 'flat'
                            "
                            color="primary"
                            class="mb-2"
                            @click="menuOnClick(item.key, 1)"
                        >
                            {{ item.title }}
                        </vs-button>
                    </div>
                </vx-card>
            </vs-col>

            <vs-col
                vs-w="9"
                class="pl-4"
            >
                <!-- Content -->
                <vs-row v-if="researcher">
                    <vx-card class="mb-base">
                        <vs-row>
                            <!-- Avatar -->
                            <vs-col
                                vs-w="2"
                                class="pr-4"
                            >
                                <vs-image
                                    class="w-full"
                                    :src="researcher.imageAddress || 'https://www.w3schools.com/howto/img_avatar.png'"
                                />
                            </vs-col>

                            <vs-col vs-w="10">
                                <!-- General Information -->
                                <div
                                    class="mb-4 flex justify-between items-center"
                                >
                                    <h3>
                                        {{ researcher.firstName }}
                                        {{ researcher.lastName }}
                                        {{ researcher.patronymic }}
                                    </h3>
                                    <vs-button
                                        radius
                                        size="large"
                                        color="primary"
                                        type="flat"
                                        icon-pack="feather"
                                        icon="icon-edit"
                                        @click="toggleModal"
                                    />
                                </div>
                                <table>
                                    <tr>
                                        <td class="font-semibold pr-4">
                                            Kafedra
                                        </td>
                                        <td>
                                            <!-- {{ researcher.chair }} -->
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="font-semibold pr-4">
                                            Müəssisə
                                        </td>
                                        <td>Azərbaycan Texniki Universiteti</td>
                                    </tr>
                                    <tr>
                                        <td class="font-semibold pr-4">
                                            Email
                                        </td>
                                        <td>{{ researcher.email }}</td>
                                    </tr>
                                </table>
                            </vs-col>
                        </vs-row>
                    </vx-card>
                </vs-row>

                <vs-popup
                    title="Şəxsi məlumatları yenilə"
                    :active.sync="modalActive"
                >
                    <ValidationObserver v-slot="{ invalid }">
                        <div class="form-field">
                            <ValidationProvider
                                v-slot="{ errors }"
                                rules="required"
                                name="Ad"
                            >
                                <label
                                    for="firstName"
                                >
                                    Ad:
                                </label>
                                <vs-input
                                    id="firstName"
                                    v-model="formData.firstName"
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
                                name="Soyad"
                            >
                                <label
                                    for="lastName"
                                >
                                    Soyad:
                                </label>
                                <vs-input
                                    id="lastName"
                                    v-model="formData.lastName"
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
                                name="Ata adı"
                            >
                                <label
                                    for="patronymic"
                                >
                                    Ata adı:
                                </label>
                                <vs-input
                                    id="patronymic"
                                    v-model="formData.patronymic"
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
                                @click="toggleModal"
                            >
                                Ləğv et
                            </vs-button>
                            <vs-button
                                color="primary"
                                type="filled"
                                :disabled="invalid"
                                @click="submit"
                            >
                                Yenilə
                            </vs-button>
                        </div>
                    </ValidationObserver>
                </vs-popup>

                <!-- Router View -->
                <vs-row>
                    <router-view />
                </vs-row>
            </vs-col>
        </vs-row>
    </div>
</template>

<script>
import API from '@/api';

export default {
    name: 'Researcher',
    data() {
        return {
            menuItems: [
                {
                    id: 1,
                    key: 'education',
                    title: 'Təhsil məlumatları'
                },
                {
                    id: 2,
                    key: 'researchAreas',
                    title: 'Tədqiqat sahələri'
                },
                {
                    id: 3,
                    key: 'experience',
                    title: 'İş təcrübəsi'
                },
                {
                    id: 4,
                    key: 'publications',
                    title: 'Nəşrlər'
                },
                {
                    id: 5,
                    key: 'projects',
                    title: 'Layihə'
                },
                {
                    id: 6,
                    key: 'patents',
                    title: 'Patent'
                },
                // {
                //     id: 6,
                //     key: 'academicActivity',
                //     title: 'Akademik fəaliyyət'
                // },
                // {
                //     id: 7,
                //     key: 'achievements',
                //     title: 'Nailiyyətlər'
                // },
                {
                    id: 8,
                    key: 'announcements',
                    title: 'Elanlar və sənədlər'
                },
                {
                    id: 9,
                    key: 'contact',
                    title: 'Əlaqə məlumatları'
                }
            ],
            activeMenuKey: null,
            researcher: null,
            modalActive: false,
            formData: {
                firstName: null,
                lastName: null,
                patronymic: null
            }
        };
    },
    mounted() {
        this.activeMenuKey = this.$route.name.split('.')[1];
        this.getResearcherInformation();
    },
    methods: {
        menuOnClick(key, id) {
            if (this.$route.name.match('profile')) {
                this.$router.push({ name: 'profile.' + key, params: { id } });
            } else {
                this.$router.push({ name: 'researcher.' + key, params: { id } });
            };

            this.activeMenuKey = key;

            // this.$el.querySelectorAll(".vs-button").forEach(button => {
            //     console.log(button.classList);
            //     button.classList.remove("isActive");
            //     button.style = {};
            // });
        },
        getResearcherInformation() {
            const config = {
                params: {
                    user_id: this.$store.state.user.id
                }
            };
            API.ResearcherInformation.get(config).then(res => {
                this.researcher = res.data;
                this.formData = {
                    firstName: this.researcher.firstName,
                    lastName: this.researcher.lastName,
                    patronymic: this.researcher.patronymic
                };
            });
        },
        toggleModal(value) {
            if (value === true || value === false) {
                this.modalActive = value;
            } else {
                this.modalActive = !this.modalActive;
            }
        },
        submit() {
            const body = {
                ...this.formData
            };

            API.ResearcherInformation.update(body).then(res => {
                this.modalActive = false;
                this.getResearcherInformation();
            });
        }
    }
};
</script>
