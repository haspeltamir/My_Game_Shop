import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { Fragment, useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

interface SearchInputProps {
    onSubmitPassToParent: (searchText: string) => void;
}

function SearchInput({ onSubmitPassToParent }: SearchInputProps) {
    const ref = useRef<HTMLInputElement>(null);
    return (
        <Fragment>
            <form
                // action=""
                onSubmit={(e) => {
                    e.preventDefault();//prevent the page from refreshing(Prevent the form from being sent to the server. )
                    if (ref.current) {
                        // console.log(ref.current.value);
                        onSubmitPassToParent(ref.current.value);
                    }
                }
                }
            >
                <InputGroup >
                    <InputLeftElement pointerEvents="none" children={<BsSearch />} />
                    <Input
                        borderRadius={20}
                        border="1px solid"
                        variant="filled"
                        placeholder="Search..."
                        ref={ref}
                    />
                </InputGroup>
            </form>
        </Fragment>
    )
}

export default SearchInput;