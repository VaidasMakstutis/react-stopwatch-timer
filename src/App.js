import React from "react";

const App = () => {
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);

  React.useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div className="App">
      <div className="timers-container d-flex flex-column align-items-center mt-5">
        <h1>Stopwatch</h1>
        <div id="display" className="fs-3 mt-2">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div id="buttons" className="mt-4">
          {!timerOn && time === 0 && (
            <button className="btn btn-primary mx-2" onClick={() => setTimerOn(true)}>
              Start
            </button>
          )}
          {timerOn && (
            <button className="btn btn-secondary mx-2" onClick={() => setTimerOn(false)}>
              Stop
            </button>
          )}
          {!timerOn && time !== 0 && (
            <button className="btn btn-primary mx-2" onClick={() => setTimerOn(true)}>
              Resume
            </button>
          )}
          {!timerOn && time > 0 && (
            <button className="btn btn-danger mx-2" onClick={() => setTime(0)}>
              Reset
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
