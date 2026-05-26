import * as React from 'react';
import { Slider } from "@mui/material"

interface sliderProps {
    min: number;
    max: number;
    default: number;
    id?: string;
    onChange?: (value: number) => void;
}

export default function TempoSlider(props: sliderProps) {
    const [value, setValue] = React.useState<number>(props.default);
    const handleChange = (event: any, newValue: number | number[]) => {
        const val = Array.isArray(newValue) ? newValue[0] : newValue;
        setValue(val);
        if (props.onChange) props.onChange(val);
    };

    return(
        <Slider
            aria-label='Tempo slider'
            size="small"
            min={props.min}
            max={props.max}
            valueLabelDisplay="on"
            value={value}
            onChange={handleChange}
        />
    )
}