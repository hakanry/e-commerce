import React from "react";
import ShopCard from "../../components/ShopCard";

import shopcard1 from "../../assets/ShopCardsImgs/shopcard1.jpg";
import shopcard2 from "../../assets/ShopCardsImgs/shopcard2.jpg";
import shopcard3 from "../../assets/ShopCardsImgs/shopcard3.jpg";

const shopcardimgs = [shopcard1, shopcard2, shopcard3];

function ShopCards() {
  return (
    <div className="flex flex-col gap-4 mb-6">
      {shopcardimgs.map((img, index) => (
        <ShopCard key={index} imgSrc={img} />
      ))}
    </div>
  );
}

export default ShopCards;
