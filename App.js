import React from "react";
import Header from "./componentes/header/header.js";
import Productos from "./componentes/productos/productos.js";
import Carrito from "./componentes/Carrito";
import DataProvider from './componentes/DataProvider';
import BrowserRouter as Router from "react-router-dom";
import Pages from "./componentes/Page.js";
import 'boxicons';


function App() {
  return (
    <DataProvider>
    <div className ="App">
    <Router>
    <Header />
    <Productos />
    <Carrito />
    <Pages />
    </Router>
    </div>
    );
}

export default App;