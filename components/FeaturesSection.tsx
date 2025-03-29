// Assuming you have an Icon component or similar
// import { CheckIcon, DocumentIcon, ClockIcon } from "./icons";

export default function FeaturesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Key Features</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Simplify complex processes and focus on design with our intelligent assistant.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <div className="grid gap-1">
            <h3 className="text-lg font-bold flex items-center gap-2">
              {/* <DocumentIcon className="h-5 w-5" /> */}
              Smart Document Management
            </h3>
            <p className="text-sm text-muted-foreground">
              Organize and verify required documents effortlessly, reducing submission errors.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold flex items-center gap-2">
              {/* <CheckIcon className="h-5 w-5" /> */}
              Regulatory Guidance
            </h3>
            <p className="text-sm text-muted-foreground">
              Access relevant LGUC, OGUC, and local norms to ensure compliance.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold flex items-center gap-2">
              {/* <ClockIcon className="h-5 w-5" /> */}
              Process Acceleration
            </h3>
            <p className="text-sm text-muted-foreground">
              Navigate the permit steps efficiently, minimizing delays and rework.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 