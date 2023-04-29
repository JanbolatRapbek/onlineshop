import "../../index.scss";
import React from "react";
import CardItem from "../CardItem";
import Categories from "../Categories";
import Sort from "../Sort";
import Skeleton from "../CardItem/Skeleton";
import { SearchContext } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId, setSort } from "../../redux/slicer/filterSlice";
import axios from "axios";
import { Pagination } from "../Pagination";

const Home = () => {
  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sortValue);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const sortBy = sortType.sort.replace("-", "");
    const order = sortType.sort.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    axios
      .get(
        `https://63e3c485c919fe386c0e6ec4.mockapi.io/pizzas?${category}&sortBy=${sortBy}&order=${order}`
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
    setIsLoading(true);
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  return (
    <div className="content">
      <div className="container">
        <div className="container__top">
          <Categories
            value={categoryId}
            onClickCategory={(id) => {
              dispatch(setCategoryId(id));
            }}
          ></Categories>
          <Sort
            value={sortType}
            onClickSort={(i) => dispatch(setSort(i))}
          ></Sort>
        </div>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="pizza-block-wrapper">
        <div className="pizza-block">
          {isLoading
            ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
            : items
                .filter((obj) => {
                  if (
                    obj.title.toLowerCase().includes(searchValue.toLowerCase())
                  ) {
                    return true;
                  }
                  return false;
                })
                .map((obj) => <CardItem key={obj.id} {...obj} />)}
        </div>
      </div>
      <Pagination />{" "}
    </div>
  );
};

export default Home;
