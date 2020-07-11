<template>
    <div
        class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center"
    >
        <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
            <vx-card>
                <div slot="no-body" class="full-page-bg-color">
                    <div class="vx-row no-gutter">
                        <div
                            class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center"
                        >
                            <img
                                src="@/assets/images/pages/register.jpg"
                                alt="register"
                                class="mx-auto"
                            />
                        </div>
                        <div
                            class="vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center  d-theme-dark-bg"
                        >
                            <div class="px-8 pt-8 register-tabs-container">
                                <div class="vx-card__title mb-4">
                                    <h4 class="mb-4">Qeydiyyatdan keç</h4>
                                    <p>
                                        Yalnız AzTU əməkdaşları qeydiyyatdan
                                        keçə bilər
                                    </p>
                                </div>
                                <div>
                                    <div class="clearfix">
                                        <vs-input
                                            label-placeholder="Ad, Soyad"
                                            name="displayName"
                                            placeholder="Ad, Soyad"
                                            v-model="displayName"
                                            class="w-full"
                                        />

                                        <vs-input
                                            name="email"
                                            type="email"
                                            label-placeholder="E-poçt"
                                            placeholder="E-poçt"
                                            v-model="email"
                                            class="w-full mt-6"
                                        />

                                        <vs-input
                                            ref="password"
                                            type="password"
                                            name="password"
                                            label-placeholder="Şifrə"
                                            placeholder="Şifrə"
                                            v-model="password"
                                            class="w-full mt-6"
                                        />

                                        <vs-input
                                            type="password"
                                            name="confirm_password"
                                            label-placeholder="Şifrənin təkrarı"
                                            placeholder="Şifrənin təkrarı"
                                            v-model="confirm_password"
                                            class="w-full mt-6"
                                        />

                                        <!-- <vs-checkbox
                                            v-model="isTermsConditionAccepted"
                                            class="mt-6"
                                        >
                                            I accept the terms & conditions.
                                        </vs-checkbox> -->

                                        <vs-button
                                            type="border"
                                            :to="{ name: 'login' }"
                                            class="mt-6"
                                        >
                                            Login
                                        </vs-button>
                                        <vs-button
                                            class="float-right mt-6"
                                            @click="register"
                                        >
                                            Register
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
export default {
    name: "Registration",
    data() {
        return {
            displayName: "",
            email: "",
            password: "",
            confirm_password: ""
            // isTermsConditionAccepted: true
        };
    },
    methods: {
        register() {
            //
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
