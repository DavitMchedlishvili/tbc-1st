'use client'

import { useEffect, useState } from "react";
import "./searchBar.css";
import { useRouter } from "next/navigation";
import { useDebounce } from "../../../hooks/useDebounce";
import Search from "../../../../../public/assets/search-symbol.png";
import { useLocale } from "next-intl";

interface SearchBarProps {
  searchType: string;
}

export default function SearchBar({ searchType }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedValue = useDebounce(searchTerm, 300);
  const router = useRouter();
  const locale = useLocale();

  useEffect(() => {
    if (debouncedValue) {
      router.push(`/${locale}/${searchType}/?search=${debouncedValue}`);
    } else {
      router.push(`/${locale}/${searchType}`);
    }
  }, [debouncedValue, router, locale, searchType]);

  return (
    <div className="searchBar-container container">
      <img className="searchBar-icon" src={Search.src} alt="search-icon" />
      <input
        className="searchBar-input"
        type="text"
        value={searchTerm}
        placeholder="looking for something ?"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}



