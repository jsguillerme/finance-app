import { LineChart, Trash } from "lucide-react";
import { ITransaction } from "../interface/ITransaction";
import { TransactionClass } from "../helpers/Transactions";
import { CardCreditClass } from "../helpers/CardCredit";

export function Transaction({ establishment_name, category_establishment, created_at, spent_value, type_transaction, id, card_credit_id }: ITransaction) {

  async function deleteTransactionById(id: string) {
    if (id == 'null') {
      return;
    }

    if (!card_credit_id) {
      return;
    }

    if (window.confirm("Você tem certeza que deseja remover essa transação?")) {
      await TransactionClass.deleteTransactionById(id);

      if (type_transaction === "income") {
        const payload = {
          new_spent: "-" + spent_value
        }

        await CardCreditClass.CardUpdateNewIncome(card_credit_id, payload)
      } else if (type_transaction === "outcome") {
        const payload = {
          new_spent: "-" + spent_value
        }

        await CardCreditClass.CardUpdateNewOutcome(card_credit_id, payload)
      }
    }
  }

  return (
    <div className={`w-full grid grid-cols-4 mb-2 py-2 border-b border-primary-text/20 $`}>
      <p className="text-primary-text font-medium text-sm">{establishment_name}</p>
      <p className="text-zinc-400 text-sm ">{category_establishment}</p>
      <p className="text-zinc-400 text-sm ">{created_at}</p>
      <div className="flex items-center justify-center gap-4">
        <p className="w-2/6 text-zinc-600 font-semibold text-sm ">$ {spent_value}</p>
        {type_transaction === 'income' && <p title="Entrada de dinheiro" className="cursor-pointer"><LineChart size={18} color="green" /></p>}
        {type_transaction === 'outcome' && <p title="Saída de dinheiro" className="cursor-pointer"><LineChart size={18} color="red" /></p>}
        <button
          onClick={() => deleteTransactionById(id || 'null')}
        >
          <Trash size={16} color="red" />
        </button>
      </div>
    </div>
  );
}