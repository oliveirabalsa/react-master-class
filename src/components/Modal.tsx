import ReactDom from "react-dom";
import "./style.css";

export const Modal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <div className="modal">
      <button onClick={onClose}>close</button>
      Modal Content
    </div>,
    document.body as HTMLElement
  );
};
