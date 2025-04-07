import { createContext, useState } from "react";
import { Modal } from "../components/Modal";

type Modal = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  env: string;
};

const initialState = {
  open: false,
  setOpen: () => null,
  env: "dev",
};

export const ModalContext = createContext<Modal>(initialState);

export const ModalProvider = ({ children, className }: { children: React.ReactNode, className: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={className}>
      <ModalContext.Provider value={{ ...initialState, open, setOpen }}>
        {children}
      </ModalContext.Provider>
      <Modal open={open} onClose={() => setOpen(false)} />
    </div>

  )
}
