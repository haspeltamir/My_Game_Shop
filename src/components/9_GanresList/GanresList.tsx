import { Fragment, } from 'react';
// import useGenres_Non_Generic from '../../hooks/before_Generics/useGenres_Non_Generic';
// import { Genres } from '../../hooks/useGenres';
// import useData from '../../hooks/useData_Generic';
import useGenres, { Genres } from '../../hooks/useGenres';//hide the implementation details of the custom hook
import { Button, Heading, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';

interface GridItemProps {
    // onClickSendToParent: (id: number, name: string) => void;
    onClickSendToParent: (genre: Genres) => void;
    selectedGenera: Genres | null;
}

function GenresList({ onClickSendToParent, selectedGenera }: GridItemProps) {
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
            <Heading as="h2" size="lg" marginBottom={2}>Genres</Heading>
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
                                objectFit="cover"//this will make the image fill the container box without stretching
                            />
                            <Button
                                fontSize={"large"}
                                // fontWeight={(genre.name === "Action") ? "bold" : "normal"}
                                fontWeight={(genre.id === selectedGenera?.id) ? "bold" : "normal"}
                                variant="link"
                                onClick={() => {
                                    // console.log(genre.id, genre.name)
                                    // onClickSendToParent(genre.id, genre.name)
                                    onClickSendToParent(genre)
                                }}
                                // whiteSpace="nowrap" //this is the default value
                                whiteSpace="normal"
                                textAlign="left"
                            >{genre.name}</Button>
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