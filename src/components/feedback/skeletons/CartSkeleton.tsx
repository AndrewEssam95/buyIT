import { Col, Row } from "react-bootstrap";
import ContentLoader from "react-content-loader";

const CartSkeleton = () => {
  const renderItems = Array(5)
    .fill(0)
    .map((_, index) => (
      <Col xs={12} key={index}>
        <ContentLoader
          speed={1}
          width={845}
          height={180}
          viewBox="0 0 845 180"
          backgroundColor="#f0f0f0"
          foregroundColor="#ffffff">
          <rect x="76" y="164" rx="0" ry="0" width="2" height="3" />
          <rect x="35" y="166" rx="0" ry="0" width="115" height="0" />
          <rect x="15" y="15" rx="0" ry="0" width="100" height="150" />
          <rect x="130" y="30" rx="5" ry="5" width="175" height="10" />
          <rect x="130" y="70" rx="5" ry="5" width="80" height="10" />
          <rect x="420" y="15" rx="5" ry="5" width="120" height="45" />
          <rect x="430" y="135" rx="5" ry="5" width="100" height="30" />
          <rect x="412" y="90" rx="5" ry="5" width="135" height="10" />
        </ContentLoader>
      </Col>
    ));

  return <Row>{renderItems}</Row>;
};

export default CartSkeleton;
