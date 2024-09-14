import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import { CanceledError } from "axios";

export interface Genres_Non_Generic {
  //each game object inside the games Array
  id: number;
  name: string;
}

export interface FacetGenresResponse {
  //the games Array response from the API
  count: number;
  // next: string;
  // previous: string;
  results: Genres_Non_Generic[]; //Array of Genres_Non_Generic
}

const useGenres_Non_Generic = () => {
  const [genresData, setGenresData] = useState<Genres_Non_Generic[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<FacetGenresResponse>("/genres", {
        signal: controller.signal,
      })
      // <FacetGenresResponse> is the Shape of the response Object
      .then((result) => {
        setGenresData(result.data.results);
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
  }, []);
  return { genresData, error, isLoading };
};

export default useGenres_Non_Generic;

// const useGanres = () => {
//   const { data, error } = useSWR("/api/games", fetcher);

//   return {
//     games: data,
//     isLoading: !error && !data,
//     isError: error,
//   };
// };

// export default useGanres;
