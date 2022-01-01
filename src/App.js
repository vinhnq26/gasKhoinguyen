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
import Modal from './components/Modal';
import SimpleMenu from "../src/components/menu/menu"
import { colors } from '@material-ui/core';


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
      <Modal />  
    </React.Fragment>
  ); 
}

export default App;
