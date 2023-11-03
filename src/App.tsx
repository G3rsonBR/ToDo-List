import styles from "./App.module.css";
import { CreateTask } from "./components/CreateTask";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { WithoutTasks } from "./components/WithoutTasks";
import { TasksHeader } from "./components/TasksHeader";
import { useState } from "react";

export interface TaskProps {
  id: number;
  content: string;
}

export default function App() {
  const [tasks, setTasks] = useState<TaskProps[] | []>([{
    id: 2,
    content: 'opa'
  }]);

  setTasks
  return (
    <div className={styles.main}>
      <Header />
      <CreateTask />
      <div className={styles.tasks}>
        <TasksHeader numberTasksCompleted={tasks.length} numberTasks={tasks.length} />
        {tasks.length === 0 ? (
          <WithoutTasks />
        ) : (
          tasks.map((task) => {
            return <Tasks key={task.id} task={task}/>;
          })
        )}
      </div>
    </div>
  );
}
