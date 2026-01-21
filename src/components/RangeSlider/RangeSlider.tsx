import clsx from "clsx";
import styles from "./RangeSlider.module.scss";

type TRangeSliderProps = {
  min?: number;
  max?: number;
  value?: number;
  className?: string;
  onChange?: (value: number) => void;
};

const RangeSlider = ({ min = 0, max = 1000, value = 150, className, onChange }: TRangeSliderProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(Number(e.target.value));
  };

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={handleChange}
      className={clsx(styles["range-slider"], className)}
      style={{ "--range-value": `${percentage}%` } as React.CSSProperties}
    />
  );
};

export default RangeSlider;
