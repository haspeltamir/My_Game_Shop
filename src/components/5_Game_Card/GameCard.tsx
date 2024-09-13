import { Fragment, ReactNode } from 'react';
import { Game } from '../../hooks/useGames';
import { Card, Heading, Image } from '@chakra-ui/react';
interface GameCard {
    game?: Game;
    children?: ReactNode
}

// const GameCard = (props: GameCard) => {
function GameCard(
    {
        // id,
        game,
    }: GameCard) {
    return (
        <Fragment>
            <Card borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image
                    src={game?.background_image}
                    alt={game?.name} />
                <Heading fontSize="x2"
                >{game?.name}</Heading>
            </Card>

        </Fragment>
    )
}

export default GameCard;