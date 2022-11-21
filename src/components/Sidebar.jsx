import React from "react";
import { sidebar } from "../constants/sidebar";

const Sidebar = () => {
  return (
    <aside className="fixed overflow-scroll top-0 z-10 w-72 bg-primary h-full ">
      <div className="flex  flex-col items-center justify-center mt-20">
        {sidebar.map((el, index) => (
          <div className="my-3 " key={index}>
            <h1 className="font-extrabold">{el.year}</h1>
            <span className="ml-2">{el.month}</span>
            {el.post}
            <span className="ml-2">{el.month_2}</span>
            {el.post2}
            <span className="ml-2">{el.month_3}</span>
            {el.post3}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;