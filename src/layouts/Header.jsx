import React from "react";
import { UserRound, Search, ShoppingCart, Menu } from "lucide-react";
function Header() {
  return (
    <div>
      <div className="flex flex-col gap-5">
        <div className="flex justify-around py-3">
          <h3 className="text-slate-800 h3">Bandage</h3>
          <UserRound className="text-neutral-700 text-sm" />
          <Search />
          <ShoppingCart />
          <Menu />
        </div>
        <nav className="flex flex-col text-center gap-[30px] p-4">
          <a className="text-neutral-500 mobile-menu" href="#">
            Home
          </a>
          <a className="text-neutral-500 mobile-menu" href="#">
            Product
          </a>
          <a className="text-neutral-500 mobile-menu" href="#">
            Pricing
          </a>
          <a className="text-neutral-500 mobile-menu" href="#">
            Contact
          </a>
        </nav>
      </div>

      <div className="container text-center bg-cyan-200 pt-20 rounded-2xl mx-1 gap-[33px]">
        <div>
          <h5 className="text-sky-600">SUMMER 2020</h5>
          <h2 className="text-slate-800">NEW COLLECTION</h2>
          <h4 className="text-neutral-500">
            We know how large objects will act, but things on a small scale.
          </h4>
          <button className="btn-text text-2xl text-white bg-sky-500 rounded-2xl px-10 py-3.75 mt-8">
            SHOP NOW
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Header;
