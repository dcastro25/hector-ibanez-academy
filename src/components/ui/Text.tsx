interface Props {
  children: React.ReactNode
  className?: string
}

export function Text({ children, className = "" } : Props) {
  return (
    <p className={`text-textSecondary text-xs lg:text-lg my-4 lg:my-7 font-semibold ${className}`}>
      {children}
    </p>
  )
}