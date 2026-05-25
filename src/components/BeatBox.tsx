import { Box } from "@mui/material"
// import { Remove } from '@mui/icons-material';
import ChangeHistoryRoundedIcon from '@mui/icons-material/ChangeHistoryRounded';
import CropSquareRoundedIcon from '@mui/icons-material/CropSquareRounded';

interface BeatBoxProps {
  long: boolean;
}

export default function BeatBoxShort(props: BeatBoxProps) {
    return(
        <Box 
            sx={{ 
              border: "2px solid lightgrey", 
              borderRadius: 2,
              width:63,
              height: 50,
              boxShadow: 1,
              alignContent: "center",
            }} 
        >
          {props.long ? 
            <ChangeHistoryRoundedIcon fontSize="large" htmlColor="orangered" />: 
            <CropSquareRoundedIcon fontSize="large" htmlColor="green" />}
        </Box>
    )
}