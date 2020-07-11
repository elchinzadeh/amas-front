<template>
    <div class="vs-list--item">
        <div class="vs-list--avatar">
            <vs-avatar
                class="mr-4"
                size="large"
                icon-pack="feather"
                icon="icon-user"
                color="primary"
                :src="data.image"
            />
        </div>
        <div class="list-titles">
            <div class="vs-list--title">
                <router-link
                    :to="{ name: 'researcher.education', params: { id: 1 } }"
                >
                    {{ data.name }}
                </router-link>
            </div>
            <div class="vs-list--subtitle">
                {{ data.position }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Researcher",
    props: {
        data: {
            type: Object,
            required: true
        }
    }
};
</script>
