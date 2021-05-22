import GiftFrequency from './GiftFrequency/GiftFrequency';
import classes from './DonationForm.module.css';
import SelectAmount from './SelectAmount/SelectAmount';
import Agreement from './Agreement';

const DonationForm = () => {
  return (
    <form className={classes.DonationForm}>
      <GiftFrequency />
      <SelectAmount />
      <Agreement />
    </form>
  );
};

export default DonationForm;
