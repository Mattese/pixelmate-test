import styles from './button.module.scss';

export enum ButtonClasses {
  button__Blue__Large = 'button__Blue__Large',
  button__Blue__Medium = 'button__Blue__Medium',
  button__Blue__Small = 'button__Blue__Small',
  button__Inverted__Large = 'button__Inverted__Large',
  button__Inverted__Medium = 'button__Inverted__Medium',
  button__Inverted__Small = 'button__Inverted__Small',
  button__White__Large = 'button__White__Large',
  button__White__Medium = 'button__White__Medium',
  button__White__Small = 'button__White__Small',
}

interface ComponentProps {
  label: string;
  disabled?: boolean;
  submit?: boolean;
  // TODO: change type
  onClick?: any;
  className?: ButtonClasses;
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
