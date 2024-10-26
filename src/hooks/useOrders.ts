import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect, useState } from "react";
import actGetOrders from "@store/order/act/actGetOrders";
import { TProduct } from "src/types/customTypes";
import { resetOrderSlice } from "@store/order/ordersSlice";

const useOrders = () => {
  const dispatch = useAppDispatch();

  const ordersList = useAppSelector((state) => state.orders.ordersList);

  const [showModal, setShowModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<TProduct[]>([]);

  const handleViewProducts = (orderId: number) => {
    const productsDetails = ordersList.find((order) => orderId === order.id);
    const newItems = productsDetails?.items ?? [];

    setShowModal(true);
    setSelectedOrder((prev) => [...prev, ...newItems]);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedOrder([]);
  };

  useEffect(() => {
    const promise = dispatch(actGetOrders());

    return () => {
      promise.abort();
      dispatch(resetOrderSlice());
    };
  }, [dispatch]);

  return {
    showModal,
    selectedOrder,
    handleViewProducts,
    handleCloseModal,
    ordersList,
  };
};

export default useOrders;
