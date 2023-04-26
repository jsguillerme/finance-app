import { Plane, ShoppingCart, Truck } from "lucide-react";
import { TitleBoard } from "./TitleBoard";

export function OutcomeStatistics() {
  return (
    <main className="w-full h-2/4 flex flex-col items-start justify-end p-4 gap-3">
      <TitleBoard title="Outcome Statistics" />

      <section className="w-full flex flex-col items-start gap-4">
        <div className="w-full flex items-center gap-4">
          <div className="h-10 w-10 pr-1 rounded-md bg-orange-400/20 flex items-center justify-center">
            <ShoppingCart size={20} color="#F8964C" />
          </div>
          <div className="h-2 w-2/4 bg-orange-400/20 rounded-md">
            <div className="h-2 w-1/3 bg-orange-400 rounded-md"></div>
          </div>
          <div>
            <p className="text-zinc-700 font-semibold text-lg">32%</p>
          </div>
        </div>
        <div className="w-full flex items-center gap-4">
          <div className="h-10 w-10 pr-1 rounded-md bg-green-400/20 flex items-center justify-center">
            <Truck size={20} color="#22A447" />
          </div>
          <div className="h-2 w-2/4 bg-green-400/20 rounded-md">
            <div className="h-2 w-1/3 bg-green-400 rounded-md"></div>
          </div>
          <div>
            <p className="text-zinc-700 font-semibold text-lg">32%</p>
          </div>
        </div>
        <div className="w-full flex items-center gap-4">
          <div className="h-10 w-10 pr-1 rounded-md bg-blue-400/20 flex items-center justify-center">
            <Plane size={20} color="#70A6E8" />
          </div>
          <div className="h-2 w-2/4 bg-blue-400/20 rounded-md">
            <div className="h-2 w-1/3 bg-blue-400 rounded-md"></div>
          </div>
          <div>
            <p className="text-zinc-700 font-semibold text-lg">32%</p>
          </div>
        </div>


      </section>
    </main>
  );
}