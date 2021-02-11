<template>
    <div class="w-full">
        <!-- Indexed Articles -->
        <IndexedArticles />

        <!-- Other Articles -->
        <OtherArticles />

        <!-- TextBooks -->
        <TextBooks />

        <!-- Thesis -->
        <Theses />
    </div>
</template>

<script>
import IndexedArticles from './Articles/IndexedArticles';
import OtherArticles from './Articles/OtherArticles';
import TextBooks from './TextBooks/';
import Theses from './Theses/';

export default {
    name: 'Publications',
    components: {
        IndexedArticles,
        OtherArticles,
        TextBooks,
        Theses
    }
};
</script>

{
    name,
    description,
    date,
    publisher: {
        id,
        name
    },
    researchers: {
        internal: [{
            id,
            firstName,
            lastName,
            patronymic
        }],
        external: [{
            id,
            name
        }]
    },
    urls: [{
        url,
        urlType
    }]
}