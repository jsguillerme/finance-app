import { X } from "lucide-react";
import { FormEvent, useContext, useEffect, useState } from "react";
import { TransactionContext } from "../../contexts/TransactionContext";
import { ITransaction } from "../../interface/ITransaction";
import { TransactionClass } from "../../helpers/Transactions";
import { CardCreditClass } from "../../helpers/CardCredit";
import { ICreditCard } from "../../interface/ICreditCard";

export function ModalCreateTransaction() {
  const { closeModal } = useContext(TransactionContext)
  const [ísLoading, setIsLoading] = useState(false);

  const [establishmentName, setEstablishmentName] = useState('');
  const [spentValue, setSpentValue] = useState(0);
  const [categoryEstablishment, setCategoryEstablishment] = useState('');
  const [cardCredit, setCardCredit] = useState('');
  const [typeTransaction, setTypeTransaction] = useState('');

  const [listCards, setListCards] = useState<ICreditCard[]>([]);

  const loadAllCardsToSelect = async () => {
    const result = await CardCreditClass.getAllCards();
    setListCards(result);
  };

  useEffect(() => {
    loadAllCardsToSelect()
  }, [])

  async function createTransaction(event: FormEvent) {
    event.preventDefault();
    setIsLoading(true);

    if (cardCredit.trim() === '' || categoryEstablishment.trim() === '' || spentValue === 0 || establishmentName.trim() === '' || typeTransaction.trim() === '') {
      setIsLoading(false);
      return;
    }

    const payload: ITransaction = {
      spent_value: String(spentValue),
      category_establishment: categoryEstablishment,
      establishment_name: establishmentName,
      card_credit_id: cardCredit,
      type_transaction: typeTransaction
    }

    await TransactionClass.createTransaction(payload);

    if (typeTransaction === 'outcome') {
      const payloadUpdateOutcome = {
        new_spent: String(spentValue)
      }
      await CardCreditClass.CardUpdateNewOutcome(cardCredit, payloadUpdateOutcome)

    } else if (typeTransaction === 'income') {
      const payloadUpdateIncome = {
        new_spent: String(spentValue)
      }
      await CardCreditClass.CardUpdateNewIncome(cardCredit, payloadUpdateIncome)
    } else {
      throw new Error('Não foi possível atualizar o cartão com as novas informações! Tipo da transação está errada!')
    }

    setEstablishmentName('');
    setSpentValue(0);
    setCategoryEstablishment('');
    setCardCredit('');
    setIsLoading(false);
    closeModal();
  }

  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 bg-black/30 z-[2] shadow-lg bg-blend-overlay">
      <div className="absolute top-[25%] left-[40%] right-[25%] bg-white z-[3] w-[25%] h-[520px] shadow-2xl rounded-lg">
        <div className="w-full p-8 flex flex-col items-center justify-center">
          <div className="w-full flex items-center justify-between mb-8">
            <h3 className="text-xl text-primary-text font-semibold">Adicionar uma transação</h3>
            <button
              className="h-6 w-6 bg-red-600/20 rounded-md flex items-center justify-center hover:brightness-150"
              onClick={() => closeModal()}
            >
              <X size={18} color="red" />
            </button>
          </div>
          <form className="w-full flex flex-col gap-2">
            <label
              className="text-secondary-text font-medium text-sm"
              htmlFor="establishment_name"
            >Nome do Estabelecimento</label>
            <input
              className="border rounded border-primary-text text-primary-text h-8 p-2 text-sm"
              type="text"
              name="establishment_name"
              id="establishment_name"
              value={establishmentName}
              onChange={value => setEstablishmentName(value.target.value)}
            />

            <label
              className="text-secondary-text font-medium text-sm"
              htmlFor="spent_value"
            >Valor</label>
            <input
              className="border rounded border-primary-text text-primary-text h-8 p-2"
              type="number"
              min={0}
              name="spent_value"
              id="spent_value"
              value={spentValue}
              onChange={value => setSpentValue(Number(value.target.value))}
            />

            <label
              className="text-secondary-text font-medium text-sm"
              htmlFor="categoryEstablishment"
            >Categoria</label>
            <select
              name="categoryEstablishment"
              id="categoryEstablishment"
              className="text-sm text-primary-text border rounded h-8 p-1 outline-none cursor-pointer"
              value={categoryEstablishment}
              onChange={value => setCategoryEstablishment(value.target.value)}
              defaultValue="selecione"
            >
              <option value="selecione">Selecione...</option>
              <option value="supermercado">Supermercado</option>
              <option value="moradia">Moradia</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
              <option value="lazer">Lazer</option>
            </select>

            <label
              className="text-secondary-text font-medium text-sm"
              htmlFor="cardCredit"
            >Cartão Usado</label>
            <select
              name="cardCredit"
              id="cardCredit"
              className="text-sm text-primary-text border rounded h-8 p-1 outline-none cursor-pointer"
              value={cardCredit}
              onChange={value => setCardCredit(value.target.value)}
              defaultValue="default"
            >
              <option value="default">Selecione...</option>
              {listCards.map((card) => {
                return <option
                  key={card.id}
                  value={card.id}
                >{card.surname}</option>
              })}
            </select>

            <div className="w-2/4 flex flex-col gap-3">
              <label
                className="text-secondary-text font-medium text-sm"
              >Tipo de Transição</label>
              <div className="w-full flex items-center justify-center gap-10">
                <div className="flex items-center gap-2">
                  <input
                    value={typeTransaction}
                    onChange={val => setTypeTransaction(val.target.id)}
                    className="cursor-pointer"
                    type="radio"
                    name="type_transaction"
                    id="income" />
                  <label
                    className="text-green-600 font-semibold cursor-pointer"
                    htmlFor="income"
                  >Entrada</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    value={typeTransaction}
                    onChange={val => setTypeTransaction(val.target.id)}
                    className="cursor-pointer"
                    type="radio"
                    name="type_transaction"
                    id="outcome" />
                  <label
                    className="text-red-600 font-semibold cursor-pointer"
                    htmlFor="outcome"
                  >Saída</label>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-start gap-10 mt-5">
              <button
                onClick={() => closeModal()}
                className="bg-zinc-400 rounded p-2 text-white hover:brightness-110 transition-all"
              >Cancelar</button>
              <button
                onClick={createTransaction}
                className="bg-third-text rounded p-2 text-white hover:brightness-110 transition-all flex items-center gap-1"
              >
                Adicionar
                {ísLoading && <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></path></svg></p>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}