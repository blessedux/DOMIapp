import { Card, CardContent } from "@/components/ui/card"; // Make sure this path is correct
import { FileText, Clock, Shield } from "lucide-react";

export default function ProblemSection() {
  return (
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
  );
}