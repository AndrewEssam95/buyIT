import { Container, Row, Col, Card, Button } from "react-bootstrap";

const blogs = [
  {
    id: 1,
    title: "The Latest in Tech",
    image: "https://via.placeholder.com/300x200",
    excerpt:
      "Discover the latest trends and innovations in the world of technology.",
    date: "October 12, 2024",
  },
  {
    id: 2,
    title: "How to Boost Your Productivity",
    image: "https://via.placeholder.com/300x200",
    excerpt:
      "Learn practical tips and tricks to become more productive in your daily life.",
    date: "October 10, 2024",
  },
  {
    id: 3,
    title: "The Future of eCommerce",
    image: "https://via.placeholder.com/300x200",
    excerpt:
      "Explore how eCommerce is evolving and what to expect in the coming years.",
    date: "October 8, 2024",
  },
];

const Blogs = () => {
  return (
    <Container className="my-5">
      <Row className="text-center mb-4">
        <Col>
          <h2>Our Latest Blogs</h2>
          <p>
            Stay updated with the latest news, tips, and insights from our blog.
          </p>
        </Col>
      </Row>
      <Row>
        {blogs.map((blog) => (
          <Col md={4} key={blog.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={blog.image} />
              <Card.Body>
                <Card.Title>{blog.title}</Card.Title>
                <Card.Text>{blog.excerpt}</Card.Text>
                <Card.Text className="text-muted">{blog.date}</Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blogs;
