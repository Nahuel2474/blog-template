import React from "react";

const Pagination = () => {
  return (
    <ul className="flex">
      <button>Back</button>
      {Array.from({ length: 5 }).map((el, index) => (
        <li key={index} className="mx-5 cursor-pointer">{index + 1}</li>
      ))}
      <button>Next</button>
    </ul>
  );
};

export default Pagination;
