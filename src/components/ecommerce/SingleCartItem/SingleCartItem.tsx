import { MdAdd, MdDelete, MdOutlineRemove } from "react-icons/md";
import styles from "./styles.module.css";
import { Image } from "react-bootstrap";
import { TProduct } from "src/types/customTypes";
import { useAppDispatch } from "@store/hooks";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "@store/cart/cartSlice";
import { memo, useCallback, useState } from "react";

const {
  container,
  details,
  textDetails,
  buttons,
  productQuantity,
  quantityContainer,
  removerButton,
  itemPrice,
  warning,
} = styles;

type TSingleCartItem = {
  product: TProduct;
};

export const SingleCartItem = memo(({ product }: TSingleCartItem) => {
  const dispatch = useAppDispatch();

  const { image, id, price, title, quantity, maxQuantity } = product;

  const [currentQuantity, setCurrentQuantity] = useState(quantity);

  const removeItemHandler = useCallback(
    (id: number) => {
      dispatch(removeItem(id));
    },
    [dispatch]
  );

  const quantityHandler = useCallback(
    (type: "increase" | "decrease") => {
      if (!currentQuantity) return;

      if (type === "increase" && currentQuantity !== maxQuantity) {
        setCurrentQuantity((prev) => (prev as number) + 1);
        dispatch(increaseQuantity({ id, currentQuantity }));
      } else if (type === "decrease" && currentQuantity > 1) {
        setCurrentQuantity((prev) => (prev as number) - 1);
        dispatch(decreaseQuantity({ id, currentQuantity }));
      } else if (type === "decrease" && currentQuantity == 1) {
        dispatch(removeItem(id));
      }
    },
    [currentQuantity, dispatch, id, maxQuantity]
  );

  return (
    <div key={id} className={container}>
      <div className={details}>
        <Image
          src={image}
          style={{ objectFit: "contain", height: "100%", borderRadius: 10 }}
        />
        <div className={textDetails}>
          <div>{title}</div>
          <br />
          <div className={itemPrice}>{price.toFixed(2)} EGP</div>
        </div>
      </div>
      <div className={buttons}>
        <div className={quantityContainer}>
          <MdOutlineRemove
            size={15}
            cursor="pointer"
            onClick={() => quantityHandler("decrease")}
          />
          <div className={productQuantity}>{currentQuantity}</div>
          <MdAdd
            size={15}
            cursor="pointer"
            onClick={() => quantityHandler("increase")}
          />
        </div>
        {currentQuantity === maxQuantity && (
          <div className={warning}>
            You only can buy {`${maxQuantity}`} pieces.
          </div>
        )}
        <button
          className={removerButton}
          onClick={() => removeItemHandler(id as number)}>
          Remove
          <MdDelete size={18} cursor="pointer" />
        </button>
      </div>
    </div>
  );
});
