import { Fragment, } from 'react';
// import useGenres_Non_Generic from '../../hooks/before_Generics/useGenres_Non_Generic';
// import { Genres } from '../../hooks/useGenres';
// import useData from '../../hooks/useData_Generic';
import useGenres from '../../hooks/useGenres';//hide the implementation details of the custom hook
import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
function GenresList() {
    // const { genresData } = useGenres_Non_Generic();
    // const { data: genresData } = useData<Genres>("/genres");//Generics
    const { data: genresData, isLoading, error } = useGenres();

    if (error) {
        return <Text>{error}</Text>
    }
    if (isLoading) {
        return <Spinner />
    }
    return (
        <Fragment>
            {/* {isLoading && <Spinner />} */}
            <List>
                {genresData.map((genre) => (
                    <ListItem key={genre.id} paddingY={2}>
                        <HStack>
                            <Image
                                src={genre.image_background}
                                alt={genre.name}
                                boxSize="32px"
                                // borderRadius="full"
                                borderRadius={8}
                            />
                            <Text fontSize={"large"}>{genre.name}</Text>
                        </HStack>
                    </ListItem>
                ))}
            </List>
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