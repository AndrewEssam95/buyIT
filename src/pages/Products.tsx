import styles from "./styles.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Loading from "@components/feedback/Loading";
import Card from "@components/common/Card/Card";
import useProducts from "@hooks/useProducts";
import LottieHandler from "@components/feedback/LottieHandler/LottieHandler";

const { container, title } = styles;

const Products = () => {
  const { records, error, loading, items, itemsId, userAccessToken } =
    useProducts();

  return (
    <section className={container}>
      <Container>
        <h1 className={title}>Products</h1>
        <Loading error={error} status={loading} type="product">
          <Row className="justify-content-xs-center justify-content-sm-start align-items-sm-center">
            {records.length > 0 ? (
              records.map((record) => {
                return (
                  <Col
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    className="d-flex justify-content-center"
                    key={record.id}>
                    <Card
                      id={record.id as number}
                      title={record.title}
                      price={record.price}
                      categoryPrefix={record.categoryPrefix}
                      image={record.image}
                      maxQuantity={record.maxQuantity as number}
                      quantity={items[record.id as number]}
                      isLiked={itemsId.includes(record.id as number)}
                      isAuthenticated={userAccessToken ? true : false}
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

export default Products;
