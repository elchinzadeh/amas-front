<template>
    <div class="home-page">
        <!-- Search -->
        <div class="search-area">
            <SearchBox />

            <vs-button
                color="primary"
                type="filled"
                class="mt-4"
                icon-pack="feather"
                icon="icon-sliders"
                :to="{ name: 'detailedSearch' }"
            >
                Ətraflı axtarış
            </vs-button>
        </div>

        <!-- Map -->
        <div class="map" ref="map"></div>

        <!-- Reports and Statistics -->
        <div class="reports">
            <div
                class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-6"
            >
                <div class="col-auto">
                    <StatisticsCardLine
                        hideChart
                        icon="BookIcon"
                        statistic="36.9k"
                        statisticTitle="Nəşr"
                    />
                </div>
                <div class="col-auto">
                    <StatisticsCardLine
                        hideChart
                        icon="StarIcon"
                        statistic="36.9k"
                        statisticTitle="Layihə"
                    />
                </div>
                <div class="col-auto">
                    <StatisticsCardLine
                        hideChart
                        icon="UserIcon"
                        statistic="36.9k"
                        statisticTitle="Tədqiqatçı"
                    />
                </div>
                <div class="col-auto">
                    <StatisticsCardLine
                        hideChart
                        icon="PaperclipIcon"
                        statistic="36.9k"
                        statisticTitle="Patent"
                    />
                </div>
                <div class="col-auto">
                    <StatisticsCardLine
                        hideChart
                        icon="MessageCircleIcon"
                        statistic="36.9k"
                        statisticTitle="Sitat"
                    />
                </div>
                <div class="col-auto">
                    <StatisticsCardLine
                        hideChart
                        icon="AwardIcon"
                        statistic="36.9k"
                        statisticTitle="Mükafat"
                    />
                </div>
                <div class="col-auto">
                    <StatisticsCardLine
                        hideChart
                        icon="TrendingUpIcon"
                        statistic="36.9k"
                        statisticTitle="Elmi fəaliyyət"
                    />
                </div>
                <div class="col-auto">
                    <StatisticsCardLine
                        hideChart
                        icon="DiscIcon"
                        statistic="36.9k"
                        statisticTitle="Açıq giriş"
                    />
                </div>
            </div>
        </div>

        <!-- News -->
        <div class="news">
            <vs-row class="items-stretch">
                <!-- Recent Updates -->
                <vs-col vs-w="4" class="pr-4">
                    <div class="updates">
                        <div class="mb-4 flex items-center">
                            <h3>Son yeniliklər</h3>
                            <vs-button
                                radius
                                size="large"
                                color="primary"
                                type="flat"
                                icon-pack="feather"
                                icon="icon-chevrons-right"
                                class="ml-2"
                            ></vs-button>
                        </div>
                        <vx-card>
                            <vs-list>
                                <div
                                    v-for="(item, index) in Array(3)"
                                    :key="index"
                                    class="vs-list--item"
                                >
                                    <vs-row>
                                        <vs-col vs-w="3">
                                            <vs-image
                                                class="w-full"
                                                src="https://www.thesun.co.uk/wp-content/uploads/2019/03/NIP000172465791-e1552353155168.jpg"
                                            />
                                        </vs-col>
                                        <vs-col vs-w="9" class="pl-4">
                                            <div class="list-titles">
                                                <div class="vs-list--title">
                                                    Prof. Tim Berners Lee
                                                </div>
                                                <div
                                                    class="vs-list--subtitle mt-2"
                                                >
                                                    Implemented the first
                                                    successful communication
                                                    between a HTTP client and
                                                    server
                                                </div>
                                            </div>
                                        </vs-col>
                                    </vs-row>
                                </div>
                            </vs-list>
                        </vx-card>
                    </div>
                </vs-col>

                <!-- Latest Publications -->
                <vs-col vs-w="8" class="pl-4">
                    <div class="publications">
                        <div class="mb-4 flex items-center">
                            <h3>Son nəşrlər</h3>
                            <vs-button
                                radius
                                size="large"
                                color="primary"
                                type="flat"
                                icon-pack="feather"
                                icon="icon-chevrons-right"
                                class="ml-2"
                            ></vs-button>
                        </div>
                        <vx-card>
                            <vs-list>
                                <div
                                    v-for="(item, index) in Array(5)"
                                    :key="index"
                                    class="vs-list--item"
                                >
                                    <div class="list-titles">
                                        <div class="vs-list--title">
                                            Using Moment Generating Function for
                                            Performance Analysis in
                                            Non-Regenerative Cooperative Relay
                                            Networks with Max-Min Relay
                                            Selection
                                        </div>
                                        <div class="vs-list--subtitle">
                                            <a href="#">
                                                Frank Sinatra
                                            </a>
                                            <a href="#">
                                                Elvis Presley
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </vs-list>
                        </vx-card>
                    </div>
                </vs-col>
            </vs-row>
        </div>

        <!-- Announcements -->
        <div class="announcements">
            <div class="mb-4 flex items-center">
                <h3>Elmi fəaliyyətlər və elanlar</h3>
                <vs-button
                    radius
                    size="large"
                    color="primary"
                    type="flat"
                    icon-pack="feather"
                    icon="icon-chevrons-right"
                    class="ml-2"
                ></vs-button>
            </div>
            <vx-card>
                <vs-list>
                    <div
                        v-for="(item, index) in Array(5)"
                        :key="index"
                        class="vs-list--item py-2"
                    >
                        <div class="list-titles">
                            <div class="vs-list--title">
                                Citizens of distant epochs descended
                            </div>
                            <div class="vs-list--subtitle">
                                Not a sunrise but a galaxyrise of brilliant
                                syntheses rich in mystery rich in heavy atoms
                                quasar hydrogen atoms. Citizens of distant
                                epochs descended from astronomers a very small
                                stage in a vast cosmic arena colonies Drake
                                Equation a very small stage in a vast cosmic
                                arena? Two ghostly white figures in coveralls
                                and helmets are soflty dancing emerged into
                                consciousness from which we spring rings of
                                Uranus finite but unbounded inconspicuous motes
                                of rock and gas and billions upon billions upon
                                billions upon billions upon billions upon
                                billions upon billions...
                                <a href="">Read more</a>
                            </div>
                        </div>
                    </div>
                </vs-list>
            </vx-card>
        </div>
    </div>
</template>

<script>
import SearchBox from "@/views/components/SearchBox";
import StatisticsCardLine from "@/components/statistics-cards/StatisticsCardLine.vue";
import "./style.scss";

// import * as am4core from "@amcharts/amcharts4/core";
// import * as maps from "@amcharts/amcharts4/maps";
// import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

export default {
    name: "MainPage",
    components: {
        SearchBox,
        StatisticsCardLine
    },
    mounted() {
        // let map = am4core.create("map", am4maps.MapChart);
        // map.geodata = am4geodata_worldLow;
    },
    beforeDestroy() {
        // if (this.chart) {
        //     this.chart.dispose();
        // }
    }
};
</script>

<style scoped>
.map {
    width: 100%;
    height: 500px;
}
</style>
