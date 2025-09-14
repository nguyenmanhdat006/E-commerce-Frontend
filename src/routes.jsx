import { createBrowserRouter  } from "react-router-dom";    
import Shop from "./Shop";
import ProductListPage from "./pages/ProductListPage/ProductListPage.jsx";
import ProductDetails from "./pages/ProductDetailPage/ProductDetails.jsx";
import ShopApplicationWrapper from "./pages/ShopApplicationWrapper.jsx";
 

const router = createBrowserRouter([
    {
        path: "/",
        element: <ShopApplicationWrapper />,
        children: [
            {
                path: "/",
                element: <Shop />
            },
            {
                path: "/womens",
                element: <ProductListPage categoryType="WOMEN" />
            },
            {
                path: "/men",
                element: <ProductListPage categoryType="MEN" />
            },
            {
                path: "/product/:productId",
                element: <ProductDetails />
            }
        ]
    },
    

]);

export default router;