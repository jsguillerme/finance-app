import { ChevronRight, Plus } from "lucide-react";
import { Goal } from "./Goal";
import { TitleBoard } from "./TitleBoard";

const mockGoals = [
  {
    id: '1',
    title: "Buy PS4",
    expected_date: "2023-02-21",
    goal_value: 2400
  },
  {
    id: '2',
    title: "Travel",
    expected_date: "2024-01-05",
    goal_value: 6000
  },
  {
    id: '3',
    title: "Graduation College",
    expected_date: "2024-12-12",
    goal_value: 600
  }
]

export function InfoGoals() {
  return (
    <main className="w-full h-2/4 flex flex-col items-start p-4 gap-3">
      <div className="flex items-center gap-2">
        <TitleBoard title="Goals" />
        <button className="h-5 w-5 rounded-full bg-fifth-text flex items-center justify-center hover:brightness-90 transition-all">
          <Plus color="#112A46" />
        </button>
      </div>

      <div className="flex items-center gap-2">
        <div className="w-full flex flex-wrap items-center gap-3">
          {mockGoals.map(goal => {
            return (
              <Goal
                key={goal.id}
                title={goal.title}
                expected_date={goal.expected_date}
                goal_value={goal.goal_value}
              />
            );
          })}
        </div>
        <button className="hover:scale-110 transition-all">
          <ChevronRight size={40} color="#112A46" />
        </button>
      </div>
    </main>
  );
}

