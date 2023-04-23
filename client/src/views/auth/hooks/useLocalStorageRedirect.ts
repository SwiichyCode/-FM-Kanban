import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useLocalStorageRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/dashboard");
    }
  }, [localStorage]);
};
