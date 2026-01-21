import GlassCard from "@/components/GlassCard/GlassCard";
import { Modal } from "@/components/Modal/Modal";
import { useModal } from "@/hooks/useModal";
import clsx from "clsx";
import styles from "./Payment.module.scss";
import PaymentModal from "./PaymentModal/PaymentModal";

const Payment = () => {
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <div>
      <h3 className={styles["total-price__title"]}>Выберите способ оплаты</h3>
      <div onClick={openModal} className={styles["total-price__controls"]}>
        <GlassCard className={clsx(styles["total-price__card"], styles["total-price__card--cash"])}>
          <button className={styles["total-price__button"]}>Наличные</button>
        </GlassCard>
        <GlassCard className={clsx(styles["total-price__card"], styles["total-price__card--card"])}>
          <button onClick={openModal} className={styles["total-price__button"]}>
            Картой
          </button>
        </GlassCard>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <PaymentModal onClose={closeModal} />
      </Modal>
    </div>
  );
};

export default Payment;
