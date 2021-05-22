import React from "react";
import "./App.css";
import {Route, Switch} from "react-router-dom";
import ProductPage from "./components/ProductPage";
import {MainPage} from "./components/MainPage";
import {Nav} from "./components/Nav";
import {ProductsPage} from "./components/ProductsPage";
import OrderPage from "./components/OrderPage";
import LoginComponent from "./components/LoginComponent";
import {Cart} from "./components/Cart";
import Product from "./components/Product"

interface State {
}

interface Props {
}

export const App: React.FC = props => {

    return (
        <div className="App">
            <Nav/>
            <Switch>
                <Route path="/" exact component={MainPage}/>
                <Route path="/product/:id" exact component={ProductPage}/>
                <Route path="/products" exact component={ProductsPage}/>
                <Route path="/cart" exact component={Cart}/>
                <Route path="/order-page" exact component={OrderPage}/>
                <Route path="/login" exact component={LoginComponent}/>
                <Route path="/product" exact component={Product} />
            </Switch>
        </div>
    );

}

export default App;
