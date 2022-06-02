import React from "react";
import logo from "../images/vinyl.png";

const Header = () => {
  return (
    <div className="p-5 flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
      <img src={logo} className="h-8 w-auto sm:h-10" alt="Vinyl Icon" />
      <h1 className="text-gray-900 text-3xl font-bold">Paniko Store</h1>
    </div>
  );
};

export default Header;
