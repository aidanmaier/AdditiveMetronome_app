import { Box, Grid, Stack, Typography } from "@mui/material";
import BeatBox from "./BeatBox";
import AddBeatBox from "./AddBeatBox";

export default function PatternControl() {
  let patternLength = 12;

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
                Pattern ({patternLength} beats)
            </Typography>
        </Stack>
        <Grid 
          container 
          spacing={1}
          sx={{ alignItems: "center" }} 
        >
          <BeatBox long={false}/>
          <BeatBox long={false}/>
          <BeatBox long={true}/>
          <BeatBox long={false}/>
          <BeatBox long={true}/>
          <AddBeatBox />
        </Grid>
      </Grid>
    </Box>
    )
}