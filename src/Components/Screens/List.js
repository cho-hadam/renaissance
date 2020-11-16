import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../../css/list.css";
import storeData from "../../data/store_data.json";

// import images
import image1 from "../../assets/images/store/coffee.png";

function List() {
  const [stores, setStores] = useState([]);
  const [images, setImages] = useState([]);
  useEffect(() => {
    setStores(storeData);
    setImages([image1, image1]);
  }, []);
  return (
    <main id={"ListContainer"}>
      {stores.map((store, index) => (
        <Link to={`/List/${index}`} key={index} className={"CardLink"}>
          <div className={"CardContainer"}>
            <div className={"CardCircle"}>
              <img src={images[index]} alt={store.name} />
            </div>
            <div className={"StoreDesc"}>
              <span className={"StoreName"}>{store.name}</span>
              <div>
                {store.menus.map((menu, index) => (
                  <span key={index} className={"StoreTag"}>
                    #{menu.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </main>
  );
}

export default List;
