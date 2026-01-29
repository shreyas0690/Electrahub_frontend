import { ShieldCheck, Truck, Percent, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    id: "warranty",
    icon: ShieldCheck,
    title: "2-Year Warranty",
    description: "Peace of mind for your family.",
    accent: "from-orange-500/15 to-amber-500/10",
    ring: "ring-orange-500/15",
    iconBg: "bg-orange-500/15",
    iconFg: "text-orange-600",
  },
  {
    id: "installation",
    icon: Wrench,
    title: "Free Installation",
    description: "Expert setup at your home.",
    accent: "from-emerald-500/15 to-teal-500/10",
    ring: "ring-emerald-500/15",
    iconBg: "bg-emerald-500/15",
    iconFg: "text-emerald-700",
  },
  {
    id: "emi",
    icon: Percent,
    title: "No-Cost EMI",
    description: "Easy monthly payments.",
    accent: "from-blue-500/15 to-cyan-500/10",
    ring: "ring-blue-500/15",
    iconBg: "bg-blue-500/15",
    iconFg: "text-blue-700",
  },
  {
    id: "delivery",
    icon: Truck,
    title: "Express Delivery",
    description: "Fast & secure shipping.",
    accent: "from-purple-500/15 to-fuchsia-500/10",
    ring: "ring-purple-500/15",
    iconBg: "bg-purple-500/15",
    iconFg: "text-purple-700",
  },
] as const;

export function TrustSection() {
  return (
    <section className="py-14 bg-background">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl border bg-card/60 backdrop-blur-sm shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, idx) => (
              <div
                key={feature.id}
                className={cn(
                  "group p-6 md:p-7 transition-colors",
                  idx !== 0 && "border-t sm:border-t-0 sm:border-l",
                  idx === 2 && "sm:border-t",
                  idx === 3 && "sm:border-t lg:border-t-0",
                )}
              >
                <div
                  className={cn(
                    "relative rounded-xl border bg-gradient-to-br p-5 ring-1 shadow-sm",
                    feature.accent,
                    feature.ring,
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        "h-11 w-11 rounded-xl border flex items-center justify-center",
                        feature.iconBg,
                      )}
                    >
                      <feature.icon className={cn("h-5 w-5", feature.iconFg)} />
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

                  <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-foreground/30" />
                      Verified benefit
                    </span>
                    <button
                      className="font-medium group-hover:text-foreground transition-colors"
                      data-testid={`button-trust-learn-${feature.id}`}
                    >
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}