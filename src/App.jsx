import { use } from "react";
import { ChecklistsWrapper } from "./components/checklists-wrapper/checklists-wrapper";
import { Container } from "./components/container/container";
import { Dialog } from "./components/dialog/dialog";
import { FabButton } from "./components/fab-button/fab-button";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Heading } from "./components/heading/heading";
import { IconPlus, IconSchool } from "./components/icons/icons";
import { ToDoForm } from "./components/to-do-form/to-do-form";
import ToDoContext from "./components/to-do-provider/to-do-context";
import { ToDoGroup } from "./components/to-do-group/to-do-group";
import { EmptyState } from "./components/empty-state/empty-state";

function App() {
  const {
    toDos,
    addToDo,
    showDialog,
    openFormToDoDialog,
    closeFormToDoDialog,
    selectedToDo,
    editToDo,
  } = use(ToDoContext);

  const handleFormSubmit = (formData) => {
    if (selectedToDo) {
      editToDo(formData);
    } else {
      addToDo(formData);
    }
    closeFormToDoDialog();
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
          <ToDoGroup
            heading="Para estudar"
            items={toDos.filter((t) => !t.completed)}
          />

          <ToDoGroup
            heading="Concluído"
            items={toDos.filter((t) => t.completed)}
          />

          <Footer>
            <Dialog isOpen={showDialog} onClose={closeFormToDoDialog}>
              <ToDoForm
                on_submit={handleFormSubmit}
                defaultValue={selectedToDo?.description}
              />
            </Dialog>

            <FabButton onClick={() => openFormToDoDialog()}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  );
}

export default App;
