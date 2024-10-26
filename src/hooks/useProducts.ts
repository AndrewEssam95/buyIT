import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { actGetProducts, productsCleanUp } from "@store/products/productsSlice";
import actGetWishlist from "@store/wishlist/act/actGetWishlist";

const useProducts = () => {
  const params = useParams();
  const dispatch = useAppDispatch();

  const { records, error, loading } = useAppSelector((state) => state.products);
  const items = useAppSelector((state) => state.cart.items);
  const { itemsId } = useAppSelector((state) => state.wishlist);
  const userAccessToken = useAppSelector(
    (state) => state.registerAuth.accessToken
  );

  useEffect(() => {
    dispatch(actGetWishlist("productsFullInfo"));
  }, [dispatch]);

  useEffect(() => {
    dispatch(actGetProducts(params.categoryPrefix as string));

    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, params]);
  return { records, error, loading, items, itemsId, userAccessToken };
};

export default useProducts;
