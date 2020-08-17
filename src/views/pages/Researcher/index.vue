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
                <vs-row>
                    <vx-card class="mb-base">
                        <vs-row>
                            <!-- Avatar -->
                            <vs-col
                                vs-w="2"
                                class="pr-4"
                            >
                                <vs-image
                                    class="w-full"
                                    src="https://www.w3schools.com/howto/img_avatar.png"
                                />
                            </vs-col>

                            <vs-col vs-w="10">
                                <!-- General Information -->
                                <div
                                    class="mb-4 flex justify-between items-center"
                                >
                                    <h3>
                                        Elchin Zakizadeh
                                    </h3>
                                    <vs-button
                                        radius
                                        size="large"
                                        color="primary"
                                        type="flat"
                                        icon-pack="feather"
                                        icon="icon-download"
                                    />
                                </div>
                                <table>
                                    <tr>
                                        <td class="font-semibold pr-4">
                                            Kafedra
                                        </td>
                                        <td>
                                            Kompüter sistemləri və şəbəkələri
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
                                        <td>elchin.zakizadeh@aztu.edu.az</td>
                                    </tr>
                                </table>
                            </vs-col>
                        </vs-row>
                    </vx-card>
                </vs-row>

                <!-- Router View -->
                <vs-row>
                    <router-view />
                </vs-row>
            </vs-col>
        </vs-row>
    </div>
</template>

<script>
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
                    title: 'Layihə, Patent'
                },
                {
                    id: 6,
                    key: 'academicActivity',
                    title: 'Akademik fəaliyyət'
                },
                {
                    id: 7,
                    key: 'achievements',
                    title: 'Nailiyyətlər'
                },
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
            activeMenuKey: null
        };
    },
    mounted() {
        this.activeMenuKey = this.$route.name.split('.')[1];
    },
    methods: {
        menuOnClick(key, id) {
            this.$router.push({ name: 'researcher.' + key, params: { id } });
            this.activeMenuKey = key;

            // this.$el.querySelectorAll(".vs-button").forEach(button => {
            //     console.log(button.classList);
            //     button.classList.remove("isActive");
            //     button.style = {};
            // });
        }
    }
};
</script>
