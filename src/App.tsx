// import './App.css'
import { ClockProvider } from "./context/ClockContext";
import MenuAppBar from "./components/MenuAppBar";
import OutputControl from "./components/OutputControl";
import PatternControl from "./components/PatternControl";
import TempoControl from "./components/TempoControl";

function App() {

  return (
    <>
      <ClockProvider>
        <div className="app-container">
          <MenuAppBar />
          <OutputControl />
          <PatternControl />
          <TempoControl />
        </div>
      </ClockProvider>
    </>
  )
}

export default App;
