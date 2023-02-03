import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
import produce from "immer";
import { initialDashboard } from "./initialDashboard";

const useDashboardStore = create(
  persist(
    (set, get) => ({
      dashboard: initialDashboard,

      addBoard: (board) =>
        set((state) => ({ dashboard: [...state.dashboard, board] })),

      deleteBoard: (boardId) =>
        set((state) => ({
          dashboard: state.dashboard.filter((board) => board.id !== boardId),
        })),

      addColumn: (boardId, column) =>
        set((state) => ({
          dashboard: state.dashboard.map((board) =>
            board.id === boardId
              ? { ...board, columns: [...board.columns, column] }
              : board
          ),
        })),

      addTask: (boardId, columnId, task) =>
        set(
          produce((draft) => {
            draft.dashboard.forEach((board) => {
              if (board.id === boardId) {
                board.columns.forEach((column) => {
                  if (column.id === columnId) {
                    column.tasks.push(task);
                  }
                });
              }
            });
          })
        ),

      deleteTask: (boardId, columnId, taskId) =>
        set(
          produce((draft) => {
            draft.dashboard.forEach((board) => {
              if (board.id === boardId) {
                board.columns.forEach((column) => {
                  if (column.id === columnId) {
                    column.tasks = column.tasks.filter(
                      (task) => task.id !== taskId
                    );
                  }
                });
              }
            });
          })
        ),

      resetStorage: () => set(() => ({ dashboard: initialDashboard })),
    }),
    {
      name: "dashboard-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useDashboardStore;
