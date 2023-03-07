import './App.css';
import Home from './components/pages/Home';
import Menpage from './components/pages/Menpage';
import Womenpage from './components/pages/Womenpage';
import Cartpage from './components/pages/Cartpage';
import Order from './components/pages/Order';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Forget from './components/pages/Forget';
import Newpassword from './components/pages/Newpassword';
import Notfound from './components/pages/Notfound';
import OrderSuccces from './components/pages/OrderSuccces';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Menpage" element={<Menpage />} />
          <Route exact path="/Womenpage" element={<Womenpage />} />
          <Route exact path="/Cartpage/:id/:type" element={<Cartpage />} />
          <Route exact path="/Order/:Price" element={<Order />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/Forget" element={<Forget />} />
          <Route exact path="/OrderSuccces" element={<OrderSuccces />} />
          <Route exact path="*" element={<Notfound />} />
          <Route exact path="/Newpassword/:token" element={<Newpassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
