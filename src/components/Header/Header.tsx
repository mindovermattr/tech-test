import Balance from "../Balance/Balance";
import Button from "../Button/Button";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>
        <a className={styles.header__link} href="#">
          <img className={styles.header__logo} src="/icons/cart-icon.svg" alt="Логотип магазина" />
          <span>
            Магазин <span className={styles.header__highlighted}>24/7</span>
          </span>
        </a>
      </h1>
      <div className={styles.controls}>
        <Balance />
        <Button className={styles.controls__button} variant="contained">
          <img src="/icons/close-icon.svg" alt="Закрыть" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
