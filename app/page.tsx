import FavoritesSection from '@/src/sections/main/FavoritesSection/FavoritesSection';
import LogoSection from '@/src/sections/main/LogoSection/LogoSection';
import OurPromosSection from '@/src/sections/main/OurPromosSection/OurPromosSection';
import PartnersSection from '@/src/sections/main/PartnersSection/PartnersSection';
import ProsSection from '@/src/sections/main/ProsSection/ProsSection';

export default function Home() {
  return (
    <main>
      <LogoSection />

      <ProsSection />

      <FavoritesSection />

      <OurPromosSection />

      <PartnersSection />
    </main>
  );
}
