import React, { useEffect, useRef } from "react";
import "./dialog.style.css";
import { IconClose } from "../icons/icons";

export function Dialog({ is_open, on_close, children }) {
  // Não deveríamos fazer buscar no DOM desta maneira:
  /* const dialog = document.querySelector("dialog"); */

  const dialog_ref = useRef(null);

  useEffect(() => {
    if (is_open) {
      open_dialog();
    } else {
      close_dialog();
    }
  }, [is_open]);

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
      <dialog ref={dialog_ref} className="dialog">
        <div className="btn-close-wrapper">
          <button autoFocus onClick={on_close} className="btn-close">
            <IconClose />
          </button>
        </div>
        <div className="body">{children}</div>
      </dialog>
    </>
  );
}
