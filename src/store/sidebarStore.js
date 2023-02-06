import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useSidebarStore = create(
  persist(
    (set) => ({
      sidebar: true,
      toggleSidebar: () => set((state) => ({ sidebar: !state.sidebar })),
    }),
    {
      name: "sidebar",
      getStorage: () => localStorage,
    }
  )
);
