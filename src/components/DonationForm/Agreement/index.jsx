import classes from './Agreement.module.css';

const Agreement = () => {
  return (
    <fieldset className={classes.Agreement}>
      <input
        className={classes.CheckBox}
        type='checkbox'
        id='agreement-checkbox'
      />
      <label htmlFor='agreement-checkbox'>
        Yes, I’ll generously add $0.75 each month to cover the transaction fees.
      </label>
    </fieldset>
  );
};

export default Agreement;
