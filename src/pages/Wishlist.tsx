import Loading from "@components/feedback/Loading";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.css";
import Card from "@components/common/Card/Card";
import useWishlist from "@hooks/useWishlist";
import LottieHandler from "@components/feedback/LottieHandler/LottieHandler";

const { container, title } = styles;

const Wishlist = () => {
  const { error, loading, records } = useWishlist();

  return (
    <section className={container}>
      <Container>
        <h1 className={title}>Wishlist</h1>
        <Loading error={error} status={loading} type="product">
          <Row className="justify-content-xs-center justify-content-sm-start align-items-sm-center">
            {records.length > 0 ? (
              records.map((record) => {
                return (
                  <Col xs={12} sm={6} md={4} lg={3} key={record.id}>
                    <Card
                      key={record.id}
                      id={record.id as number}
                      title={record.title}
                      price={record.price}
                      categoryPrefix={record.categoryPrefix}
                      image={record.image}
                      maxQuantity={record.maxQuantity as number}
                      quantity={record.quantity}
                      isLiked={record.isLiked}
                    />
                  </Col>
                );
              })
            ) : (
              <LottieHandler type="empty" message="There is no products yet." />
            )}
          </Row>
        </Loading>
      </Container>
    </section>
  );
};

export default Wishlist;
