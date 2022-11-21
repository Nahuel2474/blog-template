import menu from "../assets/menu.png";
import close from "../assets/close.png";
import Sidebar from "./Sidebar";

import { useEffect, useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <nav className=" flex justify-center mt-5 relative z-20 ">
        <div className="flex w-[60%] ">
          <img
            onClick={() => {
              setToggle(!toggle);
            }}
            src={toggle ? close : menu}
            alt=""
            className={` w-6 h-6  fixed z-40` }
          />
          <h1 className="font-bold self-center text-2xl  mx-auto">
            <a href="/">Blog Ipsum</a>
          </h1>
        </div>
      </nav>

      {toggle ? <Sidebar /> : ""}
    </div>
  );
};

export default Navbar;
