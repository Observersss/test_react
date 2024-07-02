import React from 'react';
import classes from "./pagination.module.css";
import {getPagesArray} from "../../../utils/pages";

const Pagination = ({totalPages,page,changePage}) => {

    let pagesArray = getPagesArray(totalPages);

    return (
        <div className={classes.page__wrapper}>
            {pagesArray.map(p =>
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={`${classes.page} ${page === p ? classes.page__current : ''}`}
                >
                        {p}
                    </span>
            )}
        </div>
    );
};

export default Pagination;