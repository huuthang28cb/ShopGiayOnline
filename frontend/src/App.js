import React from "react";
import './App.css';
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';
import Register from './screens/Register';
import ProfileScreen from './screens/ProfileScreen';
import SingleProduct from './screens/SingleProduct';
import CartScreen from './screens/CartScreen';
import NotFound from './screens/NotFound';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import PrivateRouter from "./PrivateRouter";



function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <PrivateRouter path="/profile" component={ProfileScreen} />

        {/* Product */}
        <Route path='/products/:id' component={SingleProduct} />
        <Route path='/cart/:id?' component={CartScreen} />
        <Route path='/shipping' component={ShippingScreen} />
        <Route path='/payment' component={PaymentScreen} />
        <Route path='/placeorder' component={PlaceOrderScreen} />

        {/* Order */}
        <Route path='/order' component={OrderScreen} />

        {/* Not found */}
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
