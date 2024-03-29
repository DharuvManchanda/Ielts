import { Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
function App() {
  return (
  <>
<Navbar/>
<Routes>
<Route path='/' element={<Home/>}/>
  <Route path='/cart' element={<Cart/>}/>
</Routes>
</>
  );
}

export default App;
