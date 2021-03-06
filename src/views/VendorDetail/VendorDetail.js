import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
  Budget,
  AccountProfile,
  CreatedYear,
  TotalUsers, 
  TotalUsersByMonth,
  TotalUsersByWeek,
  GraficUsersUnfinished,
  LatestSales,
  LatestOrders
} from './components';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const VendorDetail = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={3}
          md={6}
          xl={3}
          xs={12}
        >
          <AccountProfile />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <TotalUsers />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <CreatedYear />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >   
          <TotalUsersByMonth />
        </Grid>
        <Grid
          item
          lg={9}
          md={9}
          xl={9}
          xs={12}
        >
          <LatestSales />
        </Grid> 
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >   
          <Budget />
        </Grid>
      </Grid>
    </div>
  );
};

export default VendorDetail;
