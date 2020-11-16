import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../../css/list.css";
import storeData from "../../data/store_data.json";

function List() {
  const [stores, setStores] = useState([]);
  const [images, setImages] = useState([]);
  useEffect(() => {
    setStores(storeData);
    stores.forEach((store) => {
      import(`../../assets/images/menu/${store.menu.image}.png`).then((img) =>
        setImages([...images, img])
      );
    });
  }, []);
  return (
    <main id={"ListContainer"}>
      {stores.map((store, index) => (
        <Link to={`/List/${index}`} key={index}>
          <div className={"CardContainer"}>
            <div className={"CardCircle"}>
              <img
                src={images.length != 0 ? images[index].default : ""}
                alt={store.name}
              />
            </div>
            <div className={"StoreDesc"}>
              <span className={"StoreName"}>{store.name}</span>
              <span className={"StoreTag"}></span>
            </div>
          </div>
        </Link>
      ))}
    </main>
  );
}

export default List;
