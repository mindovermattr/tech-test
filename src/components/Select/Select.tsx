import { useSelectContext } from "@/context/SelectContext/useSelectContext";
import clsx from "clsx";
import { Activity } from "react";
import GlassCard from "../GlassCard/GlassCard";
import styles from "./Select.module.scss";
import SelectItem from "./SelectItem/SelectItem";
import type { TSelectItem } from "./SelectItems.mock";

type TSelectProps = {
  items: TSelectItem[];
};

export const Select = ({ items }: TSelectProps) => {
  const { isOpen, toggleOpen } = useSelectContext();

  return (
    <>
      <GlassCard className={styles.select}>
        <button onClick={toggleOpen} className={styles.select__button}>
          <span>Выбор товаров</span>
          <img
            className={clsx(styles.select__icon, { [styles["select__icon--open"]]: isOpen })}
            src="/icons/arrow.svg"
            alt="Стрелка вниз"
          />
        </button>
      </GlassCard>
      <Activity mode={isOpen ? "visible" : "hidden"}>
        <ul className={styles.select__list}>
          {items.map((item) => (
            <GlassCard key={item.name} asChild>
              <SelectItem {...item} />
            </GlassCard>
          ))}
        </ul>
      </Activity>
    </>
  );
};
