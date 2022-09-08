import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import TeamsList from "./pages/TeamsList.vue";
import MembersList from "./pages/MembersList.vue";
import AddMembers from "./pages/AddMembers.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: '/home' },
    { name: "home", path: "/home", component: Home },
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
    { name: "add-members", path: "/add_members", component: AddMembers },
    { name: "members", path: "/members", component: MembersList },
  ],
  linkActiveClass: "active",
});

export default router;