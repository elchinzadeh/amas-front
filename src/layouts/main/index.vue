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
                v-if="!loggedUser"
                index="1"
            >
                <router-link
                    :to="{name: 'login'}"
                >
                    Daxil ol
                </router-link>
            </vs-navbar-item>

            <vs-navbar-item
                v-if="!loggedUser"
                index="2"
            >
                <router-link
                    :to="{name: 'registration'}"
                >
                    Qeydiyyat
                </router-link>
            </vs-navbar-item>

            <vs-navbar-item
                v-if="loggedUser"
                index="3"
            >
                <vs-dropdown>
                    <div class="flex items-center">
                        <a
                            href="#"
                            class="text-base"
                        >
                            {{ loggedUser }}
                        </a>
                        <vs-avatar />
                    </div>

                    <vs-dropdown-menu>
                        <vs-dropdown-item class="whitespace-no-wrap">
                            Profilə bax
                        </vs-dropdown-item>
                        <vs-dropdown-item
                            divider
                            class="whitespace-no-wrap"
                        >
                            Hesabdan çıxış et
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
    computed: {
        loggedUser() {
            return this.$cookies.get('user') || null;
        }
    }
};
</script>
