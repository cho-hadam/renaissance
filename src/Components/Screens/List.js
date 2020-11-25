import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../../css/list.css";
import storeData from "../../data/store_data.json";

// import images
import image1 from "../../assets/images/store/coffee.png";
import image2 from "../../assets/images/store/tteok.png";
import image3 from "../../assets/images/store/ramen.png";
import image4 from "../../assets/images/store/galbijjim.png";
import image5 from "../../assets/images/store/tteogbokki.png";
import image6 from "../../assets/images/store/chicken.png";
import image7 from "../../assets/images/store/tteokgalbi.png";
import image8 from "../../assets/images/store/meat.png";
import image9 from "../../assets/images/store/tteogbokki.png";
import image10 from "../../assets/images/store/tangsuyug.png";
import image11 from "../../assets/images/store/stew.png";
import image12 from "../../assets/images/store/soup.png";

function List() {
  const [stores, setStores] = useState([]);
  const [images, setImages] = useState([]);
  useEffect(() => {
    setStores(storeData);
    setImages([
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9,
      image10,
      image11,
      image12,
    ]);
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
              <div className={"TagContainer"}>
                {store.menus.map((menu, index) => {
                  return index < 3 ? (
                    <span key={index} className={"StoreTag"}>
                      #{menu.name}
                    </span>
                  ) : (
                    <span key={index}></span>
                  );
                })}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </main>
  );
}

export default List;
