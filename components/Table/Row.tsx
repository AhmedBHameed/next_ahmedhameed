interface RowProps {
  className?: string;
}

const Row: React.FC<RowProps> = ({children, className}) => {
  return <tr className={className}>{children}</tr>;
};

export default Row;
