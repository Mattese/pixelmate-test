import { Button, ButtonClasses } from 'src/components/button/button';
import styles from './signInForm.module.scss';
import { useForm } from 'react-hook-form';

type Inputs = {
  example: string;
  exampleRequired: string;
};

export const SignInForm: React.FC = () => {
  const isDisabled = () => true;
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data: any, e: any) => {
    e.preventDefault();
    console.log(data, e);
  };

  return (
    <div className={styles.container}>
      <form className={styles.fieldsWrapper} autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <div className="text-bold">
          <h2>Přihlašte se</h2>
        </div>
        <div>
          <div className={styles.inputContainer}>
            <input
              className="text-bold"
              type="email"
              name="email"
              placeholder="Váš email"
              autoComplete="off"
              ref={register({ required: true })}
            />
          </div>
          <div className={styles.inputContainer}>
            <input
              type="password"
              autoComplete="off"
              name="password"
              placeholder="Heslo"
              ref={register({ required: true })}
            />
          </div>
          <div>
            <input type="checkbox" id="checkbox1" name="gdpr" ref={register({ required: true })} />
            <label htmlFor="checkbox1">Souhlasím se všeobecnými podmínkami a Zásadou o ochranně osobních údajlů.</label>
          </div>
        </div>
        <div>
          <Button className={ButtonClasses['button__Blue__Large']} label="PŘIHLASIT SE" />
        </div>
      </form>
    </div>
  );
};
