import { Outlet, useLocation } from "react-router-dom";
import { Footer, Header } from "../../components";
import { useLayoutEffect } from "react";
import "../../styles/globals.css";
import { useAppSelector } from "@store/hooks";

const MainLayout = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  const { pageDirection } = useAppSelector((state) => state.language);
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div className={`${theme} ${pageDirection}`}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
