import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-[120%] min-h-[600px] md:min-h-[70vh] flex items-center justify-start overflow-hidden">
      <iframe
        src='https://my.spline.design/animatedclonecube-8a9fe89885558ed8e576c2cd84a6f352/ '
        width='120%'
        height='100%'
        className="absolute top-0 left-0 w-full h-full z-0"
        aria-hidden="true"
      ></iframe>

      <div className="relative z-10 container px-4 md:px-6">
        <div className="flex flex-col items-start text-left max-w-xl lg:max-w-2xl">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
                Tu Asistente IA para Agilizar Permisos de Edificación en Chile
              </h1>
              <p className="text-black md:text-xl">
                Simplifica, agiliza y optimiza la tramitación de permisos
                municipales con inteligencia artificial.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="gap-1.5">
                Descargar la App <ChevronRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white hover:text-accent-custom transition-colors"
              >
                Solicitar una Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
