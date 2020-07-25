<template>
    <div class="w-full">
        <!-- Academic -->
        <Academic />

        <!-- Leadership -->
        <Leadership />
    </div>
</template>

<script>
import Academic from './Academic';
import Leadership from './Leadership';

export default {
    name: 'Experience',
    components: {
        Academic,
        Leadership
    }
};
</script>
