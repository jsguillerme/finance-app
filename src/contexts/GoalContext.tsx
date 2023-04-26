import { ReactNode, createContext, useState } from "react";

type GoalContextProviderProps = {
  children: ReactNode
}

type modalProps = "create" | "update";

type GoalContextType = {
  modalCreateGoal: boolean;
  modalUpdateGoal: boolean;
  closeModal: (isModal: modalProps) => void;
  openModal: (isModal: modalProps) => void;
}

export const GoalContext = createContext({} as GoalContextType);

export function GoalContextProvider(props: GoalContextProviderProps) {
  const [modalCreateGoal, setModalCreateGoal] = useState(false);
  const [modalUpdateGoal, setModalUpdateGoal] = useState(false);

  function closeModal(isModal: modalProps) {
    if (isModal === 'create') {
      setModalCreateGoal(false);
    } else if (isModal === 'update') {
      setModalUpdateGoal(false)
    }
  }

  function openModal(isModal: modalProps) {
    if (isModal === 'create') {
      setModalCreateGoal(true);
    } else if (isModal === 'update') {
      setModalUpdateGoal(true)
    }
  }

  return (
    <GoalContext.Provider value={{ modalCreateGoal, modalUpdateGoal, closeModal, openModal }}>
      {props.children}
    </GoalContext.Provider>
  );
}