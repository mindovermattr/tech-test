import Button from "../Button/Button";
import styles from "./Balance.module.scss";
const Balance = () => {
  return (
    <div className={styles.balance}>
      <img src="/icons/currency-icon.svg" alt="Иконка валюты" />
      <span>300.000.000</span>
      <Button className={styles.balance__button} variant="contained">
        <img src="/icons/plus-icon.svg" alt="Иконка плюса" />
      </Button>
    </div>
  );
};

export default Balance;
