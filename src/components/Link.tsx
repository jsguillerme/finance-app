import { ReactNode } from "react"

type LinkProps = {
  icon: ReactNode;
  title: string;
}

export function Link(props: LinkProps) {
  return (
    <div className='flex items-center justify-center gap-6'>
      <a href="#" className="text-zinc-400 hover:brightness-75">{props.icon}</a>
      <a href="#" className="text-zinc-400 font-medium hover:brightness-75 max-[960px]:hidden">{props.title}</a>
    </div>
  );
}