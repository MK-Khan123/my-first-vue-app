<template>
  <the-navigation></the-navigation>
</template>

<script>
import TheNavigation from './components/nav/TheNavigation.vue';

export default {
  components: {
    TheNavigation,
  },
  data() {
    return {
      teams: [
        { id: 't1', name: 'Engineering Team', members: ['u1', 'u2'] },
        { id: 't2', name: 'Design Team', members: ['u3', 'u4'] },
        { id: 't3', name: 'Business Development', members: ['u5', 'u6'] },
      ],
      users: [
        { id: 'u1', fullName: 'Alex Jones', role: 'Engineer' },
        { id: 'u2', fullName: 'Thomas Holland', role: 'Engineer' },
        { id: 'u3', fullName: 'James Engelsman', role: 'Designer' },
        { id: 'u4', fullName: 'Jay Smith', role: 'Designer' },
        { id: 'u5', fullName: 'Mike Ross', role: 'Business Development' },
        { id: 'u6', fullName: 'Louis Litt', role: 'Business Development' },
      ],
    };
  },
};

</script>

<style scoped>
</style>
