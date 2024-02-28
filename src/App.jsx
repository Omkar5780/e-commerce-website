import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Dashboard from './Components/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './Components/Products'
import Landing from './Components/Landing'
import AddProducts from './Components/AddProducts'
import Cart from './Components/Cart'
import Materialicon from './Components/Materialicon'
import Orderitem from './Components/Orderitem'

import UserLogin from './Components/UserLogin'
import Bill from './Components/Bill'
// import Userstate from './context/Usestate'
import Usestate from './context/Usestate'

// import Usestate from './context/Usestate' 
// im



// import { Home } from '@mui/icons-material'


function App() {


  return (
    <>
    {/* <Usestate>       */}
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='Navbar' element={<Navbar />} />
        <Route path='product' element={<Products />} />
        <Route path='cart' element={<Cart />} />
        <Route path='cart/:id' element={<Cart />} />
        <Route path='order' element={<Orderitem />} />
        <Route path='userLogin' element={<UserLogin />} />
        <Route path='bill' element={<Bill />} />
        <Route path='admin' element={<Landing />}>
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin/products' element={<Products />} />
          <Route path='/admin/AddProducts' element={<AddProducts />} />
          <Route path='/admin/AddProducts/:id' element={<AddProducts />} />
        </Route>
      </Routes>
      {/* </Usestate> */}

      {/* <User/> */}
      {/* <Materialicon/> */}



    </>
  )
}

export default App
