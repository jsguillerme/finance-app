export function CreditCard() {
  return (
    <div className="w-96 h-56 rounded-3xl bg-gradient-to-l to-primary-text from-secondary-text flex flex-col items-start justify-between m-2 p-4 shadow-xl hover:shadow-2xl hover:cursor-pointer transition-all">
      <p className="text-white font-regular text-lg font-body">credit card</p>
      <p className="text-white font-semibold text-3xl font-body">5789 **** **** 2847</p>
      <div className="flex items-center gap-4">
        <div className="flex flex-col gap-3">
          <p className="text-white font-semibold text-sm font-body">Card holder</p>
          <p className="text-white font-regular text-sm font-body">SAMPLE N EXAMPLE</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-white font-semibold text-sm font-body">Expire date</p>
          <p className="text-white font-regular text-sm font-body">06/21</p>
        </div>
      </div>
    </div>
  );
}