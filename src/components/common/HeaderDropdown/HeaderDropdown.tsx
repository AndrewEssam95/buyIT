import { NavDropdown } from "react-bootstrap";
import { authLogout } from "@store/auth/authSlice";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useTranslation } from "react-i18next";

const HeaderDropdown = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);
  const { user } = useAppSelector((state) => state.registerAuth);
  const [t] = useTranslation("global");

  return (
    <NavDropdown
      title={`${t("header.hello")}, ${user?.firstName} ${user?.lastName}`}
      style={{
        fontSize: 14,
        color: theme === "dark" ? "#00ffff" : "#00000090",
        fontWeight: "bold",
        paddingTop: 5,
      }}>
      <NavDropdown.Item as={NavLink} to="profile" end>
        {t("header.user.profile")}
      </NavDropdown.Item>
      <NavDropdown.Item as={NavLink} to="profile/orders" end>
        {t("header.user.orders")}
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item
        as={NavLink}
        to={"/"}
        style={{ backgroundColor: "transparent", color: "black" }}
        onClick={() => {
          dispatch(authLogout());
        }}>
        {t("header.user.logOut")}
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default HeaderDropdown;
