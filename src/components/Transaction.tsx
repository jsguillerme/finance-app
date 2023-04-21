type TransactionProps = {
  receiver: string;
  date: string;
  amount: string;
  type_transaction: string;
}

export function Transaction({ receiver, type_transaction, date, amount }: TransactionProps) {
  return (
    <div className="w-full grid grid-cols-4 mb-4 p-1 border-b border-primary-text/20">
      <p className="text-primary-text font-medium text-sm">{receiver}</p>
      <p className="text-zinc-400 text-sm ">{type_transaction}</p>
      <p className="text-zinc-400 text-sm ">{date}</p>
      <p className="text-zinc-600 font-semibold text-sm ">$ {amount}</p>
    </div>
  );
}