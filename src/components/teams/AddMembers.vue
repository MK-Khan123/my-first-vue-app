<template>
    <div class="flex flex-col justify-center items-center p-36">
        <form class="shadow p-6 w-2/5 h-1/2" @submit.prevent="submitForm">
            <h2 class="text-center font-bold text-4xl py-4">Add Members</h2>
            <div class="form-control">
                <label class="mr-4" for="user-name">Your Name</label>
                <input class="input mt-2" id="user-name" name="user-name" type="text" v-model="userName" />
            </div>
            <div class="form-control mt-4">
                <label for="role">Which team do you belong to?</label>
                <select id="role" name="role" class="input mt-2" v-model="role">
                    <option value="Engineer">Engineering Team</option>
                    <option value="Designer">Design Team</option>
                    <option value="Business Development">Business Development</option>
                </select>
            </div>
            <div class="text-end mt-4">
                <button class="rounded-none">Save Data</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            userName: '',
            role: 'EDB',
        };
    },
    inject: ['members'],
    methods: {
        submitForm() {
            this.addMembers();
            console.log('Username: ' + this.userName);
            this.userName = '';
            console.log('Role: ' + this.role);
            this.role = 'EDB';
        },
        addMembers() {
            const newMember = {
                id: 'u' + this.members.length,
                fullName: this.userName,
                role: this.role,
            }
            this.members.push(newMember);
        }
    },
}
</script>
<style scoped>
button {
    font: inherit;
    border: 1px solid #0076bb;
    background-color: #0076bb;
    color: white;
    cursor: pointer;
    padding: 0.5rem 2rem;
    border-radius: 30px;
}

button:hover,
button:active {
    border-color: #002350;
    background-color: #002350;
}
</style>