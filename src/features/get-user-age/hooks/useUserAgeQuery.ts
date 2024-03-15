import { useQuery } from "@tanstack/react-query";
import { getUserAge } from "../../../shared/api";

export const useUserAgeQuery = (name: string) => {
  const query = useQuery({
    queryKey: ["user-age", name],
    queryFn: ({ queryKey, signal }) => getUserAge(queryKey[1], signal),
    enabled: false,
  });

  return query;
};
