<template>
    <div class="w-full">
        <vx-card class="mb-4">
            <div class="flex justify-between items-center mb-4">
                <h3>
                    Tədqiqat sahələri
                </h3>
                <vs-button
                    color="success"
                    type="flat"
                    icon="add"
                >
                    Əlavə et
                </vs-button>
            </div>

            <vs-list>
                <div
                    v-for="item in researchAreas"
                    :key="item.id"
                    class="vs-list--item"
                >
                    <div class="list-titles">
                        <div class="vs-list--title">
                            Information Systems, Communication and Control
                            Engineering
                        </div>
                    </div>
                </div>
            </vs-list>
        </vx-card>
    </div>
</template>

<script>
export default {
    name: 'ResearchAreas',
    data() {
        return {
            researchAreas: []
        };
    },
    mounted() {
        this.getResearchAreas();
    },
    methods: {
        getResearchAreas() {
            API.ResearchAreas.getAll().then(response => {
                if (response.data) {
                    this.researchAreas = response.data.edu;
                }
            });
        }
    }
};
</script>
