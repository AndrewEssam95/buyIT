import { NavDropdown } from "react-bootstrap";
import CustomIcon from "../CustomIcon/CustomIcon";
import styles from "./styles.module.css";
import { useAppDispatch, useAppSelector } from "@store/hooks";

import { CiUser, CiShoppingCart, CiHeart } from "react-icons/ci";
import { authLogout } from "@store/auth/authSlice";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import actGetWishlist from "@store/wishlist/act/actGetWishlist";
import { FaMoon, FaSun } from "react-icons/fa";
import { themeToggler } from "@store/theme/themeSlice";

const HeaderRightBar = () => {
  const dispatch = useAppDispatch();

  const currentTheme = useAppSelector((state) => state.theme.theme);
  const { user, accessToken } = useAppSelector((state) => state.registerAuth);
  const cartTotalQuantity = useAppSelector((state) => state.cart.totalQuantity);
  const wishlistCount = useAppSelector(
    (state) => state.wishlist.itemsId.length
  );
  const theme = useAppSelector((state) => state.theme.theme);

  const handleToggleTheme = () => {
    dispatch(themeToggler());
  };

  useEffect(() => {
    if (accessToken) {
      dispatch(actGetWishlist("productsIds"));
    }
  }, [dispatch, accessToken]);

  return (
    <div className={styles.icons}>
      {currentTheme === "dark" ? (
        <FaSun
          size={18}
          color={theme === "dark" ? "#f9f9f9" : "#00000085"}
          cursor="pointer"
          onClick={handleToggleTheme}
        />
      ) : (
        <FaMoon
          size={18}
          color={theme === "dark" ? "#f9f9f9" : "#00000085"}
          cursor="pointer"
          onClick={handleToggleTheme}
        />
      )}
      <CustomIcon
        count={cartTotalQuantity}
        to="/cart"
        icon={
          <CiShoppingCart
            size={25}
            color={theme === "dark" ? "#f9f9f9" : "#00000085"}
            cursor="pointer"
          />
        }
      />
      <CustomIcon
        count={wishlistCount}
        to="/wishlist"
        icon={
          <CiHeart
            size={25}
            color={theme === "dark" ? "#f9f9f9" : "#00000085"}
            cursor="pointer"
          />
        }
      />
      {!accessToken ? (
        <CustomIcon
          to="/login"
          icon={
            <CiUser
              size={25}
              color={theme === "dark" ? "#f9f9f9" : "#00000085"}
              cursor="pointer"
            />
          }
        />
      ) : (
        <NavDropdown
          title={`Hello, ${user?.firstName} ${user?.lastName}`}
          style={{
            fontSize: 14,
            color: theme === "dark" ? "#00ffff" : "#00000090",
            fontWeight: "bold",
            paddingTop: 5,
          }}>
          <NavDropdown.Item as={NavLink} to="profile" end>
            Profile
          </NavDropdown.Item>
          <NavDropdown.Item as={NavLink} to="profile/orders" end>
            Orders
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item
            as={NavLink}
            to={"/"}
            style={{ backgroundColor: "transparent", color: "black" }}
            onClick={() => {
              dispatch(authLogout());
            }}>
            Log out
          </NavDropdown.Item>
        </NavDropdown>
      )}
    </div>
  );
};

export default HeaderRightBar;
