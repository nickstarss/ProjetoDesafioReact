import './App.css'
import Logo from "./assets/logo.svg"
import Clipboard from "./assets/Clipboard.svg"

import Task from './component/Task'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';

import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      cont: "tarefa 1 criada",
      done: false
    },
    {
      id: 2,
      cont: "tarefa 2 criada",
      done: true
    }
  ]);
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
            <p className={"task-info-cont"}>{tasks.length}</p>
          </div>

          <div className={"tasks-info-2"}>
            <p>Concluídas</p>
            <p className={"task-info-cont"}>{tasks.filter(task => task.done).length} de {tasks.length}</p>
          </div>

        </div>

        <div className={"tasks-list"}>
          {tasks.length === 0 ? (
            /* Place holder para quando não existir nenhuma tarefa */
            <div className={"tasks-list-empty"}>
              <hr/>

              <div className={"sub-tasks-list-empty"}>
                <img src={Clipboard}/>
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            </div>
            ):(
              /* Tasks */
              <div className={"tasks-list-complete"}>
                {tasks.map((task) => {
                  return(
                    <Task content={task.cont}/>
                  )
                })}

              </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default App

