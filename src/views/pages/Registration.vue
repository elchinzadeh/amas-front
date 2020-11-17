<template>
    <div
        class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center"
    >
        <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
            <vx-card>
                <div
                    slot="no-body"
                    class="full-page-bg-color"
                >
                    <div class="vx-row no-gutter">
                        <div
                            class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center"
                        >
                            <img
                                src="@/assets/images/pages/register.jpg"
                                alt="register"
                                class="mx-auto"
                            >
                        </div>
                        <div
                            class="vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center  d-theme-dark-bg"
                        >
                            <div class="px-8 pt-8 register-tabs-container">
                                <div class="vx-card__title mb-4">
                                    <h4 class="mb-4">
                                        Qeydiyyatdan keç
                                    </h4>
                                    <p>
                                        Yalnız AzTU əməkdaşları qeydiyyatdan
                                        keçə bilər
                                    </p>
                                </div>
                                <div>
                                    <div class="clearfix">
                                        <vs-input
                                            v-model="firstName"
                                            label-placeholder="Ad"
                                            name="firstName"
                                            placeholder="Ad"
                                            class="w-full"
                                        />

                                        <vs-input
                                            v-model="lastName"
                                            label-placeholder="Soyad"
                                            name="lastName"
                                            placeholder="Soyad"
                                            class="w-full"
                                        />

                                        <vs-input
                                            v-model="email"
                                            name="email"
                                            type="email"
                                            label-placeholder="E-poçt"
                                            placeholder="E-poçt"
                                            class="w-full mt-6"
                                        />

                                        <vs-input
                                            ref="password"
                                            v-model="password"
                                            type="password"
                                            name="password"
                                            label-placeholder="Şifrə"
                                            placeholder="Şifrə"
                                            class="w-full mt-6"
                                        />

                                        <vs-input
                                            v-model="confirm_password"
                                            type="password"
                                            name="confirm_password"
                                            label-placeholder="Şifrənin təkrarı"
                                            placeholder="Şifrənin təkrarı"
                                            class="w-full mt-6"
                                        />

                                        <vs-button
                                            type="border"
                                            :to="{ name: 'login' }"
                                            class="mt-6"
                                        >
                                            Daxil ol
                                        </vs-button>
                                        <vs-button
                                            class="float-right mt-6"
                                            @click="register"
                                        >
                                            Qeydiyyatdan keç
                                        </vs-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </vx-card>
        </div>
    </div>
</template>

<script>
import API from '@/api';

export default {
    name: 'Registration',
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirm_password: ''
        };
    },
    methods: {
        register() {
            const body = {
                arasdirmaciAd: this.firstName,
                arasdirmaciSoyad: this.lastName,
                arasdirmaciEmeil: this.email,
                arasdirmaciPassword: this.password
            };

            API.Auth.signUp(body).then(response => {
                if (response.data.res) {
                    this.$router.push({name: 'login'});
                    this.$vs.notify({
                        title: 'Color',
                        text: 'Lorem ipsum dolor sit amet, consectetur',
                        color: color
                    });
                } else {

                }
            });
        }
    }
};
</script>

<style lang="scss">
.register-tabs-container {
    min-height: 517px;

    .con-tab {
        padding-bottom: 23px;
    }
}
</style>
