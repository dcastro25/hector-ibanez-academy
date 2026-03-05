interface Props{
    title: string;
    span?: string;
}

export default function SubTitle({title, span}: Props) {
    return (
        <div>
            <h2 className="text-textPrimary text-xl lg:text-4xl font-bold">
                {title} <span className="text-bgSecondary">{span}</span>
            </h2>
        </div>
    )
}
