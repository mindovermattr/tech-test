import Button from "@/components/Button/Button";
import clsx from "clsx";
import styles from "./PaymentModal.module.scss";

type TPaymentModalProps = {
  onClose: () => void;
};

const PaymentModal = ({ onClose }: TPaymentModalProps) => {
  return (
    <div className={styles["payment-modal"]}>
      <h2 className={styles["payment-modal__title"]}>Подтверждение</h2>
      <div className={styles["payment-modal__content"]}>
        <p className={styles["payment-modal__text"]}>
          Описание — это тип речи, в котором передаётся образ предмета, человека, явления или природы через его
          признаки, свойства и качества. Цель описания — создать наглядное представление о предмете речи, показать его
          индивидуальные и типичные черты
        </p>
      </div>
      <div className={styles["payment-modal__buttons"]}>
        <Button
          variant="contained"
          className={clsx(styles["payment-modal__button"], styles["payment-modal__button--cancel"])}
          onClick={onClose}
        >
          Отмена
        </Button>
        <Button
          variant="contained"
          className={clsx(styles["payment-modal__button"], styles["payment-modal__button--success"])}
          onClick={onClose}
        >
          Подтвердить
        </Button>
      </div>
    </div>
  );
};

export default PaymentModal;
