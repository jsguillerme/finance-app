import { ChevronLeftSquare, ChevronRightSquare } from "lucide-react";

const mockTransactions = [
  { receiver: "Tesco Market", type: "Shopping", Date: "2023-04-21", Amount: "75.60", id: "1" },
  { receiver: "ElectroMen Market", type: "Shopping", Date: "2023-04-12", Amount: "250.00", id: "2" },
  { receiver: "Fiorgio Restaurant", type: "Food", Date: "2023-02-01", Amount: "19.50", id: "3" },
  { receiver: "John Mathew Kayne", type: "Sport", Date: "2023-04-06", Amount: "350", id: "4" },
  { receiver: "Ann Marlin", type: "Shopping", Date: "2023-04-30", Amount: "430", id: "5" },
]

export function HistoryTransactions() {
  return (
    <main className="w-full h-2/4 flex flex-col items-start p-4 gap-3 shadow-lg rounded-3xl">
      <div className="mt-3">
        <p className="text-xl font-body font-bold text-secondary-text">Transaction history</p>
      </div>

      <div className="w-full">
        <div className="w-full pb-2 grid grid-cols-4 border-b border-primary-text/20">
          <span className="text-zinc-400 text-sm text-start">Reciever</span>
          <span className="text-zinc-400 text-sm text-start">Type</span>
          <span className="text-zinc-400 text-sm text-start">Date</span>
          <span className="text-zinc-400 text-sm text-start">Amount</span>
        </div>
        <div className="w-full">
          {mockTransactions.map(transaction => {
            return (
              <div className="w-full grid grid-cols-4 mb-2 p-1 border-b border-primary-text/20" key={transaction.id}>
                <p className="text-primary-text font-medium text-sm">{transaction.receiver}</p>
                <p className="text-zinc-400 text-sm ">{transaction.type}</p>
                <p className="text-zinc-400 text-sm ">{transaction.Date}</p>
                <p className="text-zinc-600 font-semibold text-sm ">$ {transaction.Amount}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full flex items-center justify-center gap-10">
        <button>
          <ChevronLeftSquare />
        </button>
        <p className="text-lg font-bold"> 1/1 </p>
        <button>
          <ChevronRightSquare />
        </button>
      </div>
    </main>
  );
}