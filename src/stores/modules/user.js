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
  },
});
