import { ReactNode, createContext, useState } from "react";

type CardCreditContextProviderProps = {
  children: ReactNode
}

type CardCreditContextType = {
  modalAddCreditCard: boolean;
  closeModal: () => void;
  openModal: () => void;
}

export const CardCreditContext = createContext({} as CardCreditContextType);

export function CardCreditContextProvider(props: CardCreditContextProviderProps) {
  const [modalAddCreditCard, setModalAddCreditCard] = useState(false);

  function closeModal() {
    setModalAddCreditCard(false);
  }

  function openModal() {
    setModalAddCreditCard(true);
  }

  return (
    <CardCreditContext.Provider value={{ modalAddCreditCard, closeModal, openModal }}>
      {props.children}
    </CardCreditContext.Provider>
  );
}