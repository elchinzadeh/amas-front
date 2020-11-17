<template>
    <div class="w-full">
        <!-- Education -->
        <EducationInfo :data="educationData.edu" />

        <!-- Thesis -->
        <Thesis :data="educationData.edu" />

        <!-- Languages -->
        <Languages :data="educationData.foreign_language" />

        <!-- Certifications -->
        <Certifications :data="educationData.sertifikat" />
    </div>
</template>

<script>
import API from '@/api';
import EducationInfo from './EducationInfo';
import Thesis from './Thesis';
import Languages from './Languages';
import Certifications from './Certifications';

export default {
    name: 'Education',
    components: {
        EducationInfo,
        Thesis,
        Languages,
        Certifications
    },
    data() {
        return {
            educationData: []
        };
    },
    mounted() {
        this.getEducationInfo();
    },
    methods: {
        getEducationInfo() {
            API.Education.getAll().then(response => {
                if (response.data) {
                    this.educationData = response.data;
                }
            });
        }
    }
};
</script>
