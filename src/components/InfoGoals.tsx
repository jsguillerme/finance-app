import { ChevronRight, Gamepad2, GraduationCap, Plane, Plus } from "lucide-react";
import { Goal } from "./Goal";

export function InfoGoals() {
  return (
    <main className="w-full h-2/4 flex flex-col items-start p-4 gap-3">
      <div className="flex items-center gap-2">
        <p className="text-xl font-body font-bold text-secondary-text">Goals</p>
        <button className="h-4 w-4 rounded-full bg-fifth-text flex items-center justify-center hover:brightness-90 transition-all">
          <Plus color="#112A46" />
        </button>
      </div>

      <div className="flex items-center gap-2">
        <div className="w-full flex flex-wrap items-center gap-3">
          <Goal
            title="Buy PS4"
            expected_date="12/02/24"
            icon={<Gamepad2 size={28} />}
            goal_value={2400}
          />
          <Goal
            title="Travel"
            expected_date="12/06/23"
            icon={<Plane size={28}  />}
            goal_value={600}
          />
          <Goal
            title="Graduation College"
            expected_date="20/12/24"
            icon={<GraduationCap size={28} />}
            goal_value={200}
          />
        </div>
        <button className="hover:scale-110 transition-all">
          <ChevronRight size={40} color="#112A46" />
        </button>
      </div>
    </main>
  );
}