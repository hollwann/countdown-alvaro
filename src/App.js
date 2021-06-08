import './App.css';
import Countdown from 'react-countdown';

function App() {
  const finalDate = new Date('06/14/2021 1:00 PM')
  return (
    <div>
      <p>Cuenta regresiva decisión de Alvaro Mendez: </p>
      <Countdown date={finalDate} />
    </div>
  );
}

export default App;
