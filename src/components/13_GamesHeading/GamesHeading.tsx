import { Heading } from '@chakra-ui/react';
import { Fragment } from 'react';
import { GameQuery } from '../../App';

interface Props {
    currentFilterGameQuery?: GameQuery;
}

// const GamesHeading = (props: Props) => {
function GamesHeading({ currentFilterGameQuery }: Props) {
    // const heading = `${currentFilterGameQuery?.platform?.name || ""} ${currentFilterGameQuery?.genre?.name || ""} ${currentFilterGameQuery?.sortOrder || ""}`
    const heading = `${currentFilterGameQuery?.platform?.name || ""} ${currentFilterGameQuery?.genre?.name || ""} Games`
    return (
        <Fragment>
            <Heading
                as="h1"
                // size="lg"
                marginY={4}
                fontSize="5xl"
            >
                {heading}
                {/* {currentFilterGameQuery.searchText ? `Games matching "${currentFilterGameQuery.searchText}"` : "All Games"} */}
            </Heading>
        </Fragment>
    )
}

export default GamesHeading;