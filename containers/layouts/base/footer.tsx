import { HomeIcon, ShoppingCartIcon, StoreIcon, UserIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer>
      <Base />
      <NavBottom />
    </footer>
  );
};

const Base = () => {
  return (
    <div>
      <div className="container mb-26 lg:mb-0">
        <div className="bg-white p-2 rounded-xl border my-4 flex gap-2 items-center justify-between">
          <p className="text-sm text-gray-600">
            طراحی و توسعه توسط حمید شاهسونی
          </p>
          <Image
            src="/images/layout/logo.png"
            alt="logo"
            width={45}
            height={45}
          />
        </div>
      </div>
    </div>
  );
};

const NavBottom = () => {
  return (
    <div>
      <div className="container fixed bottom-0 left-0 right-0 lg:hidden">
        <div className="bg-white p-3 rounded-xl border my-4 flex gap-2 items-center justify-around">
          <Link
            href="/"
            className="flex flex-col items-center justify-center gap-1 group"
          >
            <HomeIcon className="size-5.5 text-gray-600 group-hover:text-primary transition-colors duration-300" />
            <span className="text-sm text-gray-600 group-hover:text-primary transition-colors duration-300">
              خانه
            </span>
          </Link>
          <Link
            href="/explore"
            className="flex flex-col items-center justify-center gap-1 group"
          >
            <StoreIcon className="size-5.5 text-gray-600 group-hover:text-primary transition-colors duration-300" />
            <span className="text-sm text-gray-600 group-hover:text-primary transition-colors duration-300">
              فروشگاه
            </span>
          </Link>
          <Link
            href="/cart"
            className="flex flex-col items-center justify-center gap-1 group"
          >
            <ShoppingCartIcon className="size-5.5 text-gray-600 group-hover:text-primary transition-colors duration-300" />
            <span className="text-sm text-gray-600 group-hover:text-primary transition-colors duration-300">
              سبد خرید
            </span>
          </Link>
          <Link
            href="/auth"
            className="flex flex-col items-center justify-center gap-1 group"
          >
            <UserIcon className="size-5.5 text-gray-600 group-hover:text-primary transition-colors duration-300" />
            <span className="text-sm text-gray-600 group-hover:text-primary transition-colors duration-300">
              ورود/ثبت نام
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
