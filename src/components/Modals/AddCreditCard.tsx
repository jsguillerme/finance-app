import { AlertTriangle, X } from "lucide-react";
import { FormEvent, useContext, useState } from "react";
import { CardCreditContext } from "../../contexts/CardCreditContext";
import { ICreditCard } from "../../interface/ICreditCard";
import { CardCreditClass } from "../../helpers/CardCredit";

export function AddCreditCard() {
  const { closeModal } = useContext(CardCreditContext)
  const [ísLoading, setIsLoading] = useState(false);

  const [apelido, setApelido] = useState('');
  const [numberCard, setNumberCard] = useState('');
  const [nameCard, setNameCard] = useState('');
  const [dateExpired, setDateExpired] = useState('');
  const [limitCard, setLimitCard] = useState('');
  const [isError, setIsError] = useState(false);

  async function addNewCardCredit(event: FormEvent) {
    event.preventDefault();
    setIsLoading(true);

    if (numberCard.trim() === '' || nameCard.trim() === '' || dateExpired.trim() === '' || limitCard.trim() === '' || apelido.trim() === '') {
      setIsLoading(false);
      return;
    }

    const payloadCardCredit: ICreditCard = {
      number_card: numberCard,
      expired_date: dateExpired,
      limit_value: limitCard,
      owner_card: nameCard,
      surname: apelido
    }

    try {

      await CardCreditClass.createNewCard(payloadCardCredit);
      
      setDateExpired('');
      setLimitCard('');
      setNameCard('');
      setNumberCard('');
      setIsLoading(false);
      closeModal();

    } catch (error) {
      setIsError(true);
      setDateExpired('');
      setLimitCard('');
      setNameCard('');
      setNumberCard('');
      setIsLoading(false);
      setTimeout(() => {
        setIsError(false);
      }, 4000)
      return error;
    }
  }

  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 bg-black/30 z-[2] shadow-lg bg-blend-overlay">
      <div className="absolute top-[25%] left-[40%] right-[25%] bg-white z-[3] w-[25%] h-[600px] shadow-2xl rounded-lg">
        <div className="w-full p-8 flex flex-col items-center justify-center">
          <div className="w-full flex items-center justify-between mb-8">
            <h3 className="text-xl text-primary-text font-semibold">Adicionar um cartão</h3>
            <button
              className="h-6 w-6 bg-red-600/20 rounded-md flex items-center justify-center hover:brightness-150"
              onClick={() => closeModal()}
            >
              <X size={18} color="red" />
            </button>
          </div>
          <form className="w-full flex flex-col gap-3">

            <label
              className="text-secondary-text font-medium text-sm"
              htmlFor="cc-apelido"
            >Apelido para cartão</label>
            <input
              className="border rounded-md p-2 text-sm text-primary-text placeholder-primary-text/40"
              type="text"
              name="cc-apelido"
              id="cc-apelido"
              placeholder="Nubank, Inter..."
              value={apelido}
              onChange={val => setApelido(val.target.value)}
            />

            <label
              htmlFor="cc-number"
              className="text-secondary-text font-medium text-sm"
            >Número do cartão</label>
            <input
              type="tel"
              name="cc-number"
              id="cc-number"
              inputMode="numeric"
              pattern="/[0-9\s]/gm"
              placeholder="xxxx xxxx xxxx xxxx"
              maxLength={19}
              className="p-2 border rounded-md text-primary-text text-sm placeholder-primary-text/40"
              value={numberCard}
              onChange={val => setNumberCard(val.target.value)}
            />

            <label
              className="text-secondary-text font-medium text-sm"
              htmlFor="cc-name"
            >Nome no cartão</label>
            <input
              className="uppercase border rounded-md p-2 text-sm text-primary-text placeholder-primary-text/40"
              type="text"
              name="cc-name"
              id="cc-name"
              placeholder="NAME S S LAST"
              value={nameCard}
              onChange={val => setNameCard(val.target.value)}
            />

            <div className="w-2/5 flex flex-col gap-4">
              <label
                className="text-secondary-text font-medium text-sm"
                htmlFor="cc-date"
              >Expira em:</label>
              <input
                className="text-primary-text text-sm outline-primary-text outline-offset-2"
                type="month"
                name="cc-date"
                id="cc-date"
                onChange={val => setDateExpired(val.target.value)}
                value={dateExpired}
              />
            </div>

            <div className="w-2/6 flex flex-col gap-2">
              <label
                className="text-secondary-text font-medium text-sm"
                htmlFor="cc-limit"
              >Valor do limite</label>
              <input
                className="p-2 border rounded-md text-sm text-primary-text placeholder-primary-text/40"
                type="number"
                name="cc-limit"
                id="cc-limit"
                min={0}
                placeholder="R$1000"
                value={limitCard}
                onChange={val => setLimitCard(val.target.value)}
              />
            </div>

            <div className="w-full flex justify-start gap-10 mt-5">
              <button
                onClick={() => closeModal()}
                className="bg-zinc-400 rounded p-2 text-white hover:brightness-110 transition-all"
              >Cancelar</button>
              <button
                onClick={addNewCardCredit}
                className="bg-third-text rounded p-2 text-white hover:brightness-110 transition-all flex items-center gap-1"
              >
                Adicionar
                {ísLoading && <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></path></svg></p>}
              </button>
            </div>
            {isError && <p className="flex items-center text-sm gap-4 text-red-700/60"><AlertTriangle color="red" /> Não foi possível completar a solicitação, verifique as informações e tente novamente!</p>}
          </form>
        </div>
      </div>
    </div>
  );
}