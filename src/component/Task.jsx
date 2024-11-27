import styles from "./Task.module.css"

function Task(props){
    return(
        <div className={styles.task}>
            <input type="checkbox"/>
            <p>{props.content}</p>
        </div>
    )
}

export default Task