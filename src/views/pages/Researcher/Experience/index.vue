<template>
    <div class="w-full">
        <!-- Pedagogical -->
        <Pedagogical />

        <!-- Management -->
        <Management />
    </div>
</template>

<script>
import Pedagogical from './Pedagogical/';
import Management from './Management/';
import './style.scss';

export default {
    name: 'Experience',
    components: {
        Pedagogical,
        Management
    }
};
</script>
