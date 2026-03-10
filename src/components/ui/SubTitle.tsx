interface Props{
    title: string;
    span?: string;
}

export default function SubTitle({title, span}: Props) {
    return (
        <div>
        <h2 className="text-textPrimary text-3xl lg:text-5xl xl:text-6xl font-bold flex flex-col leading-tight">
            {title}
            <span className="text-bgSecondary">{span}</span>
        </h2>
        </div>
    )
}
