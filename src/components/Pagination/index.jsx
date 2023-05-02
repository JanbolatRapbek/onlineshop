import React from "react";
import ReactPaginate from "react-paginate";

import "./Pagination.scss";

export const Pagination = ({ currentPage, onChange }) => {
  return (
    <ReactPaginate
      className="root"
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChange(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={currentPage - 1}
    />
  );
};
