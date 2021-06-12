import "./App.css";
import Countdown from "react-countdown";
import videoAlvaro from "./assets/video.mp4";

function App() {
  const finalDate = new Date("06/14/2021 1:00 PM");
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p>Cuenta regresiva decisión de Alvaro Mendez: </p>
      <Countdown date={finalDate} />
      <video
        width="500"
        height="500"
        autoPlay
        muted
        style={{ marginTop: 30 }}
        loop
      >
        <source src={videoAlvaro} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
