import useDashboardStore from "../store/dashboardStore";

export const useCurrentBoard = (id: any) => {
  const board = useDashboardStore((state) => state.dashboard);
  return board.find((item: any) => item.id === id);
};
