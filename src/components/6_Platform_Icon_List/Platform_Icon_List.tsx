/*
In this component we will display the platform icons for the game.
*/

import { Fragment } from 'react';
import { Platform } from '../../hooks/useGames';
import { HStack, Icon } from '@chakra-ui/react';

// import Icons from 'react-icons/fa';
import { FaWindows, FaPlaystation, FaXbox, FaLinux, FaApple, FaAndroid } from 'react-icons/fa';

//import the rest of the icons form other libraries
import { BsGlobe } from 'react-icons/bs';
import { SiNintendo } from 'react-icons/si';
import { MdPhoneIphone, MdTabletMac } from 'react-icons/md';
import { IconType } from 'react-icons';

interface Props {
    PlatformArr?: Platform[];
}

// const Platform_Icon_List = (props: Props) => {
function Platform_Icon_List(
    { PlatformArr }: Props) {
    // platform: { name, slug }

    // const icons: any = {
    // "[key: string]" is called index signature: what it does is it tells typescript 

    //that the object will have any number of keys,  of type string and a value of type 
    //IconType(the key name is not important[its a placeholder])
    const iconsMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        web: BsGlobe,
        ios: MdPhoneIphone,
        ipad: MdTabletMac,
    }
    return (
        <Fragment>
            <HStack spacing={2} marginY={2}>
                {PlatformArr?.map((platform) => (
                    <Icon key={platform.id} as={iconsMap[platform.slug]} color="blue.500" boxSize={6} />
                    // <Text key={platform.id}>{platform.name}</Text>
                ))
                }
            </HStack>
        </Fragment >
    )
}

export default Platform_Icon_List;