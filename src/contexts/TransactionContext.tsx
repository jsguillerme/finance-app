import { ReactNode, createContext, useState } from "react";

type TransactionContextProviderProps = {
  children: ReactNode
}

type TransactionContextType = {
  modalCreateTransaction: boolean;
  closeModal: () => void;
  openModal: () => void;
}

export const TransactionContext = createContext({} as TransactionContextType);

export function TransactionContextProvider(props: TransactionContextProviderProps) {
  const [modalCreateTransaction, setModalCreateTransaction] = useState(false);

  function closeModal() {
    setModalCreateTransaction(false);
  }

  function openModal() {
    setModalCreateTransaction(true);
  }

  return (
    <TransactionContext.Provider value={{ modalCreateTransaction, closeModal, openModal }}>
      {props.children}
    </TransactionContext.Provider>
  );
}