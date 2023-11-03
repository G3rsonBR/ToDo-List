import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { PlusCircle } from '@phosphor-icons/react'
import styles from './CreateTask.module.css'

export function CreateTask() {
  const [tasks, setTasks] = useState([{}]);

  const [newTaskText, setNewTaskText] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    
    setTasks([...tasks, newTaskText]);
    setNewTaskText("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  // function deleteTask(taskToDelete: string) {
  //   const tasksWithoutDeletedOne = Tasks.filter((task) => {
  //     return task !== taskToDelete;
  //   });

  //   setTasks(tasksWithoutDeletedOne);
  // }

  const isNewTaskEmpty = newTaskText.length === 0;

  return (
    <form onSubmit={handleCreateNewTask} className={styles.taskForm}>
      <textarea
        name="task"
        placeholder="Adicione uma nova tarefa"
        value={newTaskText}
        onChange={handleNewTaskChange}
        onInvalid={handleNewTaskInvalid}
        required
      />

      <button type="submit" disabled={isNewTaskEmpty}>
        <span className={styles.textButton}>Criar</span> <PlusCircle className={styles.plusCircleIcon}/>
      </button>
    </form>
  );
}
