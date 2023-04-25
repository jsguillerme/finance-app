type TitleBoardProps = {
  title: string;
}

export function TitleBoard({ title }: TitleBoardProps) {
  return (
    <div className="mt-2">
      <p className="text-xl font-body font-bold text-secondary-text">{title}</p>
    </div>
  );
}