import { Box, Grid, Stack, ButtonGroup, Typography, Slider } from "@mui/material";
import OutputButton from "./OutputButton";
import BeatGrid from "./BeatGrid";
// import VolumeOffRoundedIcon from '@mui/icons-material/VolumeOffRounded';

const outputButtons = [
  <OutputButton text="Mute" label="Mute"/>,
  <OutputButton text="Flash" label="Visual click"/>,
  <OutputButton text="Fill" label="Sound subdivisions"/>,
];

export default function OutputControl() {
  return(
    <Box 
      sx={{ 
        flexGrow: 1,
        border: "1px solid lightgrey", 
        borderRadius: 2,
        maxWidth: 450,
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
                max={100}
                defaultValue={50}
                valueLabelDisplay="auto"
            />
        </Stack>
        <Stack direction={"row"} spacing={4} sx={{ width: "100%", alignItems: "top" }} >
          <ButtonGroup 
            aria-label="Output control buttons"
            orientation="vertical" 
            sx={{ width: 60 }}
          >
            {outputButtons}
          </ButtonGroup>
          <BeatGrid />
        </Stack>
      </Grid>
    </Box>
  )
}