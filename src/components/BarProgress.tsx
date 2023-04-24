type BarProgressProps = {
  completed: number;
}

export function BarProgress({ completed }: BarProgressProps) {
  return (
    <div className="w-[70%] h-3 bg-zinc-300 rounded-xl">
      <div className="h-3 rounded-xl bg-primary-text" style={{width: `${completed}%`}}>
        <span></span>
      </div>
    </div>
  );
}