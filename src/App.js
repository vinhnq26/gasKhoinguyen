import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Detailbepgas from "./components/detailbepgas";
import listbepgas from "./components/listbepgas";
import Default from "./components/Default";
import Footer from "./components/Footer";
import SideNavBar from "./components/SideNav";
import { ToastContainer } from "react-toastify";
import { Context } from "./components/ProductContext";
import { useState } from "react";

function App() {
  const [addToCard, setAddToCard] = useState([]);

  return (
     <Context.Provider value={{addToCard,setAddToCard}}>
       <SideNavBar />
      <Navbar />
      <div>
        <ToastContainer />
      </div>
    
      <Switch className=''>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/detailsbepgas" component={Detailbepgas} />
        <Route path="/listbepgas" component={listbepgas} />
        <Route component={Default} />
      </Switch>
      <button
      type="button"
      className="btn btn-success btn-floating btn-lg mb-2 ml-2 shadow "
      id="btn-back-to-top"
      onClick={() => window.scrollTo(0, 0)}
    >
      <i className="fas fa-arrow-up"></i>
    </button>
      <Footer />
    </Context.Provider>
  );
}

export default App;
