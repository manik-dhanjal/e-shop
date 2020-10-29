
import React from "react"
import Layout from "./components/layout/Layout";
import HomeScreen from "./Screen/HomeScreen";
import ProductScreen from './Screen/ProductScreen'
import {BrowserRouter as Router,Route,Switch }from "react-router-dom"
const App=()=> {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/product/:id"  exact component={ProductScreen}/>
          <Route path="/" exact component={HomeScreen}/>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
