// import './App.css'
import { ClockProvider } from "./context/ClockContext";
import { Grid, Box } from "@mui/material";
import MenuAppBar from "./components/MenuAppBar";
import OutputControl from "./components/OutputControl";
import PatternControl from "./components/PatternControl";
import TempoControl from "./components/TempoControl";

function App() {

  return (
    <>
      <ClockProvider>
        <div className="app-container" >
          <MenuAppBar />
          <Grid 
            container
            rowSpacing={2}
            columnSpacing={4} 
            sx={{
              m: 2,
            }}
          >
            <Grid >
              <OutputControl />
            </Grid>
            <Grid >
              <PatternControl />
            </Grid>
          </Grid>
          <TempoControl />
        </div>
      </ClockProvider>
    </>
  )
}

export default App;
