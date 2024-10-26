import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import Loading from "@components/feedback/Loading";
import useCategories from "@hooks/useCategories";
import { Col, Row } from "react-bootstrap";

const { container, title, image, categoryItem, categoryTitle } = styles;

const CategoriesList = () => {
  const { records, loading, error } = useCategories();

  return (
    <section className={container}>
      <h1 className={title}>Categories</h1>
      <Loading status={loading} error={error} type="category">
        <Row>
          {records.length > 0
            ? records.map((record) => {
                return (
                  <Col xs={4} md={3} lg={2} key={record.id}>
                    <Link
                      to={`/products/${record.prefix}`}
                      key={record.id}
                      preventScrollReset={true}>
                      <div className={categoryItem}>
                        <img src={record.image} className={image} alt="" />
                        <h6 className={categoryTitle}>{record.title}</h6>
                      </div>
                    </Link>
                  </Col>
                );
              })
            : "There is no categories yet."}
        </Row>
      </Loading>
    </section>
  );
};

export default CategoriesList;
