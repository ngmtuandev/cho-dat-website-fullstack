import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { apiGetMe } from "../service/user/apiGetMe";

export const useUserStore = create(
  persist(
    (set, get) => ({
      token: null,
      user_current: null,
      setToken: (token: string) => set(() => ({ token })),
      getUserCurrent: async () => {
        const rs = await apiGetMe();
        if (+rs?.status === 0) {
          return set(() => ({ user_current: rs?.data }));
        }
      },
    }),
    {
      name: "user",
      storage: createJSONStorage(() => localStorage),
      partialize: (state: any) => {
        const entries = Object.entries(state);
        const filteredEntries = entries.filter(
          (el) => el[0] == "token" || "user_current"
        );
        console.log(
          "Object.fromEntries(filteredEntries); >>>>",
          Object.fromEntries(filteredEntries)
        );
        return Object.fromEntries(filteredEntries);
      },
    }
  )
);
