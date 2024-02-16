import { IPaginationProps } from "../../interfaces";
import Pagination from "../Pagination/Pagination";

interface Props {
    children: React.ReactNode
    top?: boolean
    bottom?: boolean
}

const PaginationWrapper = ({ top, bottom, children, ...pagonationProps }: Props & IPaginationProps) => {
    return (
        <>
            {top && <Pagination {...pagonationProps} />}
            {children}
            {bottom && <Pagination {...pagonationProps} />}
        </>
    );
};

export default PaginationWrapper;