import { ChevronRight, Plus } from "lucide-react";
import { Goal } from "./Goal";
import { TitleBoard } from "./TitleBoard";
import { useContext, useEffect, useState } from "react";
import { IGoals } from "../interface/IGoals";
import { GoalsClass } from "../helpers/Goals";

import goalPersonal from '../assets/goal-personal.svg';
import { GoalContext } from "../contexts/GoalContext";
import { ModalCreateGoal } from "./Modals/CreateGoal";
import { ModalUpdateGoal } from "./Modals/UpdateGoal";

export function InfoGoals() {
  const { openModal, modalUpdateGoal, modalCreateGoal } = useContext(GoalContext)
  const [listGoals, setListGoals] = useState<IGoals[]>([])

  const populateAllGoals = async () => {
    const result = await GoalsClass.listGoalsAll();
    setListGoals(result)
  }

  useEffect(() => {
    populateAllGoals();
  }, [modalCreateGoal])


  return (
    <main className="w-full h-2/4 flex flex-col items-start p-4 gap-3">
      <div className="flex items-center gap-2">
        <TitleBoard title="Goals" />
        <button
          onClick={() => openModal("create")}
          className="h-5 w-5 rounded-full bg-fifth-text flex items-center justify-center hover:brightness-90 transition-all">
          <Plus color="#112A46" />
        </button>
      </div>

      {modalCreateGoal && <ModalCreateGoal />}

      {modalUpdateGoal && <ModalUpdateGoal />}

      <div className="flex items-center gap-2">
        <div className="w-full flex flex-wrap items-center gap-3">
          {listGoals.length !== 0 ? (
            listGoals.map(goal => {
              return (
                <Goal
                  key={goal.id}
                  title={goal.title}
                  expected_date={goal.expected_date}
                  goal_value={goal.predicted_value}
                />
              );
            })
          ) : (
            <div className="flex items-center justify-center">
              <img
                title="Crie objetivos"
                className="h-56 w-56"
                src={goalPersonal}
                alt="ilustração de pessoa apontando para objetivos" />
            </div>
          )}
          <button
            className={`hover:scale-110 transition-all ${listGoals.length === 0 ? 'invisible' : ''}`}
          >
            <ChevronRight size={40} color="#112A46" />
          </button>
        </div>
      </div>
    </main>
  );
}

