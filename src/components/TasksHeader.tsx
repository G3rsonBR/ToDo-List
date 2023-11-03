import styles from './TasksHeader.module.css'

interface TasksHeaderProps {
  numberTasks: number,
  numberTasksCompleted: number
}

export function TasksHeader({ numberTasks, numberTasksCompleted }:TasksHeaderProps) {
  return (
    <header>
      <h2 className={styles.tasksCreated}>
        Tarefas criadas<span>{numberTasks}</span>
      </h2>
      <h2 className={styles.tasksFinished}>
        Concluídas<span>{numberTasksCompleted} de {numberTasks}</span>
      </h2>
    </header>
  );
}