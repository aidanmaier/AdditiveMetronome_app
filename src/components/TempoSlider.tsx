import * as React from 'react';
import { Slider } from "@mui/material"

interface sliderProps {
    min: number;
    max: number;
    /** initial uncontrolled default; if `value` is provided, component becomes controlled */
    default?: number;
    value?: number;
    onChange?: (value: number) => void;
}

export default function TempoSlider(props: sliderProps) {
    const [value, setValue] = React.useState<number>(props.value ?? props.default ?? props.min);

    React.useEffect(() => {
        if (typeof props.value === 'number' && props.value !== value) {
            setValue(props.value);
        }
    }, [props.value]);

    const handleChange = (event: any, newValue: number | number[]) => {
        const val = Array.isArray(newValue) ? newValue[0] : newValue;
        setValue(val);
        if (props.onChange) props.onChange(val);
    };

    return (
        <Slider
            aria-label='Tempo slider'
            size="small"
            min={props.min}
            max={props.max}
            value={value}
            onChange={handleChange}
        />
    );
}