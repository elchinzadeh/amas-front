<template>
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
</template>

<script>
import SearchBox from '@/views/components/SearchBox';

export default {
    name: "Search",
    components: {
        SearchBox,
    }
}
</script>