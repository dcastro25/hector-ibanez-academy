import type { ReactNode } from "react";

interface Props{
  text: string;
  icon?: ReactNode;
}

export default function ButtonSecondary({text, icon}: Props) {
  return (
    <div>
      <button className="bg-bgPrimary text-bgSecondary border border-bgSecondary flex justify-center items-center gap-1 px-4 py-1.5 font font-semibold rounded-lg hover:shadow-[0_6px_12px_rgba(207,142,30,0.25)] hover:-translate-y-0.5 transition-all duration-300 ease-out cursor-pointer">
        {icon}{text}
      </button>
    </div>
  )
}
