import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { Fragment } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../../hooks/usePlatforms';


// const PlatformSelector = (props: Props) => {
function PlatformSelector() {

    const { data: platformData } = usePlatforms();
    return (
        <Fragment>

            <Menu>
                <MenuButton as={Button} rightIcon={<BsChevronDown />} >Select Platform
                </MenuButton>
                <MenuList>
                    {platformData?.map((platform) => (
                        <MenuItem key={platform.id}>{platform.name}</MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </Fragment>
    )
}

export default PlatformSelector;