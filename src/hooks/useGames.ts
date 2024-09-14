import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  //each game object inside the games Array
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  // direct!
  // parent_platforms: { platform: { name: string } }[];

  //not direct!
  /* the data is built like wher it is
  an array of objects where each object
  has a property called platform which
  is an object with a property called name*/
  parent_platforms: { platform: Platform }[];

  // released: string;
  // rating: number;
}

export interface FacetGamesResponse {
  //the games Array response from the API
  count: number;
  // next: string;
  // previous: string;
  results: Game[];
}

const useGames = () => {
  // in ts, when we use useState, we must define the type of the state
  // in order to do that, we use the generic syntax <type> (if we initialize an empty value)

  const [gameData, setGameData] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<FacetGamesResponse>("/games", {
        signal: controller.signal,
      })
      // <FacetGamesResponse> is the Shape of the response Object
      .then((result) => {
        setGameData(result.data.results);
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
  return { gameData, error, isLoading };
};

export default useGames;

// const useGames = () => {
//   const { data, error } = useSWR("/api/games", fetcher);

//   return {
//     games: data,
//     isLoading: !error && !data,
//     isError: error,
//   };
// };

// export default useGames;
