import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetProductsByIDs,
  cartProductsCleanUp,
} from "@store/cart/cartSlice";
import { resetOrderSlice } from "@store/order/ordersSlice";

const useCart = () => {
  const dispatch = useAppDispatch();

  const { items, productsFullInfo, totalQuantity, error, loading } =
    useAppSelector((state) => state.cart);

  const placeOrderStatus = useAppSelector((state) => state.orders.loading);

  useEffect(() => {
    dispatch(actGetProductsByIDs());

    return () => {
      dispatch(cartProductsCleanUp());
      dispatch(resetOrderSlice());
    };
  }, [dispatch]);

  const productsWithQuantites = productsFullInfo.map((product) => ({
    ...product,
    quantity: items[product.id as number],
  }));

  return {
    totalQuantity,
    error,
    loading,
    productsWithQuantites,
    placeOrderStatus,
  };
};

export default useCart;
