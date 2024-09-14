import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Genres {
  //each game object inside the games Array
  id: number;
  name: string;
}

export interface FacetGenresResponse {
  //the games Array response from the API
  count: number;
  // next: string;
  // previous: string;
  results: Genres[]; //Array of Genres
}

const useGenres = () => {
  const [genresData, setGenresData] = useState<Genres[]>([]);
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

export default useGenres;

// const useGanres = () => {
//   const { data, error } = useSWR("/api/games", fetcher);

//   return {
//     games: data,
//     isLoading: !error && !data,
//     isError: error,
//   };
// };

// export default useGanres;
