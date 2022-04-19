import { defineStore } from "pinia";
import { constantRoutes, asyncRoutes } from "../../router";

const hasPermission = (roles, route) => {
  if (route.meta && route.meta.roles) {
    return roles.some((role) => route.meta.roles.includes(role));
  } else {
    return true;
  }
};

const filterAsyncRoutes = (routes, roles) => {
  const res = [];
  routes.forEach((route) => {
    const tmp = { ...route };
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles);
      }
      res.push(tmp);
    }
  });
  return res;
};

export const usePermissionStore = defineStore({
  id: "permission",
  state: () => {
    return {
      routes: [],
      dynamicRoutes: [],
    };
  },
  actions: {
    setRoutes(roles) {
      let accessedRoutes;
      if (roles.includes("admin")) {
        accessedRoutes = asyncRoutes || [];
      } else {
        accessedRoutes = filterAsyncRoutes(asyncRoutes, roles);
      }
      this.routes = constantRoutes.concat(accessedRoutes);
      this.dynamicRoutes = accessedRoutes;
    },
  },
});
