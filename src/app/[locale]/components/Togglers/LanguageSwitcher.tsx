'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect, ChangeEvent } from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const initialLocale = pathname.split('/')[1] || 'en';
  const [locale, setLocale] = useState<string>(initialLocale);

  useEffect(() => {
    setLocale(initialLocale);
  }, [pathname]);

  const handleLocaleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    setLocale(newLocale);
    router.push(`/${newLocale}${pathname.slice(3)}`);
    localStorage.setItem('preferredLocale', newLocale);
  };

  return (
    <select
      value={locale}
      onChange={handleLocaleChange}
      className="flex items-center p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white"
    >
      <option value="en">Eng</option>
      <option value="ka">ქარ</option>
    </select>
  );
}
