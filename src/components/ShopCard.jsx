import React from "react";
function ShopCard({ imgSrc }) {
  return (
    <div>
      <div
        className=" bg-no-repeat min-h-100 bg-center relative"
        style={{ backgroundImage: `url(${imgSrc})` }}
      >
        <div className="flex flex-col justify-center place-self-center bg-sky-600 opacity-75 px-6 py-6 min-w-86 absolute bottom-0 min-h-[50%]">
          <div className="flex flex-col gap-6.5 max-w-[75%]">
            <h3 className="text-white">
              Top Product Of <br /> The Week
            </h3>
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
