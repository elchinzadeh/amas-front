<template>
    <vx-card class="mb-4">
        <div class="flex justify-between items-center mb-4">
            <h3>Sertifikat, kurs və təlimlər</h3>
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
                        Foreign Language (2016)
                    </div>
                    <div class="vs-list--subtitle">
                        <div>
                            YOĞUNLAŞTIRILMIŞ FRANSIZCA KURSU, Université de
                            Liége
                        </div>
                    </div>
                </div>
            </div>
        </vs-list>
    </vx-card>
</template>

<script>
export default {
    name: 'Certifications'
};
</script>