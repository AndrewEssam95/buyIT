import styles from "./styles.module.css";
import { SingleCartItem } from "../SingleCartItem/SingleCartItem";
import { TProduct } from "src/types/customTypes";
import { Col, Row } from "react-bootstrap";

const { container } = styles;

type TCartItemsProps = { products: TProduct[] };

const CartItems = ({ products }: TCartItemsProps) => {
  return (
    <Row className={container}>
      {products.map((product, index) => {
        return (
          <Col xs={12} key={index}>
            <SingleCartItem product={product} />
          </Col>
        );
      })}
    </Row>
  );
};

export default CartItems;
