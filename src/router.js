import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Community from "./pages/Community.vue";

import CourseSwapi from "./pages/courses/CourseSwapi.vue";

import About from "./pages/About.vue";
import PageNotFound from "./pages/PageNotFound.vue";
import Courses from "./pages/Courses.vue";
import Resources from "./pages/Resources.vue";

const routerHistory = createWebHistory();

const router = createRouter({
  scrollBehavior(to) {
    if (to.hash) {
      window.scroll({ top: 0 });
    } else {
      document.querySelector("html").style.scrollBehavior = "auto";
      window.scroll({ top: 0 });
      document.querySelector("html").style.scrollBehavior = "";
    }
  },
  history: routerHistory,
  routes: [
    {
      path: "/courses/build-app-swapi-and-vue",
      component: CourseSwapi,
    },
    {
      path: "/",
      component: Home,
    },
    {
      path: "/courses",
      component: Courses,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/resources",
      component: Resources,
    },
    {
      path: "/community",
      component: Community,
    },
    {
      path: "/:pathMatch(.*)*",
      component: PageNotFound,
    },
  ],
});

export default router;
