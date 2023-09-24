import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import { routeLinks } from "../utils/constants/routes";
import Layout from "../components/Layout";
import PageOne from "../pages/PageOne";
import PageTwo from "../pages/PageTwo";
import PageThree from "../pages/PageThree";
import PageFour from "../pages/PageFour";
import PageFive from "../pages/PageFive";



const AppRoutes: React.FC = () => {
  const { home, pageOne, pageTwo, pageThree, pageFour, pageFive} = routeLinks;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={home.path} element={<Home />} />
          <Route path={pageOne.path} element={<PageOne />}></Route>
          <Route path={pageTwo.path} element={<PageTwo />}></Route>
          <Route path={pageThree.path} element={<PageThree />}></Route>
          <Route path={pageFour.path} element={<PageFour />}
          ></Route>
<Route path={pageFive.path} element={ <PageFive/>} />
 </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
