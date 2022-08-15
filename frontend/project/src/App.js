import "./App.css";
import DisplayText from "./components/displayText";

function App() {
  return (
    <>
      <div className="App">
        <h1 className="text-3xl font-bold underline">
          General Purpose Display
        </h1>
      </div>
      <div className="Applications">
        <h3>Applications</h3>
      </div>
      <div className="wrapper">
        <DisplayText />
      </div>
    </>
  );
}

export default App;
