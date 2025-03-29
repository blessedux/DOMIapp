import Link from "next/link";
import { Button } from "@/components/ui/button"; // Make sure this path is correct

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl">
          {/* Optional: Add an icon here */}
          <span className="text-primary">DOMI</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="#problem" className="text-sm font-medium hover:text-primary">
            Problema
          </Link>
          <Link href="#solution" className="text-sm font-medium hover:text-primary">
            Solución
          </Link>
          <Link href="#benefits" className="text-sm font-medium hover:text-primary">
            Beneficios
          </Link>
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