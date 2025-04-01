import { Card, CardContent } from "@/components/ui/card"; // Make sure this path is correct
import { FileText, Clock, Shield } from "lucide-react";

export default function ProblemSection() {
  return (
    <section id="problem" className="w-full py-12 md:py-24 bg-gradient-to-b from-white to-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-black text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Los Trámites No Deberían Ser Obstáculos</h2>
            <p className="max-w-[700px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              DOMI transforma la tediosa tramitación ante la DOM en un proceso fluido y predecible, permitiéndote concentrar tu talento en lo que realmente importa: diseñar.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
          <Card className="border-none shadow-md bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <FileText className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Normativas Simplificadas</h3>
              <p className="text-muted-foreground">
                Interpretamos la regulación compleja (LGUC, OGUC, PRC) en guías claras y procesables.
              </p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-md bg-white/60 backdrop-blur-sm">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <Clock className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Tiempo Optimizado</h3>
              <p className="text-muted-foreground">
                Reducimos errores de documentación que típicamente generan meses de retrasos en proyectos.
              </p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-md bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <Shield className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Procesos Automatizados</h3>
              <p className="text-muted-foreground">
                Convertimos trámites repetitivos en flujos eficientes que ahorran horas de trabajo administrativo.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}