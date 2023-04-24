import { ChevronLeft, ChevronRight, CreditCard as CardCredit } from "lucide-react";
import { CreditCard } from "./CreditCard";
import { TitleBoard } from "./TitleBoard";
import { useContext, useEffect, useState } from "react";
import { CardCreditContext } from "../contexts/CardCreditContext";
import { AddCreditCard } from "./Modals/AddCreditCard";
import { InfoBalance } from "./InfoBalance";
import { CardCreditClass } from "../helpers/CardCredit";
import { ICreditCard } from "../interface/ICreditCard";

export function InfoCards() {
  const { openModal, modalAddCreditCard } = useContext(CardCreditContext);
  const [currentCard, setCurrentCard] = useState<ICreditCard>();

  console.log(currentCard)

  const populateCreditCards = async () => {
    const result = await CardCreditClass.getAllCards();
    setCurrentCard(result[0])
  }

  useEffect(() => {
    populateCreditCards();
  }, [modalAddCreditCard])

  return (
    <main className="min-w-[720px] self-start h-2/4 flex flex-col items-start p-4 gap-3 shadow-lg rounded-3xl">
      <TitleBoard title="Cartões" />

      <div className="w-full flex flex-wrap md:flex-nowrap items-center justify-between">
        <div className="flex items-center border-zinc-200 border-r">
          <button className="hover:scale-110">
            <ChevronLeft size={26} color="#112A46" />
          </button>
          <CreditCard
            number_card={currentCard?.number_card || "XXXX **** **** XXXX"}
            owner_card={currentCard?.owner_card || "EXAMPLE NAME"}
            expired_date={currentCard?.expired_date || "YYYY-MM"}
          />
          <button className="hover:scale-110">
            <ChevronRight size={26} color="#112A46" />
          </button>
        </div>

        <div className="flex flex-col gap-3 mr-2">
          <InfoBalance
            title="Saldo atual"
            value={currentCard?.current_balance || '0'}
            size="large"
            color="blue"
          />
          <InfoBalance
            title="Entrada"
            value={currentCard?.income_balance || '0'}
            size="medium"
            color="green"
          />
          <InfoBalance
            title="Saída"
            value={currentCard?.outcome_balance || '0'}
            size="small"
            color="red"
          />
        </div>
      </div>

      <div className="w-full flex items-center gap-2">
        <div className="w-full flex flex-col gap-2">
          <div className="w-2/3 h-3 bg-zinc-400 rounded-xl">
            <p className="w-24 h-3 bg-primary-text/80 rounded-xl"></p>
          </div>
          <div className="w-2/3 flex items-center justify-between">
            <p className="text-sm text-zinc-400">Payment limit</p>
            <p className="text-sm font-bold text-primary-text/75">{`${currentCard?.outcome_balance || 'R$ 0'} / ${currentCard?.limit_value || 'R$ 0'}`}</p>
          </div>
        </div>

        <div className="mr-2">
          <button
            className="flex items-center gap-1 hover:brightness-150"
            title="Adicionar um cartão de crédito"
            onClick={openModal}
          >
            <CardCredit color="#05668d" />
            <p className="text-primary-text font-semibold">Add</p>
          </button>
        </div>
        {modalAddCreditCard && <AddCreditCard />}
      </div>
    </main>
  );
}