import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-background border-t">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <h3 className="text-lg font-bold">DOMI</h3>
            <p className="text-sm text-muted-foreground">
              Tu asistente IA para agilizar permisos de edificación en Chile.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold">Enlaces</h3>
            <ul className="space-y-1">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#problem" className="text-sm text-muted-foreground hover:text-primary">
                  Problema
                </Link>
              </li>
              <li>
                <Link href="#solution" className="text-sm text-muted-foreground hover:text-primary">
                  Solución
                </Link>
              </li>
              <li>
                <Link href="#benefits" className="text-sm text-muted-foreground hover:text-primary">
                  Beneficios
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold">Contacto</h3>
            <p className="text-sm text-muted-foreground">¿Tienes preguntas? Escríbenos a info@domiapp.cl</p> {/* Replace with actual contact */}
          </div>
        </div>
        <div className="mt-8 border-t pt-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} DOMI. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
