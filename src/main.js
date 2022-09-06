import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';


import './index.css';
import App from './App.vue';
import Home from './components/Home.vue';
import TeamsList from './components/teams/TeamsList.vue';
import MembersList from './components/members/MembersList.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { name: 'home', path: '/home', component: Home, },
        { name: 'teams', path: '/teams', component: TeamsList, },
        { name: 'users', path: '/users', component: MembersList },
    ],
    linkActiveClass: 'active',
});

const app = createApp(App);

app.use(router);
app.mount('#app');
