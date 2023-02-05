import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useTooltipStore = create(
  persist(
    (set, get) => ({
      tooltip: {
        reorder: false,
      },
      setTooltip: (tooltip) => set({ tooltip }),
    }),
    {
      name: "tooltip",
      getStorage: () => createJSONStorage(localStorage),
    }
  )
);

export default useTooltipStore;
