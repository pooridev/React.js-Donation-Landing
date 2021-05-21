import DonationForm from '../components/DonationForm';
import HelpUs from '../components/HelpUs';
import classes from './App.module.css';

function App() {
  return (
    <main className={classes.App}>
      <HelpUs />
      <DonationForm />
    </main>
  );
}

export default App;
