import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AuthStore } from "@/types/store.d";

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: undefined,
      token: undefined,

      SET_USER: (user: AuthStore["user"]) => set({ user }),
      SET_TOKEN: (token: AuthStore["token"]) => set({ token }),
      GET_USER() {
        return this.user;
      },
      GET_TOKEN() {
        return this.token;
      },
      IS_AUTHENTICATED() {
        return this.user !== undefined && this.token !== undefined;
      },
      CLEAR_AUTH: () => set({ user: undefined, token: undefined }),
    }),
    {
      name: "auth-store",
    }
  )
);
