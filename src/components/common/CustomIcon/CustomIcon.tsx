import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const { cartCounter, pumpingEffect, cartContainer } = styles;

const CustomIcon = ({
  count,
  to,
  icon,
}: {
  count?: number;
  to: string;
  icon: React.ReactNode;
}) => {
  const [isAnimated, setIsAnimated] = useState(false);

  const quantityStyle = `${cartCounter} ${isAnimated ? pumpingEffect : ""}`;

  useEffect(() => {
    if (!count) {
      return;
    }
    setIsAnimated(true);
    const debounce = setTimeout(() => {
      setIsAnimated(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [count]);

  return (
    <div className={cartContainer}>
      {count && count > 0 ? <div className={quantityStyle}>{count}</div> : null}
      <Link to={to}>{icon}</Link>
    </div>
  );
};

export default CustomIcon;
