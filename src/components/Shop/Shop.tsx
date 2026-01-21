import { Activity, useState } from "react";
import { useSelectContext } from "../../context/SelectContext/useSelectContext";
import { PRODUCT_ITEMS } from "../ProductsList/ProductCard/ProductItems.mock";
import ProductsList from "../ProductsList/ProductsList";
import { Select } from "../Select/Select";
import { SELECT_ITEMS } from "../Select/SelectItems.mock";
import OrderSummary from "./components/OrderSummary/OrderSummary";
import Quantity from "./components/Quantity/Quantity";
import TotalPrice from "./components/Payment/Payment";
import styles from "./Shop.module.scss";

const Shop = () => {
  const { isOpen } = useSelectContext();
  const [quantity, setQuantity] = useState(150);
  return (
    <div className={styles.shop}>
      <div className={styles.shop__select}>
        <Select items={SELECT_ITEMS} />
        <Activity mode={isOpen ? "hidden" : "visible"}>
          <Quantity quantity={quantity} setQuantity={setQuantity} />
          <OrderSummary quantity={quantity} />
          <TotalPrice />
        </Activity>
      </div>
      <ProductsList items={PRODUCT_ITEMS} />
    </div>
  );
};

export default Shop;
