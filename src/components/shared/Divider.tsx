interface DividerProps {
  className?: string;
}

const Divider = ({ className = '' }: DividerProps) => {
  return <div className={`zen-divider ${className}`} />;
};

export default Divider;
