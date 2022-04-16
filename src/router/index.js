import { createRouter, createWebHistory } from "vue-router";
const Layout = () => import("@/layout/index.vue");

export const constantRoutes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/",
    name: "dashboard",
    redirect: "/dashboard",
    component: Layout,
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard/index.vue"),
        name: "Dashboard",
        meta: {
          title: "首页",
          icon: "dashboard",
        },
      },
    ],
  },
];

export const asyncRoutes = [
  {
    path: "/permission",
    component: Layout,
    redirect: "/permission/index",
    name: "Permission",
    meta: {
      title: "权限管理",
      icon: "lock",
      roles: ["admin", "editor"], // you can set roles in root nav
      alwaysShow: true, // will always show the root menu
    },
    children: [
      {
        path: "index",
        component: () => import("@/views/permission/index.vue"),
        meta: {
          title: "权限管理",
          roles: ["admin"], // or you can only set roles in sub nav
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes,
});

export default router;
