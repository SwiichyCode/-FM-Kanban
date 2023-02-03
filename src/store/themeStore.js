import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useThemeStore = create(
  persist(
    (set) => ({
      theme: "light",
      toggleTheme: () => {
        set((state) => {
          const newTheme = state.theme === "light" ? "dark" : "light";
          localStorage.setItem("dark-mode", newTheme);
          return { theme: newTheme };
        });
      },
    }),
    {
      name: "dark-mode",
      getStorage: () => localStorage,
    }
  )
);
