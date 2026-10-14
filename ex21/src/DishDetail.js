
import React from "react";
import { useParams, Link } from "react-router-dom";
import { dishes } from "./data";

function DishDetail() {
  const { id } = useParams();

  const dish = dishes.find(
    (item) => item.id === Number(id)
  );

  if (!dish) {
    return (
      <div className="container">
        <h2>Dish not found!</h2>
        <Link to="/dishes">Back to Dish List</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Dish Detail</h2>

      <div className="dish-detail">
        <img
          src={dish.image}
          alt={dish.name}
        />

        <h2>{dish.name}</h2>

        <p>
          <strong>ID:</strong> {dish.id}
        </p>

        <p>
          <strong>Category:</strong> {dish.category}
        </p>

        <p>
          <strong>Price:</strong> ${dish.price}
        </p>

        <p>
          <strong>Label:</strong> {dish.label || "None"}
        </p>

        <p>
          <strong>Featured:</strong>{" "}
          {dish.featured ? "Yes" : "No"}
        </p>

        <p>
          <strong>Description:</strong>
        </p>

        <p>{dish.description}</p>

        <Link to="/dishes">
          Back to Dish List
        </Link>
      </div>
    </div>
  );
}

export default DishDetail;
