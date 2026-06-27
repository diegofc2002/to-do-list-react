import { Button } from "../button/button";
import { TextInput } from "../text-input/text-input";
import "./to-do-form.style.css";

export function ToDoForm({ on_submit, defaultValue }) {
  return (
    <form action={on_submit} className="to-do-form">
      <TextInput
        placeholder="Digite o item que deseja adicionar"
        required
        name="description"
        defaultValue={defaultValue}
      />
      <Button>Salvar item</Button>
    </form>
  );
}
