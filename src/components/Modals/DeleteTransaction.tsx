import { X } from "lucide-react";
import { useContext } from "react";
import { TransactionContext } from "../../contexts/TransactionContext";

type ModalDeleteProps = {
  setConfirmDelete: (confirm: boolean) => void;
}

export function ModalDeleteTransaction({ setConfirmDelete }: ModalDeleteProps) {
  const { closeModal } = useContext(TransactionContext);

  function notConfirmDelete() {
    setConfirmDelete(false)
    closeModal();
  }

  function confirmDelete() {
    setConfirmDelete(true);
    closeModal();
  }

  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 bg-black/30 z-[2] shadow-lg bg-blend-overlay">
      <div className="absolute top-[25%] left-[40%] right-[25%] bg-white z-[3] w-[25%] h-[300px] shadow-2xl rounded-lg">
        <div className="w-full p-8 flex flex-col items-center justify-center">
          <div className="w-full flex items-center justify-between mb-8">
            <h3 className="text-xl text-primary-text font-semibold">Deseja deletar essa transação?</h3>
            <button
              className="h-6 w-6 bg-red-600/20 rounded-md flex items-center justify-center hover:brightness-150"
              onClick={() => closeModal()}
            >
              <X size={18} color="red" />
            </button>
          </div>
          <form>
            <h3>Ao clicar em confirmar, você estará perdendo os dados de uma transação e não será possível voltar atrás! Pense bem antes de confirmar.</h3>
            <div className="w-full flex justify-start gap-10 mt-6">
              <button
                onClick={notConfirmDelete}
                className="bg-zinc-400 rounded p-2 text-white hover:brightness-110 transition-all"
              >Cancelar</button>
              <button
                onClick={confirmDelete}
                className="bg-third-text rounded p-2 text-white hover:brightness-110 transition-all flex items-center gap-1"
              >
                Confirmar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}