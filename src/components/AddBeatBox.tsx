import * as React from 'react';
import { Button, Menu, MenuItem } from "@mui/material"
import ChangeHistoryRoundedIcon from '@mui/icons-material/ChangeHistoryRounded';
import CropSquareRoundedIcon from '@mui/icons-material/CropSquareRounded';
import { Add } from '@mui/icons-material';


export default function AddBeatBox() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return(
    <>
      <Button 
        aria-label="Add beat"
        variant="outlined"
        sx={{ 
            borderRadius: 2,
            width: 50,
            height: 50,
            alignContent: "center",
            p: 0,
        }} 
        onClick={handleMenu}
      >
        <Add fontSize="medium" />
      </Button>
      <Menu 
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem aria-label="Short beat" onClick={handleClose} >
            <CropSquareRoundedIcon fontSize="large" htmlColor="green" />
        </MenuItem>
        <MenuItem aria-label="Long beat" onClick={handleClose} >
          <ChangeHistoryRoundedIcon fontSize="large" htmlColor="orangered" />
        </MenuItem>
      </Menu>
    </>
  )
}