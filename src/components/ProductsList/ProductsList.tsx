import ProductCard from "./ProductCard/ProductCard";
import type { TProductItem } from "./ProductCard/ProductItems.mock";
import styles from "./ProductsList.module.scss";

type TProductsListProps = {
  items: TProductItem[];
};

const ProductsList = ({ items }: TProductsListProps) => {
  return (
    <div className={styles.products}>
      <div className={styles.list}>
        {items.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
      <p className={styles.products__description}>
        Чтобы купить предмет, нажмите на него и выберите количество, после чего выберите способ оплаты.
      </p>
    </div>
  );
};

export default ProductsList;
