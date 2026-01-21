import GlassCard from "@/components/GlassCard/GlassCard";
import { useProductContext } from "@/context/ProductContext/useProductContext";
import clsx from "clsx";
import styles from "./ProductCard.module.scss";
import type { TProductItem } from "./ProductItems.mock";

type TProductCardProps = TProductItem;

const ProductCard = ({ id, img, title, price }: TProductCardProps) => {
  const { selectProduct, selectedProduct } = useProductContext();

  const handleSelectProduct = () => {
    selectProduct({ id, img, title, price });
  };

  return (
    <GlassCard asChild>
      <article
        className={clsx(styles.card, { [styles["card--selected"]]: selectedProduct?.id === id })}
        onClick={handleSelectProduct}
      >
        <img className={styles.card__image} src={img} alt={title} />
        <h3 className={styles.card__title}>{title}</h3>
        <p className={clsx(styles.card__price, { [styles["card__price--selected"]]: selectedProduct?.id === id })}>
          <span>₴ {price}</span>
        </p>
      </article>
    </GlassCard>
  );
};

export default ProductCard;
