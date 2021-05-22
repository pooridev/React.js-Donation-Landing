import classes from './NameInput.module.css';

const NameInput = () => (
  <fieldset className={classes.NameInputWrapper}>
    <label htmlFor='name-input'>Name</label>
    <input
      className={classes.NameInput}
      type='text'
      id='name-input'
      placeholder='Enter your name'
    />
    <a href='/'>Click here to give in honor of other person</a>
  </fieldset>
);

export default NameInput;
