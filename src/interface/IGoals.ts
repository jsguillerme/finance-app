export interface IGoals {
  id?: string;
  title: string;
  category_goal: string;
  predicted_value: string;
  completed: "completed" | "not-completed";
  expected_date: string;
}