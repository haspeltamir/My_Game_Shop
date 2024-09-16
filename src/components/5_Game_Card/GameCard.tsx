import { Fragment, ReactNode } from 'react';
import { Game } from '../../hooks/useGames';
import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import Platform_Icon_List from '../6_Platform_Icon_List/Platform_Icon_List';
import CriticScore from '../7_CriticScore/CriticScore';
// import { getCroppedImage } from '../../services/image-url';
import getCroppedImage from '../../services/image-url';

interface GameCardInterface {
    game: Game;
    children?: ReactNode
}

// const GameCard = (props: GameCard) => {
function GameCard(
    {
        // id,
        game: game,
    }: GameCardInterface) {
    return (
        <Fragment>
            <Card
                // width="300px"
                width="100%"
                borderWidth="1px" borderRadius={10} overflow="hidden">
                <Image
                    // src={game?.background_image}
                    // src={(game?.background_image == null || game?.background_image) ? getCroppedImage(game.background_image) : game?.background_image}
                    // src={game.background_image ? getCroppedImage(game.background_image) : game.background_image}
                    src={getCroppedImage(game.background_image)}
                // alt={game?.name}
                />

                <CardBody>
                    <Heading fontSize="2xl">
                        {game?.name}
                    </Heading>
                    {/*
                Platform_Icon_List will receive a prop called Platform which will be an array of objects
                */}
                    {/* 
                In order to do :"HStack" , Which will have the same effect as justify content space-between
                we need to import HStack from chakra-ui 
                example:
                <HStack>
                    <Box>1</Box>
                    <Box>2</Box>
                    <Box>3</Box>
                </HStack> 
                */}
                    <HStack justifyContent="space-between">
                        <Platform_Icon_List Platform={game?.parent_platforms
                            .map((platform) => platform.platform)
                        } />
                        {/* {game?.parent_platforms.map((platform) => (
                    <span key={platform.platform.id}>{platform.platform.name}</span>
                    ))} */}

                        {game?.metacritic && <CriticScore criticScore={game?.metacritic} />}
                    </HStack>

                </CardBody>

            </Card>

        </Fragment>
    )
}

export default GameCard;




/*
another way to write the same code for the CriticScore component
{
                        // 1
                        // <CriticScore item="Critic Score" >
                        //     {game?.metacritic}
                        // </CriticScore>
                        
                        // 2
                        game?.metacritic && (
                            <Fragment>
                                <Heading fontSize="xl">
                                    Metacritic Score: {game?.metacritic}
                                </Heading>
                            </Fragment>
                        )
                    }
*/