import React, { useState } from "react";
import { useParams } from "react-router-dom";

import "../../css/shop.css";
import storeData from "../../data/store_data.json";

// Icon
import locationIcon from "../../assets/images/detail/address.png";
import callIcon from "../../assets/images/detail/call.png";
import timeIcon from "../../assets/images/detail/clock.png";
import disabledBack from "../../assets/images/detail/back_disabled.png";
import back from "../../assets/images/detail/back.png";
import disabledNext from "../../assets/images/detail/next_disabled.png";
import next from "../../assets/images/detail/next.png";

// Menu Image
import image1 from "../../assets/images/menu/coffee.png";

function Shop() {
  const { id } = useParams();
  const [shop, setShop] = useState(storeData[id]);
  const [activeMenuIndex, setActiveMenuIndex] = useState(0);

  const MenuCardClickHandle = (e) => {
    const btnType = e.target.className;
    if (btnType === "BtnNext") {
      setActiveMenuIndex(activeMenuIndex + 1);
    } else if (btnType === "BtnBack") {
      setActiveMenuIndex(activeMenuIndex - 1);
    }
  };

  return (
    <div id={"ShopContainer"}>
      <div className={"ShopLeftContainer"}>
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
        {shop.menus.map((menu, index) => (
          <div
            key={index}
            className={
              index === activeMenuIndex ? "MenuCard MenuCardActive" : "MenuCard"
            }
          >
            <img
              onClick={MenuCardClickHandle}
              className={index === 0 ? "BtnDisabledBack" : "BtnBack"}
              src={index === 0 ? disabledBack : back}
              alt={"back button"}
            />
            <div className={"MenuDetail"}>
              <img src={image1} alt={menu.name} />
              <div className={"MenuName"}>
                <span>{menu.name}</span>
                {menu.tag ? (
                  <div className={"MenuTag"}>
                    <span>대표</span>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <span className={"TextPrice"}>{menu.price} won</span>
            </div>
            <img
              onClick={MenuCardClickHandle}
              className={
                index === shop.menus.length - 1 ? "BtnDisabledNext" : "BtnNext"
              }
              src={index === shop.menus.length - 1 ? disabledNext : next}
              alt={"back button"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
