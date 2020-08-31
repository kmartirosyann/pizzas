import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { setCategory,setSortby } from "../redux/action/filters";
import { fetchPizzas } from "../redux/action/pizzas";

import { Cotegories, SortPopap, PizzaBlock, LeadingBlock } from "../components";

const categoriesName = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
const sortItems = [
  { name: "популярности", type: "rating" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "name" },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const {cotigori,sortBy} = useSelector(({filters})=>filters)

  const onSelectCategory = React.useCallback(
    (index) => dispatch(setCategory(index)),
    []
  );
  const onSelectSotrtype = React.useCallback(
    (type) => dispatch(setSortby(type)),
    []
  );
  React.useEffect(() => {
  
      dispatch(fetchPizzas(cotigori,sortBy));
    
  }, [cotigori,sortBy]);

  
  return (
    <div className="container">
      <div className="content__top">
        <Cotegories activCategory={cotigori} onClickCategory={onSelectCategory} items={categoriesName} />

        <SortPopap items={sortItems} activSortType={sortBy} onClicSortType={onSelectSotrtype}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
          : Array(10)
              .fill(0)
              .map((_, index) => <LeadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
