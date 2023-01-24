import { Grid, Link } from "@mui/material";
import React from "react";

function Navbar() {
    return(
        <>
            <Grid mt={3} container justifyContent='space-around'>
                <Grid item>
                    <Link href='#' variant="h5">Authentication</Link>
                </Grid>
                <Grid item>
                    <Link href='#' variant="h5">Charging Station</Link>
                </Grid>
                <Grid item>
                    <Link href='#' variant="h5">Transactions</Link>
                </Grid>
            </Grid>
        </>
    )
}

export default Navbar;