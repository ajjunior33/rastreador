import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom'


import Logon from './pages/Logon';
import Forgout_Password from './pages/Forgout_Password';
import Solicitation from './pages/Solicitation';
import Dashboard from './pages/Dashboard';

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Logon} exact />
                <Route path="/forgout_password" component={Forgout_Password} />
                <Route path="/solicitation" component={Solicitation} />
                <Route path="/dashboard" component={Dashboard} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;