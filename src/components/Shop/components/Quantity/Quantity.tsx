import { type Dispatch, type SetStateAction } from "react";
import GlassCard from "../../../GlassCard/GlassCard";
import RangeSlider from "../../../RangeSlider/RangeSlider";
import styles from "./Quantity.module.scss";

type TQuantityProps = {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
};

const Quantity = ({ quantity, setQuantity }: TQuantityProps) => {
  return (
    <div className={styles["quantity-container"]}>
      <GlassCard className={styles["quantity-card"]}>
        <div className={styles["quantity"]}>
          <p className={styles["quantity__label"]}>Количество</p>
          <p className={styles["quantity__value"]}>{quantity}</p>
        </div>
        <RangeSlider min={0} max={1000} value={quantity} onChange={setQuantity} className={styles["range-slider"]} />
      </GlassCard>
    </div>
  );
};

export default Quantity;
