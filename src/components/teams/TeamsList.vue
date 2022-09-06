<template>
    <router-view></router-view>
    <ul class="list-none my-8 p-0 mx-auto max-w-2xl">
        <team-item v-for="team in teams" :key="team.id" :id="team.id" :name="team.name"
            :member-count="team.members.length"></team-item>
    </ul>
</template>

<script>
import TeamItem from './TeamItem.vue';

export default {
    components: {
        TeamItem,
    },
    inject: ['teams'],
};
</script>