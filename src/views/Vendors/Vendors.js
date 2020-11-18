import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
  CreatedYear,
  TotalUsers, 
  TotalUsersByMonth,
  TotalUsersByWeek,
  GraficUsersUnfinished,
  LatestSales,
  LatestOrders,
  LatestOrdersWorse
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Vendors = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={6}
          md={6}
          xl={6}
          xs={12}
        >
          <LatestOrders />
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          xl={6}
          xs={12}
        >
          <LatestOrdersWorse />
        </Grid>
      </Grid>
    </div>
  );
};

export default Vendors;
