import '../Styles/style.css';



import Nav from "./Nav";
import {BrowserRouter, Route,Switch} from "react-router-dom";
import Home from "../Pages/Home";
import Category from "../Pages/Category";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Products from "../Pages/Products";
import ProductDesc from "../Pages/ProductDesc";
import Basket from "../Pages/Basket";
import '../Styles/responsive.css';
import NotFound from "../Pages/404";
import SubscribeSection from "./SubscribeSection";
import Footer from "./Footer";
import React from "react";
import {lazy} from "react";
import reducer from "../redux/Reducers/reducer";







function App() {

    const Home = lazy(()=>import('./../Pages/Home'));
    const Category = lazy(()=>import('./../Pages/Category'));
    const Products = lazy(()=>import('./../Pages/Products'));
    const ProductDesc = lazy(()=>import('./../Pages/ProductDesc'));
    const About = lazy(()=>import('./../Pages/About'));
    const Contact = lazy(()=>import('./../Pages/Contact'));
    const Basket = lazy(()=>import('./../Pages/Basket'));
    const NotFound = lazy(()=>import('./../Pages/404'));





  return (

    <div className="App">

        <BrowserRouter>



            <Nav></Nav>
            <Switch>
                <Route path='/' exact='/' component={Home}>

                </Route>
                <Route path='/home' component={Home}>

                </Route>

                <Route path='/category' component={Category}>

                </Route>

                <Route path='/about' component={About}>
                    <About></About>
                </Route>

                <Route path='/contact' component={Contact}>

                </Route>


                <Route path='/products' component={Products}>

                </Route>

                <Route path='/basket' component={Basket}>

                </Route>

                <Route path='/productItem/:id' component={ProductDesc}>

                </Route>


                <Route path='' component={NotFound}>

                </Route>









            </Switch>
            <SubscribeSection></SubscribeSection>
            <Footer></Footer>
        </BrowserRouter>



    </div>

  );
}

export default App;
