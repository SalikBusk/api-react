import './App.css';

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import Navbar from './Components/Navbar/Navbar';
import Menu from './Components/Navbar/Menu';
import ProductPage from './pages/ProductPage';

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
        path: "/product/:id",
        element: <ProductPage/>,
      }
    ]
  }
])


function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
