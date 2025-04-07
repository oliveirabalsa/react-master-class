import React from "react";
import { useModal } from "../../hooks/useModal";

const Contact: React.FC = () => {
  const { openModal } = useModal();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg">
        Get in touch with us! We'd love to hear from you.
      </p>
      <button onClick={openModal}>Open Modal</button>
    </div>
  );
};

export default Contact;
