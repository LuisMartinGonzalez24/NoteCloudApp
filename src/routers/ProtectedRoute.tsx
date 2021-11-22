import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';

type ProtectedRouteProps = {
    path: string;
    isLogged: boolean;
} & RouteProps;

export const ProtectedRoute = ({ isLogged, path, ...restProps }: ProtectedRouteProps) => {
    if (isLogged) {
        return <Route path={path} {...restProps} />;
    } else {
        return <Redirect to={'/auth/login'} />;
    }
};