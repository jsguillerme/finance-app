import { ChevronLeft, ChevronRight, CreditCard as CardCredit } from "lucide-react";
import { CreditCard } from "./CreditCard";
import { TitleBoard } from "./TitleBoard";

export function InfoCards() {
  return (
    <main className="min-w-[720px] self-start h-2/4 flex flex-col items-start p-4 gap-3 shadow-lg rounded-3xl">
      <TitleBoard title="Cards" />

      <div className="w-full flex flex-wrap md:flex-nowrap items-center justify-between">
        <div className="flex items-center border-zinc-200 border-r">
          <button className="hover:scale-110">
            <ChevronLeft size={26} color="#112A46" />
          </button>
          <CreditCard />
          <button className="hover:scale-110">
            <ChevronRight size={26} color="#112A46" />
          </button>
        </div>
        <div className="flex flex-col gap-3 mr-2">
          <span className="flex flex-col items-end">
            <p className="text-primary-text font-semibold text-3xl font-body">$ 2850.75</p>
            <p className="text-zinc-400 text-sm">Current balance</p>
          </span>
          <span className="flex flex-col items-end">
            <p className="text-emerald-600 font-semibold text-2xl font-body">$ 1500.50</p>
            <p className="text-zinc-400 text-sm">Income</p>
          </span>
          <span className="flex flex-col items-end">
            <p className="text-red-700 font-semibold text-xl font-body">$ 350.60</p>
            <p className="text-zinc-400 text-sm">Outcome</p>
          </span>
        </div>
      </div>

      <div className="w-full flex items-center gap-2">
        <div className="w-full flex flex-col gap-2">
          <div className="w-2/3 h-3 bg-zinc-400 rounded-xl">
            <p className="w-24 h-3 bg-primary-text/80 rounded-xl"></p>
          </div>
          <div className="w-2/3 flex items-center justify-between">
            <p className="text-sm text-zinc-400">Payment limit</p>
            <p className="text-sm font-bold text-primary-text/75">$350.60 / $4000 </p>
          </div>
        </div>

        <div className="mr-2">
          <button className="flex items-center gap-1" title="Adicionar um cartão de crédito">
            <CardCredit color="#05668d"/>
            <p className="text-primary-text font-semibold">Add</p>
          </button>
        </div>
      </div>
    </main>
  );
}