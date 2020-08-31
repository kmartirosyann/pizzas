import React from "react";



const Cotegories= React.memo(function ({activCategory, items, onClickCategory }) {
  
  
  const arr =
    items &&
    items.map((item, index) => (
      <li
        className={activCategory === index ? "active" : ""}
        onClick={() => onClickCategory(index)}
        key={`${item}_${index}`}
      >
        {" "}
        {item}{" "}
      </li>
    ));
    
  return (
    <div className="categories">
      <ul>
        <li
          className={activCategory === null ? "active" : ""}
          onClick={() => onClickCategory(null)}
        >
          Все
        </li>
        {arr}
      </ul>
    </div>
  );
})

export default Cotegories;
