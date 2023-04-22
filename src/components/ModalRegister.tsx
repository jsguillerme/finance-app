import { X } from "lucide-react";

export function ModalRegister() {
  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 bg-black/30 z-[2] shadow-lg bg-blend-overlay">
      <div className="absolute top-[25%] left-[35%] right-[25%] bg-white z-[3] w-[30%] h-[500px] shadow-2xl rounded-lg">
        <div className="w-full p-10 flex flex-col items-center justify-center">
          <div className="w-full flex items-center justify-between mb-8">
            <h3 className="text-xl text-primary-text font-semibold">Adicionar uma transação</h3>
            <button
              className="h-8 w-8 bg-red-600/20 rounded-md flex items-center justify-center hover:brightness-150"
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
              className="border rounded border-primary-text h-8 p-2 text-sm"
              type="text"
              name="establishment_name"
              id="establishment_name"
            />

            <label
              className="text-secondary-text font-medium text-lg"
              htmlFor="spent_value"
            >Valor</label>
            <input
              className="border rounded border-primary-text h-8 p-2"
              type="number"
              name="spent_value"
              id="spent_value"
            />

            <label
              className="text-secondary-text font-medium text-lg"
              htmlFor=""
            >Categoria</label>
            <select name="" id="" className="text-sm text-primary-text border rounded h-8 p-1 outline-none cursor-pointer">
              <option value="" selected disabled>Selecione...</option>
              <option value="">Supermercado</option>
              <option value="">Moradia</option>
              <option value="">Transporte</option>
              <option value="">Saúde</option>
              <option value="">Lazer</option>
            </select>

            <label
              className="text-secondary-text font-medium text-lg"
              htmlFor=""
            >Cartão Usado</label>
            <select name="" id="" className="text-sm text-primary-text border rounded h-8 p-1 outline-none cursor-pointer">
              <option value="" selected disabled>Selecione...</option>
              <option value="">Cartão exemplo 1</option>
              <option value="">Cartão exemplo 2</option>
            </select>

            <div className="w-full flex justify-between mt-5">
              <button className="bg-zinc-400 rounded p-2 text-white hover:brightness-110 transition-all">Cancelar</button>
              <button className="bg-third-text rounded p-2 text-white hover:brightness-110 transition-all">Adicionar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}