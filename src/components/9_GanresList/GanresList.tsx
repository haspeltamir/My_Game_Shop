import { Fragment, } from 'react';
import useGenres from '../../hooks/useGenres';

// const GenresList = (props: Props) => {
function GenresList() {
    const { genresData } = useGenres();
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