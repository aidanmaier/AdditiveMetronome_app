import { Box, Button, Grid, Stack, Typography, Slider } from "@mui/material";
import BeatGrid from "./BeatGrid";
import VolumeOffRoundedIcon from '@mui/icons-material/VolumeOffRounded';

export default function OutputControl() {
    return(
        <Box 
      sx={{ 
        flexGrow: 1,
        border: "1px solid lightgrey", 
        borderRadius: 2,
        m: 2,
      }} 
    >
        <Grid 
        container 
        rowSpacing={1.5} 
        columnSpacing={4}
        sx={{ m: 2, alignItems: "center" }} 
      >
        <Stack 
          direction={"row"} 
          spacing={4}
          sx={{ p: 0, width: 315, height: 20, alignItems: "center" }} 
        >
            <Typography >
                Volume
            </Typography>
            <Slider 
                size="small"
                min={0}
                max={1}
                defaultValue={0.5}
            />
        </Stack>
        <Stack direction={"row"} spacing={4} sx={{ height: 30 }} >
          <Button variant="outlined" aria-label="Visual click" sx={{ width: 30}}>
            Flash
          </Button>
          <Button variant="outlined" aria-label="Sound subdivisions" sx={{ width: 30}}>
            Fill
          </Button >
          <Button 
            variant="outlined" 
            aria-label="Mute"
            startIcon={<VolumeOffRoundedIcon />} 
            sx={{ width: 30}} 
          />
        </Stack>
        <BeatGrid />
      </Grid>
    </Box>
    )
}