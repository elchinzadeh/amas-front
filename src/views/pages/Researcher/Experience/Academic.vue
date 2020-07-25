<template>
    <vx-card class="mb-4">
        <div class="flex justify-between items-center mb-4">
            <h3>
                Akademik vəzifələr
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
                <div class="list-titles">
                    <div class="vs-list--title">
                        Professor (2018 - Davam edir)
                    </div>
                    <div class="vs-list--subtitle mt-2">
                        <div>
                            <b>
                                Müəssisə:
                            </b>
                            Kocaeli University
                        </div>
                        <div>
                            <b>
                                Kafedra:
                            </b>
                            Bilgisayar Mühendisliği Bölümü
                        </div>
                    </div>
                </div>
            </div>
            <div class="vs-list--item">
                <div class="list-titles">
                    <div class="vs-list--title">
                        Associate Professor (2010 - 2018)
                    </div>
                    <div class="vs-list--subtitle mt-2">
                        <div>
                            <b>
                                Müəssisə:
                            </b>
                            Kocaeli University
                        </div>
                        <div>
                            <b>
                                Kafedra:
                            </b>
                            Bilgisayar Mühendisliği Bölümü
                        </div>
                    </div>
                </div>
            </div>
        </vs-list>
    </vx-card>
</template>

<script>
export default {
    name: 'Academic'
};
</script>