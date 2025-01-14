import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useFetchMovies() {
  const { data, error, isLoading, isSuccess } = useQuery({
    queryKey: ["movie"],
    queryFn: async () => {
      const { data, status } = await axios.get(
        "https://www.freetestapi.com/api/v1/movies?limit=5"
      );
      if (status !== 200) {
        console.log(`Error :${status}`);
      }
      return data;
    },
  });
  return { data, error, isLoading, isSuccess };
}
