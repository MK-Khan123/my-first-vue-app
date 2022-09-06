import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import "./index.css";
import App from "./App.vue";
import Home from "./components/Home.vue";
import TeamsList from "./components/teams/TeamsList.vue";
import MembersList from "./components/members/MembersList.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "teams",
      path: "/teams",
      component: TeamsList,
      children: [
        {
          name: "team-members",
          path: ":teamId",
          component: TeamMembers,
          props: true,
        },
      ],
    },
    { name: "home", path: "/home", component: Home },
    { name: "members", path: "/members", component: MembersList },
  ],
  linkActiveClass: "active",
});

const app = createApp(App);

app.use(router);
app.mount("#app");
