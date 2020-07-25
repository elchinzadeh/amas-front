<template>
    <div class="w-full">
        <!-- Indexed Journals -->
        <IndexedJournals />

        <!-- Other Journals -->
        <OtherJournals />
    </div>
</template>

<script>
import IndexedJournals from './IndexedJournals';
import OtherJournals from './OtherJournals';

export default {
    name: 'Publications',
    components: {
        IndexedJournals,
        OtherJournals
    }
};
</script>
