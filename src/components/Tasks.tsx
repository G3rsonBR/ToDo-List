import { Trash } from "@phosphor-icons/react";
import styles from "./Tasks.module.css";
import { TaskProps } from "../App";

interface Task {
  task: TaskProps;
}

export function Tasks({ task }: Task) {
  return (
    <div className={styles.bodyTasks}>
      <label htmlFor={`task-${task.id}`} className={styles.labelTasks}>
        <input id={`task-${task.id}`} type="checkbox" className="inputCheck" />
        <span>{task.content}</span> 
      </label>
      <button>
        <Trash className={styles.taskButton} />
      </button>
    </div>
  );
}
