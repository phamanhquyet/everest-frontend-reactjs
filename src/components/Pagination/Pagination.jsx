import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      {Array.from({ length: totalPages }).map((_, index) => (
        <a key={index} onClick={() => onPageChange(index + 1)} href="#">
          {index + 1}
        </a>
      ))}
    </div>
  );
};

export default Pagination;
