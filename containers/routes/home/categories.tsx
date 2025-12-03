'use client';

import 'swiper/css';
import { ChevronLeft, ChevronRight, LayoutGridIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const categoriesData = [
  {
    id: 1,
    title: 'ساعت',
    image: '/images/temp/category-watch.png',
    slug: 'watch',
  },
  {
    id: 2,
    title: 'مانیتور',
    image: '/images/temp/category-monitor.png',
    slug: 'monitor',
  },
  {
    id: 3,
    title: 'گوشی',
    image: '/images/temp/category-phone.webp',
    slug: 'phone',
  },
  {
    id: 4,
    title: 'هندزفری',
    image: '/images/temp/category-headphone.png',
    slug: 'headphone',
  },
  {
    id: 5,
    title: 'ایرپاد',
    image: '/images/temp/category-airpod.webp',
    slug: 'airpod',
  },
  {
    id: 6,
    title: 'هارد',
    image: '/images/temp/category-hard.webp',
    slug: 'hard',
  },
  {
    id: 7,
    title: 'کنسول',
    image: '/images/temp/category-console.png',
    slug: 'controller',
  },
  {
    id: 8,
    title: 'ساعت',
    image: '/images/temp/category-watch.png',
    slug: 'watch',
  },
  {
    id: 9,
    title: 'مانیتور',
    image: '/images/temp/category-monitor.png',
    slug: 'monitor',
  },
  {
    id: 10,
    title: 'گوشی',
    image: '/images/temp/category-phone.webp',
    slug: 'phone',
  },
  {
    id: 11,
    title: 'هندزفری',
    image: '/images/temp/category-headphone.png',
    slug: 'headphone',
  },
  {
    id: 12,
    title: 'ایرپاد',
    image: '/images/temp/category-airpod.webp',
    slug: 'airpod',
  },
  {
    id: 13,
    title: 'هارد',
    image: '/images/temp/category-hard.webp',
    slug: 'hard',
  },
  {
    id: 14,
    title: 'کنسول',
    image: '/images/temp/category-console.png',
    slug: 'controller',
  },
];

export const Categories = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<any>(null);

  return (
    <section>
      <div className="container flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-white rounded-lg border p-2 w-fit">
              <LayoutGridIcon className="size-6 text-primary" />
            </div>
            <p className="font-medium">دسته بندی</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              disabled={isBeginning}
              className="bg-white rounded-lg p-2 w-fit disabled:opacity-80 disabled:cursor-not-allowed cursor-pointer border transition-colors hover:border-primary"
            >
              <ChevronRight className="size-6 text-primary" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              disabled={isEnd}
              className="bg-white rounded-lg p-2 w-fit disabled:opacity-80 disabled:cursor-not-allowed cursor-pointer border transition-colors hover:border-primary"
            >
              <ChevronLeft className="size-6 text-primary" />
            </button>
          </div>
        </div>
        <div className="w-full">
          <div className="relative">
            <Swiper
              spaceBetween={10}
              slidesPerView="auto"
              dir="rtl"
              watchSlidesProgress={true}
              slidesPerGroup={1}
              onSlideChange={(swiper) => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              onReachEnd={() => {
                setIsEnd(true);
              }}
              onReachBeginning={() => {
                setIsBeginning(true);
              }}
              className="categories-swiper"
            >
              {categoriesData.map((category) => (
                <SwiperSlide key={category.id} className="w-auto!">
                  <Link
                    href={`/explore?category=${category.slug}`}
                    className="flex flex-col items-center"
                  >
                    <div className="bg-white rounded-xl border p-2 flex flex-col items-center justify-between gap-2 transition-colors hover:border-primary">
                      <div className="relative w-full size-18 lg:size-24 flex items-center justify-center">
                        <Image
                          src={category.image}
                          alt={category.title}
                          width={100}
                          height={100}
                          className="object-contain w-full h-full"
                        />
                      </div>
                      <p className="text-smp">{category.title}</p>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
