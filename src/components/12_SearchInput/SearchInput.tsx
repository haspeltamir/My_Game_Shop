import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { Fragment } from 'react';
import { BsSearch } from 'react-icons/bs';


// const SearchInput = (props: Props) => {
function SearchInput(
) {
    return (
        <Fragment>
            <InputGroup width="50%">
                <InputLeftElement pointerEvents="none" children={<BsSearch />} />
                <Input
                    borderRadius={20}
                    border="1px solid"
                    variant="filled"
                    placeholder="Search..."

                />
            </InputGroup>
        </Fragment>
    )
}

export default SearchInput;