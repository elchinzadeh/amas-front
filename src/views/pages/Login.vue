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

                                <ValidationObserver v-slot="{ invalid }">
                                    <!-- Username -->
                                    <ValidationProvider
                                        v-slot="{ errors }"
                                        rules="required|email"
                                        name="E-poçt"
                                    >
                                        <vs-input
                                            v-model="email"
                                            name="email"
                                            icon-no-border
                                            icon="icon icon-user"
                                            icon-pack="feather"
                                            label-placeholder="Email"
                                            class="w-full"
                                        />
                                        <span
                                            v-show="errors"
                                            class="text-danger text-sm"
                                        >
                                            {{ errors[0] }}
                                        </span>
                                    </ValidationProvider>

                                    <!-- Password -->
                                    <ValidationProvider
                                        v-slot="{ errors }"
                                        rules="required"
                                        name="Şifrə"
                                    >
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
                                        <span
                                            v-show="errors"
                                            class="text-danger text-sm"
                                        >
                                            {{ errors[0] }}
                                        </span>
                                    </ValidationProvider>

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
                                            :disabled="invalid"
                                            @click.prevent="login"
                                        >
                                            Daxil ol
                                        </vs-button>
                                    </div>
                                </ValidationObserver>
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
                email: this.email,
                password: this.password
            }).then(response => {
                if (response.data) {
                    localStorage.setItem('userData', JSON.stringify(response.data));
                    this.$store.dispatch('setUserData', response.data);
                    this.$router.push({ name: 'home' });
                } else {
                    this.email = '';
                    this.password = '';
                }
            });
        }
    }
};
</script>
