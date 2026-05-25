// import * as React from 'react';
import { Box, Button, Grid, Stack, Slider, Typography } from "@mui/material";
import NumberField from "./NumberField";
import NumberDisplay from "./NumberDisplay";
import ChangeHistoryRoundedIcon from '@mui/icons-material/ChangeHistoryRounded';
import CropSquareRoundedIcon from '@mui/icons-material/CropSquareRounded';
// import { MusicNote } from "@mui/icons-material";

export default function TempoControl() {

  return (
    <Box 
      sx={{ 
        flexGrow: 1,
        border: "1px solid lightgrey", 
        borderRadius: 2,
        m: 2
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
                Tempo
            </Typography>
            <Slider 
                size="small"
                min={20}
                max={240}
                defaultValue={60}
            />
        </Stack>
        <Stack direction={"row"} spacing={4} sx={{ alignItems: "center" }} >
            <NumberField 
              // min={20} 
              // max={240} 
              // defaultValue={60} 
            />
          <Stack direction={"row"} spacing={2} >
            <Stack direction={"row"} >
              <CropSquareRoundedIcon htmlColor="green" />
              <NumberDisplay value={20}/>  
            </Stack>
            <Stack direction={"row"} >
              <ChangeHistoryRoundedIcon htmlColor="orangered" />
              <NumberDisplay value={240}/>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction={"row"} spacing={4} >
          <Button 
            variant="outlined" 
            aria-label="Tap tempo" 
            sx={{ width: 90, height: 50, boxShadow: 1 }}
          >
            TAP
          </Button>
          <Button variant="contained" aria-label="Start metronome" sx={{ width: 170, height: 50 }}>
            START
          </Button>
        </Stack>
      </Grid>
    </Box>
  );
}