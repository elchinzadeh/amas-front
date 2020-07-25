<template>
    <div class="w-full">
        <vx-card class="mb-4">
            <div class="flex justify-between items-center mb-4">
                <h3>
                    Əlaqə məlumatları
                </h3>
                <vs-button
                    color="success"
                    type="flat"
                    icon="add"
                >
                    Əlavə et
                </vs-button>
            </div>


            <vs-list>
                <div class="vs-list--item">
                    <div class="vs-list--avatar">
                        <vs-avatar
                            class="mr-4"
                            size="large"
                            icon-pack="feather"
                            icon="icon-mail"
                            color="primary"
                        />
                    </div>
                    <div class="list-titles">
                        <div class="vs-list--title">
                            elchin.zakizadeh@aztu.edu.az
                        </div>
                    </div>
                </div>
                <div class="vs-list--item">
                    <div class="vs-list--avatar">
                        <vs-avatar
                            class="mr-4"
                            size="large"
                            icon-pack="feather"
                            icon="icon-globe"
                            color="primary"
                        />
                    </div>
                    <div class="list-titles">
                        <div class="vs-list--title">
                            https://elchin.xyz
                        </div>
                    </div>
                </div>
            </vs-list>
        </vx-card>
    </div>
</template>

<script>
export default {};
</script>
