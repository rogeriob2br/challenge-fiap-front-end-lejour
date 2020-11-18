import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
  Budget,
  TotalUsers,
  WeddingByMonth,
  ListWeddingsWeek,
  ListWithoutBudget, 
  TasksProgress,
  TotalProfit,
  LatestSales,
  UsersByDevice,
  LatestOrders
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Weddings = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={4}
          sm={6}
          xl={4}
          xs={12}
        >
          <Budget />
        </Grid>
        <Grid
          item
          lg={4}
          sm={6}
          xl={4}
          xs={12}
        >
          <TotalUsers />
        </Grid>
        <Grid
          item
          lg={4}
          sm={6}
          xl={4}
          xs={12}
        >
          <WeddingByMonth />
        </Grid>
        <Grid
          item
          lg={4}
          md={9}
          xl={4}
          xs={12}
        >
          <LatestOrders />
        </Grid>
        <Grid
          item
          lg={4}
          md={9}
          xl={4}
          xs={12}
        >
          <ListWeddingsWeek />
        </Grid>
        <Grid
          item
          lg={4}
          md={9}
          xl={4}
          xs={12}
        >
          <ListWithoutBudget />
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={4}
          xs={12}
        >
          <UsersByDevice />
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={4}
          xs={12}
        >
          <UsersByDevice />
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={4}
          xs={12}
        >
          <UsersByDevice />
        </Grid>
      </Grid>
    </div>
  );
};

export default Weddings;
