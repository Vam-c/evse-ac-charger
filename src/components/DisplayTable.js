import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import Settings from "./Settings";

export default function DisplayTable() {
    const currentInAmps = 10;
    const voltageInVolts = 30;  
    const powerInkW = currentInAmps * voltageInVolts;
    const statusOfConnection = true;
    const unitsConsumed = 5;

    return(
        <>
        <Grid container mt={5}>
            {/* Top heading section */}
            <Grid container item xs={12} justifyContent='center' mb={4}>
                <Typography variant="h4">Status of Connection</Typography>
            </Grid>
            {/* Table section */}
            <Grid container pl={'20%'}>
                <Grid item xs={6}>
                    <Typography variant='h6'>Current: {currentInAmps} amps</Typography>
                </Grid> 
                <Grid item xs={6}>
                    <Typography variant='h6'>Power: {powerInkW} kW</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h6">Voltage: {voltageInVolts} volt</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h6">Unit consumption: {unitsConsumed} kWh</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant='h6'>Status: {statusOfConnection ? 'Connected' : 'Disconnected'}</Typography>
                </Grid>
            </Grid>
            {/* Bottom details */}
            <Settings />
            <Grid item container justifyContent='end' mr={50}>
                <Button color="success" variant="outlined">Start Charge</Button>
            </Grid>
            

        </Grid>
        </>
    )
}