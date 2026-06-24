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

/* const todos = [
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
]; */

function App() {
  const [show_dialog, set_show_dialog] = useState(false);
  const [to_dos, set_to_dos] = useState([
    {
      id: 1,
      description: "JSX e componentes",
      completed: false,
      createdAt: "2022-10-31",
    },
    {
      id: 2,
      description: "Controle de inputs e formulários controlados",
      completed: true,
      createdAt: "2022-10-31",
    },
  ]);

  const toggle_dialog = () => {
    set_show_dialog(!show_dialog);
  };

  const add_to_do = (formData) => {
    const description = formData.get("description");
    set_to_dos((prevState) => {
      const to_do = {
        id: prevState.length + 1,
        description: description,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      return [...prevState, to_do];
    });
    toggle_dialog();
  };

  const toggle_to_do_completed = (item_to_do) => {
    set_to_dos((prevState) => {
      return prevState.map((t) => {
        if (t.id == item_to_do.id) {
          return {
            ...t,
            completed: !t.completed,
          };
        }
        return t;
      });
    });
  };

  const delete_to_do = (item_to_do) => {
    set_to_dos((prevState) => {
      return prevState.filter((t) => t.id != item_to_do.id);
    });
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
            {to_dos
              .filter((t) => !t.completed) // 't' = to-dos
              .map(function (t) {
                return (
                  <ToDoItem
                    key={t.id}
                    item={t}
                    on_toggle_completed={toggle_to_do_completed}
                    on_delete_to_do={delete_to_do}
                  />
                );
              })}
          </ToDoList>

          <SubHeading>Concluído</SubHeading>

          <ToDoList>
            {to_dos
              .filter((t) => t.completed)
              .map(function (t) {
                return (
                  <ToDoItem
                    key={t.id}
                    item={t}
                    on_toggle_completed={toggle_to_do_completed}
                    on_delete_to_do={delete_to_do}
                  />
                );
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
