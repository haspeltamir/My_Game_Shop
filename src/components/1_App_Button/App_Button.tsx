import { Fragment } from 'react';
import { Button } from '@chakra-ui/react'
interface Props {
    item?: string;
}

// const App_Button = (props: Props) => {
function App_Button({ item }: Props) {
    return (
        <Fragment>
            <div>
                {item}
            </div>
            <Button colorScheme='blue'>Button</Button>
        </Fragment>
    )
}

export default App_Button;