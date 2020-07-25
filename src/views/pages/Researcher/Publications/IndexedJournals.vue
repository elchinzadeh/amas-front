<template>
    <vx-card class="mb-4">
        <div class="flex justify-between items-center mb-4">
            <h3>
                SCI, SSCI və AHCI indexlərinə daxil olan jurnallarda nəşr olunan
                məqalələr
            </h3>
            <vs-button
                color="success"
                type="flat"
                icon="add"
                class="whitespace-no-wrap"
            >
                Əlavə et
            </vs-button>
        </div>

        <vs-list>
            <div class="vs-list--item">
                <div class="list-titles">
                    <div class="vs-list--title">
                        Using Moment Generating Function for Performance
                        Analysis in Non-Regenerative Cooperative Relay
                        Networks with Max-Min Relay Selection
                    </div>
                    <div class="vs-list--subtitle">
                        <a href="#">
                            Frank Sinatra
                        </a>
                        <a href="#">
                            Elvis Presley
                        </a>
                    </div>
                    <div class="vs-list--subtitle mt-2">
                        <div>
                            <b>
                                Jurnal:
                            </b>
                            AEU-INTERNATIONAL JOURNAL OF ELECTRONICS AND
                            COMMUNICATIONS, vol.116
                        </div>
                        <div>
                            <b>
                                İndeks:
                            </b>
                            Journal Indexed in SCI
                        </div>
                        <div>
                            <b>
                                Tarix:
                            </b>
                            2020
                        </div>
                    </div>
                </div>
            </div>
        </vs-list>
    </vx-card>
</template>

<script>
export default {
    name: 'IndexedJournals'
};
</script>