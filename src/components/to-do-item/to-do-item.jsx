import "./to-do-item.style.css";
import { IconPencil, IconTrash } from "../icons/icons";
import { use } from "react";
import ToDoContext from "../to-do-provider/to-do-context";

export function ToDoItem({ item }) {
  const { toggleToDoCompleted, deleteToDo, openFormToDoDialog } =
    use(ToDoContext);

  const styles = ["todo-item"];

  if (item.completed) {
    styles.push("completed");
  }

  return (
    <li className={styles.join(" ")}>
      <p className="date">
        {new Date(item.createdAt).toLocaleDateString("pt-BR")}
      </p>
      <div className="details">
        <input
          type="checkbox"
          className="checkbox"
          defaultChecked={item.completed}
          onClick={() => toggleToDoCompleted(item)}
        />
        <p className="description">{item.description}</p>
        <div className="actions">
          <button className="btn" onClick={() => deleteToDo(item)}>
            <IconTrash />
          </button>
          <button className="btn" onClick={() => openFormToDoDialog(item)}>
            <IconPencil />
          </button>
        </div>
      </div>
    </li>
  );
}
