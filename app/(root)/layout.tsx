import Image from 'next/image'; 
import SideBar from "@/components/ui/SideBar";
import MobileNav from '@/components/ui/MobileNav';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {firstName: 'Peter', lastName: 'Kuria'};

  return (
    <main className="flex h-screen w-full font-inter">
      <SideBar user={loggedIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image 
            src='/icons/logo.svg' 
            width={30} 
            height={30} 
            alt='logo' 
          />
          <div>
            <MobileNav user={loggedIn}/>
          </div>
        </div>
          {children}
      </div>
    </main>
  );
}
