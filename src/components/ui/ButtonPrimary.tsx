
interface Props{
    text: string,
    href?: string

}

export function ButtonPrimary ({text, href="#"}: Props) {
  return (
        <button  className="bg-bgSecondary px-4 py-2 font font-semibold rounded-lg hover:shadow-[0_6px_12px_rgba(207,142,30,0.25)] hover:-translate-y-0.5 transition-all duration-300 ease-out cursor-pointer text-xl">
            <a href={href}>{text}</a>
        </button>
  )
}
