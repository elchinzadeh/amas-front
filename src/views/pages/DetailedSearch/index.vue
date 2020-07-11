<template>
    <div class="p-8">
        <div class="mb-8 flex items-center">
            <vs-button
                radius
                color="primary"
                type="filled"
                icon-pack="feather"
                icon="icon-arrow-left"
                class="mr-4"
                :to="{ name: 'home' }"
            />
            <h2>Ətraflı axtarış</h2>
        </div>
        <vx-card>
            <vs-tabs vs-position="left" alignment="fixed">
                <vs-tab label="Tədqiqatçı axtarışı">
                    <div class="mt-1 pl-2 py-8 flex justify-center">
                        <vs-col vs-w="6">
                            <vs-row class="mb-4">
                                <vs-col vs-w="3">
                                    Ad, soyad, ata adı
                                </vs-col>
                                <vs-col vs-w="9">
                                    <vs-input class="w-full" />
                                </vs-col>
                            </vs-row>
                            <vs-row class="mb-4">
                                <vs-col vs-w="3">
                                    Elmi dərəcəsi
                                </vs-col>
                                <vs-col vs-w="9">
                                    <v-select
                                        :options="options"
                                        label="name"
                                        :dir="$vs.rtl ? 'rtl' : 'ltr'"
                                    />
                                </vs-col>
                            </vs-row>
                            <vs-row class="mb-4">
                                <vs-col vs-w="3">
                                    Elmi adı
                                </vs-col>
                                <vs-col vs-w="9">
                                    <v-select
                                        :options="options"
                                        label="name"
                                        :dir="$vs.rtl ? 'rtl' : 'ltr'"
                                    />
                                </vs-col>
                            </vs-row>
                            <vs-row class="mb-4">
                                <vs-col vs-w="3">
                                    Fakültə
                                </vs-col>
                                <vs-col vs-w="9">
                                    <v-select
                                        :options="options"
                                        label="name"
                                        :dir="$vs.rtl ? 'rtl' : 'ltr'"
                                    />
                                </vs-col>
                            </vs-row>
                            <vs-row class="mb-4">
                                <vs-col vs-w="3">
                                    Kafedra
                                </vs-col>
                                <vs-col vs-w="9">
                                    <v-select
                                        :options="options"
                                        label="name"
                                        :dir="$vs.rtl ? 'rtl' : 'ltr'"
                                    />
                                </vs-col>
                            </vs-row>
                            <vs-row class="mb-4">
                                <vs-col vs-w="3">
                                    İxtisas
                                </vs-col>
                                <vs-col vs-w="9">
                                    <v-select
                                        :options="options"
                                        label="name"
                                        :dir="$vs.rtl ? 'rtl' : 'ltr'"
                                    />
                                </vs-col>
                            </vs-row>
                            <vs-row class="mb-4">
                                <vs-col vs-w="3">
                                    Tədqiqat sahəsi
                                </vs-col>
                                <vs-col vs-w="9">
                                    <v-select
                                        :options="options"
                                        label="name"
                                        :dir="$vs.rtl ? 'rtl' : 'ltr'"
                                    />
                                </vs-col>
                            </vs-row>
                            <vs-row class="mb-4">
                                <vs-col vs-w="3">
                                    Xarici dil
                                </vs-col>
                                <vs-col vs-w="9">
                                    <v-select
                                        :options="options"
                                        label="name"
                                        :dir="$vs.rtl ? 'rtl' : 'ltr'"
                                    />
                                </vs-col>
                            </vs-row>
                            <vs-row class="mb-4">
                                <vs-col vs-w="3">
                                    Təhsil aldığı ölkə
                                </vs-col>
                                <vs-col vs-w="9">
                                    <v-select
                                        :options="options"
                                        label="name"
                                        :dir="$vs.rtl ? 'rtl' : 'ltr'"
                                    />
                                </vs-col>
                            </vs-row>
                            <vs-row vs-justify="flex-end" class="mt-8">
                                <vs-button
                                    color="primary"
                                    type="filled"
                                    icon-pack="feather"
                                    icon="icon-arrow-right"
                                    icon-after
                                    :to="{ name: 'result' }"
                                >
                                    Axtar
                                </vs-button>
                            </vs-row>
                        </vs-col>
                    </div>
                </vs-tab>
                <vs-tab label="Araşdırma fəaliyəti axtarışı">
                    <div class="mt-1 pl-2 py-8 flex justify-center">
                        <vs-col vs-w="6">
                            <vs-row class="mb-4">
                                <vs-col vs-w="3">
                                    Açar sözlər
                                </vs-col>
                                <vs-col vs-w="9">
                                    <vs-input class="w-full" />
                                </vs-col>
                            </vs-row>
                            <vs-row class="mb-4">
                                <vs-col vs-w="3">
                                    Kateqoriya
                                </vs-col>
                                <vs-col vs-w="9">
                                    <v-select
                                        :options="options"
                                        label="name"
                                        :dir="$vs.rtl ? 'rtl' : 'ltr'"
                                    />
                                </vs-col>
                            </vs-row>
                            <vs-row class="mb-4">
                                <vs-col vs-w="3">
                                    Alt kateqoriya
                                </vs-col>
                                <vs-col vs-w="9">
                                    <v-select
                                        :options="options"
                                        label="name"
                                        :dir="$vs.rtl ? 'rtl' : 'ltr'"
                                    />
                                </vs-col>
                            </vs-row>
                            <vs-row class="mb-4">
                                <vs-col vs-w="3">
                                    Tədqiqat sahəsi
                                </vs-col>
                                <vs-col vs-w="9">
                                    <v-select
                                        :options="options"
                                        label="name"
                                        :dir="$vs.rtl ? 'rtl' : 'ltr'"
                                    />
                                </vs-col>
                            </vs-row>
                            <vs-row vs-justify="flex-end" class="mt-8">
                                <vs-button
                                    color="primary"
                                    type="filled"
                                    icon-pack="feather"
                                    icon="icon-arrow-right"
                                    icon-after
                                    :to="{ name: 'result' }"
                                >
                                    Axtar
                                </vs-button>
                            </vs-row>
                        </vs-col>
                    </div>
                </vs-tab>
            </vs-tabs>
        </vx-card>
    </div>
</template>

<script>
import vSelect from "vue-select";

export default {
    name: "DetailedSearch",
    components: {
        "v-select": vSelect
    },
    data() {
        return {
            options: [
                {
                    id: 1,
                    name: "Seçim 1"
                },
                {
                    id: 2,
                    name: "Seçim 2"
                },
                {
                    id: 3,
                    name: "Seçim 3"
                }
            ]
        };
    }
};
</script>
