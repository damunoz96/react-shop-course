import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ShopProvider } from '../../Context'
import { Home } from '../home'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { NotFound } from '../NotFound'
import { SignIn } from '../SignIn'
import './App.css'
import { Navbar } from '../../Components/Navbar'
import { CheckOutSideMenu } from '../../Components/CheckoutSideMenu'


function App() {
  return (
    <>
    <ShopProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clothes" element={<Home />} />
          <Route path="/Electronics" element={<Home />} />
          <Route path="/Furnitures" element={<Home />} />
          <Route path="/Toys" element={<Home />} />
          <Route path="/Others" element={<Home />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/my-order" element={<MyOrder />} />
          <Route path="/my-orders/last" element={<MyOrder />} />
          <Route path="/my-orders/:id" element={<MyOrder />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
        <Navbar/>
        <CheckOutSideMenu/>
      </BrowserRouter>
    </ShopProvider>
    </>
  );
}

export default App
