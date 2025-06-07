import { useRef, useEffect } from "react";
import styles from "./modal.module.css";
import CloseButton from "../CloseButton";

interface Params extends React.ComponentPropsWithRef<"dialog"> {
  isOpen: boolean;
  closeModal: () => void;
  modalTitle: string;
}

type Dialog = HTMLDialogElement;

export default function Modal({
  isOpen,
  children,
  closeModal,
  modalTitle,
}: Params) {
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
      <div className={styles.modal_header}>
        <span className={styles.modal_title}>{modalTitle}</span>
        <CloseButton onClose={closeModal} />
      </div>
      {children}
    </dialog>
  );
}
