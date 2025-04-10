import React from "react";

const FilterBar = ({ filter, setFilter }) => (
  <div>
    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
      <option value="">All</option><br />
      <option value="Applied">Applied</option>
      <option value="Interview">Interview</option>
      <option value="Offer">Offer</option>
      <option value="Rejected">Rejected</option>
    </select>
  </div>
);

export default FilterBar;