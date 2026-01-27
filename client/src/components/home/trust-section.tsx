import { ShieldCheck, Truck, Percent, Wrench } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "2-Year Warranty",
    description: "Comprehensive coverage for your peace of mind."
  },
  {
    icon: Wrench,
    title: "Free Installation",
    description: "Expert setup at your home within 24 hours."
  },
  {
    icon: Percent,
    title: "No-Cost EMI",
    description: "Easy monthly payments with 0% interest."
  },
  {
    icon: Truck,
    title: "Express Delivery",
    description: "Safe & secure shipping across India."
  }
];

export function TrustSection() {
  return (
    <section className="py-12 bg-white border-y">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-4">
              <div className="h-12 w-12 rounded-full bg-orange-50 text-primary flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}