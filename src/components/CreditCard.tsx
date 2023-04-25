type CreditCardProps = {
  owner_card: string;
  expired_date: string;
  number_card: string;
}

export function CreditCard({ expired_date, number_card, owner_card }: CreditCardProps) {
  return (
    <div className="w-96 h-56 rounded-3xl bg-gradient-to-l to-primary-text from-secondary-text flex flex-col items-start justify-between m-1 p-4 shadow-xl hover:shadow-2xl hover:cursor-pointer transition-all">
      <p className="text-white font-regular text-lg font-body">Cartão de crédito</p>
      <p className="text-white font-semibold text-3xl font-body">{number_card}</p>
      <div className="flex items-center gap-4">
        <div className="flex flex-col gap-3">
          <p className="text-white font-semibold text-sm font-body">NOME</p>
          <p className="text-white font-regular text-sm font-body">{owner_card}</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-white font-semibold text-sm font-body">EXPIRA EM</p>
          <p className="text-white font-regular text-sm font-body">{expired_date}</p>
        </div>
      </div>
    </div>
  );
}