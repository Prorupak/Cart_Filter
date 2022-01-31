import React from "react";
import "./Filter.css";

const Filter = (props) => {
  return (
    <div className="filter">
      <div className="filter_sort" onChange={props.filterHandler}>
        Price{" "}
        <select value={props.sort} onChange={props.sortHandler}>
          <option value="Lowest">Lowest</option>
          <option value="Highest">Highest</option>
        </select>
      </div>
      <div className="filter_sort">
        Gender{" "}
        <select value={props.gender} onChange={props.genderHandler}>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className="filter_sort">
        size{" "}
        <select value={props.size} onChange={props.sizeHandler}>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>{" "}
    </div>
  );
};
export default Filter;
