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
                        name: 'researcher.education',
                        params: { id: 1 }
                    }"
                >
                    {{ data.name }}
                </router-link>
            </div>
            <div class="vs-list--subtitle mt-2">
                <div>
                    <b>
                        Müəllif:
                    </b>
                    {{ data.author.name }}
                </div>
                <div>
                    <b>
                        Dərəcə:
                    </b>
                    {{ data.educationLevel }}
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
    name: "Thesis",
    props: {
        data: {
            type: Object,
            required: true
        }
    }
};
</script>
