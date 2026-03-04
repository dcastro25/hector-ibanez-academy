import type { ReactNode } from "react";
import { LiaPlusSolid } from "react-icons/lia";

interface Props{
    text: string;
    text2: string;
    icon: ReactNode
}

export default function StatCard({text, text2, icon} : Props) {

    

  return (
    <div className="flex flex-col h-auto max-w-45 items-center">

        <div className="flex text-textPrimary">
            <span className="text-bgSecondary text-lg">
                {icon}
            </span>
            <p className="font-semibold ml-1 text-3xl">{text}</p>
            <LiaPlusSolid className="text-2xl"/>
        </div>
        <p className="text-textSecondary flex text-center">
            {text2} 
        </p>
    </div>
  )
}

