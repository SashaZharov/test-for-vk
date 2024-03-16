import { useQuery } from "@tanstack/react-query";
import { getFacts } from "shared/api";

const GET_FACTS_QUERY_SETTINGS = {
  queryKey: ["fact"],
  queryFn: getFacts,
  enabled: false,
};

export const useFactsQuery = () => {
  const query = useQuery(GET_FACTS_QUERY_SETTINGS);
  return query;
};
