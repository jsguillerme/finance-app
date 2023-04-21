import { ReactNode } from "react"

type LinkProps = {
  icon: ReactNode;
  title: string;
}

export function Link(props: LinkProps) {
  return (
    <div className='flex items-center justify-center gap-6'>
      <p className="text-zinc-400">{props.icon}</p>
      <a href="#" className="text-zinc-400 font-medium hover:brightness-75">{props.title}</a>
    </div>
  );
}