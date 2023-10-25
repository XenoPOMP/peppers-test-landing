import FavoritesSection from '@/src/sections/main/FavoritesSection/FavoritesSection';
import LogoSection from '@/src/sections/main/LogoSection/LogoSection';
import ProsSection from '@/src/sections/main/ProsSection/ProsSection';

export default function Home() {
  return (
    <main>
      <LogoSection />

      <ProsSection />

      <FavoritesSection />
    </main>
  );
}
