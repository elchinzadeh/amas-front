<template>
    <div class="announcements">
        <div class="mb-4 flex items-center">
            <h3>Elmi fəaliyyətlər və elanlar</h3>
            <vs-button
                radius
                size="large"
                color="primary"
                type="flat"
                icon-pack="feather"
                icon="icon-chevrons-right"
                class="ml-2"
            />
        </div>
        <vx-card>
            <vs-list>
                <div
                    v-for="(item, index) in Array(5)"
                    :key="index"
                    class="vs-list--item py-2"
                >
                    <div class="list-titles">
                        <div class="vs-list--title">
                            Citizens of distant epochs descended
                        </div>
                        <div class="vs-list--subtitle">
                            Not a sunrise but a galaxyrise of brilliant
                            syntheses rich in mystery rich in heavy atoms
                            quasar hydrogen atoms. Citizens of distant
                            epochs descended from astronomers a very small
                            stage in a vast cosmic arena colonies Drake
                            Equation a very small stage in a vast cosmic
                            arena? Two ghostly white figures in coveralls
                            and helmets are soflty dancing emerged into
                            consciousness from which we spring rings of
                            Uranus finite but unbounded inconspicuous motes
                            of rock and gas and billions upon billions upon
                            billions upon billions upon billions upon
                            billions upon billions...
                            <a
                                href
                            >Read more</a>
                        </div>
                    </div>
                </div>
            </vs-list>
        </vx-card>
    </div>
</template>

<script>
export default {
    name: "Announcements"
}
</script>