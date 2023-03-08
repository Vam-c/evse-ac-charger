import { Grid, Typography } from '@mui/material';
import React from 'react';
import DisplayTable from '../components/DisplayTable';
import Navbar from '../components/Navbar';

export default function Dashboard() {
    return(
        <>
            <Grid mt={4} container item justifyContent='center'>
                <Typography variant='h3' sx={{display: 'inline',margin: 'auto'}}>AC Charger for EV</Typography>
            </Grid>
            <Navbar />
            <DisplayTable />

        </>
    )
}