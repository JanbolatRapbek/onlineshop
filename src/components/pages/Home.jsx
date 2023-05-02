import "../../index.scss";
import React from "react";
import qs from "qs";
import CardItem from "../CardItem";
import Categories from "../Categories";
import Sort, { Sortlist } from "../Sort";
import Skeleton from "../CardItem/Skeleton";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategoryId,
  setSort,
  setCurrentPage,
  setFilters,
} from "../../redux/slicer/filterSlice";
import axios from "axios";
import { Pagination } from "../Pagination";

const Home = () => {
  const navigate = useNavigate();
  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sortValue.sortProperty);
  const currentPage = useSelector((state) => state.filter.currentPage);
  const isSearsh = React.useRef(false);
  const isMounted = React.useRef(false);

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };
  const dispatch = useDispatch();

  React.useEffect(() => {
    setIsLoading(true);
    const sortBy = sortType.replace("-", "");
    const order = sortType.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    axios
      .get(
        `https://63e3c485c919fe386c0e6ec4.mockapi.io/pizzas?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}`
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
    setIsLoading(true);
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(qs.location.serch.substring(1));
      const sort = Sortlist.find(
        (obj) => obj.sortProperty === params.sortProperty
      );

      dispatch(setFilters(...params, sort));
      isSearsh.current = true;
    }
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearsh.current) {
      fetchPizza();
    }
    isSearsh.current = false;
  }, [sortType, categoryId, currentPage]);

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({ sortType, categoryId, currentPage });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sortType, currentPage]);

  const fetchPizza = items.map((obj) => <CardItem key={obj.id} {...obj} />);
  console.log(sortType);

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
          <Sort value={sortType} onClickSort={(i) => dispatch(setSort(i))}>
            {" "}
          </Sort>
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
      <Pagination currentPage={currentPage} onChange={onChangePage} />{" "}
    </div>
  );
};

export default Home;
