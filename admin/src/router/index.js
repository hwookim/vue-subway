import Vue from "vue";
import VueRouter from "vue-router";
import Admin from "../views/Admin";
import Stations from "../views/Stations";
import Lines from "../views/Lines";
import Edges from "../views/Edges";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/admin/stations",
    name: "Stations",
    component: Stations,
  },
  {
    path: "/admin/lines",
    name: "Lines",
    component: Lines,
  },
  {
    path: "/admin/edges",
    name: "Edges",
    component: Edges,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
