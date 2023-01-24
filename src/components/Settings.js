import { Button, ButtonGroup, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export default function Settings() {
    const [open, setOpen] = useState(false);
    function handleClose() {
        setOpen(false);
    }
    return(
        <>
        <Grid container px={12} mt={7}>
            <Grid container item justifyContent='center'>
                <Typography variant='h5'>Charging settings</Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6">Charging Mode: </Typography>
            </Grid>
            <Grid item>
                <ButtonGroup variant="text">
                    <Button>Full Charge</Button>
                    <Button onClick={() => setOpen(true)}>Custom Charge</Button>
                </ButtonGroup>
            </Grid>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Fill the following details</DialogTitle>
                <DialogContent>
                    <Grid container p={2} spacing={1}>
                        <Grid item>
                        <TextField
                            autoFocus
                            label="No. of units"
                            placeholder='in units'
                            name='units'
                        />
                        </Grid>
                        <Grid item>
                        <TextField
                            label="Time to charge"
                            placeholder='in hrs'
                            name='time'
                        />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Confirm</Button>
                </DialogActions>
            </Dialog>
 
        </Grid>
        </>
    )
}