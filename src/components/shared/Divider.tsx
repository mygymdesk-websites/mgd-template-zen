interface DividerProps {
  className?: string;
  variant?: 'short' | 'long';
}

const Divider = ({ className = '', variant = 'short' }: DividerProps) => {
  if (variant === 'long') {
    return <div className={`section-divider ${className}`} />;
  }
  return <div className={`zen-divider ${className}`} />;
};

export default Divider;
