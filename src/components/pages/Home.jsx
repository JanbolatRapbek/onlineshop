import "../../index.scss";
import React from "react";
import CardItem from "../CardItem";
import Categories from "../Categories";
import Sort from "../Sort";
import Skeleton from "../CardItem/Skeleton";

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState(0);

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://63e3c485c919fe386c0e6ec4.mockapi.io/pizzas?&category=" +
        categoryId
    )
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId]);
  return (
    <div className="content">
      <div className="container">
        <div className="container__top">
          <Categories
            value={categoryId}
            onClickCategory={(i) => setCategoryId(i)}
          ></Categories>
          <Sort value={sortType} onClickSort={(i) => setSortType(i)}></Sort>
        </div>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="pizza-block-wrapper">
        <div className="pizza-block">
          {isLoading
            ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
            : items.map((obj) => <CardItem key={obj.id} {...obj} />)}
        </div>
      </div>
    </div>
  );
};

export default Home;
