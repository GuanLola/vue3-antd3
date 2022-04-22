import store from '@/stores'
import { defineStore } from "pinia";
import { token } from "@/utils/cookies";

export const useUserStore = defineStore({
  id: "user",
  state: () => {
    return {
      token: token.getToken() || "",
      roles: [],
    };
  },
  actions: {
    login() {
      return new Promise((resolve) => {
        token.setToken("fake-jwt-token");
        resolve();
      });
    },
    logout() {
      token.removeToken();
      window.location.reload();
    },
    // get user info
    getInfo() {
      return new Promise((resolve, reject) => {
        this.roles = ["admin"];
        resolve({ roles: ["admin"] });
      });
    }
  },
});

export function useUserStoreHook() {
  return useUserStore(store)
}
