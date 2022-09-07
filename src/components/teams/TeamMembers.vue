<template>
    <section class="bg-stone-600">
        <h2 class="my-2 font-bold text-white">{{ teamName }}</h2>
        <ul class="list-none m-0 p-0">            
            <member-item v-for="member in teamMembers" :key="member.id" :name="member.fullName" :role="member.role">
            </member-item>
        </ul>
    </section>
</template>
  
<script>
import MemberItem from '../members/MemberItem.vue';

export default {
    inject: ['teams', 'members'],
    components: {
        MemberItem
    },
    props: ['teamId'],
    data() {
        return {
            teamName: '',
            teamMembers: [],
        };
    },
    methods: {
        loadTeamMembers(teamId) {
            const selectedTeam = this.teams.find(team => team.id === teamId);
            const members = selectedTeam.members;
            const selectedMembers = [];
            for (const member of members) {
                const selectedUser = this.members.find(teamMember => teamMember.id === member);
                selectedMembers.push(selectedUser);
            }
            this.teamMembers = selectedMembers;
            this.teamName = selectedTeam.name;
        }
    },
    created() {
        this.loadTeamMembers(this.teamId);
        console.log(this.teamId);
    },
    watch: {
        teamId(newId) {
            this.loadTeamMembers(newId);
            console.log(newId);
        },
    }
};
</script>
  
<style scoped>
section {
    margin: 2rem auto;
    max-width: 40rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    border-radius: 12px;
}
</style>