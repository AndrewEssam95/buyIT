import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import styles from "./styles.module.css";
import Card from "../../common/Card/Card";
import { Col, Row } from "react-bootstrap";

const { header, title, arrowsContainer, arrow } = styles;

const ProductsCollection = () => {
  return (
    <section className="mt-5 mb-5">
      <div className={header}>
        <h1 className={title}>Trending Products</h1>
        <div className={arrowsContainer}>
          <div className={arrow}>
            <FaArrowLeftLong />
          </div>
          <div className={arrow}>
            <FaArrowRightLong />
          </div>
        </div>
      </div>
      <Row
        style={{
          overflowX: "scroll",
          display: "flex",
          flexWrap: "nowrap",
          scrollbarWidth: "none",
          transform: `translateX(0)`,
        }}>
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <Col
              key={index}
              xs={8}
              sm={6}
              md={5}
              lg={4}
              xl={3}
              style={{
                display: "flex",
                justifyContent: "center",
              }}>
              <Card
                id={99}
                title="Product"
                price={250}
                categoryPrefix="men"
                image="../../../../public/assets/1719222144dbf867dbe4fb1ffbe348e2db344336bd.webp"
              />
            </Col>
          ))}
      </Row>
    </section>
  );
};

export default ProductsCollection;
