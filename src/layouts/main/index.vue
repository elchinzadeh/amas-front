<template>
    <div class="main-layout">
        <vs-navbar
            color="#ffffff"
            class="py-6 px-10"
        >
            <div slot="title">
                <vs-navbar-title>
                    <router-link to="/">
                        <img
                            src="@/assets/images/logo/logo.png"
                            alt="AZTU"
                            class="logo"
                        >
                    </router-link>
                    <div>
                        <div>
                            Azərbaycan Texniki Universiteti
                        </div>
                        <div class="text-base">
                            Akademik Məlumat Axtarış Sistemi
                        </div>
                    </div>
                </vs-navbar-title>
            </div>

            <vs-navbar-item
                v-if="!user"
                index="1"
            >
                <router-link
                    :to="{name: 'login'}"
                >
                    Daxil ol
                </router-link>
            </vs-navbar-item>

            <vs-navbar-item
                v-if="!user"
                index="2"
            >
                <router-link
                    :to="{name: 'registration'}"
                >
                    Qeydiyyat
                </router-link>
            </vs-navbar-item>

            <vs-navbar-item
                v-if="user"
                index="3"
            >
                <vs-dropdown>
                    <div class="flex items-center">
                        <a
                            href="#"
                            class="text-base"
                        >
                            {{ userFullName }}
                        </a>
                        <vs-avatar />
                    </div>

                    <vs-dropdown-menu>
                        <vs-dropdown-item
                            class="whitespace-no-wrap"
                            @click="goAccount"
                        >
                            Şəxsi kabinetə keç
                        </vs-dropdown-item>
                        <vs-dropdown-item
                            divider
                            class="whitespace-no-wrap"
                            @click="logout"
                        >
                            Çıxış
                        </vs-dropdown-item>
                    </vs-dropdown-menu>
                </vs-dropdown>
            </vs-navbar-item>
        </vs-navbar>

        <router-view class="main-layout--content" />

        <TheFooter />
    </div>
</template>

<script>
import TheFooter from '@/layouts/components/TheFooter.vue';
import './style.scss';

export default {
    name: 'MainLayout',
    components: {
        TheFooter
    },
    data() {
        return {
            user: null
        };
    },
    computed: {
        userFullName() {
            const { firstName, lastName, patronymic } = this.user;
            return [ firstName, lastName, patronymic ].filter(x => x).join(' ');
        }
    },
    mounted() {
        this.getLoggedUserData();
    },
    methods: {
        getLoggedUserData() {
            const userData = JSON.parse(localStorage.getItem('userData'));
            if (userData) {
                this.user = userData;
            }
        },
        logout() {
            localStorage.removeItem('userData');
            this.$cookies.remove('.AspNetCore.Cookies');
            this.$router.push({ name: 'login' });
        },
        goAccount() {
            this.$router.push({ name: 'profile.education' });
        }
    }
};
</script>
