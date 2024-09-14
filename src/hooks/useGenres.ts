import useData from "./useData_Generic";

export interface Genres {
  //each game object inside the games Array
  id: number;
  name: string;
}

const useGenres = () => useData<Genres>("/genres");
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
