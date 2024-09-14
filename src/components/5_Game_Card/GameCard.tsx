import { Fragment, ReactNode } from 'react';
import { Game } from '../../hooks/useGames';
import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import Platform_Icon_List from '../6_Platform_Icon_List/Platform_Icon_List';
interface GameCardInterface {
    game?: Game;
    children?: ReactNode
}

// const GameCard = (props: GameCard) => {
function GameCard(
    {
        // id,
        game,
    }: GameCardInterface) {
    return (
        <Fragment>
            <Card borderWidth="1px" borderRadius={10} overflow="hidden">
                <Image
                    src={game?.background_image}
                    alt={game?.name} />

                <CardBody>
                    <Heading fontSize="2xl">
                        {game?.name}
                    </Heading>
                    {/*
                Platform_Icon_List will receive a prop called Platform which will be an array of objects
                */}
                    <Platform_Icon_List Platform={game?.parent_platforms
                        .map((platform) => platform.platform)
                    } />
                    {/* {game?.parent_platforms.map((platform) => (
                    <span key={platform.platform.id}>{platform.platform.name}</span>
                    ))} */}
                </CardBody>

            </Card>

        </Fragment>
    )
}

export default GameCard;