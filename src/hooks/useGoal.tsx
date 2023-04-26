import { useContext } from "react";
import { GoalContext } from "../contexts/GoalContext";

export function useGoal() {
  const { openModal, closeModal, modalCreateGoal, modalUpdateGoal } = useContext(GoalContext);

  return {openModal, closeModal, modalCreateGoal, modalUpdateGoal}
}