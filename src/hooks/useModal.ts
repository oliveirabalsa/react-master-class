import { useContext } from "react";
import { ModalContext } from "../contexts/modalContext";

export const useModal = () => {
  const modalContext = useContext(ModalContext);

  const openModal = () => {
    modalContext.setOpen(true);
  };

  return {
    openModal
  }
};

