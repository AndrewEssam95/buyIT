import { TProduct } from "src/types/customTypes";
import styles from "./styles.module.css";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { Button, Modal, Spinner } from "react-bootstrap";
import { useState } from "react";
import LoginModal from "@components/common/LoginModal/LoginModal";
import actPlaceOrder from "@store/order/act/actPlaceOrder";
import { clearCart } from "@store/cart/cartSlice";

const {
  container,
  title,
  totalPrice,
  price,
  quantity,
  activeCheckoutButton,
  disabledCheckoutButton,
} = styles;

type TOrderSummaryProps = { products: TProduct[]; totalQuantity: number };

const OrderSummary = ({ products, totalQuantity }: TOrderSummaryProps) => {
  const dispatch = useAppDispatch();
  const userAccessToken = useAppSelector(
    (state) => state.registerAuth.accessToken
  );

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const orderTotalPrice = products.reduce((accumulator, current) => {
    const quantity = current.quantity ?? 0;
    const price = current.price;

    return accumulator + quantity * price;
  }, 0);

  const handlePlaceOrder = () => {
    setLoading(true);

    dispatch(actPlaceOrder(orderTotalPrice))
      .unwrap()
      .then(() => {
        dispatch(clearCart());
        setShowOrderModal(false);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className={container}>
      <LoginModal
        showModal={showLoginModal}
        setShowModal={setShowLoginModal}
        message="place your order"
      />
      <h6 className={title}>Order Summary</h6>
      <div className={totalPrice}>
        Total Price:
        <span className={price}>{orderTotalPrice.toFixed(2)} EGP</span>
      </div>
      <Button
        className={
          totalQuantity ? activeCheckoutButton : disabledCheckoutButton
        }
        disabled={totalQuantity < 1}
        style={{ backgroundColor: "#ed5221" }}
        onClick={() =>
          userAccessToken ? setShowOrderModal(true) : setShowLoginModal(true)
        }>
        Checkout Now
        {totalQuantity ? (
          <span className={quantity}> ( {totalQuantity} )</span>
        ) : (
          ""
        )}
      </Button>
      <Modal
        show={showOrderModal}
        style={{ marginTop: 150 }}
        onHide={() => setShowOrderModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Placing Order</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ fontSize: 16, fontWeight: "bold" }}>
          Are you sure you want to place order with Subtotal:{" "}
          {orderTotalPrice.toFixed(2)} EGP
          {!loading && error && (
            <p className={`${{ color: "#DC3545", marginTop: "10px" }}`}>
              {error}
            </p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowOrderModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handlePlaceOrder}>
            {loading ? (
              <>
                <Spinner size="sm" animation="border" color="white" />{" "}
                Loadoing...
              </>
            ) : (
              "Confirm"
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OrderSummary;
