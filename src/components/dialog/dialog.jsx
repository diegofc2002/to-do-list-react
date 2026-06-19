import React, { useRef } from "react";
import "./dialog.style.css";

export function Dialog() {
  // Não deveríamos fazer buscar no DOM desta maneira:
  /* const dialog = document.querySelector("dialog"); */

  const dialog_ref = useRef(null);

  // "Show the dialog" button opens the dialog modally
  const open_dialog = () => {
    dialog_ref.current.showModal();
  };

  // "Close" button closes the dialog
  const close_dialog = () => {
    dialog_ref.current.close();
  };

  return (
    <>
      <dialog ref={dialog_ref}>
        <button autoFocus onClick={close_dialog}>
          Close
        </button>
        <p>This modal dialog has a groovy backdrop!</p>
      </dialog>
      <button onClick={open_dialog}>Show the dialog</button>
    </>
  );
}
