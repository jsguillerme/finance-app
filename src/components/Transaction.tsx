import { LineChart } from "lucide-react";
import { ITransaction } from "../interface/ITransaction";

export function Transaction({ establishment_name, category_establishment, created_at, spent_value, type_transaction }: ITransaction) {
  return (
    <div className={`w-full grid grid-cols-4 mb-2 py-2 border-b border-primary-text/20 $`}>
      <p className="text-primary-text font-medium text-sm">{establishment_name}</p>
      <p className="text-zinc-400 text-sm ">{category_establishment}</p>
      <p className="text-zinc-400 text-sm ">{created_at}</p>
      <div className="flex items-center justify-around gap-2">
        <p className="text-zinc-600 font-semibold text-sm ">$ {spent_value}</p>
        {type_transaction === 'income' && <p title="Entrada de dinheiro" className="cursor-pointer"><LineChart size={18} color="green" /></p>}
        {type_transaction === 'outcome' && <p title="Saída de dinheiro" className="cursor-pointer"><LineChart size={18} color="red" /></p>}
      </div>
    </div>
  );
}

//{type_transaction === 'income' ? "bg-green-300/20" : "bg-red-300/40"}