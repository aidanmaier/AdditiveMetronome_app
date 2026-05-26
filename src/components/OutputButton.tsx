import {useState} from 'react';
import { Button } from "@mui/material"

interface buttonProps {
    text?: string;
    label?: string;
    // icon?: number
}

export default function OutputButton(props: buttonProps) {
    const [selected, setSelected] = useState(false); // playButton state

    return(
        <Button 
            variant={selected ?
                "contained" :
                "outlined" 
            }
            aria-label={props.label}
            // startIcon={props.icon} 
            onClick={() => setSelected(!selected)}
        >
            {props.text}
        </Button>
    )
}