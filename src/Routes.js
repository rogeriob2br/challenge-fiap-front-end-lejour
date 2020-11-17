import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Dashboard as DashboardView,
  ProductList as ProductListView,
  Typography as TypographyView,
  Icons as IconsView,
  Account as AccountView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView,
  Vendors as VendorsView,
  UserList as UserListView,
  Users as UsersView,
  Weddings as WeddingsView,
  Invoices as InvoicesView,
  Appointment as AppointmentView
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/Vendors"
      />
      <RouteWithLayout
        component={VendorsView}
        exact
        layout={MainLayout}
        path="/vendors"
      />
      <RouteWithLayout
        component={UsersView}
        exact
        layout={MainLayout}
        path="/users"
      />
      <RouteWithLayout
        component={UserListView}
        exact
        layout={MainLayout}
        path="/userlist"
      />
      <RouteWithLayout
        component={WeddingsView}
        exact
        layout={MainLayout}
        path="/weddings"
      />
      <RouteWithLayout
        component={InvoicesView}
        exact
        layout={MainLayout}
        path="/invoices"
      />
      <RouteWithLayout
        component={AppointmentView}
        exact
        layout={MainLayout}
        path="/appointment"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={ProductListView}
        exact
        layout={MainLayout}
        path="/products"
      />
      <RouteWithLayout
        component={TypographyView}
        exact
        layout={MainLayout}
        path="/typography"
      />
      <RouteWithLayout
        component={IconsView}
        exact
        layout={MainLayout}
        path="/icons"
      />
      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/account"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/settings"
      />
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/sign-up"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/sign-in"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
