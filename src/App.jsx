import './App.css'
import Logo from "./assets/logo.svg"

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
        <button>Criar<FontAwesomeIcon icon={faSquarePlus} /></button>
      </form>

      <div className={"tasks"}>
        <div className={"tasks-info"}>
          <div className={"tasks-info-1"}>
            <p>Tarefas criadas</p>
            <p>0</p>
          </div>

          <div className={"tasks-info-2"}>
            <p>Concluídas</p>
            <p>10</p>
          </div>

          <hr/>
        </div>

        <div className={"tasks-list"}>
           {/* Place holder para quando não existir nenhuma tarefa */}
           <FontAwesomeIcon icon={faClipboard} />
           <p>Você ainda não tem tarefas cadastradas</p>
           <p>Crie tarefas e organize seus itens a fazer</p>

           {/* Tasks */}
           <Task content="conteudo"/>
        </div>
      </div>
    </div>
  )
}

export default App

