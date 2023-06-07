import './App.css';
import { Route, Routes } from 'react-router';
import Products from './pages/Products';


function App() {
  return (
    <Routes>
      <Route index element={<Products/>}/>
    </Routes>
  );
}

export default App;
