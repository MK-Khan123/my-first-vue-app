<template>
    <li class="my-4 mx-0 border border-slate-300 p-4">
        <h3 class="my-2">{{ name }}</h3>
        <div class="role" :class="roleClass">{{ role }}</div>
    </li>
</template>
<script>
export default {
    props: ['name', 'role'],
    computed: {
        roleClass() {
            if (this.role === 'Engineer') {
                return 'role--engineer';
            }
            if (this.role === 'Designer') {
                return 'role--designer';
            }
            if (this.role === 'Business Development') {
                return 'role--business';
            }
            return null;
        },
    },
}
</script>
<style>

.role {
    border-radius: 40px;
    background-color: #ccc;
    color: #252525;
    padding: 0.25rem 1rem;
    display: inline-block;
}

.role--engineer {
    background-color: rgb(2 132 199);
    color: white;
}

.role--designer {
    background-color: rgb(190 18 60);
    color: white;    
}

.role--business {
    background-color: rgb(126 34 206);
    color: white;
}
</style>