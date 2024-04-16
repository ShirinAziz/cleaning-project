import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="bg-[#090909] mx-auto w-full flex justify-between items-center p-4">
        <div>
          <Link to="/">
            <h1 className="text-xl sm:text-3xl lg:text-4xl px-2">
              Städa<span className="text-orange-400 text-3xl">Fint</span>AB
            </h1>
          </Link>
        </div>
        <ul className="hidden md:flex gap-6 text-lg">
          <li>
            <Link to="/">Om</Link>
          </li>
          <li>
            <Link to="#">Priser</Link>
          </li>
          <li>
            <Link to="#">Kontakt</Link>
          </li>
        </ul>
        <div className="flex gap-2 text-lg">
          <button className="border border-orange-400 px-4 rounded-full text-orange-400">
            Logga in
          </button>
          <button className="border border-orange-400 px-4 rounded-full bg-orange-400">
            Skapa konto
          </button>
        </div>
        <button
          className="block md:hidden text-x1"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <AiOutlineClose /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/*Mobile menu */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } bg-[#090909] flex-col w-full items-center px-4 pt-16 pb-10 gap-6 text-[14px]`}
      >
        <Link to="/">Om</Link>
        <Link to="#">Priser till</Link>
        <Link to="#">Kontakt</Link>
        <Link to="#">Logga in</Link>
        <Link to="#">Skapa konto</Link>
      </div>
    </div>
  );
};

export default Navbar;
