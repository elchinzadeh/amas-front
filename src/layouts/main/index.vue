<template>
    <div class="main-layout">
        <vs-navbar color="#ffffff" class="py-6 px-10">
            <div slot="title">
                <vs-navbar-title>
                    <router-link to="/">
                        <img
                            src="@/assets/images/logo/logo.png"
                            alt="AZTU"
                            class="logo"
                        />
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

            <vs-navbar-item index="1">
                <a href="#">Daxil ol</a>
            </vs-navbar-item>

            <vs-navbar-item index="2">
                <a href="#">Qeydiyyat</a>
            </vs-navbar-item>
        </vs-navbar>

        <router-view class="main-layout--content" />

        <TheFooter />
    </div>
</template>

<script>
import TheFooter from "@/layouts/components/TheFooter.vue";
import "./style.scss";

export default {
    name: "MainLayout",
    components: {
        TheFooter
    }
};
</script>
