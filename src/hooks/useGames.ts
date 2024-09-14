import useData from "./useData_Generic";

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

const useGames = () => useData<Game>("/games");
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
