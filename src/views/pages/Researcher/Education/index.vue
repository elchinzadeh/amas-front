<template>
    <div class="w-full">
        <!-- Education -->
        <EducationInfo />

        <!-- Thesis -->
        <Thesis />

        <!-- Languages -->
        <Languages />

        <!-- Certifications -->
        <Certifications />
    </div>
</template>

<script>
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
    }
};
</script>
