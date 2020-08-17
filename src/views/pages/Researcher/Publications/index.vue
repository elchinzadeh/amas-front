<template>
    <div class="w-full">
        <!-- Indexed Journals -->
        <IndexedJournals />

        <!-- Other Journals -->
        <OtherJournals />

        <!-- Articles -->
        <Articles />

        <!-- Monographs -->
        <Monographs />

        <!-- TextBooks -->
        <TextBooks />

        <!-- Thesis -->
        <Thesis />
    </div>
</template>

<script>
import Articles from './Articles';
import IndexedJournals from './IndexedJournals';
import Monographs from './Monographs';
import OtherJournals from './OtherJournals';
import TextBooks from './TextBooks';
import Thesis from './Thesis';

export default {
    name: 'Publications',
    components: {
        Articles,
        IndexedJournals,
        Monographs,
        OtherJournals,
        TextBooks,
        Thesis
    }
};
</script>
