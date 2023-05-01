import { ReactNode } from "react";

type GoalProps = {
  expected_date: string;
  title: string;
  goal_value: string;
  icon?: ReactNode;
  id?: string;
}

export function Goal({ expected_date, title, goal_value, icon }: GoalProps) {
  return (

    <div className="w-40 h-44 flex flex-col justify-between p-4 shadow-lg rounded-lg hover:shadow-2xl cursor-pointer hover:scale-110 transition-all">
      <div className="flex flex-col">
        <p className="text-primary-text text-lg font-body font-bold">${goal_value}</p>
        <p className="text-secondary-text text-xs">{expected_date}</p>
      </div>
      <div className="flex flex-col">
        <p className="text-primary-text">{icon}</p>
        <p className="text-secondary-text font-body text-sm font-semibold">{title}</p>
      </div>

    </div>
  );
}