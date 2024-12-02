'use client';

import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SideBar = ({ user }: 
  SidebarProps) => {
  const pathname = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" 
        className="mb-12 
        cursor-pointer 
        flex 
        items-center gap-2">
          <Image
            src="/icons/logo.svg"  
            width={34}
            height={34}
            alt="ikigai logo"
            className="h-[24px] w-[24px] max-xl:h-14 max-xl:w-14"
          />
          <h1 className="sidebar-logo">Ikigai</h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn('sidebar-link', {
                'bg-bank-gradient': isActive,
              })}
            >
              <div className="relative h-6 w-6">
                <Image
                  src={item.imgURL}  
                  alt={item.label}
                  fill
                  className={cn({
                    'brightness-[3] invert-0': isActive,
                  })}
                />
              </div>
              <p
                className={cn('sidebar-label', {
                  '!text-white': isActive,
                })}
              >
                {item.label}
              </p>
            </Link>
          );
        })}

        USER
      </nav>

        FOOTER
    </section>
  );
};

export default SideBar;
