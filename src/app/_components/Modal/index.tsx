import { useRef, useEffect } from "react";
import styles from "./modal.module.css";

interface Params extends React.ComponentPropsWithRef<"dialog"> {
  isOpen: boolean;
  closeModal: () => void;
}

type Dialog = HTMLDialogElement;

export default function Modal({ isOpen, children, closeModal }: Params) {
  const ref = useRef<Dialog>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const dialog = ref.current;
    dialog?.showModal();
    return () => {
      dialog?.close();
    };
  }, [isOpen]);

  return (
    <dialog ref={ref} className={styles.modal_container}>
      <h3 className={styles.modal_title}>I am the dialog</h3>
      <button onClick={closeModal}>Cerrar</button>
      {children}
    </dialog>
  );
}
