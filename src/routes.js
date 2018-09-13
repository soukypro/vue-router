import User from "./components/user/User.vue";
import Home from "./components/Home.vue";
export const routes = [
  { path: "", name: "home", component: Home },
  { path: "/user", name: "user", component: User }
];
