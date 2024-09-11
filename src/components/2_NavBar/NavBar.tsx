import { HStack, Image, Text } from '@chakra-ui/react';
import { Fragment, ReactNode } from 'react';
import logo from '../../assets/Logo/logo.webp';
interface Props {
    item?: string;
    children?: ReactNode
}

// const NavBar = (props: Props) => {
function NavBar(
    {
        item = ``,
    }: Props) {
    return (
        <Fragment>
            <div>
                {item}
            </div>
            <HStack>
                <Image src={logo} alt="logo" boxSize="60px" />
                {/* <Image src="https://via.placeholder.com/150" alt="placeholder" /> */}
                <Text fontSize="2xl">My Game Shop</Text>

            </HStack>
        </Fragment>
    )
}

export default NavBar;