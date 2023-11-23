import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../../../data_layer/StateProvider";
function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();
  const RemoveFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <section className="Check_out_product">
      <div className="Check_out_product_image_container">
        <img className="Check_out_product_image" src={image} />
      </div>
      <div className="Check_out_product_info">
        <p className="Check_out_product_title">{title}</p>
        <div className="Check_out_product_price">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="Check_out_product_rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>🌟</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={RemoveFromBasket} className="Remove_from_Basket">
            Remove from Basket
          </button>
        )}
      </div>
    </section>
  );
}

export default CheckoutProduct;
