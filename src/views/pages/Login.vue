<template>
    <div
        id="page-login"
        class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center"
    >
        <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
            <vx-card>
                <div
                    slot="no-body"
                    class="full-page-bg-color"
                >
                    <div class="vx-row no-gutter justify-center items-center">
                        <div class="vx-col hidden lg:block lg:w-1/2">
                            <img
                                src="@/assets/images/pages/login.png"
                                alt="login"
                                class="mx-auto"
                            >
                        </div>

                        <div
                            class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg"
                        >
                            <div class="p-8 login-tabs-container">
                                <div class="vx-card__title mb-4">
                                    <h4 class="mb-4">
                                        Daxil ol
                                    </h4>
                                </div>

                                <div>
                                    <!-- Username -->
                                    <vs-input
                                        v-model="email"
                                        name="email"
                                        icon-no-border
                                        icon="icon icon-user"
                                        icon-pack="feather"
                                        label-placeholder="Email"
                                        class="w-full"
                                    />

                                    <!-- Password -->
                                    <vs-input
                                        v-model="password"
                                        type="password"
                                        name="password"
                                        icon-no-border
                                        icon="icon icon-lock"
                                        icon-pack="feather"
                                        label-placeholder="Password"
                                        class="w-full mt-6"
                                    />

                                    <!-- Remember me / Forgot password -->
                                    <!-- <div
                                        class="flex flex-wrap justify-between my-5"
                                    >
                                        <vs-checkbox
                                            v-model="checkbox_remember_me"
                                            class="mb-3"
                                            >Remember Me</vs-checkbox
                                        >
                                        <router-link to=""
                                            >Forgot Password?</router-link
                                        >
                                    </div> -->

                                    <!-- Actions -->
                                    <div class="mt-5">
                                        <vs-button
                                            type="border"
                                            :to="{ name: 'registration' }"
                                        >
                                            Qeydiyyatdan keç
                                        </vs-button>
                                        <vs-button
                                            class="float-right"
                                            @click="login"
                                        >
                                            Daxil ol
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
    data() {
        return {
            email: '',
            password: '',
            checkbox_remember_me: false
        };
    },
    methods: {
        login() {
            API.Auth.signIn({
                arasdirmaciEmeil: this.email,
                arasdirmaciPassword: this.password
            }).then(response => {
                if (response.data) {
                    this.getPersonalInformation().then(() => {
                        this.$router.push({name: 'home'});
                    });
                } else {
                    this.email = '';
                    this.password= '';
                }
            });
        },
        getPersonalInformation() {
            return new Promise((resolve, reject) => {
                API.PersonalInformation.get().then(response => {
                    if (response.data) {
                        this.$cookies.set('userData', JSON.stringify(response.data));
                        resolve();
                    } else {
                        reject();
                    }
                });
            });
        }
    }
};
</script>
