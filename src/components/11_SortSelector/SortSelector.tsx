

import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { Fragment } from 'react';
import { BsChevronDown } from 'react-icons/bs';
// import usePlatforms, { Platform } from '../../hooks/usePlatforms';


interface SortingOptionProps {
    selectedSorting: string | null;
    onSelectedSortingChangeNotifyParent: (sortOrder: string) => void;
}

function SortSelector(
    { onSelectedSortingChangeNotifyParent, selectedSorting }: SortingOptionProps
) {
    const sortingOptions = [
        { name: "Relevance", value: "relevance" },//"name" is the "label" we see and "value" is the "value"
        { name: "Date Added", value: "-added" },// "-" is used to reverse the order so that the newest games are shown first
        { name: "Name", value: "name" },
        { name: "Release Date", value: "-release" },
        { name: "Popularity", value: "-metacritic" },
        { name: "Average Rating", value: "-rating" }
    ]

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
                    {/* Order By */}
                    Order By: {sortingOptions.find(sortingOption => sortingOption.value === selectedSorting)?.name || "Relevance"}
                </MenuButton>
                <MenuList>
                    {sortingOptions.map(sortingOption => (
                        <MenuItem
                            key={sortingOption.value}
                            value={sortingOption.value}
                            onClick={() => {
                                // console.log(sortingOption.value)
                                onSelectedSortingChangeNotifyParent?.(sortingOption.value)
                            }}>
                            {sortingOption.name}
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </Fragment>
    )
}

export default SortSelector;