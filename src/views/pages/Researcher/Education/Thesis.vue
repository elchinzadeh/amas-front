<template>
    <vx-card class="mb-4">
        <div class="flex justify-between items-center mb-4">
            <h3>Dissertasiyalar</h3>
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
                        Post Graduate (2015)
                    </div>
                    <div class="vs-list--subtitle mt-2">
                        <div>
                            <b>Ad:</b>
                            J.J. ROUSSEAU FELSEFESİNDE İNSAN VE TOPLUM
                            SORUNU
                        </div>
                        <div>
                            <b>Müəssisə:</b>
                            İstanbul Üniversitesi
                        </div>
                        <div>
                            <b>İxtisas, fakültə:</b>
                            Edebiyat Fakültesi, Felsefe Bölümü
                        </div>
                    </div>
                </div>
            </div>
        </vs-list>
    </vx-card>
</template>

<script>
export default {
    name: 'Thesis'
};
</script>