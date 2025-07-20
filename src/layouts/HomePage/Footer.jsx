import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <main className="flex flex-col gap-3 pb-12 px-12 items-start">
      <div className="md:flex md:justify-between md:items-start w-full">
        <h3 className="text-slate-800 h3">Bandage</h3>
        <div className="text-sky-500 flex gap-5 pb-14">
          <Facebook />
          <Instagram />
          <Twitter />
        </div>
      </div>
      <div className="md:flex md:justify-between md:items-start w-full">
        <div className="flex flex-col gap-2.5 pt-2.5">
          <h5 className="text-slate-800">Company Info</h5>
          <nav className="flex flex-col gap-2.5 pt-2.5">
            {" "}
            <a href="#" className="text-neutral-500 link">
              About Us
            </a>
            <a href="#" className="text-neutral-500 link">
              Carrier
            </a>
            <a href="#" className="text-neutral-500 link">
              We are hiring
            </a>
            <a href="#" className="text-neutral-500 link">
              Blog
            </a>
          </nav>
        </div>
        <div className="flex flex-col gap-2.5 pt-2.5">
          <h5 className="text-slate-800">Legal</h5>
          <nav className="flex flex-col gap-2.5 pt-2.5">
            {" "}
            <a href="#" className="text-neutral-500 link">
              About Us
            </a>
            <a href="#" className="text-neutral-500 link">
              Carrier
            </a>
            <a href="#" className="text-neutral-500 link">
              We are hiring
            </a>
            <a href="#" className="text-neutral-500 link">
              Blog
            </a>
          </nav>
        </div>
        <div className="flex flex-col gap-2.5 pt-2.5">
          <h5 className="text-slate-800">Features</h5>
          <nav className="flex flex-col gap-2.5 pt-2.5">
            {" "}
            <a href="#" className="text-neutral-500 link">
              Business Marketing
            </a>
            <a href="#" className="text-neutral-500 link">
              User Analytic
            </a>
            <a href="#" className="text-neutral-500 link">
              Live Chat
            </a>
            <a href="#" className="text-neutral-500 link">
              Unlimited Support
            </a>
          </nav>
        </div>
        <div className="flex flex-col gap-2.5 pt-2.5">
          <h5 className="text-slate-800">Resources</h5>
          <nav className="flex flex-col gap-2.5 pt-2.5">
            {" "}
            <a href="#" className="text-neutral-500 link">
              IOS & Android
            </a>
            <a href="#" className="text-neutral-500 link">
              Watch a Demo
            </a>
            <a href="#" className="text-neutral-500 link">
              Customers
            </a>
            <a href="#" className="text-neutral-500 link">
              API
            </a>
          </nav>
        </div>
        <div className="flex flex-col gap-2.5 pt-2.5">
          <h5 className="text-slate-800">Get In Touch</h5>
          <div className="flex">
            <input
              type="email"
              placeholder="Your Email"
              className="text-neutral-500 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <button className="btn-text text-sm text-white bg-sky-500 py-4 px-5.5 rounded-tr-sm rounded-br-sm">
              Subscribe
            </button>
          </div>
          <p className="text-neutral-500 pt-2.5">Lore imp sum dolor Amit</p>
        </div>
      </div>
      <h6 className="text-neutral-500 pt-10 w-full text-center">
        Made With Love By
        <br />
        Finland All Right Reserved 2025
      </h6>
    </main>
  );
}

export default Footer;
