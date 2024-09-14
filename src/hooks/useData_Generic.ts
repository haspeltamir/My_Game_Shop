import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface FacetDataResponse<T> {
  //the games Array response from the API
  count: number;
  // next: string;
  // previous: string;
  results: T[]; //Array of Genres
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      //need to specify it is a Genres Array. this is the same "T" from "useData = <T>(endpoint: string)"
      .get<FacetDataResponse<T>>(endpoint, {
        signal: controller.signal,
      })
      // <FacetDataResponse> is the Shape of the response Object
      .then((result) => {
        setData(result.data.results);
        // setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) {
          return;
        }
        setError(error.message);
        // setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
    // cleanup function
    return () => {
      controller.abort();
    };
  }, [endpoint]);
  return { data, error, isLoading };
};

export default useData;

// const useGanres = () => {
//   const { data, error } = useSWR("/api/games", fetcher);

//   return {
//     games: data,
//     isLoading: !error && !data,
//     isError: error,
//   };
// };

// export default useGanres;
