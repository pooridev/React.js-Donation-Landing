import classes from './HelpUs.module.css';
import HelpUsTitle from './HelpUsTitle';

const HelpUs = () => {
  return (
    <section className={classes.HelpUs}>
      <HelpUsTitle />
      <p className={classes.HelpUsParagraph}>
        We'll get right to the point: we're asking you to support us. We're a
        nonprofit that relies on support from people like you. If everyone
        reading this gives $10 monthly, we can thrive for years.
      </p>
    </section>
  );
};

export default HelpUs;
