import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { routeLinks, routeLinksType } from "../../utils/constants/routes";

const Layout: React.FC = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const navigatePageValidate = (comparison: number) => {
    for (const item in routeLinks) {
      const keyItem = item as routeLinksType;
      if (routeLinks[keyItem].number === comparison) {
        navigate(routeLinks[keyItem].path);
        break;
      }
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;

    if (event.key === "ArrowLeft") {
      for (const route in routeLinks) {
        const key = route as routeLinksType;

        if (routeLinks[key].path === location.pathname) {
          const numberPage = routeLinks[key].number;
          const previousPage = numberPage - 1;

          if (numberPage === 1) return;

          navigatePageValidate(previousPage);
          break;
        }
      }
    } else if (event.key === "ArrowRight") {
      for (const route in routeLinks) {
        const key = route as routeLinksType;

        if (routeLinks[key].path === location.pathname) {
          const numberPage = routeLinks[key].number;
          const nextPage = numberPage + 1;

          if (numberPage === Object.keys(routeLinks).length) return;

          navigatePageValidate(nextPage);
          break;
        }
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [location]); //eslint-disable-line

  return (
    <main className="w-screen h-screen bg-black p-8 overflow-hidden">
      <div className="w-full max-w-[2000px] h-full block mx-auto">
      <Outlet />
      </div>
    </main>
  );
};

export default Layout;
