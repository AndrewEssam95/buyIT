import { useAppDispatch, useAppSelector } from "@store/hooks";
import actGetWishlist from "@store/wishlist/act/actGetWishlist";
import { useEffect } from "react";
import { wishlistProductsCleanUp } from "@store/wishlist/wishlistSlice";

const useWishlist = () => {
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector((state) => state.cart.items);
  const { productsFullInfo, error, loading } = useAppSelector(
    (state) => state.wishlist
  );

  const records = productsFullInfo.map((product) => ({
    ...product,
    quantity: cartItems[product.id as number],
    isLiked: true,
    isAuthenticated: true,
  }));

  useEffect(() => {
    dispatch(actGetWishlist("productsFullInfo"));

    return () => {
      dispatch(wishlistProductsCleanUp());
    };
  }, [dispatch]);

  return { error, loading, records };
};

export default useWishlist;
