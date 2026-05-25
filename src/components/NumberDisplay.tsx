import { Box } from '@mui/material';

interface NumberDisplayProps {
    value: number;
    label?: string;
}

export default function NumberDisplay(props: NumberDisplayProps) {
    return(
        <Box sx={{
            border: "1px solid lightgrey",
            borderRadius: 1,
            alignContent: "center",
            width: 50,
            height: 40
            }} 
        >
            {props.value}
        </Box>
    )
}