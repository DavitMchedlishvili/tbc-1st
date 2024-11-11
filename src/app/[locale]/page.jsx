import {useTranslations} from 'next-intl';
import {Link} from '../../i18n/routing.js';
 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <>
      <h1>{t('title')}</h1>
      <Link href="/about">{t('about')}</Link>
    </>
    
  );
}