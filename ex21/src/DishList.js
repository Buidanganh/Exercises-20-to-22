
import React from "react";
import { Link } from "react-router-dom";
import { dishes } from "./data";

function DishList() {
  return (
    <div className="container">
      <h2>Dish List</h2>

      <div className="dish-grid">
        {dishes.map((dish) => (
          <div className="dish-card" key={dish.id}>
            <Link to={`/dishes/${dish.id}`}>
              <img
                src={dish.image}
                alt={dish.name}
              />

              <h3>{dish.name}</h3>
            </Link>

            <p>Category: {dish.category}</p>
            <p>Price: ${dish.price}</p>

            {dish.label && (
              <span className="dish-label">
                {dish.label}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DishList;
