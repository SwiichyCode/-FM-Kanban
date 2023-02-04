import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { initialDashboard } from "./initialDashboard";
import produce from "immer";

const useDashboardStore = create(
  persist(
    (set, get) => ({
      dashboard: initialDashboard,

      addBoard: (board) =>
        set((state) => ({ dashboard: [...state.dashboard, board] })),

      editBoard: (boardId, newBoard) =>
        set((state) => ({
          dashboard: state.dashboard.map((board) =>
            board.id === boardId ? newBoard : board
          ),
        })),

      deleteBoard: (boardId) =>
        set((state) => ({
          dashboard: state.dashboard.filter((board) => board.id !== boardId),
        })),

      addTask: (boardId, columnId, task) =>
        set(
          produce((draft) => {
            const board = draft.dashboard.find((b) => b.id === boardId);
            if (!board) return;
            const column = board.columns.find((c) => c.id === columnId);
            if (!column) return;
            column.tasks.push(task);
          })
        ),

      // toggleTaskColumn: (boardId, columnId, taskId, newColumnId) =>
      //   set(
      //     produce((draft) => {
      //       const board = draft.dashboard.find((b) => b.id === boardId);
      //       if (!board) return;
      //       const column = board.columns.find((c) => c.id === columnId);
      //       if (!column) return;
      //       const task = column.tasks.find((t) => t.id === taskId);
      //       if (!task) return;
      //       const newColumn = board.columns.find((c) => c.id === newColumnId);
      //       if (!newColumn) return;
      //       newColumn.tasks.push(task);
      //       column.tasks = column.tasks.filter((t) => t.id !== taskId);
      //     })
      //   ),

      editTask: (boardId, columnId, taskId, newTask) =>
        set(
          produce((draft) => {
            const board = draft.dashboard.find((b) => b.id === boardId);
            if (!board) return;
            const column = board.columns.find((c) => c.id === columnId);
            if (!column) return;
            column.tasks = column.tasks.map((task) =>
              task.id === taskId ? newTask : task
            );
          })
        ),

      deleteTask: (boardId, columnId, taskId) =>
        set(
          produce((draft) => {
            const board = draft.dashboard.find((b) => b.id === boardId);
            if (!board) return;
            const column = board.columns.find((c) => c.id === columnId);
            if (!column) return;
            column.tasks = column.tasks.filter((t) => t.id !== taskId);
          })
        ),

      toggleSubtask: (boardId, columnId, taskId, subtaskId) =>
        set(
          produce((draft) => {
            const board = draft.dashboard.find((b) => b.id === boardId);
            if (!board) return;
            const column = board.columns.find((c) => c.id === columnId);
            if (!column) return;
            const task = column.tasks.find((t) => t.id === taskId);
            if (!task) return;
            const subtask = task.subtasks.find((s) => s.id === subtaskId);
            if (!subtask) return;
            subtask.isCompleted = !subtask.isCompleted;
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
