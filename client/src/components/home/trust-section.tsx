import { ShieldCheck, Truck, Percent, Wrench } from "lucide-react";

const features = [
  {
    id: "warranty",
    icon: ShieldCheck,
    title: "2-Year Warranty",
    description: "Comprehensive coverage that keeps your family worry-free.",
  },
  {
    id: "installation",
    icon: Wrench,
    title: "Free Installation",
    description: "Expert home setup included with every TV purchase.",
  },
  {
    id: "emi",
    icon: Percent,
    title: "No-Cost EMI",
    description: "Split payments easily with 0% interest options.",
  },
  {
    id: "delivery",
    icon: Truck,
    title: "Express Delivery",
    description: "Fast, safe delivery across India with secure packaging.",
  },
] as const;

export function TrustSection() {
  return (
    <section className="py-10 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group rounded-2xl border bg-card shadow-sm hover:shadow-md transition-shadow p-5"
              data-testid={`card-trust-${feature.id}`}
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center border">
                  <feature.icon className="h-6 w-6" />
                </div>

                <div className="min-w-0">
                  <h3 className="font-heading font-bold text-foreground leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              <div className="mt-4 h-px w-full bg-border" />

              <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-medium">Trusted by 10k+ homes</span>
                <button
                  className="font-semibold text-primary hover:underline"
                  data-testid={`button-trust-details-${feature.id}`}
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
