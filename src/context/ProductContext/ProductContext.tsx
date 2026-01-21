import { createContext, useState, type ReactNode } from "react";
import type { TProductItem } from "@/components/ProductsList/ProductCard/ProductItems.mock";

type ProductContextType = {
  selectedProduct: TProductItem | null;
  selectProduct: (product: TProductItem) => void;
  clearSelectedProduct: () => void;
};

const ProductContext = createContext<ProductContextType | null>(null);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [selectedProduct, setSelectedProduct] = useState<TProductItem | null>(null);

  const selectProduct = (product: TProductItem) => {
    setSelectedProduct(product);
  };

  const clearSelectedProduct = () => {
    setSelectedProduct(null);
  };

  return (
    <ProductContext.Provider value={{ selectedProduct, selectProduct, clearSelectedProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext };
