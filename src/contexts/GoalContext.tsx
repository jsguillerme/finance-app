import { ReactNode, createContext, useState } from "react";

type GoalContextProviderProps = {
  children: ReactNode
}

type GoalContextType = {
  modalCreateGoal: boolean;
  closeModal: () => void;
  openModal: () => void;
}

export const GoalContext = createContext({} as GoalContextType);

export function GoalContextProvider(props: GoalContextProviderProps) {
  const [modalCreateGoal, setModalCreateGoal] = useState(false);

  function closeModal() {
    setModalCreateGoal(false);
  }

  function openModal() {
    setModalCreateGoal(true);
  }

  return (
    <GoalContext.Provider value={{ modalCreateGoal, closeModal, openModal }}>
      {props.children}
    </GoalContext.Provider>
  );
}