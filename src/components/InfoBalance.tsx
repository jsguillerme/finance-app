type InfoBalanceProps = {
  title: string;
  value: string;
  size: "small" | "medium" | "large";
  color: "green" | "red" | "blue"
}

export function InfoBalance({ size, title, value, color }: InfoBalanceProps) {
  return (
    <span className="flex flex-col items-end">
      <p
        className={
          `font-semibold
          ${size === 'small' && 'text-xl'}
          ${size === 'medium' && 'text-2xl'}
          ${size === 'large' && 'text-3xl'}
          ${color === 'green' && 'text-emerald-600' }
          ${color === 'red' && 'text-red-700' }
          ${color === 'blue' && 'text-primary-text' }
        `}
      >$ {value}</p>
      <p className="text-zinc-400 text-sm">{title}</p>
    </span>
  );
}