import { Link, useLocation } from "wouter";
import { useMemo, useState } from "react";
import { Eye, EyeOff, Lock, Mail, Phone, User2, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignupPage() {
  const [, setLocation] = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const canSubmit = useMemo(() => {
    return fullName.trim().length > 1 && email.trim().length > 3 && phone.trim().length > 6 && password.trim().length > 3;
  }, [fullName, email, phone, password]);

  return (
    <div className="min-h-screen bg-background" data-testid="page-signup">
      <Navbar />
      <main className="container mx-auto px-4 py-10">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Left: promo */}
            <section
              className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-primary/10 via-orange-500/10 to-background p-8"
              data-testid="panel-signup-promo"
            >
              <div className="pointer-events-none absolute -top-24 -left-24 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-orange-500/20 blur-3xl" />

              <div className="inline-flex items-center gap-2 rounded-full border bg-background/60 backdrop-blur px-4 py-2 text-xs text-muted-foreground" data-testid="pill-signup-trust">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Faster checkout • EMI assistance • Priority support
              </div>

              <h1 className="mt-6 text-3xl md:text-4xl font-heading font-extrabold tracking-tight" data-testid="text-signup-title">
                Create your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-700">ElectraHub</span> account
              </h1>
              <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-prose" data-testid="text-signup-subtitle">
                Save your details for quicker checkout and get personalized festive offers.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3" data-testid="grid-signup-benefits">
                <div className="rounded-2xl border bg-background/60 backdrop-blur p-4" data-testid="card-signup-benefit-checkout">
                  <div className="text-sm font-semibold" data-testid="text-signup-benefit-checkout-title">Quick checkout</div>
                  <div className="mt-1 text-xs text-muted-foreground" data-testid="text-signup-benefit-checkout-sub">No re-typing address.</div>
                </div>
                <div className="rounded-2xl border bg-background/60 backdrop-blur p-4" data-testid="card-signup-benefit-support">
                  <div className="text-sm font-semibold" data-testid="text-signup-benefit-support-title">Priority support</div>
                  <div className="mt-1 text-xs text-muted-foreground" data-testid="text-signup-benefit-support-sub">Call/WhatsApp help.</div>
                </div>
              </div>

              <div className="mt-8 text-xs text-muted-foreground" data-testid="text-signup-note">
                Note: This is a frontend prototype — account creation is simulated.
              </div>
            </section>

            {/* Right: form */}
            <section className="rounded-3xl border bg-card/60 backdrop-blur p-8" data-testid="card-signup-form">
              <h2 className="text-xl font-heading font-bold" data-testid="text-signup-form-title">Sign up</h2>
              <p className="mt-2 text-sm text-muted-foreground" data-testid="text-signup-form-subtitle">
                Use any details to continue in this mockup.
              </p>

              <div className="mt-6 space-y-4" data-testid="form-signup">
                <div data-testid="group-signup-name">
                  <label className="text-sm font-medium" htmlFor="signup-name" data-testid="label-signup-name">
                    Full name
                  </label>
                  <div className="mt-2 relative" data-testid="wrap-signup-name">
                    <User2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="signup-name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Your name"
                      className="pl-10 rounded-2xl"
                      data-testid="input-signup-name"
                    />
                  </div>
                </div>

                <div data-testid="group-signup-email">
                  <label className="text-sm font-medium" htmlFor="signup-email" data-testid="label-signup-email">
                    Email
                  </label>
                  <div className="mt-2 relative" data-testid="wrap-signup-email">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="signup-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@gmail.com"
                      className="pl-10 rounded-2xl"
                      data-testid="input-signup-email"
                    />
                  </div>
                </div>

                <div data-testid="group-signup-phone">
                  <label className="text-sm font-medium" htmlFor="signup-phone" data-testid="label-signup-phone">
                    Phone
                  </label>
                  <div className="mt-2 relative" data-testid="wrap-signup-phone">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="signup-phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="pl-10 rounded-2xl"
                      data-testid="input-signup-phone"
                    />
                  </div>
                </div>

                <div data-testid="group-signup-password">
                  <label className="text-sm font-medium" htmlFor="signup-password" data-testid="label-signup-password">
                    Password
                  </label>
                  <div className="mt-2 relative" data-testid="wrap-signup-password">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="signup-password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Create a password"
                      className="pl-10 pr-12 rounded-2xl"
                      data-testid="input-signup-password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 h-9 w-9 rounded-xl hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                      data-testid="button-signup-toggle-password"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <Button
                  className="w-full rounded-2xl h-11 bg-gradient-to-r from-primary to-orange-700 hover:opacity-95"
                  disabled={!canSubmit}
                  onClick={() => setLocation("/")}
                  data-testid="button-signup-submit"
                >
                  Create account
                </Button>

                <div className="text-center text-sm text-muted-foreground" data-testid="text-signup-switch">
                  Already have an account?{" "}
                  <Link href="/login" className="text-primary hover:underline" data-testid="link-signup-login">
                    Sign in
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
