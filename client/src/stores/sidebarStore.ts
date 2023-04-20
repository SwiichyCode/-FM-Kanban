import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SidebarStore {
  sidebar: boolean;
  toggleSidebar: () => void;
}

export const useSidebarStore = create<SidebarStore>()(
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
