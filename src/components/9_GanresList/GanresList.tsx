import { Fragment, } from 'react';
// import useGenres_Non_Generic from '../../hooks/before_Generics/useGenres_Non_Generic';
// import { Genres } from '../../hooks/useGenres';
// import useData from '../../hooks/useData_Generic';
import useGenres from '../../hooks/useGenres';//hide the implementation details of the custom hook
function GenresList() {
    // const { genresData } = useGenres_Non_Generic();
    // const { data: genresData } = useData<Genres>("/genres");//Generics
    const { data: genresData } = useGenres();
    return (
        <Fragment>
            {genresData.map((genre) => (
                <div key={genre.id}>
                    <h2>{genre.name}</h2>
                </div>
            ))}
        </Fragment>
    )
}

export default GenresList;






// import { Fragment, } from 'react';
// import useGenres_Non_Generic, { Genres_Non_Generic } from '../../hooks/before_Generics/useGenres_Non_Generic';
// import { Genres } from '../../hooks/useGenres';
// import useData from '../../hooks/useData_Generic';

// // const GenresList = (props: Props) => {
// function GenresList() {
//     // const { genresData } = useGenres_Non_Generic();
//     const { data } = useData<Genres>("/genres");//Generics
//     return (
//         <Fragment>
//             {data.map((genre) => (
//                 <div key={genre.id}>
//                     <h2>{genre.name}</h2>
//                 </div>
//             ))}
//         </Fragment>
//     )
// }

// export default GenresList;