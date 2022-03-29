import React from "react";
import Dashboard from "../../layout/Dashboard";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import useAuthenticate from "../../util/Authenticate";
import { useParams } from "react-router-dom";

export default function ErrorPage(props) {

  useAuthenticate()
  const params = useParams();
  
  return (
    <Dashboard title={"Full Quote"} currentPage={"full_quote"} >
      <Grid container spacing={3}>
        <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <h1>Error : {props.message}</h1>
            </Paper>
        </Grid>
      </Grid>
    </Dashboard>
  );
}