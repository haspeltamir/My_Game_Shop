/*
gameCardSkeleton(whenLoading).tsx

this component is used to show a skeleton of a game card when the data is loading
*/

import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';
import { Fragment } from 'react';

function gameCardSkeletonWhenLoading() {
    return (
        <Fragment>
            <Card
                // width="300px"
                width="100%"
                borderWidth="1px"
                borderRadius={10}
                overflow="hidden">
                <Skeleton height="200px" />
                <CardBody>
                    <SkeletonText mt="4" noOfLines={2} spacing="4" />
                </CardBody>
            </Card>
        </Fragment>
    )
}

export default gameCardSkeletonWhenLoading;