import { GameQuery } from "../App";
import useData from "./useData_Generic";
// import { Genres } from "./useGenres";

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
  parent_platforms: { platform: Platform }[]; //an array of objects where each object has a property called platform which is an platform object
  rating_top: number; //whole number
  // released: string;
  // rating: number;//can be a decimal
}

/*
we are passing the selectedGenres.id as a query parameter (its said documentation under
"get list of games" that we can pass a query parameter called genres meaning we can
filter the games by genre)

It says we need to pass Values separated by comma(Id or Slugs). 
*/
// const useGames = () => useData<Game>("/games");
const useGames = (
  // selectedGenres: Genres | null,
  // selectedPlatforms: Platform | null
  gameQuery?: GameQuery
) =>
  useData<Game>(
    "/games",
    {
      // params: {
      //   genres: selectedGenres?.id,
      //   platforms: selectedPlatforms?.id,
      // },
      params: {
        genres: gameQuery?.genre?.id,
        platforms: gameQuery?.platform?.id,
        ordering: gameQuery?.sortOrder,
        search: gameQuery?.searchText,
      },
    },
    // [selectedGenres?.id, selectedPlatforms?.id]
    [gameQuery]
  );
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
