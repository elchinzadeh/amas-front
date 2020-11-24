<template>
    <vs-popup
        title="Təhsil məlumatı əlavə et"
        :active.sync="active"
    >
        <div class="form-field">
            <label
                for="education-form"
            >
                Təhsil forması:
            </label>
            <v-select
                id="education-form"
                :options="['foo','bar']"
            />
        </div>
        <div class="form-field">
            <label
                for="education-level"
            >
                Təhsil səviyyəsi:
            </label>
            <v-select
                id="education-level"
                :options="['foo','bar']"
            />
        </div>
        <div class="form-field">
            <label
                for="education-organization"
            >
                Təhsil müəsssisəsi:
            </label>
            <v-select
                id="education-organization"
                :options="['foo','bar']"
            />
        </div>
        <div class="form-field">
            <label
                for="country"
            >
                Ölkə:
            </label>
            <v-select
                id="country"
                :options="['foo','bar']"
            />
        </div>
        <div class="form-field">
            <label
                for="language"
            >
                Təhsil aldığınız dil:
            </label>
            <v-select
                id="language"
                :options="['foo','bar']"
            />
        </div>
        <div class="form-field">
            <label
                for="profession"
            >
                İxtisas:
            </label>
            <v-select
                id="profession"
                :options="['foo','bar']"
            />
        </div>
        <div class="form-field">
            <label
                for="start-date"
            >
                Başlama tarixi:
            </label>
            <vs-input
                id="start-date"
            />
        </div>
        <div class="form-field">
            <label
                for="end-date"
            >
                Bitmə tarixi:
            </label>
            <vs-input
                id="end-date"
            />
        </div>

        <div class="popup-footer">
            <vs-button
                color="primary"
                type="border"
            >
                Ləğv et
            </vs-button>
            <vs-button
                color="primary"
                type="filled"
                icon="add"
            >
                Əlavə et
            </vs-button>
        </div>
    </vs-popup>
</template>

<script>
export default {
    name: 'EducationInfoModal',
    props: {
        active: {
            type: Boolean,
            required: false,
            default: false
        }
    }
};
</script>

<style>

</style>