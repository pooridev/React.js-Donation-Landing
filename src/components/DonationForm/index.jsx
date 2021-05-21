import GiftFrequency from './GiftFrequency/GiftFrequency';
import classes from './DonationForm.module.css';
import SelectAmount from './SelectAmount/SelectAmount';

const DonationForm = () => {
  return (
    <form className={classes.DonationForm}>
      <GiftFrequency />
      <SelectAmount />
    </form>
  );
};

export default DonationForm;
