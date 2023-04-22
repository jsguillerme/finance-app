import { Bell, Mail, User } from "lucide-react";

export function NavMain() {
  return (
    <div className="flex items-center justify-between w-full h-30">

      <div className="flex flex-col w-full h-full items-start justify-center px-12">
        <h2 className="text-5xl font-body font-bold text-zinc-800">Olá, Guilherme</h2>
        <p className="text-zinc-500 font-body">Aqui estão suas informações de gastos até o momento!</p>
      </div>

      <div className="flex items-center justify-center gap-4 mr-4">
        <button className="hover:brightness-75">
          <Mail size={20} color="#A1A1AA" />
        </button>
        <button className="hover:brightness-75">
          <Bell size={20} color="#A1A1AA" />
        </button>
        <button className="p-1 flex items-center border border-zinc-50 rounded-2xl hover:border hover:border-zinc-400 hover:rounded-2xl transition-all">
          <div className="rounded-full border border-fifth-text bg-fifth-text">
            <User size={20} color="#112A46" />
          </div>
          <p className="text-primary-text font-bold text-sm font-body hover:brightness-75">Guilherme Andrade</p>
        </button>
      </div>

    </div>
  );
}