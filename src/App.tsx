import { Header } from "./components/Header";
import { HistoryTransactions } from "./components/HistoryTransactions";
import { InfoCard } from "./components/InfoCards";
import { InfoGoals } from "./components/InfoGoals";
import { NavMain } from "./components/NavMain";
import { OutcomeStatistics } from "./components/OutcomeStatistics";

function App() {
  return (
    <div className="w-screen h-screen flex items-center outline-0">
      <aside className="w-60 mr-5 h-full border-r-2 border-r-zinc-200 max-[960px]:w-16">
        <Header />
      </aside>

      <main className="w-full h-full flex-1">
        <NavMain />
        <section className="w-full h-4/5 grid grid-cols-2 p-2 gap-5 max-[1670px]:grid-cols-1">
          <div className="w-full h-full flex flex-col items-center">
            <InfoCard />
            <HistoryTransactions />
          </div>
          <div className="max-[760px]:flex max-[760px]:flex-col max-[760px]:gap-20">
            <InfoGoals />
            <OutcomeStatistics />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App
