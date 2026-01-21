import { createContext, useState, type ReactNode } from "react";

type SelectContextType = {
  isOpen: boolean;
  toggleOpen: () => void;
};

const SelectContext = createContext<SelectContextType | null>(null);

export const SelectProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return <SelectContext.Provider value={{ isOpen, toggleOpen }}>{children}</SelectContext.Provider>;
};

export { SelectContext };
