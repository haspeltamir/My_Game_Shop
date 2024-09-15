import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

export interface FacetDataResponse<T> {
  //the games Array response from the API
  count: number;
  // next: string;
  // previous: string;
  results: T[]; //Array of Genres
}
// RequestConfig allows us to pass in a configuration object to the Axios request,like headers,
//query params, etc.
const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  dependencies?: never[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    () => {
      const controller = new AbortController();

      setIsLoading(true);
      apiClient
        //need to specify it is a Genres Array. this is the same "T" from "useData = <T>(endpoint: string)"
        .get<FacetDataResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        // <FacetDataResponse> is the Shape of the response Object
        .then((result) => {
          setData(result.data.results);
          setIsLoading(false);
        })
        .catch((error) => {
          if (error instanceof CanceledError) {
            return;
          }
          setError(error.message);
          setIsLoading(false);
        });
      // .finally(() => {
      //   setIsLoading(false);
      // });
      // cleanup function
      return () => {
        controller.abort();
      };
    },
    dependencies ? [...dependencies] : []
  );
  return { data, error, isLoading, setData };
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
