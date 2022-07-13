import React from "react";
import CarouselComp from "../CarouselComp/CarouselComp";
import "./content.scss";

const Content = () => {
  const categoriesData = [
    { id: 1, type: "Ժամացույցներ", img: "watches" },
    { id: 2, type: "Ժամացույցի Տուփեր", img: "watch-box" },
    { id: 3, type: "Դիմահարդարում", img: "makeup" },
    { id: 4, type: "Արծաթյա զարդեր", img: "silver" },
    { id: 5, type: "Օծանելիքներ", img: "perfumes" },
    { id: 6, type: "Այլ", img: "others" },
  ];

  return (
    <div>
      <CarouselComp />
      <div className="assortment">
        <h1>Տեսականի</h1>
        <div className="categories">
          {categoriesData.map(({ id, type, img }) => {
            return (
              <div
                className="category-item"
                key={id}
                style={{
                  backgroundImage: `url('./images/categories/${img}.jpg')`,
                }}
              >
                <span>{type}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Content;
