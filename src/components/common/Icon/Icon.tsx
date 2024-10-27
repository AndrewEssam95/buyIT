import { useAppSelector } from "@store/hooks";
import { IconType } from "react-icons";

type TIconProps = {
  Component: IconType;
  size?: number;
  onClick?: () => void;
};

const Icon = ({ Component, size = 25, onClick }: TIconProps) => {
  const theme = useAppSelector((state) => state.theme.theme);

  return (
    <Component
      size={size}
      color={theme === "dark" ? "#f9f9f9" : "#00000085"}
      cursor="pointer"
      onClick={onClick}
    />
  );
};

export default Icon;
