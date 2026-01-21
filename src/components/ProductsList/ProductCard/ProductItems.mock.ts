export type TProductItem = {
  id: number;
  img: string;
  title: string;
  price: number;
};

export const PRODUCT_ITEMS = [
  {
    id: 1,
    price: 800,
    title: "Букет цветов",
    img: "/images/products/bouquet.webp",
  },
  {
    id: 2,
    price: 800,
    title: "Аптечка",
    img: "/images/products/medicine.webp",
  },
  {
    id: 3,
    price: 800,
    title: "Сим карта",
    img: "/images/products/sim.webp",
  },
  {
    id: 4,
    price: 800,
    title: "Смартфон",
    img: "/images/products/smartphone.webp",
  },
  {
    id: 5,
    price: 800,
    title: "Балаклава",
    img: "/images/products/balaclava.webp",
  },
  {
    id: 6,
    price: 800,
    title: "Лотерейный билет",
    img: "/images/products/lottery.webp",
  },
  {
    id: 7,
    price: 800,
    title: "Часы Kleynod",
    img: "/images/products/watch.webp",
  },
  {
    id: 8,
    price: 1000,
    title: "Apple Watch",
    img: "/images/products/apple-watch.webp",
  },
] satisfies TProductItem[];
