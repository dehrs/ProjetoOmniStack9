import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/TelaInicial";
import Dashboard from "./pages/Dashboard";
import New from "./pages/New";
import Empresa from "./pages/LoginEmpresa";
import Cliente from "./pages/LoginCliente";
import List from "./pages/List";
import Reserva from "./pages/SolicitarReserva";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/empresa" exact component={Empresa} />
        <Route path="/cliente" exact component={Cliente} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/new" component={New} />
        <Route path="/list" component={List} />
        <Route path="/solicitarReserva" component={Reserva} />
      </Switch>
    </BrowserRouter>
  );
}
