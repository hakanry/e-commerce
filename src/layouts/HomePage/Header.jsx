import React from "react";
import { UserRound, Search, ShoppingCart, Menu } from "lucide-react";
import technology from "../../assets/technology.png";
function Header() {
  return (
    <div>
      <div className="flex flex-col gap-20 py-6">
        <div className="flex justify-around">
          <h3 className="text-slate-800 h3">Bandage</h3>
          <UserRound className="text-neutral-700 text-sm" />
          <Search className="text-slate-800" />
          <ShoppingCart className="text-slate-800" />
          <Menu className="text-slate-800" />
        </div>
        <nav className="flex flex-col text-center gap-7.5 pb-20">
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

      <main className="flex flex-col text-center bg-cyan-200 pt-20 rounded-2xl mx-1 gap-16">
        <div className="flex flex-col gap-8 items-center">
          <h5 className="text-sky-600">SUMMER 2020</h5>
          <h2 className="text-slate-800">
            NEW
            <br /> COLLECTION
          </h2>
          <h4 className="text-neutral-500">
            We know how large objects
            <br /> will act, but things on a<br /> small scale.
          </h4>
          <button className="btn-text text-2xl text-white bg-sky-500 rounded-2xl px-10 py-3.75 mt-8">
            SHOP NOW
          </button>
        </div>
        <div className="relative flex justify-center mt-20">
          <img className="z-10 max-w-[96%]" src={technology} />
          <div className="absolute w-[71vw] aspect-square bg-white rounded-full opacity-100 z-0"></div>
          <div className="absolute left-[90vw] top-[15vw] w-[0.5rem] aspect-square bg-violet-400 rounded-full opacity-100 z-0"></div>
          <div className="absolute left-[85vw] top-[30vw] w-[1.25rem] aspect-square bg-white rounded-full opacity-100 z-10"></div>
          <div className="absolute left-[8vw] top-[55vw] w-[0.5rem] aspect-square bg-violet-400 rounded-full opacity-100 z-10"></div>
          <div className="absolute left-[2vw] w-[12vw] aspect-square bg-white rounded-full opacity-100 z-0"></div>
        </div>
      </main>
    </div>
  );
}

export default Header;
