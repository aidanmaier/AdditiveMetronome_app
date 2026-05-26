import {useState} from 'react';
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import NumberField from "./NumberField";
import NumberDisplay from "./NumberDisplay";
import TempoSlider from './TempoSlider';
import ChangeHistoryRoundedIcon from '@mui/icons-material/ChangeHistoryRounded';
import CropSquareRoundedIcon from '@mui/icons-material/CropSquareRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import StopRoundedIcon from '@mui/icons-material/StopRounded';
// import { MusicNote } from "@mui/icons-material";

export default function TempoControl() {
  const [playState, setPlayState] = useState(false); // playButton state
  const [tempo, setTempo] = useState(120); // tempo state

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
            <Typography>
                Tempo
            </Typography>
            <TempoSlider 
              min={20}
              max={240}
              default={120}
              onChange={(v: number) => setTempo(v)}
            />
        </Stack>
        <Stack direction={"row"} spacing={4} sx={{ alignItems: "center" }} >
          <Grid 
            container
            rowSpacing={1.5} 
            columnSpacing={4}
            // sx={{ alignItems: "center" }} 
          >
            <NumberField 
              // min={20} 
              // max={240} 
              // defaultValue={60} 
            />
            <Button 
              variant="outlined" 
              aria-label="Tap tempo" 
              sx={{ width: 90, height: 50, boxShadow: 1 }}
            >
              TAP
            </Button>
          </Grid>
          <Grid 
            container
            rowSpacing={1.5} 
            columnSpacing={4}
          >
            <Stack direction={"row"} spacing={2} >
              <Stack direction={"row"} >
                <CropSquareRoundedIcon htmlColor="green" />
                <NumberDisplay 
                  id={"shortBeatDisplay"} 
                  value={Math.round(tempo / 2)}
                />  
              </Stack>
              <Stack direction={"row"} >
                <ChangeHistoryRoundedIcon htmlColor="orangered" />
                <NumberDisplay 
                  id={"longBeatDisplay"}
                  value={Math.round(tempo / 3)}
                />
              </Stack>
            </Stack>
            <Button 
              id='playButton'
              variant="contained" 
              aria-label="Start metronome" 
              sx={{ width: 170, height: 50 }}
              onClick={() => setPlayState(!playState)} // binary state
            >
              {playState ? 
                <StopRoundedIcon /> :
                <PlayArrowRoundedIcon />
              }
            </Button>
          </Grid>
        </Stack>
      </Grid>
    </Box>
  );
}