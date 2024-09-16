

import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { Fragment } from 'react';
import { BsChevronDown } from 'react-icons/bs';
// import usePlatforms, { Platform } from '../../hooks/usePlatforms';


function SortSelector(
) {

    // const { data: platformData, error } = usePlatforms();
    // if (error) {
    //     // return <div>{error}</div>
    //     return null
    // }
    return (
        <Fragment>

            <Menu>
                <MenuButton
                    as={Button}
                    rightIcon={<BsChevronDown />}
                // onClick={() => console.log("clicked")}
                >
                    {/* {selectedSorting?.name || "Order By"} */}
                    "Order By"
                </MenuButton>
                <MenuList>
                    <MenuItem>Relevance</MenuItem>
                    <MenuItem>Date Added</MenuItem>
                    <MenuItem>Name</MenuItem>
                    <MenuItem>Price</MenuItem>
                    <MenuItem>Release Date</MenuItem>
                    <MenuItem>Popularity</MenuItem>
                    <MenuItem>Average Rating</MenuItem>
                </MenuList>
            </Menu>
        </Fragment>
    )
}

export default SortSelector;