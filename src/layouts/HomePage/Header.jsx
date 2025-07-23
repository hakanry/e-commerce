import React from "react";
import {
  UserRound,
  Search,
  ShoppingCart,
  Menu,
  LucidePhoneCall,
  Mail,
  Instagram,
  Youtube,
  Facebook,
  Twitch,
  Twitter,
} from "lucide-react";
import technology from "../../assets/technology.png";
function Header() {
  return (
    <div className="w-full bg-white overflow-x-hidden">
      <div className="w-full">
        <div className="flex flex-col gap-10 pb-6">
          <div className="bg-slate-800 flex lg:px-16 px-4 py-4 justify-between max-md:hidden">
            <div className="flex gap-2.5">
              <div className="flex gap-1">
                <LucidePhoneCall className="text-white text-sm" />
                <h6 className="text-white text-sm">(225) 555-0118</h6>
              </div>
              <div className="flex gap-1">
                <Mail className="text-white text-sm" />
                <h6 className="text-white text-sm">
                  michelle.rivera@example.com
                </h6>
              </div>
            </div>
            <div className="text-white text-sm font-bold">
              Follow Us and get a chance to win 80% off
            </div>
            <div className="flex text-white gap-2.5">
              <h6>Follow Us : </h6>
              <div className="flex gap-1.5">
                <Instagram />
                <Youtube />
                <Facebook />
                <Twitter />
              </div>
            </div>
          </div>
          {/* Masaüstü için yatay navbar */}
          <div className="hidden lg:flex justify-between items-center lg:px-16 px-4 py-6 w-full">
            <h3 className="text-slate-800 text-2xl font-bold">Bandage</h3>
            <nav className="flex gap-8 items-center">
              <a
                className="text-neutral-500 hover:text-sky-600 font-medium"
                href="#"
              >
                Home
              </a>
              <div className="relative group">
                <a
                  className="text-neutral-500 hover:text-sky-600 font-medium flex items-center gap-1 cursor-pointer"
                  href="#"
                >
                  Shop
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </a>
                {/* Dropdown */}
                <div className="absolute left-0 mt-2 w-32 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-20">
                  <a
                    href="#"
                    className="block px-4 py-2 text-neutral-700 hover:bg-sky-100"
                  >
                    Shop 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-neutral-700 hover:bg-sky-100"
                  >
                    Shop 2
                  </a>
                </div>
              </div>
              <a
                className="text-neutral-500 hover:text-sky-600 font-medium"
                href="#"
              >
                About
              </a>
              <a
                className="text-neutral-500 hover:text-sky-600 font-medium"
                href="#"
              >
                Blog
              </a>
              <a
                className="text-neutral-500 hover:text-sky-600 font-medium"
                href="#"
              >
                Contact
              </a>
              <a
                className="text-neutral-500 hover:text-sky-600 font-medium"
                href="#"
              >
                Pages
              </a>
            </nav>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sky-600 font-medium hover:underline">
                Login / Register
              </a>
              <Search className="text-slate-800 cursor-pointer" />
              <ShoppingCart className="text-slate-800 cursor-pointer" />
              <span className="relative">
                <svg
                  className="w-6 h-6 text-slate-800 cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                  />
                </svg>
                <span className="absolute -top-2 -right-2 bg-sky-500 text-white text-xs rounded-full px-1">
                  1
                </span>
              </span>
            </div>
          </div>
          {/* Mobile Navbar */}
          <div className="lg:hidden flex justify-around py-5 px-4">
            <h3 className="text-slate-800 ">Bandage</h3>
            <UserRound className="text-neutral-700 text-sm" />
            <Search className="text-slate-800" />
            <ShoppingCart className="text-slate-800" />
            <Menu className="text-slate-800" />
          </div>
          <nav className="lg:hidden flex flex-col text-center gap-7.5 pb-20 px-4">
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

        <main className="flex flex-col text-center bg-cyan-200 pt-20 rounded-2xl mx-1 gap-16 md:flex-row md:gap-0 md:items-center md:m-15 md:text-left">
          <div className="flex flex-col gap-8 items-center md:items-start md:pl-20 md:w-[50%] md:h-[50%]">
            <h5 className="text-sky-600">SUMMER 2020</h5>
            <h2 className="text-slate-800">NEW COLLECTION</h2>
            <h4 className="text-neutral-500">
              We know how large objects will act, but things on a small scale.
            </h4>
            <button className="btn-text text-2xl text-white bg-sky-500 rounded-2xl px-10 py-3.75 mt-8">
              SHOP NOW
            </button>
          </div>
          <div className="relative flex justify-center md:hidden">
            <img className="z-10" src={technology} />
            <div className="absolute w-[71vw] aspect-square bg-white rounded-full opacity-100 z-0"></div>
            <div className="absolute left-[90vw]  top-[15vw] w-[0.5rem] aspect-square bg-violet-400 rounded-full opacity-100 z-0"></div>
            <div className="absolute left-[85vw] top-[30vw] w-[1.25rem] aspect-square bg-white rounded-full opacity-100 z-10"></div>
            <div className="absolute left-[8vw] top-[55vw] w-[0.5rem] aspect-square bg-violet-400 rounded-full opacity-100 z-10"></div>
            <div className="absolute left-[2vw] w-[12vw] aspect-square bg-white rounded-full opacity-100 z-0"></div>
          </div>
          <div className="relative hidden md:flex justify-center md:w-1/2 min-h-[400px]">
            <img
              className="z-10 max-h-[400px] object-contain"
              src={technology}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-white rounded-full z-0"></div>
            <div className="absolute top-1/4 left-2/3 w-8 h-8 bg-violet-400 rounded-full z-0"></div>
            <div className="absolute bottom-8 right-8 w-6 h-6 bg-white rounded-full z-10"></div>
            <div className="absolute bottom-4 left-8 w-4 h-4 bg-violet-400 rounded-full z-10"></div>
            <div className="absolute top-8 left-8 w-20 h-20 bg-white rounded-full z-0"></div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Header;
