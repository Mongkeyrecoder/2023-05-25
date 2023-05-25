import 'bootstrap/dist/css/bootstrap.min.css';

import { Route,Routes,Link} from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';
import './App.css';

function App() {
  const [authenticate,setAuthenticate]=useState(false);
  useEffect(()=>{
    console.log('authenticate',authenticate);
  },[authenticate])
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path="/" element={<ProductAll  ></ProductAll>}/>
        <Route path="/login" element={<Login authenticate={authenticate} setAuthenticate={setAuthenticate}></Login>}/>
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>}/>
      </Routes>
    </div>
  );
}

export default App;
