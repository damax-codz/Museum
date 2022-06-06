import logo from './logo.svg';
import './App.css';
import Login from './components/login/login';
import Nav from './components/Navbar/Nav';
import Home from './components/home/Home';
import Shop from './components/shop/Shop';
import 'bootstrap/dist/css/bootstrap.min.css';
import Collection from './components/collection/Collection';
import Ticket from './components/ticket/Ticket';
import Member from './components/member/Member';
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Cart from './components/Cart/Cart';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/Museum/' element={<Login/>} />
      <Route path='/Museum/home' element={<Home/>} />
      <Route path='/Museum/shop' element={<Shop/>} />
      <Route path='/Museum/collection' element={<Collection/>} />
      <Route path='/Museum/ticket' element={<Ticket/>} />
      <Route path='/Museum/member' element={<Member/>} />
      <Route path='/Museum/cart' element={<Cart/>} />
    </Routes>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
