import React, { Component, Fragment } from 'react';
import Header from '../Header/Header';
import Stars from '../Stars/Stars';
import './Dashboard.css';
class Dashboard extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Stars />
            </Fragment>
        )
    }
}

export default Dashboard;
