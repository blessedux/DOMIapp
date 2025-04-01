import { Card, CardContent } from "@/components/ui/card"; // Make sure this path is correct
import { CheckCircle, FileText, Clock, Shield } from "lucide-react";
import { BackgroundPaths } from "@/components/ui/background-paths";

export default function BenefitsSection() {
  return (
    <section id="benefits" className="w-full py-12 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <BackgroundPaths title="" />
      </div>
      <div className="container px-4 md:px-6 relative z-10">
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
  );
}