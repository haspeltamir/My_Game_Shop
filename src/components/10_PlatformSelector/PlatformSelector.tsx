import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { Fragment } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms, { Platform } from '../../hooks/usePlatforms';

interface Props {
    onClickSendToParent?: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}

// const PlatformSelector = (props: Props) => {
function PlatformSelector(
    { onClickSendToParent, selectedPlatform }: Props
) {

    const { data: platformData, error } = usePlatforms();
    if (error) {
        // return <div>{error}</div>
        return null
    }
    return (
        <Fragment>

            <Menu>
                <MenuButton
                    as={Button}
                    rightIcon={<BsChevronDown />}
                // onClick={() => console.log("clicked")}
                >
                    {selectedPlatform?.name || "Select Platform"}
                </MenuButton>
                <MenuList>
                    {platformData?.map((platform) => (
                        <MenuItem key={platform.id}
                            onClick={() => onClickSendToParent && onClickSendToParent(platform)}
                        >{selectedPlatform?.id === platform.id ? "✔" : ""} {platform.name
                            }</MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </Fragment>
    )
}

export default PlatformSelector;