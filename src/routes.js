import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Feed from './pages/Feed';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Feed} />
            </Switch>
        </BrowserRouter>
    );
}