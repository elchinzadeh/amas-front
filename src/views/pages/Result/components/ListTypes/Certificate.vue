<template>
    <div class="vs-list--item">
        <div class="vs-list--avatar">
            <vs-avatar
                class="mr-4"
                size="large"
                icon-pack="feather"
                icon="icon-file"
                color="primary"
            />
        </div>
        <div class="list-titles">
            <div class="vs-list--title">
                <router-link
                    :to="{
                        name: 'researcher.achievements',
                        params: { id: 1 }
                    }"
                >
                    {{ data.name }}
                </router-link>
            </div>
            <div class="vs-list--subtitle mb-2">
                <a
                    v-for="(author, index) in data.authors"
                    :key="author.id"
                    href="#"
                >
                    {{
                        index + 1 !== data.authors.length
                            ? `${author.name},`
                            : author.name
                    }}
                </a>
            </div>
            <div class="vs-list--subtitle">
                <div>
                    <b>
                        Sahə:
                    </b>
                    {{ data.field }}
                </div>
                <div>
                    <b>
                        Tarix:
                    </b>
                    {{ data.date }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Certificate',
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    computed: {}
};
</script>
