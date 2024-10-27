import { Container } from "react-bootstrap";
import styles from "./styles.module.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Navbar from "../CustomNavbar/CustomNavbar";

import {
  SlSocialPintarest,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const {
  footerContainer,
  wrapper,
  left,
  right,
  footerH1,
  footerLink,
  icons,
  icon,
  copyrights,
  responsiveText,
  border,
} = styles;

const Footer = () => {
  const [t] = useTranslation("global");

  return (
    <footer className={footerContainer}>
      <Container className={wrapper}>
        <div className={left}>
          <h1 className={`${footerH1} ${responsiveText}`}>
            {t("footer.title")}
          </h1>
          <div className={icons}>
            <Link to="#" className={icon}>
              <SlSocialFacebook size={20} color="#fff" />
            </Link>
            <Link to="#" className={icon}>
              <SlSocialInstagram size={20} color="#fff" />
            </Link>
            <Link to="#" className={icon}>
              <FaXTwitter size={20} color="#fff" />
            </Link>
            <Link to="#" className={icon}>
              <SlSocialPintarest size={20} color="#fff" />
            </Link>
          </div>
          <Link to="/" className={footerLink}>
            {t("footer.button")}
            <HiOutlineArrowNarrowRight />
          </Link>
        </div>
        <div className={border} />
        <div className={right}>
          <Logo light />
          <Navbar flexCol={true} light={true} />
        </div>
      </Container>
      <div className={copyrights}>{t("footer.copyrights")}</div>
    </footer>
  );
};

export default Footer;
