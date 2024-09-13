import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Game {
  //each game object inside the games Array
  id: number;
  name: string;
  // background_image: string;
  // released: string;
  // rating: number;
}

interface FacetGamesResponse {
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
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FacetGamesResponse>("/games", {
        signal: controller.signal,
      })
      // .get<FacetGamesResponse>("/games.json")
      // <FacetGamesResponse> is the Shape of the response Object
      .then((result) => {
        setGameData(result.data.results);
        // setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) {
          return;
        }
        setError(error.message);
        // setLoading(false);
      });
    // cleanup function
    return () => {
      controller.abort();
    };
  }, []);
  return { gameData, error };
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
