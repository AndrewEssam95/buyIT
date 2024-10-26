import { Col, Row } from "react-bootstrap";
import ContentLoader from "react-content-loader";

const CategorySkeleton = () => {
  const renderItems = Array(5)
    .fill(0)
    .map((_, index) => (
      <Col
        xs={4}
        md={3}
        lg={2}
        key={index}
        className="d-flex justify-content-center mb-5 mt-2">
        <ContentLoader
          key={index}
          speed={1}
          width={150}
          height={183.2}
          viewBox="0 0 150 183.2"
          backgroundColor="#f0f0f0"
          foregroundColor="#ffffff">
          <circle cx="74" cy="74" r="74" />
          <rect x="76" y="164" rx="0" ry="0" width="2" height="3" />
          <rect x="35" y="166" rx="0" ry="0" width="115" height="0" />
          <rect x="25" y="165" rx="0" ry="0" width="100" height="10" />
        </ContentLoader>
      </Col>
    ));

  return <Row>{renderItems}</Row>;
};

export default CategorySkeleton;
