import { OutlinedInput, FormControl } from '@mui/material';
// import { Add, Remove } from '@mui/icons-material';

// interface NumberSpinnerProps {
//     min: number;
//     max: number;
//     defaultValue: number;
// }

export default function NumberField() {
    return(
        <FormControl variant="outlined" size="small">
            <OutlinedInput 
                type="number"
                aria-label="Tempo number field"
                sx={{ 
                    alignContent: "center",
                    width: 90,
                    height: 50, 
                }}
            />
        </FormControl>
    )
}