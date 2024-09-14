import { Badge } from '@chakra-ui/react';
import { Fragment, ReactNode } from 'react';

interface ScoreProps {
    criticScore?: number;
    children?: ReactNode
}

function CriticScore(
    {
        criticScore = 0,
    }: ScoreProps) {
    return (
        <Fragment>
            <Badge
                colorScheme={criticScore >= 75 ? "green" : criticScore >= 50 ? "yellow" : "red"}
                // fontSize="1.2em"
                fontSize="14px"
                // paddingX={"0.5em"}
                paddingX={2}
                // borderRadius={"0.5em"}
                borderRadius={"4px"}
            >
                {criticScore}
            </Badge>
        </Fragment>
    )
}

export default CriticScore;