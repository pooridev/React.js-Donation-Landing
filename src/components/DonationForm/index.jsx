import GiftFrequency from './GiftFrequency/GiftFrequency';
import classes from './DonationForm.module.css';
import SelectAmount from './SelectAmount/SelectAmount';
import Agreement from './Agreement';
import NameInput from './NameInput';
import SubmitButton from './SubmitButton';

const DonationForm = () => {
  return (
    <form className={classes.DonationForm} onSubmit={e => e.preventDefault()}>
      <GiftFrequency />
      <SelectAmount />
      <Agreement />
      <NameInput />
      <SubmitButton />
    </form>
  );
};

export default DonationForm;
