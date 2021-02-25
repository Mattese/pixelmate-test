import { Button } from 'src/components/button/button';
import styles from './signInForm.module.scss';

export const SignInForm: React.FC = () => {
  const isDisabled = () => true;
  return (
    <div className={styles.container}>
      <div className="text-bold">
        <h2>Přihlašte se</h2>
      </div>
      <div>
        <Button disabled={isDisabled()} label="Přihlašte se" />
      </div>
    </div>
  );
};
