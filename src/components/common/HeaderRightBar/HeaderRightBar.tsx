import CustomIcon from "../CustomIcon/CustomIcon";
import styles from "./styles.module.css";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { CiUser, CiShoppingCart, CiHeart } from "react-icons/ci";
import { useEffect } from "react";
import actGetWishlist from "@store/wishlist/act/actGetWishlist";
import { FaMoon, FaSun } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { themeToggler } from "@store/theme/themeSlice";
import i18next from "i18next";
import HeaderDropdown from "../HeaderDropdown/HeaderDropdown";
import Icon from "../Icon/Icon";
import { languageToggler } from "@store/language/languageSlice";
import { useTranslation } from "react-i18next";

const HeaderRightBar = () => {
  const dispatch = useAppDispatch();

  const currentTheme = useAppSelector((state) => state.theme.theme);
  const { accessToken } = useAppSelector((state) => state.registerAuth);
  const cartTotalQuantity = useAppSelector((state) => state.cart.totalQuantity);
  const wishlistCount = useAppSelector(
    (state) => state.wishlist.itemsId.length
  );
  const language = useAppSelector((state) => state.language.language);

  const [t] = useTranslation("global");

  const handleToggleTheme = () => {
    dispatch(themeToggler());
  };

  const handleChangeLanguage = (lang: "en" | "ar") => {
    i18next.changeLanguage(lang);
    dispatch(languageToggler(lang));
  };

  useEffect(() => {
    i18next.changeLanguage(language);

    if (accessToken) {
      dispatch(actGetWishlist("productsIds"));
    }
  }, [dispatch, accessToken, language]);

  return (
    <div className={styles.icons}>
      {
        <div className={styles.languageToggler}>
          <div>{t("header.currentLanguage")}</div>
          <Icon
            Component={MdLanguage}
            size={22}
            onClick={() =>
              handleChangeLanguage(language === "ar" ? "en" : "ar")
            }
          />
        </div>
      }
      <Icon
        Component={currentTheme === "dark" ? FaSun : FaMoon}
        size={18}
        onClick={handleToggleTheme}
      />
      <CustomIcon
        count={cartTotalQuantity}
        to="/cart"
        icon={<Icon Component={CiShoppingCart} />}
      />
      <CustomIcon
        count={wishlistCount}
        to="/wishlist"
        icon={<Icon Component={CiHeart} />}
      />
      {!accessToken ? (
        <CustomIcon to="/login" icon={<Icon Component={CiUser} />} />
      ) : (
        <HeaderDropdown />
      )}
    </div>
  );
};

export default HeaderRightBar;
