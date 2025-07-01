import { createContext, useContext, useState } from "react";

const MessangerContext = createContext();

const MessangerContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState(null);

  const openModal = (content) => {
    setOpen(true);
    setContent(content);
  };

  const closeModal = () => {
    setContent(null);
    setOpen(false);
  };

  return (
    <MessangerContext.Provider value={{ open, openModal, closeModal, content }}>
      {children}
    </MessangerContext.Provider>
  );
};

export default MessangerContextProvider;
export const useModal = () => useContext(MessangerContext);