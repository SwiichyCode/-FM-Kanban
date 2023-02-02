import { create } from "zustand";

const useDashboardStore = create((set) => ({
  dashboard: [],

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
}));

export default useDashboardStore;
