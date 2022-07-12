import React from "react";
import CardComp from "../../components/CardComp/CardComp";
import data from "../../MockData/data.json";
import "./watchesPage.scss";

function WatchesPage() {
  const { watches } = data;

  return (
    <div>
      <div className="category-name">
        <h1>Ժամացույցներ</h1>
      </div>
      <div className="main-content">
        {watches.map((item) => (
          <CardComp key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default WatchesPage;
