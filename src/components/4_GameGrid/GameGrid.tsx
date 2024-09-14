import { Fragment } from 'react';
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../../hooks/useGames';
import GameCard from '../5_Game_Card/GameCard';


// const GameGrid = (props: Props) => {
function GameGrid() {

    //here we are using the custom hook useGames to get the gameData and error(the entry data to the app comes from here)
    const { gameData, error } = useGames();

    return (
        <Fragment>
            {error && <Text>{error}</Text>}
            <SimpleGrid
                columns={{//change amount of columns based on screen size
                    sm: 1, md: 2, lg: 3, xl: 4
                }}
                spacing={10}
                padding={10}
            >
                {gameData.map((game) => (
                    <GameCard
                        key={game.id}
                        game={game}
                    ></GameCard>
                ))}
            </SimpleGrid>
        </Fragment>
    )
}

export default GameGrid;










/* For later maybe

useEffect(() => {
        fetch("https://api.rawg.io/api/games")
            .then(res => res.json())
            .then(
                (result) => {
                    setGameData(result.results);
                    // setLoading(false);
                },
                (error) => {
                    setError(error);
                    // setLoading(false);
                }
            )

    }



*/