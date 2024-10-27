import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.css";
import { useAppSelector } from "@store/hooks";
import { useTranslation } from "react-i18next";

const { navBar, navLink } = styles;

const navLinks = [
  { title: "home", path: "/" },
  { title: "about", path: "/about" },
  { title: "blogs", path: "/blogs" },
  { title: "contact", path: "/contact" },
];

const CustomNavbar = ({
  flexCol = false,
  light = false,
}: {
  flexCol?: boolean;
  light?: boolean;
}) => {
  const { pathname } = useLocation();
  const theme = useAppSelector((state) => state.theme.theme);

  const [t] = useTranslation("global");

  const textColor = (path: string) => {
    if (theme === "dark" || light) {
      return pathname === path ? "text-success" : "text-light";
    } else if (theme === "light" || !light) {
      return pathname === path ? "text-black" : "text-black-50";
    }
  };

  return (
    <nav
      className={`${navBar} ${
        flexCol ? "flex-column pt-4 px-1 align-items-start" : "flex-row"
      }`}>
      {navLinks.map((link, index) => {
        return (
          <Link
            className={`${navLink} ${textColor(link.path)}`}
            key={index}
            to={link.path}>
            {t(`header.navbar.${[link.title]}`)}
          </Link>
        );
      })}
    </nav>
  );
};

export default CustomNavbar;
