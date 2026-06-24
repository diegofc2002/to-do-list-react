import { Button } from "../button/button";
import { TextInput } from "../text-input/text-input";
import "./to-do-form.style.css";

export function ToDoForm({ on_submit }) {
  return (
    <form action={on_submit} className="to-do-form">
      <TextInput
        placeholder="Digite o item que deseja adicionar"
        required
        name="description"
      />
      <Button>Salvar item</Button>
    </form>
  );
}
