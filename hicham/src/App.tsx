import Game from './components/game/Game'
import TitlePage from './styles/title/TitlePage'
import { MESSAGES } from './constants/messages'
import PopUp from './styles/popup/PopUp'
import './App.css'


function App(props: any) {
  return (
    <div className="App">
      <TitlePage label={props.result.result?.message ? props.result.result?.message : MESSAGES.DEFAULT} color={props.result.result.color} />
      <Game />
      <PopUp modal={props.result.result?.message ? true : false} message={props.result.result?.message ? props.result.result?.message : MESSAGES.DEFAULT} />
    </div>
  );
}

export default App;
