<template>
    <div class="news">
        <vs-row class="items-stretch">
            <!-- Recent Updates -->
            <vs-col
                vs-w="4"
                class="pr-4"
            >
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
                        />
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
                                    <vs-col
                                        vs-w="9"
                                        class="pl-4"
                                    >
                                        <div class="list-titles">
                                            <div class="vs-list--title">
                                                Prof. Tim Berners Lee
                                            </div>
                                            <div class="vs-list--subtitle mt-2">
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
            <vs-col
                vs-w="8"
                class="pl-4"
            >
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
                        />
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
                                        <a href="#">Frank Sinatra</a>
                                        <a href="#">Elvis Presley</a>
                                    </div>
                                </div>
                            </div>
                        </vs-list>
                    </vx-card>
                </div>
            </vs-col>
        </vs-row>
    </div>
</template>

<script>
export default {
    name: "News"
}
</script>