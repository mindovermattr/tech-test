import clsx from "clsx";
import type { TSelectItem } from "../SelectItems.mock";
import styles from "./SelectItem.module.scss";

type TSelectItemProps = TSelectItem & {
  className?: string;
};

const SelectItem = ({ link, name, icon, className }: TSelectItemProps) => {
  return (
    <li className={clsx(styles.item, className)} role="option">
      <a className={styles.item__link} href={link}>
        <img className={styles.item__icon} src={icon} alt={name} />
        <span className={styles.item__name}>{name}</span>
      </a>
    </li>
  );
};

export default SelectItem;
