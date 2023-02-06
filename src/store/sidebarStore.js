import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useSidebarStore = create(
  persist(
    (set) => ({
      sidebar: true,
      toggleSidebar: () => set((state) => ({ sidebar: !state.sidebar })),
    }),
    {
      name: "sidebar",
      getStorage: () => createJSONStorage(localStorage),
    }
  )
);
