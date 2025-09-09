import Link from 'next/link';
import { MountainIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="container flex h-14 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <MountainIcon className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold font-headline">CityZen</span>
        </Link>
        <nav className="ml-auto flex items-center gap-2 sm:gap-4">
          <Button variant="ghost" asChild>
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              Public Map
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/dashboard" className="text-sm font-medium hover:underline underline-offset-4">
              Employee Dashboard
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
