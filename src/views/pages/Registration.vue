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
                                        <ValidationObserver v-slot="{ invalid }">
                                            <ValidationProvider
                                                v-slot="{ errors }"
                                                rules="required"
                                                name="Ad"
                                            >
                                                <vs-input
                                                    v-model="firstName"
                                                    label-placeholder="Ad"
                                                    name="firstName"
                                                    placeholder="Ad"
                                                    class="w-full"
                                                />
                                                <span
                                                    v-show="errors"
                                                    class="text-danger text-sm"
                                                >
                                                    {{ errors[0] }}
                                                </span>
                                            </ValidationProvider>


                                            <ValidationProvider
                                                v-slot="{ errors }"
                                                rules="required"
                                                name="Soyad"
                                            >
                                                <vs-input
                                                    v-model="lastName"
                                                    label-placeholder="Soyad"
                                                    name="lastName"
                                                    placeholder="Soyad"
                                                    class="w-full"
                                                />
                                                <span
                                                    v-show="errors"
                                                    class="text-danger text-sm"
                                                >
                                                    {{ errors[0] }}
                                                </span>
                                            </ValidationProvider>


                                            <ValidationProvider
                                                v-slot="{ errors }"
                                                rules="required"
                                                name="E-poçt"
                                            >
                                                <vs-input
                                                    v-model="email"
                                                    name="email"
                                                    type="email"
                                                    label-placeholder="E-poçt"
                                                    placeholder="E-poçt"
                                                    class="w-full mt-6"
                                                />
                                                <span
                                                    v-show="errors"
                                                    class="text-danger text-sm"
                                                >
                                                    {{ errors[0] }}
                                                </span>
                                            </ValidationProvider>


                                            <ValidationProvider
                                                v-slot="{ errors }"
                                                rules="required"
                                                name="Şifrə"
                                            >
                                                <vs-input
                                                    ref="password"
                                                    v-model="password"
                                                    type="password"
                                                    name="password"
                                                    label-placeholder="Şifrə"
                                                    placeholder="Şifrə"
                                                    class="w-full mt-6"
                                                />
                                                <span
                                                    v-show="errors"
                                                    class="text-danger text-sm"
                                                >
                                                    {{ errors[0] }}
                                                </span>
                                            </ValidationProvider>


                                            <ValidationProvider
                                                v-slot="{ errors }"
                                                rules="required"
                                                name="Şifrənin təkrarı"
                                            >
                                                <vs-input
                                                    v-model="confirm_password"
                                                    type="password"
                                                    name="confirm_password"
                                                    label-placeholder="Şifrənin təkrarı"
                                                    placeholder="Şifrənin təkrarı"
                                                    class="w-full mt-6"
                                                />
                                                <span
                                                    v-show="errors"
                                                    class="text-danger text-sm"
                                                >
                                                    {{ errors[0] }}
                                                </span>
                                                <span
                                                    v-if="password && confirm_password && !isPasswordsSame"
                                                    class="text-danger text-sm"
                                                >
                                                    Şifrələr uyğun gəlmir
                                                </span>
                                            </ValidationProvider>

                                            <div>
                                                <vs-button
                                                    type="border"
                                                    :to="{ name: 'login' }"
                                                    class="mt-6"
                                                >
                                                    Daxil ol
                                                </vs-button>
                                                <vs-button
                                                    class="float-right mt-6"
                                                    :disabled="invalid || !isPasswordsSame"
                                                    @click="register"
                                                >
                                                    Qeydiyyatdan keç
                                                </vs-button>
                                            </div>
                                        </ValidationObserver>
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
    computed: {
        isPasswordsSame() {
            return this.password === this.confirm_password;
        }
    },
    methods: {
        register() {
            const body = {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password
            };

            API.Auth.signUp(body).then(response => {
                if (response.data) {
                    this.$router.push({name: 'login'});
                    this.$vs.notify({
                        title: 'Qeydiyyat tamamlandı'
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
