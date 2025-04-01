import { CheckCircle, Bell } from "lucide-react";
import { GooeyText } from "@/components/ui/gooey-text-morphing";

export default function SolutionSection() {
  return (
    <section id="solution" className="w-full py-12 md:py-24 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="h-20">
              <GooeyText 
                texts={["Nuestra Solución: DOMI", "DOMI, tu Asistente IA", "Optimiza tus Permisos", "Simplifica tu Trabajo"]} 
                morphTime={1.5}
                cooldownTime={2}
                textClassName="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" 
              />
            </div>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              DOMI es una plataforma inteligente que automatiza y optimiza la gestión de permisos, reduciendo
              tiempos y errores.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12 mt-12">
          {/* Item 1 */}
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
          {/* Item 2 */}
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
          {/* Item 3 */}
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
          {/* Item 4 */}
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
           {/* Item 5 */}
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
  );
}