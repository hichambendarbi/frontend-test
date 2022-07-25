import Game from './components/game/Game'
import TitlePage from './styles/TitlePage'
import { MESSAGES } from './constants/messages'
import './App.css'


function App(props: any) {
  return (
    <div className="App">
      <TitlePage label={props.result.result?.message ? props.result.result?.message : MESSAGES.DEFAULT} color={props.result.result.color} />
      <Game />
    </div>
  );
}

export default App;
