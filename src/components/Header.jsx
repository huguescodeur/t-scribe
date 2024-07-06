import React from "react";

const NavBar = () => {
  return (
    <nav className="w-full flex justify-between items-center p-4 shadow-md mt-6">
      <div className="text-xl font-bold text-gray-800">
        T-<span className="text-green-400">Scribe</span>
      </div>
      <div className="space-x-4">
        <button className="text-gray-800 rounded-md border-2 border-green-400 px-4 py-2">
          Faire un don
        </button>
        <button className="bg-green-400 text-white px-4 py-2 rounded-md">
          Nouveau +
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
