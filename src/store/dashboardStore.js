import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { v4 as uuidv4 } from "uuid";

const initialDashboard = [
  {
    id: uuidv4(),
    name: "Board 1",
    columns: [
      {
        id: uuidv4(),
        name: "Column 1",
        tasks: [],
      },
    ],
  },
];

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
        set((state) => ({
          dashboard: state.dashboard.map((board) =>
            board.id === boardId
              ? {
                  ...board,
                  columns: board.columns.map((column) =>
                    column.id === columnId
                      ? { ...column, tasks: [...column.tasks, task] }
                      : column
                  ),
                }
              : board
          ),
        })),
    }),
    {
      name: "dashboard-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useDashboardStore;
