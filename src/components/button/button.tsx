import styles from './button.module.scss';

interface ComponentProps {
  label: string;
  disabled?: boolean;
  submit?: boolean;
  // TODO: change type
  onClick?: any;
  className?: string;
}
// className={className && `styles.${className}`}
export const Button: React.FC<ComponentProps> = ({ label, disabled, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles[className ? className : 'button__Blue__Large']}`}
    >
      {label}
    </button>
  );
};
