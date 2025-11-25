/*
__Seed builder__
  (Read_only) Component helper
*/

import React from "react";
import PropTypes from "prop-types";

class PaginationFooter extends React.Component {

  render() {
    const { pageNum, totalPages, onClickPage } = this.props;
    return (
      <nav className="seed__pagination-footer mt-3">
        <ul className="pagination">
          <li onClick={() => onClickPage(pageNum - 1)} className="page-item"
            style={ { visibility: pageNum > 1 ? "visible" : "hidden" } }>
            <a className="page-link" aria-label="Previous">
              <span aria-hidden="true">«</span><span className="sr-only">Previous</span>
            </a>
          </li>
          {
            Array(totalPages).fill(0).map((ignore, idx) =>
              <li onClick={() => onClickPage(idx + 1)} key={idx} 
                className={"page-item " + (idx == pageNum - 1 ? "active" : "")}>
                <a className="page-link">{idx + 1}</a>
              </li>
            )
          }
          <li onClick={() => onClickPage(pageNum + 1)} class="page-item" 
            style={ { visibility: pageNum <= totalPages - 1 ? "visible" : "hidden" } }>
            <a class="page-link" aria-label="Next">
              <span aria-hidden="true">»</span><span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>);
  }
}

PaginationFooter.propTypes = {
  pageNum: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onClickPage: PropTypes.func.isRequired
};

export default PaginationFooter;