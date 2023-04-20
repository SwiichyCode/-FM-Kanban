import axios from "axios";

const API_URL = "http://localhost:8080/api/board/";

const createBoard = async (
  name: string,
  id: string,
  // columns: [],
  ownerID: string
) => {
  return await axios.post(API_URL + "create", {
    name,
    id,
    // columns,
    ownerID,
  });
};

const BoardService = {
  createBoard,
};

export default BoardService;
