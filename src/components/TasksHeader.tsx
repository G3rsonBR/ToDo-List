import styles from './TasksHeader.module.css'

interface TasksHeaderProps {
  numberTasks: number,
  numberTasksCompleted: number
}

export function TasksHeader({ numberTasks, numberTasksCompleted }:TasksHeaderProps) {
  return (
    <header>
      <h2 className={styles.tasksCreated}>
        <span className={styles.spanTaskText}>
          Tarefas
        </span>
        Criadas
        <span className={styles.spanNumber}>
          {numberTasks}
          </span>
      </h2>
      <h2 className={styles.tasksFinished}>
        Concluídas
        <span className={styles.spanNumber}>
          {numberTasksCompleted} de {numberTasks}
        </span>
      </h2>
    </header>
  );
}