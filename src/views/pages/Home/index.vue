<template>
    <div class="home-page">
        <!-- Search -->
        <Search />

        <!-- Reports and Statistics -->
        <Statistics />

        <!-- News -->
        <News />
        
        <!-- Announcements -->
        <Announcements />
    </div>
</template>

<script>
import Search from './Search';
import Statistics from './Statistics';
import News from './News';
import Announcements from './Announcements';
import './style.scss';

export default {
    name: 'MainPage',
    components: {
        Search,
        Statistics,
        News,
        Announcements
    },
};
</script>
