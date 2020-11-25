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
import ajeossi1 from "../../assets/images/menu/ajeossi/chicken.png";

import baegAm1 from "../../assets/images/menu/baeg-am/noodles.png";
import baegAm2 from "../../assets/images/menu/baeg-am/soup.png";
import baegAm3 from "../../assets/images/menu/baeg-am/suyug.png";

import bunsig1 from "../../assets/images/menu/bunsig/fish-cake.png";
import bunsig2 from "../../assets/images/menu/bunsig/kimbap.png";
import bunsig3 from "../../assets/images/menu/bunsig/noodles.png";
import bunsig4 from "../../assets/images/menu/bunsig/tempura.png";
import bunsig5 from "../../assets/images/menu/bunsig/tteogbokki.png";

import caffebene1 from "../../assets/images/menu/caffebene/cake.png";
import caffebene2 from "../../assets/images/menu/caffebene/coffee.png";
import caffebene3 from "../../assets/images/menu/caffebene/ice-cream.png";

import gomo1 from "../../assets/images/menu/gomo/bibimbab.png";
import gomo2 from "../../assets/images/menu/gomo/meat.png";
import gomo3 from "../../assets/images/menu/gomo/noodles.png";

import kingkong1 from "../../assets/images/menu/kingkong/fried.png";
import kingkong2 from "../../assets/images/menu/kingkong/pork.png";
import kingkong3 from "../../assets/images/menu/kingkong/stew.png";

import maebdang1 from "../../assets/images/menu/maebdang/egg.png";
import maebdang2 from "../../assets/images/menu/maebdang/fried-rice.png";
import maebdang3 from "../../assets/images/menu/maebdang/galbijjim.png";

import ricecake1 from "../../assets/images/menu/ricecake/sighye.png";
import ricecake2 from "../../assets/images/menu/ricecake/tteok.png";

import sinsali1 from "../../assets/images/menu/sinsali/fried-rice.png";
import sinsali2 from "../../assets/images/menu/sinsali/tteogbokki.png";

import tangsuyug1 from "../../assets/images/menu/tangsuyug/fried.png";
import tangsuyug2 from "../../assets/images/menu/tangsuyug/kimbap.png";
import tangsuyug3 from "../../assets/images/menu/tangsuyug/tangsuyug.png";

import teumsae1 from "../../assets/images/menu/teumsae/kimbap.png";
import teumsae2 from "../../assets/images/menu/teumsae/ramen.png";

import tteoggalbi1 from "../../assets/images/menu/tteoggalbi/chicken.png";
import tteoggalbi2 from "../../assets/images/menu/tteoggalbi/tteokgalbi.png";

const images = [
  [caffebene2, caffebene2, caffebene3, caffebene1],
  [ricecake2, ricecake1, ricecake2, ricecake2],
  [teumsae2, teumsae2, teumsae1, teumsae1],
  [maebdang3, maebdang2, maebdang1],
  [sinsali2, sinsali1],
  [ajeossi1, ajeossi1],
  [tteoggalbi2, tteoggalbi2, tteoggalbi2, tteoggalbi1],
  [gomo3, gomo3, gomo1, gomo2],
  [bunsig5, bunsig4, bunsig1, bunsig2, bunsig3],
  [tangsuyug3, tangsuyug2, tangsuyug1],
  [kingkong3, kingkong3, kingkong2, kingkong1],
  [baegAm2, baegAm2, baegAm2, baegAm1, baegAm3],
];

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
        <a className={"BtnHomepage"} href={shop.homepage} target={"_blank"}>
          Homepage
        </a>
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
              <img src={images[id][activeMenuIndex]} alt={menu.name} />
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
