import React from "react";
import "./Products.css";
import { useStateValue } from "../../data_layer/StateProvider";
function Products({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();
  // console.log("this is the basket: ", basket);
  const AddToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐️</p>
            ))}
        </div>
      </div>
      <img class="Product_image" src={image} alt="Product_image"></img>
      <button className="product__button" onClick={AddToBasket}>
        Add to basket
      </button>
    </div>
  );
}

export default Products;
