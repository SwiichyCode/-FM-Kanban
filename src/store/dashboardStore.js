import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

const initialDashboard = [
  {
    id: "68633346-daa5-48b3-ba80-e35887561d8d",
    name: "Board 1",
    columns: [
      {
        id: "68633346-daa5-48b3-ba80-e35887561d8c",
        name: "Column 1",
        tasks: [
          {
            id: "68633346-daa5-48b3-ba80-e35887561d8e",
            name: "Build UI for onboarding flow",
            description: "",
            columnId: "68633346-daa5-48b3-ba80-e35887561d8c",

            subtasks: [
              {
                title: "Sign up page",
                isCompleted: true,
              },
              {
                title: "Sign in page",
                isCompleted: false,
              },
              {
                title: "Welcome page",
                isCompleted: false,
              },
            ],
          },
        ],
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

      deleteTask: (boardId, columnId, taskId) =>
        set((state) => ({
          dashboard: state.dashboard.map((board) =>
            board.id === boardId
              ? {
                  ...board,
                  columns: board.columns.map((column) =>
                    column.id === columnId
                      ? {
                          ...column,
                          tasks: column.tasks.filter(
                            (task) => task.id !== taskId
                          ),
                        }
                      : column
                  ),
                }
              : board
          ),
        })),

      resetStorage: () => set(() => ({ dashboard: initialDashboard })),
    }),
    {
      name: "dashboard-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useDashboardStore;
