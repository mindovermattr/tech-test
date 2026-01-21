import GlassCard from "@/components/GlassCard/GlassCard";
import { useProductContext } from "@/context/ProductContext/useProductContext";
import styles from "./OrderSummary.module.scss";

type TOrderSummaryProps = {
  quantity: number;
};

const OrderSummary = ({ quantity }: TOrderSummaryProps) => {
  const { selectedProduct } = useProductContext();
  const totalPrice = (selectedProduct?.price || 0) * quantity || 300000000;
  const formattedTotalPrice = totalPrice
    .toLocaleString("ru-RU", {
      useGrouping: true,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    .replace(/\s/g, ".");

  return (
    <GlassCard className={styles["summary"]}>
      <p className={styles["summary__label"]}>К оплате:</p>
      <p className={styles["summary__value"]}>
        {formattedTotalPrice}{" "}
        <img className={styles["summary__icon"]} src="/icons/currency-icon.svg" alt="Иконка валюты" />
      </p>
    </GlassCard>
  );
};

export default OrderSummary;
