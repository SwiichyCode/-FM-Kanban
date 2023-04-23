import api from "../../../api/api";

const API_URL = "http://localhost:8080/api/board/";

interface Board {
  id: string;
  name: string;
  ownerID: string;
}

const getBoard = async () => {
  const _id = JSON.parse(localStorage.getItem("user") as string).ownerID;
  return await api.get(API_URL + "get/" + _id);
};

const createBoard = async (data: Board) => {
  return await api.post(API_URL + "create/", {
    id: data.id,
    name: data.name,
    ownerID: data.ownerID,
  });
};

// const updateBoard = async (data: Board) => {
//   return await axios.put(API_URL + "update/" + data.id, data);
// };

const deleteBoard = (id: string) => {
  return api.delete(API_URL + "delete/" + id);
};

const BoardService = {
  getBoard,
  createBoard,
  // updateBoard,
  deleteBoard,
};

export default BoardService;
