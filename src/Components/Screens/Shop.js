import React, { useState } from "react";
import { useParams } from "react-router-dom";

import "../../css/shop.css";
import storeData from "../../data/store_data.json";

// Icon
import locationIcon from "../../assets/images/detail/address.png";
import callIcon from "../../assets/images/detail/call.png";
import timeIcon from "../../assets/images/detail/clock.png";

function Shop() {
  const { id } = useParams();
  const [shop, setShop] = useState(storeData[id]);
  return (
    <main id={"ShopContainer"}>
      <div className={"ShopLeftContents"}>
        <h1>{shop.name}</h1>
        <div className={"ShopDetail"}>
          <div className={"LocationContainer"}>
            <img src={locationIcon} alt={"location"} />
            <span>{shop.address}</span>
          </div>
          <div className={"CallContainer"}>
            <img src={callIcon} alt={"call"} />
            <span>{shop.call}</span>
          </div>
          <div className={"TimeContainer"}>
            <img src={timeIcon} alt={"time"} />
            <span>{shop.time}</span>
          </div>
        </div>
        <button className={"BtnHomepage"}>Homepage</button>
      </div>
      <div className={"ShopRightContainer"}>
        <div className={"MenuCard"}></div>
      </div>
    </main>
  );
}

export default Shop;
