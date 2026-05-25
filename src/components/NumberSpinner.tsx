import React, { useState } from 'react';
import type { ChangeEvent } from 'react';
import { 
  IconButton, 
  OutlinedInput, 
  InputAdornment, 
  FormControl, 
  InputLabel,
  Stack
} from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

interface NumberSpinnerProps {
  label?: string;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
}

export const NumberSpinner: React.FC<NumberSpinnerProps> = ({
  label,
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 0,
  onChange,
}) => {
  const [value, setValue] = useState<number>(defaultValue);

  const updateValue = (newValue: number) => {
    // Clamp the value between min and max
    const clampedValue = Math.max(min, Math.min(max, newValue));
    setValue(clampedValue);
    if (onChange) {
      onChange(clampedValue);
    }
  };

  const handleIncrement = () => {
    updateValue(value + step);
  };

  const handleDecrement = () => {
    updateValue(value - step);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === '') {
      setValue(0); // fallback or handle empty state as preferred
      return;
    }
    const parsed = parseFloat(val);
    if (!isNaN(parsed)) {
      updateValue(parsed);
    }
  };

  return (
    <FormControl variant="outlined" size="small">
      {label && <InputLabel htmlFor="number-spinner-input">{label}</InputLabel>}
      <OutlinedInput
        id="number-spinner-input"
        type="number"
        label={label}
        value={value}
        onChange={handleInputChange}
        inputProps={{
          min,
          max,
          step,
          style: { textAlign: 'center' } // Centers the number text
        }}
        endAdornment={
          <InputAdornment position="end">
            <Stack 
              direction="column" 
              sx={{ 
                borderLeft: '1px solid', 
                borderColor: 'divider',
                marginRight: '-8px', // Aligns tightly to the right edge
                height: '100%'
              }}
            >
              <IconButton
                onClick={handleIncrement}
                disabled={value >= max}
                size="small"
                sx={{ p: '2px', borderRadius: 0 }}
              >
                <Add fontSize="small" />
              </IconButton>
              <IconButton
                onClick={handleDecrement}
                disabled={value <= min}
                size="small"
                sx={{ 
                  p: '2px', 
                  borderRadius: 0,
                  borderTop: '1px solid',
                  borderColor: 'divider'
                }}
              >
                <Remove fontSize="small" />
              </IconButton>
            </Stack>
          </InputAdornment>
        }
        sx={{
          paddingRight: 1,
          // Hides the browser's default HTML5 spin buttons
          '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0,
          },
          '& input[type=number]': {
            '-moz-appearance': 'textfield',
          },
        }}
      />
    </FormControl>
  );
};