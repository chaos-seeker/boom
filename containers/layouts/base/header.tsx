import { SearchIcon, ShoppingBagIcon, UserIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="bg-white rounded-xl justify-between p-2 mt-4 border flex gap-2 items-center">
          <Image
            src="/images/layout/logo.png"
            alt="logo"
            width={45}
            height={45}
          />
          <div className="bg-gray-50 transition-colors focus-within:border-primary rounded-xl border h-full p-[9px] w-full flex gap-2 items-center lg:max-w-[350px]">
            <SearchIcon className="size-6 text-gray-600" />
            <input
              type="text"
              placeholder="دنبال چی هستی؟!"
              className="w-full text-smp"
            />
          </div>
          <div className="gap-3 hidden lg:flex">
            <Link
              href="/cart"
              className="flex bg-gray-50 rounded-xl border h-full px p-2 py-0.5 hover:border-primary transition-colors w-full items-center gap-2"
            >
              <div className="relative">
                <p className="bg-primary text-white rounded-full size-5 flex items-center justify-center text-xs absolute -top-4 -right-4">
                  {6}
                </p>
                <ShoppingBagIcon className="size-6 text-gray-600" />
              </div>
              <div className="flex flex-col">
                <p className="text-sm text-gray-500">مبلغ</p>
                <p className="text-sm whitespace-nowrap">0 تومان</p>
              </div>
            </Link>
            <Link
              href="/auth"
              className="flex bg-gray-50 rounded-xl border h-full px p-2 py-0.5 hover:border-primary transition-colors w-full items-center gap-2"
            >
              <UserIcon className="size-6 text-gray-600" />
              <div className="flex flex-col">
                <p className="text-sm text-gray-500">ورود به</p>
                <p className="text-sm whitespace-nowrap">حساب کاربری</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
