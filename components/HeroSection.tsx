import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] min-h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
             style={{ backgroundImage: 'url(/header3.webp)' }}>
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4 text-left">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Tu Asistente IA para Agilizar Permisos de Edificación <br></br>en Chile
              </h1>
              <p className="text-gray-200 md:text-xl">
                Simplifica, agiliza y optimiza la tramitación de permisos municipales con inteligencia artificial.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="gap-1.5">
                Descargar la App <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="text-black border-white hover:bg-gray-200 hover:text-black">
                Solicitar una Demo
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-md overflow-hidden rounded-xl border border-gray-600 shadow-xl">
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
  );
} 