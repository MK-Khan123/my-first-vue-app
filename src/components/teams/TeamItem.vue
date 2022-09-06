<template>
    <li class="my-4 p-4 rounded-xl mx-auto">
        <h3 class="my-2 text-xl">{{ name }}</h3>
        <div class="my-2">{{ memberCount }} Members</div>
        <router-link class="no-underline py-2 px-6 text-white inline-block bg-indigo-600 rounded-md"
            :to="teamMembersLink">View Members</router-link>
    </li>
</template>
<script>
export default {
    props: ['id', 'name', 'memberCount'],
    computed: {
        teamMembersLink() {
            console.log(this.id);
            return { name: 'team-members', params: { teamId: this.id } };
        },
    },
};
</script>
<style scoped>
li {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

a:hover {
    background-color: #220a8d;
}

a.active {
    background-color: #220a8d;
}
</style>
