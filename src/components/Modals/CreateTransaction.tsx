import { X } from "lucide-react";
import { FormEvent, useContext, useState } from "react";
import { TransactionContext } from "../../contexts/TransactionContext";
import { ITransaction } from "../../interface/ITransaction";
import { TransactionClass } from "../../helpers/Transactions";

export function ModalCreateTransaction() {
  const { closeModal } = useContext(TransactionContext)

  const [establishmentName, setEstablishmentName] = useState('');
  const [spentValue, setSpentValue] = useState(0);
  const [categoryEstablishment, setCategoryEstablishment] = useState('');
  const [cardCredit, setCardCredit] = useState('');

  async function createTransaction(event: FormEvent) {
    event.preventDefault();
    const payload: ITransaction = {
      spent_value: String(spentValue),
      category_establishment: categoryEstablishment,
      establishment_name: establishmentName,
      card_credit_id: cardCredit
    }

    console.log('Payload:', payload)
    await TransactionClass.createTransaction(payload);
    setEstablishmentName('');
    setSpentValue(0);
    setCategoryEstablishment('');
    setCardCredit('');
    closeModal();
  }

  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 bg-black/30 z-[2] shadow-lg bg-blend-overlay">
      <div className="absolute top-[25%] left-[35%] right-[25%] bg-white z-[3] w-[30%] h-[500px] shadow-2xl rounded-lg">
        <div className="w-full p-10 flex flex-col items-center justify-center">
          <div className="w-full flex items-center justify-between mb-8">
            <h3 className="text-xl text-primary-text font-semibold">Adicionar uma transação</h3>
            <button
              className="h-8 w-8 bg-red-600/20 rounded-md flex items-center justify-center hover:brightness-150"
              onClick={() => closeModal()}
            >
              <X size={26} color="red" />
            </button>
          </div>
          <form className="flex flex-col gap-2">
            <label
              className="text-secondary-text font-medium text-lg"
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
              className="text-secondary-text font-medium text-lg"
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
              className="text-secondary-text font-medium text-lg"
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
              className="text-secondary-text font-medium text-lg"
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
              <option value="0730ffac-d039-4194-9571-01aa2aa0efbd">Nubank</option>
            </select>

            <div className="w-full flex justify-between mt-5">
              <button
                onClick={() => closeModal()}
                className="bg-zinc-400 rounded p-2 text-white hover:brightness-110 transition-all"
              >Cancelar</button>
              <button
                onClick={createTransaction}
                className="bg-third-text rounded p-2 text-white hover:brightness-110 transition-all"
              >Adicionar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}