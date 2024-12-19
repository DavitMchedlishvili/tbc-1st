"use client";

import { useRouter } from "next/navigation";
import "./sortComponent.css";
import { useLocale } from "next-intl";

interface SortOption {
  label: string;
  value: string;
}

const SortComponent: React.FC = () => {
  const sortOptions: SortOption[] = [
    { label: "Default", value: "" },
    { label: "Price: Low to High", value: "price-asc" },
    { label: "Price: High to Low", value: "price-desc" },
    { label: "Name: A-Z", value: "title-asc" },
    { label: "Name: Z-A", value: "title-desc" },
  ];

  const router = useRouter();
  const locale = useLocale();

  const handlerSort = (selectedSortValue: string) => {
    router.push(`/${locale}/products/?sortBy=${selectedSortValue}`);
  };

  return (
    <>
      <select
        className="select"
        name="sort"
        onChange={(e) => handlerSort(e.target.value)}
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default SortComponent;
