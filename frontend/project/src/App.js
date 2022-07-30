import "./App.css";
import ClockToggle from "./components/clock";
import DisplayText from "./components/displayText";
import Pomodoro from "./components/timer";

function App() {
  return (
    <>
      <div className="App">
        <h1 className="text-3xl font-bold underline">
          General Purpose Display
        </h1>
      </div>
      <h3>Applications</h3>
      <div className="wrapper">
        <DisplayText />
      </div>
      <div className="wrapper">
        <ClockToggle />
      </div>
      <Pomodoro />
    </>
  );
}

export default App;
