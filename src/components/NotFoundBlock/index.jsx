import React from "react";
import "./NotFoundBlock.scss";
const NotFoundBlock = () => {
  return (
    <div className="root">
      <h1>
        <span>😕</span>
        <br />
        Ничего не найдено
      </h1>
      <p style={{ fontSize: 20 }}>
        К сожелене страница отсуствует в нашем интернет-магазине
      </p>
    </div>
  );
};

export default NotFoundBlock;
