import React from "react";
import Home from "./Home"
import RequestForm from "./RequestForm"
import ReplaceForm from "./ReplaceForm"
import PropertyRequestForm from "./PropertyRequestForm"
import Inventory from "./Inventory"
import ReactDOM from "react-dom";
import App from "./App"
import Dashboard from "./Dashboard"
import {BrowserRouter, Switch, Route} from "react-router-dom";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';

const Index = () => {
  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>

      <BrowserRouter>
        <Switch>
          <Route component={Dashboard} path="/dashboard" exact />
          <Route component={Home} path="/home" exact />
          <Route component={RequestForm} path="/requestform" exact />
          <Route component={ReplaceForm} path="/replaceform" exact />
          <Route component={PropertyRequestForm} path="/propertyrequestform" exact />
          <Route component={Inventory} path="/inventory" exact />
          <Route component={App} path="/" exact  />

        </Switch>
      </BrowserRouter>
      </MuiPickersUtilsProvider>
    </div>
  );
};

//export default Index;
ReactDOM.render(<Index />, document.getElementById("root"))
