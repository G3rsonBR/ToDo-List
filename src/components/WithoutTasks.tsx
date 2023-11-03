import { ClipboardText } from "@phosphor-icons/react";
import styles from "./WithoutTasks.module.css";

export function WithoutTasks() {
  return (
    <div className={styles.content}>
      <ClipboardText className={styles.contentIcon} />
      <h3 className={styles.contentTitle}>
        Você ainda não tem tarefas cadastradas
      </h3>
      <h3 className={styles.contentText}>
        Crie tarefas e organize seus itens a fazer
      </h3>
    </div>
  );
}
