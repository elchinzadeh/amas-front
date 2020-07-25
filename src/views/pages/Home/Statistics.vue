<template>
    <div class="reports">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-6">
            <div class="col-auto">
                <StatisticsCardLine
                    hide-chart
                    icon="BookIcon"
                    statistic="36.9k"
                    statistic-title="Nəşr"
                />
            </div>
            <div class="col-auto">
                <StatisticsCardLine
                    hide-chart
                    icon="StarIcon"
                    statistic="36.9k"
                    statistic-title="Layihə"
                />
            </div>
            <div class="col-auto">
                <StatisticsCardLine
                    hide-chart
                    icon="UserIcon"
                    statistic="36.9k"
                    statistic-title="Tədqiqatçı"
                />
            </div>
            <div class="col-auto">
                <StatisticsCardLine
                    hide-chart
                    icon="PaperclipIcon"
                    statistic="36.9k"
                    statistic-title="Patent"
                />
            </div>
            <div class="col-auto">
                <StatisticsCardLine
                    hide-chart
                    icon="MessageCircleIcon"
                    statistic="36.9k"
                    statistic-title="Sitat"
                />
            </div>
            <div class="col-auto">
                <StatisticsCardLine
                    hide-chart
                    icon="AwardIcon"
                    statistic="36.9k"
                    statistic-title="Mükafat"
                />
            </div>
            <div class="col-auto">
                <StatisticsCardLine
                    hide-chart
                    icon="TrendingUpIcon"
                    statistic="36.9k"
                    statistic-title="Elmi fəaliyyət"
                />
            </div>
            <div class="col-auto">
                <StatisticsCardLine
                    hide-chart
                    icon="DiscIcon"
                    statistic="36.9k"
                    statistic-title="Açıq giriş"
                />
            </div>
        </div>
    </div>
</template>

<script>
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine';

export default {
    name: 'Statistics',
    components: {
        StatisticsCardLine,
    }
}
</script>