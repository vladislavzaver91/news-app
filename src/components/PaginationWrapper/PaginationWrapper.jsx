import Pagination from "../Pagination/Pagination";

const PaginationWrapper = ({ top, bottom, children, ...pagonationProps }) => {
    return (
        <>
            {top && <Pagination {...pagonationProps} />}
            {children}
            {bottom && <Pagination {...pagonationProps} />}
        </>
    );
};

export default PaginationWrapper;