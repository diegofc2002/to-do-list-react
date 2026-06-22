import { useState } from "react";
import { ChecklistsWrapper } from "./components/checklists-wrapper/checklists-wrapper";
import { Container } from "./components/container/container";
import { Dialog } from "./components/dialog/dialog";
import { FabButton } from "./components/fab-button/fab-button";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Heading } from "./components/heading/heading";
import { IconPlus, IconSchool } from "./components/icons/icons";
import { SubHeading } from "./components/sub-heading/sub-heading";
import { ToDoItem } from "./components/to-do-item/to-do-item";
import { ToDoList } from "./components/to-do-list/to-do-list";
import { ToDoForm } from "./components/to-do-form/to-do-form";

const todos = [
  {
    id: 1,
    description: "JSX e componentes",
    completed: false,
    createdAt: "2022-10-31",
  },
  {
    id: 2,
    description: "Props, state e hooks",
    completed: false,
    createdAt: "2022-10-31",
  },
  {
    id: 3,
    description: "Ciclo de vida dos componentes",
    completed: false,
    createdAt: "2022-10-31",
  },
  {
    id: 4,
    description: "Testes unitários com Jest",
    completed: false,
    createdAt: "2022-10-31",
  },
];
const completed = [
  {
    id: 5,
    description: "Controle de inputs e formulários controlados",
    completed: true,
    createdAt: "2022-10-31",
  },
  {
    id: 6,
    description: "Rotas dinâmicas",
    completed: true,
    createdAt: "2022-10-31",
  },
];

function App() {
  const [show_dialog, set_show_dialog] = useState(false);

  const toggle_dialog = () => {
    set_show_dialog(!show_dialog);
  };

  const add_to_do = () => {
    console.log("Precisamos adicionar um novo ToDo");
    toggle_dialog();
  };

  return (
    <main>
      <Container>
        <Header>
          <Heading>
            <IconSchool /> Plano de estudos
          </Heading>
        </Header>

        <ChecklistsWrapper>
          <SubHeading>Para estudar</SubHeading>

          <ToDoList>
            {todos.map(function (t) {
              return <ToDoItem key={t.id} item={t} />;
            })}
          </ToDoList>

          <SubHeading>Concluído</SubHeading>

          <ToDoList>
            {completed.map(function (t) {
              return <ToDoItem key={t.id} item={t} />;
            })}
          </ToDoList>

          <Footer>
            <Dialog is_open={show_dialog} on_close={toggle_dialog}>
              <ToDoForm on_submit={add_to_do} />
            </Dialog>

            <FabButton onClick={toggle_dialog}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  );
}

export default App;
