import styles from './button.module.scss';

interface ComponentProps {
  label: string;
  inverted?: boolean;
  disabled?: boolean;
}

export const Button: React.FC<ComponentProps> = ({ label, inverted, disabled }) => {
  return (
    <button disabled={disabled} className={inverted ? styles.button__Inverted__Large : styles.button__Blue__Large}>
      {label}
    </button>
  );
};
