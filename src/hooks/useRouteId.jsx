import { useParams } from "react-router-dom";
import { useMemo } from "react";

export function useRouteId() {
  const { id } = useParams();
  return useMemo(() => id, [id]);
}
