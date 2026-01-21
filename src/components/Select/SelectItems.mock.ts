export type TSelectItem = {
  link: string;
  name: string;
  icon: string;
};

export const SELECT_ITEMS = [
  {
    link: "#",
    name: "Все товары",
    icon: "/icons/categories/categories-all.svg",
  },
  {
    link: "#",
    name: "Электроника",
    icon: "/icons/categories/categories-electronic.svg",
  },
  {
    link: "#",
    name: "Медикаменты",
    icon: "/icons/categories/categories-medic.svg",
  },
  {
    link: "#",
    name: "Развлечения",
    icon: "/icons/categories/categories-joy.svg",
  },
  {
    link: "#",
    name: "Прочее",
    icon: "/icons/categories/categories-other.svg",
  },
] satisfies TSelectItem[];
