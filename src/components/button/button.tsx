import styles from './button.module.scss';

interface ComponentProps {
  label: string;
}

export const Button: React.FC<ComponentProps> = ({ label }) => {
  console.log(styles);
  return <button className={styles.buttonBlue__Large}>{label}</button>;
};
