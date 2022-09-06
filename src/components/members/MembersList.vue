<template>
    <ul class="list-none max-w-xs my-8 mx-auto p-0">
        <member-item v-for="member in members" :key="member.id" :name="member.fullName" :role="member.role">
        </member-item>
    </ul>
</template>

<script>
import MemberItem from './MemberItem.vue';

export default {
    components: {
        MemberItem,
    },
    inject: ['members'],
};
</script>