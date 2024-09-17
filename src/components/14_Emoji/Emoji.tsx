import { Fragment } from 'react';
import bulls_eye from '../../assets/Emojis/bulls_eye.webp'
import meh from '../../assets/Emojis/meh.webp'
import thumbs_up from '../../assets/Emojis/thumbs_up.webp'
import { Image, ImageProps } from '@chakra-ui/react';

interface Props {
    rating?: number;
}

// const Emoji = (props: Props) => {
function Emoji({ rating = 0 }: Props) {
    /*
        const emoji = (rating: number) => {
            if (rating >= 85) {
                return <img src={thumbs_up} alt="thumbs_up" width="50px" height="50px" />
            } else if (rating >= 50) {
                return <img src={meh} alt="meh" width="50px" height="50px" />
            } else {
                return <img src={bulls_eye} alt="bulls_eye" width="50px" height="50px" />
            }
        }
     */
    /*
    "{ [key: number]: ImageProps }" is called "index signature"
    Using this syntax, we can tell the typescript compiler Can have any number of keys ,And those keys are numbers.
    In this case, it defines The props available on the Image component.
    */
    const emojiMap: { [key: number]: ImageProps } = {
        3: { src: meh, alt: "meh", boxSize: "25px" },
        4: { src: thumbs_up, alt: "recommended", boxSize: "25px" },
        5: { src: bulls_eye, alt: "exceptional", boxSize: "35px" },
    }
    return (
        <Fragment>
            {/* 
            <div>
                {rating}
                {emoji(rating)}
            </div>
            */}
            <Image {...emojiMap[rating]} marginTop={1} />
        </Fragment >
    )
}

export default Emoji;