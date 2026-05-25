import { Box, Button, Grid, Stack, Typography } from "@mui/material";

export default function BeatGrid() {
    const beats = [...Array(12).keys()];
    const cell = <Box sx={{ border: "1px solid grey", height: 30, width: 30, backgroundColor: "lightgreen" }} />;
    
    return(
        <Grid 
            container
            spacing={0}
            sx={{ border: "1px solid grey", borderRadius: 2, width: "100%" }}
        >
            {cell}
            {cell}
            {cell}
            {cell}
            {cell}
            {cell}
            {cell}
            {cell}
            {cell}
            {cell}
            {cell}
            {cell}
        </Grid>
    )
}