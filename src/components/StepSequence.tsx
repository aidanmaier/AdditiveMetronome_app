import { Button, Grid } from "@mui/material";
import { useSound } from "../hooks/useSound";

export default function StepSequence() {
    const { fill, step, sequence, setSequence } = useSound();
    const stepColor = [
        fill? "lightgrey" : "darkgrey", // fill highlights subdivisions
        "cyan", 
        "magenta"
    ];

    const handleChangeColor = (val: number, index: number) => {
        const newVal = 3 - val; // toggle between 1 and 2
        const newSeq = [...sequence];
        newSeq[index] = newVal;
        setSequence(newSeq);
    };
   
    return(
        <Grid 
            container
            spacing={0.25}
            sx={{
                borderRadius: 2, 
                width: "100%",
                minHeight: 104,
                alignContent: "flex-start",
                p: 0.5,
                backgroundColor: "slategrey",
            }}
        >
            { 
                sequence.map((val, index) => (
                    <Button 
                        key={index}
                        disabled={val > 0 ? false : true} // only enable main beats
                        sx={{ 
                            borderRadius: 2, 
                            height: 30,
                            maxWidth: 30, 
                            minWidth: 30,
                            width: 30, 
                            backgroundColor: stepColor[val],
                            opacity: index == step ? 1 : 0.5, // highlight active beat
                        }} 
                        onClick={() => handleChangeColor(val, index)}
                    />
                ))
            }
        </Grid>
    )
}