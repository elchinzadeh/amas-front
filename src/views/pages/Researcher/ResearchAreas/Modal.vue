<template>
    <vs-popup
        title="Tədqiqat sahəsi əlavə et"
        :active.sync="popupActive"
    >
        <ValidationObserver v-slot="{ invalid }">
            <div class="form-field">
                <ValidationProvider
                    v-slot="{ errors }"
                    rules="required"
                    name="Tədqiqat sahəsi"
                >
                    <label
                        for="area"
                    >
                        Tədqiqat sahəsi:
                    </label>
                    <v-select
                        id="area"
                        v-model="area"
                        :options="researchAreas"
                        label="name"
                    />
                    <span
                        v-show="errors"
                        class="text-danger text-sm"
                    >
                        {{ errors[0] }}
                    </span>
                </ValidationProvider>
            </div>

            <div class="popup-footer">
                <vs-button
                    color="primary"
                    type="border"
                    @click="popupActive = false"
                >
                    Ləğv et
                </vs-button>
                <vs-button
                    color="primary"
                    type="filled"
                    icon="add"
                    :disabled="invalid"
                    @click="submit"
                >
                    Əlavə et
                </vs-button>
            </div>
        </ValidationObserver>
    </vs-popup>
</template>

<script>
import API from '@/api';

export default {
    name: 'ResearchAreaModal',
    props: {
        active: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    data() {
        return {
            researchAreas: [],
            area: null
        };
    },
    computed: {
        popupActive: {
            get () {
                return this.active;
            },
            set (val) {
                this.$emit('update:active', val);
            }
        }
    },
    mounted() {
        this.getResearchAreas();
    },
    methods: {
        getResearchAreas() {
            API.ResearchArea.getAll().then(res => {
                if (res.data) {
                    this.researchAreas = res.data;
                }
            });
        },
        submit() {
            const body = {
                areaId: this.area.id
            };

            API.ResearcherResearchArea.insert(body).then(res => {
                this.popupActive = false;
                this.$emit('afterInsert');
            });
        }
    }
};
</script>