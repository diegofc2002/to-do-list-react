import { useEffect, useState } from "react";
import ToDoContext from "./to-do-context";

const TODOS = "toDos";

export function ToDoProvider({ children }) {
  const savedToDos = localStorage.getItem(TODOS);

  const [toDos, setToDos] = useState(savedToDos ? JSON.parse(savedToDos) : []);

  const [showDialog, setShowDialog] = useState(false);

  const [selectedToDo, setSelectedToDo] = useState();

  const openFormToDoDialog = (toDo) => {
    if (toDo) {
      setSelectedToDo(toDo);
    }
    setShowDialog(true);
  };

  const closeFormToDoDialog = () => {
    setShowDialog(false);
    setSelectedToDo(null);
  };

  useEffect(() => {
    localStorage.setItem(TODOS, JSON.stringify(toDos));
  }, [toDos]);

  const addToDo = (formData) => {
    const description = formData.get("description");
    setToDos((prevState) => {
      const toDo = {
        id: prevState.length + 1,
        description: description,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      return [...prevState, toDo];
    });
  };

  const toggleToDoCompleted = (itemToDo) => {
    setToDos((prevState) => {
      return prevState.map((t) => {
        if (t.id == itemToDo.id) {
          return {
            ...t,
            completed: !t.completed,
          };
        }
        return t;
      });
    });
  };

  const editToDo = (formData) => {
    setToDos((prevState) => {
      return prevState.map((t) => {
        if (t.id == selectedToDo.id) {
          return {
            ...t,
            description: formData.get("description"),
          };
        }
        return t;
      });
    });
  };

  const deleteToDo = (itemToDo) => {
    setToDos((prevState) => {
      return prevState.filter((t) => t.id != itemToDo.id);
    });
  };

  return (
    <ToDoContext
      value={{
        toDos,
        addToDo,
        toggleToDoCompleted,
        deleteToDo,
        showDialog,
        openFormToDoDialog,
        closeFormToDoDialog,
        selectedToDo,
        editToDo,
      }}
    >
      {children}
    </ToDoContext>
  );
}
