import type { ReactNode } from "react"

interface Props{
    text: string
    icon?: ReactNode
}

export default function Pill({icon, text} :Props) {
  return (
    <div className="px-4 py-3 w-auto max-w-2xs text-lg flex border items-center justify-center text-bgSecondary font-semibold border-bgSecondary rounded-full gap-1">
        {icon}{text}
    </div>
  )
}
