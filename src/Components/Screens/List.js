import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function List() {
  const [stores, setStores] = useState([]);
  useEffect(() => {
    setStores([
      {
        name: "마티스 커피",
        address: "서울 관악구 신림로59길 15-6",
        call: "02-884-6321",
        time: "매일 11:00 - 24:00",
        menu: {
          name: "핸드드립",
          price: "6000",
          image: "../../assets/image/menu/coffee.png",
        },
      },
    ]);
  }, []);
  return (
    <main id={"ListContainer"}>
      {stores.map((store, index) => {
        return (
          <Link to={`/List/${index}`} key={index}>
            <div className={"CardContainer"}>
              <div className={"CardCircle"}>
                <img src={require(store.menu.image)} />
              </div>
              <div className={"StoreDesc"}>
                <span className={"StoreName"}>{store.name}</span>
                <span className={"StoreTag"}></span>
              </div>
            </div>
          </Link>
        );
      })}
    </main>
  );
}

export default List;
