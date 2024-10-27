import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useAppSelector } from "@store/hooks";

const { logo, span, responsive } = styles;

const Logo = ({ light = false }: { light?: boolean }) => {
  const theme = useAppSelector((state) => state.theme.theme);

  return (
    <Link to="/">
      <div
        className={`${responsive} ${logo} ${
          light || theme === "dark" ? "text-white" : "text-black"
        }`}>
        Buy <span className={span}>IT</span>
      </div>
    </Link>
  );
};

export default Logo;
