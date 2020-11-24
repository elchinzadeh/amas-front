<template>
    <div>
        <vx-card class="mb-4">
            <div class="flex justify-between items-center mb-4">
                <h3>Təhsil məlumatları</h3>
                <vs-button
                    color="success"
                    type="flat"
                    icon="add"
                    @click="toggleModal"
                >
                    Əlavə et
                </vs-button>
            </div>

            <vs-list>
                <div
                    v-for="item in data"
                    :key="item.id"
                    class="vs-list--item"
                >
                    <div class="list-titles">
                        <div class="vs-list--title">
                            Doctorate (2016-2020)
                        </div>
                        <div class="vs-list--subtitle mt-2">
                            <div>
                                <b>Müəssisə:</b>
                                The University of Texas at Austin
                            </div>
                            <div>
                                <b>İxtisas, fakültə:</b>
                                School of Engineering, Electrical and Computer
                                Engineering
                            </div>
                            <div>
                                <b>Ölkə:</b>
                                United States Of America
                            </div>
                        </div>
                    </div>
                </div>
            </vs-list>
        </vx-card>

        <EducationInfoModal :active.sync="modalActive" />
    </div>
</template>

<script>
import EducationInfoModal from './Modal';

export default {
    name: 'EducationInfo',
    components: {
        EducationInfoModal
    },
    props: {
        data: {
            type: Array,
            required: false,
            default: () => {
                return [{name: 'yo'}];
            }
        }
    },
    data() {
        return {
            modalActive: false
        };
    },
    methods: {
        toggleModal(value) {
            if (value === true || value === false) {
                this.modalActive = value;
            } else {
                this.modalActive = !this.modalActive;
            }
        }
    }
};
</script>