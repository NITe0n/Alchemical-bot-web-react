import './App.css';
import {useEffect} from "react";
import {useTelegram} from "src/hooks/usetelegram";
const tg = window.Telegram.WebApp;

function App() {
  const {onToggleButton, tg} = useTelegram();

  useEffect(() => {
      tg.ready();
  }, [])

  return (
    <div className="App">
      work
      <button onClick = {onToggleButton}>Закрыть</button>
    </div>
  );
}

export default App;

