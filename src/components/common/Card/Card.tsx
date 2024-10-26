import { memo, useEffect, useState } from "react";
import { Image, Spinner } from "react-bootstrap";
import styles from "./styles.module.css";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { addToCart } from "@store/cart/cartSlice";
import actWishToggle from "@store/wishlist/act/actWishToggle";
import LoginModal from "../LoginModal/LoginModal";

const {
  card,
  imageContainer,
  favorite,
  detailsContainer,
  text,
  row,
  activeIcon,
  disabledIcon,
  priceTag,
  darkShadow,
  lightShadow,
} = styles;

type TCardProps = {
  id: number;
  title: string;
  categoryPrefix?: string;
  price: number;
  image: string;
  maxQuantity?: number;
  quantity?: number;
  isLiked?: boolean;
  isAuthenticated?: boolean;
};

const Card = memo(
  ({
    title,
    categoryPrefix,
    price,
    image,
    id,
    maxQuantity,
    quantity,
    isLiked,
    isAuthenticated,
  }: TCardProps) => {
    const dispatch = useAppDispatch();
    const theme = useAppSelector((state) => state.theme.theme);

    const [isLoading, setIsLoading] = useState(false);
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const isDisabled = isAddedToCart || maxQuantity === quantity;

    useEffect(() => {
      const debounce = setTimeout(() => {
        setIsAddedToCart(false);
      }, 300);

      return () => clearTimeout(debounce);
    }, [isAddedToCart]);

    const wishToggleHandler = () => {
      if (isAuthenticated) {
        if (isLoading) return;

        setIsLoading(true);
        dispatch(actWishToggle(id))
          .unwrap()
          .then(() => setIsLoading(false))
          .catch(() => setIsLoading(false));
      } else {
        setShowModal(true);
      }
    };

    return (
      <>
        <LoginModal
          showModal={showModal}
          setShowModal={setShowModal}
          message="add this item to your wishlist"
        />
        <div
          className={`${card} ${theme === "dark" ? lightShadow : darkShadow}`}>
          <div className={imageContainer}>
            <Link to={`/products/${categoryPrefix}`}>
              <Image
                src={image}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Link>
            <div className={favorite} onClick={wishToggleHandler}>
              {isLoading ? (
                <Spinner
                  size="sm"
                  animation="border"
                  color="#ed5221"
                  variant="danger"
                />
              ) : isLiked ? (
                <IoMdHeart size={22} color="#ed5221" />
              ) : (
                <IoIosHeartEmpty size={22} color="#ed5221" />
              )}
            </div>
          </div>
          <div className={detailsContainer}>
            <div className={text}>
              <div className={row}>
                <FaStar color="#0f0" />
                <span>(11.6k Reviews)</span>
              </div>
              <p>{title}</p>
              <div className={row}>
                <b className={priceTag}>{price.toFixed(2)} EGP</b>
              </div>
            </div>
            <button
              disabled={isDisabled}
              className={isDisabled ? disabledIcon : activeIcon}
              onClick={() => {
                dispatch(addToCart(id));
                setIsAddedToCart(true);
              }}>
              {isAddedToCart ? (
                <Spinner size="sm" animation="border" color="white" />
              ) : (
                <CiShoppingCart size={22} color="#fff" />
              )}
            </button>
          </div>
        </div>
      </>
    );
  }
);

export default Card;
