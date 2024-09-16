import { Fragment } from 'react';
import { SimpleGrid, Text } from '@chakra-ui/react';
// import useGames_Non_Generic from '../../hooks/before_Generics/useGames_Non_Generic';
import useGames from '../../hooks/useGames';
import GameCard from '../5_Game_Card/GameCard';
import GameCardSkeletonWhenLoading from '../8_gameCardSkeleton_whenLoading/gameCardSkeleton_whenLoading';
// import { Genres } from '../../hooks/useGenres';
// import { Platform } from '../../hooks/usePlatforms';
import { GameQuery } from '../../App';

interface GameGridProps {
    gameQuery?: GameQuery
    // selectedGeneraObject: Genres | null;
    // selectedPlatformObject: Platform | null;

}
// const GameGrid = (props: Props) => {
// function GameGrid({ selectedGeneraObject, selectedPlatformObject }: GameGridProps) {
function GameGrid({ gameQuery }: GameGridProps) {

    //here we are using the custom hook useGames to get the gameData and error(the entry data to the app comes from here)
    // const { gameData, error, isLoading } = useGames_Non_Generic();
    // const { data: gameData, error, isLoading } = useGames();
    // const { data: gameData, error, isLoading } = useGames(selectedGeneraObject, selectedPlatformObject);
    const { data: gameData, error, isLoading } = useGames(gameQuery);
    // const loadingSkeletons= Array.from({length: 10}, (_, index) => <GameCard key={index} isLoading={true}></GameCard>)
    // const loadingSkeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => <GameCard key={index} isLoading={true}></GameCard>)
    const loadingSkeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    // console.log("GameGrid.tsx: selectedGeneraObject", selectedGeneraObject);
    return (
        <Fragment>
            {error && <Text>{error}</Text>}
            <SimpleGrid
                columns={{//change amount of columns based on screen size
                    sm: 1, md: 2, lg: 3, xl: 4
                }}
                padding={10}
                spacing={10}
            >
                {isLoading && loadingSkeletons.map(
                    (index) => <GameCardSkeletonWhenLoading key={index} />)}


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