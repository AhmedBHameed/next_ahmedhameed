interface RowProps {
  className?: string;
}

const Row: React.FC<RowProps> = ({children, className}) => <tr className={className}>{children}</tr>;

export default Row;
