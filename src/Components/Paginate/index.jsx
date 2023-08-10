import { memo } from "react";
import ResponsivePagination from "react-responsive-pagination";
import { dropEllipsis } from "react-responsive-pagination/narrowBehaviour";
import "react-responsive-pagination/themes/classic.css";
const Paginate = ({ total, pageChange, page }) => {
    return (
        <>
            <ResponsivePagination
                narrowBehaviour={dropEllipsis}
                current={page}
                total={total}
                onPageChange={pageChange}
            />
        </>
    );
};

export default memo(Paginate);
