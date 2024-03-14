import { useQuery } from "@tanstack/react-query";
import { getUserAge } from "../../../shared/api";

export const useUserAgeQuery = (name: string) => {
  const query = useQuery({
    queryKey: ["fact"],
    queryFn: () => getUserAge(name),
    enabled: false,
  });

  return query;
};
