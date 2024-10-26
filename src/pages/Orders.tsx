import { Modal, Table } from "react-bootstrap";
import styles from "./styles.module.css";
import Card from "@components/common/Card/Card";
import useOrders from "@hooks/useOrders";

const Orders = () => {
  const {
    showModal,
    selectedOrder,
    handleViewProducts,
    handleCloseModal,
    ordersList,
  } = useOrders();

  return (
    <>
      <h1 className={styles.title}>My Orders</h1>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        animation={false}
        style={{ marginTop: 40 }}>
        <Modal.Header closeButton>
          <Modal.Title>Products Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedOrder.map((product) => {
            const { id, title, price, image, quantity } = product;
            return (
              <Card
                id={id as number}
                key={id}
                image={image}
                price={price}
                title={title}
                quantity={quantity}
              />
            );
          })}
        </Modal.Body>
      </Modal>

      <Table bordered striped hover>
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Items</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {ordersList.map((item) => (
            <tr key={item.id}>
              <td>#{item.id}</td>
              <td>
                {item.items.length}
                {" / "}
                <span
                  onClick={() => handleViewProducts(item.id)}
                  className={styles.productLink}>
                  Products Details
                </span>
              </td>
              <td>{item.subtotal.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Orders;
