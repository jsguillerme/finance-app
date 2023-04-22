import { ITransaction } from "../interface/ITransaction";

export function Transaction({ establishment_name, category_establishment, date, spent_value }: ITransaction) {
  return (
    <div className="w-full grid grid-cols-4 mb-2 py-2 border-b border-primary-text/20">
      <p className="text-primary-text font-medium text-sm">{establishment_name}</p>
      <p className="text-zinc-400 text-sm ">{category_establishment}</p>
      <p className="text-zinc-400 text-sm ">{date}</p>
      <p className="text-zinc-600 font-semibold text-sm ">$ {spent_value}</p>
    </div>
  );
}