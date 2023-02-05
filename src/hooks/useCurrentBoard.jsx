import useDashboardStore from "../store/dashboardStore";

export const useCurrentBoard = (id) => {
  const board = useDashboardStore((state) => state.dashboard);
  return board.find((item) => item.id === id);
};
