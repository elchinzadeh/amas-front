<template>
    <div class="vs-list--item">
        <div class="vs-list--avatar">
            <vs-avatar
                class="mr-4"
                size="large"
                icon-pack="feather"
                icon="icon-book"
                color="primary"
            />
        </div>
        <div class="list-titles">
            <div class="vs-list--title">
                <router-link
                    :to="{
                        name: 'researcher.projects',
                        params: { id: 1 }
                    }"
                >
                    {{ data.name }}
                </router-link>
            </div>
            <div class="vs-list--subtitle">
                <a
                    href="#"
                    v-for="(author, index) in data.authors"
                    :key="author.id"
                >
                    {{
                        index + 1 !== data.authors.length
                            ? `${author.name},`
                            : author.name
                    }}
                </a>
            </div>
            <div class="vs-list--subtitle mt-2">
                <div>
                    <b>
                        Kafedra:
                    </b>
                    {{ data.department }}
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
    name: "IntellectualProperty",
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    computed: {}
};
</script>
