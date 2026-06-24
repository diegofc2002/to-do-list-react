import "./to-do-item.style.css";
import { IconPencil, IconTrash } from "../icons/icons";

export function ToDoItem({ item, on_toggle_completed, on_delete_to_do }) {
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
          onClick={() => on_toggle_completed(item)}
        />
        <p className="description">{item.description}</p>
        <div className="actions">
          <button className="btn" onClick={() => on_delete_to_do(item)}>
            <IconTrash />
          </button>
          <button className="btn">
            <IconPencil />
          </button>
        </div>
      </div>
    </li>
  );
}
