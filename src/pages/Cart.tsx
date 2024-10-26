import { Col, Container } from "react-bootstrap";
import styles from "./styles.module.css";
import CartItems from "@components/ecommerce/CartItems/CartItems";
import OrderSummary from "@components/ecommerce/OrderSummary/OrderSummary";
import Loading from "@components/feedback/Loading";
import useCart from "@hooks/useCart";
import LottieHandler from "@components/feedback/LottieHandler/LottieHandler";

const { container, title, cartWrapper } = styles;

const Cart = () => {
  const {
    totalQuantity,
    error,
    loading,
    productsWithQuantites,
    placeOrderStatus,
  } = useCart();

  return (
    <section className={container}>
      <Container style={{ marginTop: -10, padding: 10 }}>
        <h1 className={title}>Cart</h1>
        <Loading status={loading} error={error} type="cart">
          <div className={cartWrapper}>
            {totalQuantity ? (
              <>
                <CartItems products={productsWithQuantites} />
                <OrderSummary
                  products={productsWithQuantites}
                  totalQuantity={totalQuantity}
                />
              </>
            ) : (
              <Col xs={12}>
                {placeOrderStatus === "succeded" ? (
                  <LottieHandler
                    type="success"
                    message="Your order has been placed successfully"
                  />
                ) : (
                  <LottieHandler type="empty" message="Your cart is empty" />
                )}
              </Col>
            )}
          </div>
        </Loading>
      </Container>
    </section>
  );
};

export default Cart;
