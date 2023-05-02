import { Header } from "./components/Header";
import { HistoryTransactions } from "./components/HistoryTransactions";
import { InfoCards } from "./components/InfoCards";
import { InfoGoals } from "./components/InfoGoals";
import { NavMain } from "./components/NavMain";
// import { OutcomeStatistics } from "./components/OutcomeStatistics";
import { CardCreditContextProvider } from "./contexts/CardCreditContext";
import { GoalContextProvider } from "./contexts/GoalContext";
import { TransactionContextProvider } from "./contexts/TransactionContext";

function App() {
  return (
    <div className="w-screen h-screen flex items-center outline-0">
      <aside className="w-60 mr-6 h-full border-r-2 border-r-zinc-200 max-[960px]:w-16">
        <Header />
      </aside>

      <main className="w-full flex-1">
        <TransactionContextProvider>
          <CardCreditContextProvider>
            <GoalContextProvider>
              <NavMain />
              <section className="w-full grid grid-cols-2 p-2 gap-5 max-[1670px]:grid-cols-1">
                <div className="w-full flex flex-col items-center">
                  <InfoCards />
                  <HistoryTransactions />
                </div>
                <div className="max-[760px]:flex max-[760px]:flex-col max-[760px]:gap-20">
                  <InfoGoals />
                  {/* <OutcomeStatistics /> */}
                </div>
              </section>
            </GoalContextProvider>
          </CardCreditContextProvider>
        </TransactionContextProvider>
      </main>
    </div>
  );
}

export default App
