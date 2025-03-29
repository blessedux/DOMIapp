import Link from "next/link";
import { Button } from "@/components/ui/button"; // Make sure this path is correct
import Image from "next/image"; // Import the Next.js Image component

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl">
          {/* Optional: Add an icon here */}
          <Link href="/" className="flex items-center"> {/* Wrap logo in Link to home */}
            <Image
              src="/icons/DOMI_LOGO.svg" // Assuming PNG format, adjust if needed (e.g., .svg, .webp)
              alt="DOMI Logo"
              width={60} // Specify appropriate width
              height={24} // Specify appropriate height to maintain aspect ratio
              priority // Add priority if it's Above The Fold (ATF) for LCP
            />
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          
          {/* Add other nav links if needed */}
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">
            Iniciar Sesión
          </Button>
          <Button size="sm">Registrarse</Button>
        </div>
      </div>
    </header>
  );
}