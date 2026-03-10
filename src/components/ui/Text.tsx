interface Props {
  children: React.ReactNode
  className?: string
}

export function Text({ children, className = "" } : Props) {
  return (
    <p className={`text-textSecondary my-4 ${className}`}>
      {children}
    </p>
  )
}