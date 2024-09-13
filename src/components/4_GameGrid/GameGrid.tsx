import { Fragment } from 'react';
import { Text } from '@chakra-ui/react';
import useGames from '../../hooks/useGames';


// const GameGrid = (props: Props) => {
function GameGrid() {

    const { gameData, error } = useGames();

    return (
        <Fragment>
            <h1>Game Grid</h1>
            {error && <Text>{error}</Text>}
            <ul>
                {gameData.map((game) => (
                    <li key={game.id}>{game.name}</li>
                ))}
            </ul>
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