import { Box } from '@mui/material';

interface NumberDisplayProps {
    value: number;
    id?: string;
}

export default function NumberDisplay(props: NumberDisplayProps) {
    return(
        <Box 
            id={props.id}
            sx={{
                border: "1px solid lightgrey",
                borderRadius: 1,
                alignContent: "center",
                width: 48,
                height: 48
            }} 
        >
            {props.value}
        </Box>
    )
}