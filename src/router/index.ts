import HomeView from "@/views/HomeView.vue";
import NewSessionView from "@/views/NewSessionView.vue";
import SessionDetailView from "@/views/SessionDetailView.vue";
import StatsView from "@/views/StatsView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: HomeView },
  { path: "/session/new", component: NewSessionView },
  { path: "/session/:id", component: SessionDetailView },
  { path: "/stats", component: StatsView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
