import { Categories } from '@/containers/routes/home/categories';
import { HeroSlider } from '@/containers/routes/home/hero-slider';

export default function Page() {
  return (
    <>
      <HeroSlider
        data={[
          {
            id: '1',
            image: '/images/temp/hero-slider-1.webp',
            link: '/',
          },
          {
            id: '2',
            image: '/images/temp/hero-slider-2.webp',
            link: '/',
          },
          {
            id: '3',
            image: '/images/temp/hero-slider-3.webp',
            link: '/',
          },
        ]}
      />
      <Categories />
    </>
  );
}
