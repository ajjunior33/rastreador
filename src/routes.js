import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom'


import Logon from './pages/Logon';
import Forgout_Password from './pages/Forgout_Password';
import Solicitation from './pages/Solicitation';
import Dashboard from './pages/Dashboard';
import MyCars from './pages/MyCars';
import DetailsCar from './pages/DetailsCar';



function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Logon} exact />
                <Route path="/forgout_password" component={Forgout_Password} />
                <Route path="/solicitation" component={Solicitation} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/mycars" component={MyCars} />
                <Route path="/details_car/:placa" component={DetailsCar} />
               {/* <Route path="404" component={Page404} />
                <Route path="*" to="/404" /> */}
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;