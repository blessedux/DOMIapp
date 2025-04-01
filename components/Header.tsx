import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-transparent backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl">
          <Link href="/" className="flex items-center">
            <Image
              src="/icons/DOMI_LOGO.svg"
              alt="DOMI Logo"
              width={60}
              height={24}
              priority
            />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="border-black text-black hover:bg-accent-custom hover:text-white hover:border-transparent">
            Iniciar Sesión
          </Button>
          <Button size="sm" className="bg-accent-custom hover:bg-accent-custom/80">
            Registrarse
          </Button>
        </div>
      </div>
    </header>
  );
}