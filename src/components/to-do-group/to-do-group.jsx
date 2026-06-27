import "./to-do-group.style.css";
import { EmptyState } from "../empty-state/empty-state";
import { SubHeading } from "../sub-heading/sub-heading";
import { ToDoItem } from "../to-do-item/to-do-item";
import { ToDoList } from "../to-do-list/to-do-list";

export function ToDoGroup({ items, heading }) {
  return (
    <>
      <SubHeading>
        {heading} ({items.length})
      </SubHeading>
      {items.length == 0 && heading == "Para estudar" && <EmptyState />}
      {items.length == 0 && heading == "Concluído" && (
        <p className="empty-concluded">Nenhuma tarefa concluída ainda.</p>
      )}
      <ToDoList>
        {items.map(function (t) {
          return <ToDoItem key={t.id} item={t} />;
        })}
      </ToDoList>
    </>
  );
}
