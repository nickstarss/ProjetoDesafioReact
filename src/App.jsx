import './App.css'
import Logo from "./assets/logo.svg"
import Clipboard from "./assets/Clipboard.svg"

import Task from './component/Task'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { faClipboard } from '@fortawesome/free-regular-svg-icons';

function App() {
  return (
    <div className={"body"}>
      <div className={"header"}>
        <img src={Logo} />
      </div>

      <form className={"searchbar"}>
        <input placeholder='Adicione uma nova tarefa'/>
        <button>Criar<FontAwesomeIcon icon={faSquarePlus} className={"searchbar-img"}/></button>
      </form>

      <div className={"tasks"}>
        <div className={"tasks-info"}>
          <div className={"tasks-info-1"}>
            <p>Tarefas criadas</p>
            <p className={"task-info-cont"}>10</p>
          </div>

          <div className={"tasks-info-2"}>
            <p>Concluídas</p>
            <p className={"task-info-cont"}>0 de 10</p>
          </div>

        </div>

        <div className={"tasks-list"}>
          {/* Place holder para quando não existir nenhuma tarefa */}
          <div className={"tasks-list-empty"}>
            <hr/>
            <img src={Clipboard}/>
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>

           {/* Tasks */}
           <div className={"tasks-list-empty"}>
            <Task content="conteudo"/>
           </div>
        </div>
      </div>
    </div>
  )
}

export default App

