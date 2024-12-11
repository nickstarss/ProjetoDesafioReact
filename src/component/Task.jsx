import styles from "./Task.module.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons"

function Task(props){
    return(
        <div className={styles.task}>
            <input type="checkbox"/>
            <p>{props.content}</p>
            <FontAwesomeIcon icon={faTrash} className={styles.icon}/>
        </div>
    )
}

export default Task