import { create } from "zustand";

export const useSidebarStore = create((set) => ({
  sidebar: true,
  toggleSidebar: () => set((state) => ({ sidebar: !state.sidebar })),
}));
