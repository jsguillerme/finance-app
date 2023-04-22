import { ChevronLeftSquare, ChevronRightSquare, PlusCircle } from "lucide-react";
import { TitleBoard } from "./TitleBoard";
import { Transaction } from "./Transaction";
import { useContext, useEffect, useState } from "react";
import { TransactionClass } from '../helpers/Transactions';

import illustrationIconCredit from '../assets/illustration-credit.svg';
import { ModalCreateTransaction } from "./Modals/CreateTransaction";
import { TransactionContext } from "../contexts/TransactionContext";

type HistoryTransactionsProps = {
  id: string;
  created_at: string;
  establishment_name: string;
  spent_value: string;
  category_establishment: string;
  card_used: string;
}

export function HistoryTransactions() {
  const { modalCreateTransaction, openModal } = useContext(TransactionContext)
  const [historyTransactions, setHistoryTransactions] = useState<HistoryTransactionsProps[]>([]);

  const populateHistoryTransactions = async () => {
    const result: any = await TransactionClass.getAllTransactions();
    setHistoryTransactions(result.transactions)
  }

  useEffect(() => {
    populateHistoryTransactions();
  }, [modalCreateTransaction])

  return (
    <main
      className="min-w-full min-h-[380px] self-start flex flex-col items-start p-4 gap-3 shadow-lg rounded-3xl"
    >
      <div className="w-full flex  items-center justify-between">
        <TitleBoard title="Transaction history" />
        <button
          onClick={() => openModal()}
        >
          <PlusCircle size={28} className="fill-primary-text hover:brightness-125" color="white" />
        </button>
      </div>

      {modalCreateTransaction ? <ModalCreateTransaction /> : ''}

      <div className="w-full">
        <div className="w-full pb-2 mb-2 grid grid-cols-4 border-b border-primary-text/20">
          <span className="text-zinc-400 text-sm text-start">Receiver</span>
          <span className="text-zinc-400 text-sm text-start">Type</span>
          <span className="text-zinc-400 text-sm text-start">Date</span>
          <span className="text-zinc-400 text-sm text-start">Amount</span>
        </div>
        <div className="w-full">
          {historyTransactions.length > 0 ? (
            historyTransactions.map(transaction => {
              return (
                <Transaction
                  key={transaction.id}
                  establishment_name={transaction.establishment_name}
                  spent_value={transaction.spent_value}
                  category_establishment={transaction.category_establishment}
                  date={transaction.created_at}
                />
              );
            })
          ) : (
            <div className=" w-full flex flex-col items-center justify-center">
              <img
                className="w-52 h-52"
                src={illustrationIconCredit}
                alt="Ilustração de um homem com um cartão de crédito enorme"
              />
              <p>Nenhuma transação feita por enquanto...</p>
            </div>
          )}
        </div>
      </div>

      <div className="w-full flex h-full items-end justify-center gap-8">
        <button
          disabled={!(historyTransactions.length > 0)}
        >
          <ChevronLeftSquare />
        </button>
        <p className="text-lg font-bold"> 1/1 </p>
        <button
          disabled={!(historyTransactions.length > 0)}
        >
          <ChevronRightSquare />
        </button>
      </div>
    </main>
  );
}