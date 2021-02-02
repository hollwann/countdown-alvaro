import './App.css';
import Countdown from 'react-countdown';

function App() {
  const finalDate = new Date('2/2/2021 6:00 PM')
  return (
    <div>
      <p>Cuenta regresiva decisión de Alvaro Mendez: </p>
      <Countdown date={finalDate} />
    </div>
  );
}

export default App;
