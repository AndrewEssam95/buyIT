import { Col, Row } from "react-bootstrap";
import ContentLoader from "react-content-loader";

const ProductSkeleton = () => {
  const renderItems = Array(5)
    .fill(0)
    .map((_, index) => (
      <Col
        xs={12}
        sm={6}
        md={4}
        lg={3}
        key={index}
        className="d-flex justify-content-center mb-5 mt-2">
        <ContentLoader
          key={index}
          speed={1}
          width={250}
          height={300}
          viewBox="0 0 250 300"
          backgroundColor="#f0f0f0"
          foregroundColor="#ffffff">
          <rect x="76" y="164" rx="0" ry="0" width="2" height="3" />
          <rect x="35" y="166" rx="0" ry="0" width="115" height="0" />
          <rect x="0" y="0" rx="15" ry="15" width="250" height="180" />
          <rect x="5" y="190" rx="5" ry="5" width="175" height="10" />
          <rect x="5" y="210" rx="5" ry="5" width="175" height="10" />
          <rect x="5" y="230" rx="5" ry="5" width="175" height="10" />
          <circle cx="220" cy="220" r="20" />
        </ContentLoader>
      </Col>
    ));

  return <Row>{renderItems}</Row>;
};

export default ProductSkeleton;
