import React from 'react';
import { Route , Switch } from 'react-router-dom'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Detailbepgas from './components/detailbepgas';
import listbepgas from './components/listbepgas'; 
import Default from './components/Default';
import SimpleMenu from "../src/components/menu/menu"


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <SimpleMenu />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/detailsbepgas" component={Detailbepgas} />
        <Route path="/listbepgas" component={listbepgas} />
        <Route component={Default} />
      </Switch>
    </React.Fragment>
  ); 
}

export default App;
