<template>
    <div class="vs-list--item">
        <div class="vs-list--avatar">
            <vs-avatar
                class="mr-4"
                size="large"
                icon-pack="feather"
                icon="icon-award"
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
                        Yer:
                    </b>
                    {{ data.place }}
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
    name: "Award",
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    computed: {}
};
</script>
