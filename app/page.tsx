import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, FileText, Clock, Shield, Bell, ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
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
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              Iniciar Sesión
            </Button>
            <Button size="sm">Registrarse</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Tu Asistente IA para Agilizar Permisos de Edificación en Chile
                  </h1>
                  <p className="text-muted-foreground md:text-xl">
                    Simplifica, agiliza y optimiza la tramitación de permisos municipales con inteligencia artificial.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" className="gap-1.5">
                    Descargar la App <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Solicitar una Demo
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md overflow-hidden rounded-xl border shadow-xl">
                  <img
                    src="/placeholder.svg?height=600&width=400"
                    alt="DOMI App en acción"
                    className="w-full object-cover"
                    width={400}
                    height={600}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="problem" className="w-full py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Problema</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Obtener permisos de edificación ante la Dirección de Obras Municipales (DOM) es un proceso lento y
                  complejo.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
              <Card className="border-none shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <FileText className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Normativas Extensas</h3>
                  <p className="text-muted-foreground">
                    Normativas extensas y cambiantes (LGUC, OGUC, PRC) difíciles de seguir.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Clock className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Errores y Retrasos</h3>
                  <p className="text-muted-foreground">
                    Errores en la documentación que generan retrasos significativos en los proyectos.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Shield className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Procesos Burocráticos</h3>
                  <p className="text-muted-foreground">
                    Procesos burocráticos engorrosos y repetitivos que consumen tiempo valioso.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution" className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestra Solución: DOMI</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  DOMI es una plataforma inteligente que automatiza y optimiza la gestión de permisos, reduciendo
                  tiempos y errores.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12 mt-12">
              <div className="flex flex-col space-y-3">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-1">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Guía Paso a Paso</h3>
                    <p className="text-muted-foreground">
                      Te acompaña desde el Certificado de Informaciones Previas (CIP) hasta la aprobación final.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-3">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-1">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Gestión Documental Inteligente</h3>
                    <p className="text-muted-foreground">
                      Organiza y verifica planos, formularios y certificados para evitar observaciones.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-3">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-1">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Asistencia Normativa en Tiempo Real</h3>
                    <p className="text-muted-foreground">
                      Accede fácilmente a la LGUC, OGUC y requisitos específicos de cada comuna.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-3">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-1">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Checklists Dinámicos Personalizados</h3>
                    <p className="text-muted-foreground">Reduce riesgos de incumplimiento y agiliza la presentación.</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-3">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-1">
                    <Bell className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Alertas y Seguimiento (Próximamente)</h3>
                    <p className="text-muted-foreground">Mantente informado sobre plazos y estados de solicitudes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="w-full py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Beneficios de Usar DOMI</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Transforma tu forma de tramitar permisos con DOMI
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
              <Card className="border-none shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Clock className="h-10 w-10 text-primary" />
                  <h3 className="text-lg font-bold">Reduce el tiempo de aprobación</h3>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Shield className="h-10 w-10 text-primary" />
                  <h3 className="text-lg font-bold">Minimiza errores y correcciones</h3>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <CheckCircle className="h-10 w-10 text-primary" />
                  <h3 className="text-lg font-bold">Asegura el cumplimiento normativo</h3>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <FileText className="h-10 w-10 text-primary" />
                  <h3 className="text-lg font-bold">Libera tu tiempo para diseñar</h3>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Transforma tu forma de tramitar permisos
                </h2>
                <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Descarga DOMI y empieza hoy mismo.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="gap-1.5">
                  Descargar la App <ChevronRight className="h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Solicitar una Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
              <p className="text-sm text-muted-foreground">¿Tienes preguntas? Escríbenos a info@domiapp.cl</p>
            </div>
          </div>
          <div className="mt-8 border-t pt-6">
            <p className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} DOMI. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

