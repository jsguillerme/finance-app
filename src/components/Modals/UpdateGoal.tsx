import { X } from "lucide-react";
import { useGoal } from "../../hooks/useGoal";
import { useEffect, useState } from "react";
import { GoalsClass } from "../../helpers/Goals";

type ModalUpdateProps = {
  id?: string;
}

export function ModalUpdateGoal(props: ModalUpdateProps) {
  const { closeModal } = useGoal();

  const [title, setTitle] = useState('');
  const [predictedValue, setPredictedValue] = useState('');
  const [categoryGoal, setCategoryGoal] = useState('');
  const [expectedDate, setExpectedDate] = useState('');

  // const loadGoalSpecific = async () => {
  //   if (props.id) {
  //     const result = await GoalsClass.getGoal(props.id);
  //     return console.log(result)
  //   }

  //   return;
  // }

  // useEffect(() => {
  //   loadGoalSpecific();
  // }, [])

  // const fnSet = [setTitle, setPredictedValue, setCategoryGoal, setExpectedDate]

  return (
    <div>
      Olá
    </div>
  );
}