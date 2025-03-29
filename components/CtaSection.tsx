import { Button } from "@/components/ui/button"; // Make sure this path is correct
import { ChevronRight } from "lucide-react";

export default function CtaSection() {
  return (
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
  );
}