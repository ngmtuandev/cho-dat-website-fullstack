import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set, get) => ({
      token: null,
      current: null,
      setToken: (token: string) => set(() => ({ token })),
    }),
    {
      name: "user",
      storage: createJSONStorage(() => localStorage),
      partialize: (state: any) => {
        const entries = Object.entries(state);
        const filteredEntries = entries.filter((el) => el[0] == "token");
        console.log(
          "Object.fromEntries(filteredEntries); >>>>",
          Object.fromEntries(filteredEntries)
        );
        return Object.fromEntries(filteredEntries);
      },
    }
  )
);
