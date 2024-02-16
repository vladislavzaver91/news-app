import Skeleton from "../../components/Skeleton/Skeleton";
import { TypeDirection, TypeSkeleton } from "../../interfaces";

interface Props {
    isLoading: boolean
}

function withSkeleton<P extends object>(
    Component: React.ComponentType<P>,
    type?: TypeSkeleton,
    count?: number,
    direction?: TypeDirection
) {
    return function WithSkeleton(props: Props & P) {
        const { isLoading, ...restProps } = props;

        if (isLoading) {
            return <Skeleton type={type} count={count} direction={direction} />
        }

        return <Component {...restProps as P} />
    };
}

export default withSkeleton;