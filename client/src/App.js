import './App.css';
import { Route, Routes } from 'react-router';
import Products from './pages/Products';
import SinglePage from './pages/SinglePage';


function App() {
  return (
    <Routes>
      <Route index element={<Products/>}/>
      <Route path='/product/:id' element={<SinglePage/>}/>
    </Routes>
  );
}

export default App;
