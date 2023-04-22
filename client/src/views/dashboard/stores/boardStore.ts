import BoardService from "../services/board.service";
// import AuthService from "../../auth/services/auth.service";
import create, { SetState } from "zustand";

interface Board {
  id: string;
  name: string;
  ownerID: string;
}

interface BoardStore {
  boards: Board[];
  setBoards: (newBoards: Board[]) => void;
  addBoard: (data: Board) => Promise<void>;
  getBoards: () => Promise<void>;
}

const useBoardStore = create<BoardStore>((set: SetState<BoardStore>) => ({
  boards: [],
  setBoards: (newBoards: Board[]) => set({ boards: newBoards }),
  addBoard: async (data: Board) => {
    await BoardService.createBoard(data);
    const response = await BoardService.getBoard();
    set({ boards: response.data as Board[] });
  },
  getBoards: async () => {
    const response = await BoardService.getBoard();
    set({ boards: response.data as Board[] });
  },
}));

export default useBoardStore;
