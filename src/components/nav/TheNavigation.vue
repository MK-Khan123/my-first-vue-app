<template>
    <header class="w-full h-20 bg-stone-400">
        <nav class="h-full">
            <ul class="m-0 p-0 h-full list-none flex justify-center items-center">
                <li class="mx-8">
                    <router-link to="/home">Home</router-link>
                </li>
                <li class="mx-8">
                    <router-link to="/teams">Teams</router-link>
                </li>
                <li class="mx-8">
                    <router-link to="/members">Members</router-link>
                </li>
                <li class="mx-8">
                    <router-link to="/add_members">Add Members</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>
  
<style scoped>
a {
    text-decoration: none;
    background: transparent;
    cursor: pointer;
    color: black;
    border: 1px solid black;
    padding: 0.5rem 1.5rem;
    display: inline-block;
    border-radius: 0.5rem;
}

a:hover,
a:active,
a.active {
    color: #f1a80a;
    border-color: #f1a80a;
    background-color: rgb(41 37 36);
}
</style>