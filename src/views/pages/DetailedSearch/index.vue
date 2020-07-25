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
            <vs-tabs
                vs-position="left"
                alignment="fixed"
            >
                <vs-tab label="Tədqiqatçı axtarışı">
                    <ResearcherSearch />
                </vs-tab>
                <vs-tab label="Araşdırma fəaliyəti axtarışı">
                    <ActivitySearch />
                </vs-tab>
            </vs-tabs>
        </vx-card>
    </div>
</template>

<script>
import ResearcherSearch from './ResearcherSearch';
import ActivitySearch from './ActivitySearch';

export default {
    name: 'DetailedSearch',
    components: {
        ResearcherSearch,
        ActivitySearch,
    },
};
</script>
