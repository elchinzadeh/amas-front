<template>
    <div class="w-full">
        <!-- Education -->
        <EducationInfo />

        <!-- Dissertations -->
        <Dissertations />

        <!-- Languages -->
        <Languages />

        <!-- Certifications -->
        <Certifications />
    </div>
</template>

<script>
import EducationInfo from './EducationInfo/';
import Dissertations from './Dissertations';
import Languages from './Languages';
import Certifications from './Certifications';
import './style.scss';

export default {
    name: 'Education',
    components: {
        EducationInfo,
        Dissertations,
        Languages,
        Certifications
    },
    data() {
        return {};
    }
};
</script>
