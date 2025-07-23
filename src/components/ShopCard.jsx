import React from "react";
function ShopCard({ imgSrc }) {
  return (
    <div className=" w-[320px] ">
      <div
        className="bg-no-repeat w-full bg-center bg-cover relative h-100"
        style={{ backgroundImage: `url(${imgSrc})` }}
      >
        <div className="flex flex-col justify-center place-self-center bg-sky-600 opacity-75 p-6 w-full absolute bottom-0 h-[65%]">
          <div className="flex flex-col gap-6.5 max-w-[75%]">
            <h3 className="text-white">Top Product Of The Week</h3>
            <button className="btn-text text-white border border-white py-4 px-10 rounded-sm">
              EXPLORE ITEMS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopCard;
