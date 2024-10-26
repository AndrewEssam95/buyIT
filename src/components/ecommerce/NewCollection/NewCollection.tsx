import { Image } from "react-bootstrap";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const { container, title, text, button, leftSection, rightSection } = styles;

const NewCollection = () => {
  return (
    <section className={container}>
      <div className={leftSection}>
        <h1 className={title}>
          see our new <br />
          collection
        </h1>
        <Image
          src="../../../../public/assets/1719222144dbf867dbe4fb1ffbe348e2db344336bd.webp"
          style={{
            width: "100%",
            height: "80%",
            objectFit: "cover",
            borderRadius: "15px",
          }}
        />
      </div>
      <div className={rightSection}>
        <Image
          src="../../../../public/assets/1719222144dbf867dbe4fb1ffbe348e2db344336bd.webp"
          style={{
            width: "100%",
            height: "80%",
            objectFit: "cover",
            borderRadius: "15px",
          }}
        />
        <p className={text}>
          Discover our new collection now! Experience fresh styles and designs,
          perfect for updating your wardrobe with the latest trends.
        </p>
        <Link to="/products">
          <span className={button}>Buy Now</span>
        </Link>
      </div>
    </section>
  );
};

export default NewCollection;
