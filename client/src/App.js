import './App.css';

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import Navbar from './Components/Navbar/Navbar';
import ProductPage from './pages/ProductPage';
import Menu from './Components/Cart/Menu';
import ShopPage from './pages/ShopPage';
import { CartProvider } from './Hooks/useCart';

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Menu/>
      <Outlet/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: "/shop",
        element: <ShopPage/>,
      },
      {
        path: "shop/product/:id",
        element: <ProductPage/>,
      },
    ]
  }
])


function App() {
  return (
    <div className="App">
      <CartProvider>
        <RouterProvider router={router}/>
      </CartProvider>
    </div>
  );
}

export default App;
