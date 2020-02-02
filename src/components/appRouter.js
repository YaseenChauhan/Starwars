import React, {Fragment} from 'react';
import {Switch, Route} from "react-router-dom";
import LoginComponent from "./Login/Login";
import DashBoardComponent from './Dashboard/Dashboard';

class AppRouterComponent extends React.Component {

    render() {
        return (
            <Fragment>
                    <Switch>
                    <Route exact
                               path={"/"}
                               component={LoginComponent}
                        />
                        <Route exact
                                      path={"/dashboard"}
                                      component={DashBoardComponent}
                        />
                    </Switch>
            </Fragment>
        )
    }
}


export default AppRouterComponent;