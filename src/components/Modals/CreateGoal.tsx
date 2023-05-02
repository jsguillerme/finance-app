import { X } from "lucide-react";
import { useGoal } from "../../hooks/useGoal";
import { FormEvent, useState } from "react";
import { IGoals } from "../../interface/IGoals";
import { GoalsClass } from "../../helpers/Goals";

export function ModalCreateGoal() {
  const { closeModal } = useGoal();

  const [title, setTitle] = useState('');
  const [predictedValue, setPredictedValue] = useState('');
  const [categoryGoal, setCategoryGoal] = useState('');
  const [expectedDate, setExpectedDate] = useState('');

  const fnSet = [setTitle, setPredictedValue, setCategoryGoal, setExpectedDate]

  async function createGoal(event: FormEvent) {
    event.preventDefault();

    if (title.trim() === '' || predictedValue.trim() === '' || categoryGoal.trim() === '' || expectedDate.trim() === '') {
      return;
    }

    const payload: IGoals = {
      id: '',
      title: title,
      category_goal: categoryGoal,
      completed: "not-completed",
      expected_date: expectedDate,
      predicted_value: predictedValue
    }

    await GoalsClass.createGoal(payload);
    // resetar todos os states para ''
    fnSet.map((fn) => {
      fn('')
    })
    closeModal("create");
  }


  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 bg-black/30 z-[2] shadow-lg bg-blend-overlay">
      <div className="absolute top-[25%] left-[40%] right-[25%] bg-white z-[3] w-[25%] h-[560px] shadow-2xl rounded-lg">
        <div className="w-full p-8 flex flex-col items-center justify-center">
          <div className="w-full flex items-center justify-between mb-8">
            <h3 className="text-xl text-primary-text font-semibold">Adicionar um novo objetivo</h3>
            <button
              className="h-6 w-6 bg-red-600/20 rounded-md flex items-center justify-center hover:brightness-150"
              onClick={() => closeModal("create")}
            >
              <X size={18} color="red" />
            </button>
          </div>
          <form className="w-full flex flex-col gap-4">

            <label
              className="text-secondary-text font-medium text-sm"
              htmlFor="goal-title"
            >Nome do objetivo</label>
            <input
              className="border rounded-md p-2 text-sm text-primary-text placeholder-primary-text/40"
              type="text"
              name="goal-title"
              id="goal-title"
              placeholder="Viajar para..."
              value={title}
              onChange={val => setTitle(val.target.value)}
            />

            <label htmlFor="category-goal" className="text-secondary-text font-medium text-sm">Categoria</label>
            <select
              className="text-sm text-primary-text border rounded h-8 p-1 outline-none cursor-pointer"
              name="category-goal"
              id="category-goal"
              defaultValue="default"
              value={categoryGoal}
              onChange={val => setCategoryGoal(val.target.value)}
            >
              <option value="default">Selecione...</option>
              <option value="category-personal">Pessoal</option>
              <option value="category-profissional">Profissional</option>
              <option value="category-financeiro">Financeiro</option>
              <option value="category-lazer">Lazer</option>
              <option value="category-familia">Familia</option>
              <option value="category-educacao">Educação</option>
            </select>

            <div className="w-2/5 flex flex-col gap-4">
              <label
                className="text-secondary-text font-medium text-sm"
                htmlFor="goal-date"
              >Data prevista</label>
              <input
                className="text-primary-text text-sm outline-primary-text outline-offset-2"
                type="date"
                name="goal-date"
                id="goal-date"
                value={expectedDate}
                onChange={val => setExpectedDate(val.target.value)}
              />
            </div>

            <div className="w-2/6 flex flex-col gap-2">
              <label
                className="text-secondary-text font-medium text-sm"
                htmlFor="goal-value"
              >Valor previsto</label>
              <input
                className="p-2 border rounded-md text-sm text-primary-text placeholder-primary-text/40"
                type="number"
                name="goal-value"
                id="goal-value"
                min={0}
                placeholder="R$1000"
                value={predictedValue}
                onChange={val => setPredictedValue(val.target.value)}
              />
            </div>

            <div className="w-full flex justify-start gap-10 mt-6">
              <button
                onClick={() => closeModal("create")}
                className="bg-zinc-400 rounded p-2 text-white hover:brightness-110 transition-all"
              >Cancelar</button>
              <button
                onClick={createGoal}
                className="bg-third-text rounded p-2 text-white hover:brightness-110 transition-all flex items-center gap-1"
              >
                Adicionar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}