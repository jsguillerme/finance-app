import { Header } from "./components/Header";
import { HistoryTransactions } from "./components/HistoryTransactions";
import { InfoCard } from "./components/InfoCards";
import { InfoGoals } from "./components/InfoGoals";
import { NavMain } from "./components/NavMain";
import { OutcomeStatistics } from "./components/OutcomeStatistics";

function App() {
  return (
    <div className="w-screen h-screen flex items-center outline-0">
      <aside className="w-72 mr-5 h-full border-r-2 border-r-zinc-200">
        <Header />
      </aside>

      <main className="w-full h-full flex-1">
        <NavMain />
        <section className="w-full h-4/5 grid grid-cols-2 p-2 gap-5 grid-flow-row">
          <div className="w-full h-full flex flex-col items-center flex-wrap lg:flex-nowrap">
            <InfoCard />
            <HistoryTransactions />
          </div>
          <div>
            <InfoGoals />
            <OutcomeStatistics />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App
