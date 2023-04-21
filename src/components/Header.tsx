import { Award, CreditCard, LineChart, List, Settings } from 'lucide-react';
import { Link } from './Link';
import cardCredit from '../assets/credit-card.svg';

export function Header() {
  return (
    <div className="flex flex-col w-full h-full items-center justify-between py-6">
      <div className="flex flex-col w-full h-full items-center">
        <div className='w-full flex items-center justify-center gap-2 mb-28'>
          <img src={cardCredit} alt="Logo cartão de crédito" className='w-16 h-16' />
          <p className='text-primary-text font-body font-semibold text-2xl'>Finance</p>
        </div>

        <div className='flex flex-col gap-8 items-start'>
          <Link
            icon={<LineChart />}
            title='Overview'
          />
          <Link
            icon={<List />}
            title='Transactions'
          />
          <Link
            icon={<CreditCard />}
            title='Cards'
          />
          <Link
            icon={<Award />}
            title='Goals'
          />
          <Link
            icon={<Settings />}
            title='Settings'
          />
        </div>
      </div>

      <div>
        <button>App Finance by Guilherme</button>
      </div>
    </div>
  );
}