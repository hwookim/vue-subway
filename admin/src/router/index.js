import Vue from "vue";
import VueRouter from "vue-router";
import Admin from "../views/Admin";
import Station from "../views/Station";
import Line from "../views/Line";
import Edge from "../views/Edge";

Vue.use(VueRouter);

const routes = [
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/admin/stations",
    name: "Station",
    component: Station,
  },
  {
    path: "/admin/lines",
    name: "Line",
    component: Line,
  },
  {
    path: "/admin/edges",
    name: "Edge",
    component: Edge,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
