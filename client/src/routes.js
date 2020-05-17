import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { StatsPage } from "./pages/StatsPage";
import { AuthPage } from "./pages/AuthPage";

export const userRoutes = (isAuthenicated) => {
    if (isAuthenicated) {
        return (
            <Switch>
                <Route path="/stats" exact>
                    <StatsPage />
                </Route>
                <Redirect to="/stats" />
            </Switch>
        );
    }

    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    );
};
