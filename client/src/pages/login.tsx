import { Link, useLocation } from "wouter";
import { useMemo, useState } from "react";
import { Eye, EyeOff, Lock, Mail, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const [, setLocation] = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const canSubmit = useMemo(() => email.trim().length > 3 && password.trim().length > 3, [email, password]);

  return (
    <div className="min-h-screen bg-background" data-testid="page-login">
      <Navbar />
      <main className="container mx-auto px-4 py-10">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Left: promo */}
            <section
              className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-primary/10 via-orange-500/10 to-background p-8"
              data-testid="panel-login-promo"
            >
              <div className="pointer-events-none absolute -top-24 -left-24 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-orange-500/20 blur-3xl" />

              <div className="inline-flex items-center gap-2 rounded-full border bg-background/60 backdrop-blur px-4 py-2 text-xs text-muted-foreground" data-testid="pill-login-trust">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Secure login • No-cost EMI • Free installation
              </div>

              <h1 className="mt-6 text-3xl md:text-4xl font-heading font-extrabold tracking-tight" data-testid="text-login-title">
                Welcome back to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-700">ElectraHub</span>
              </h1>
              <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-prose" data-testid="text-login-subtitle">
                Sign in to view your cart faster, continue checkout, and track offers tailored for your family.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3" data-testid="grid-login-benefits">
                <div className="rounded-2xl border bg-background/60 backdrop-blur p-4" data-testid="card-login-benefit-emi">
                  <div className="text-sm font-semibold" data-testid="text-login-benefit-emi-title">Easy EMI help</div>
                  <div className="mt-1 text-xs text-muted-foreground" data-testid="text-login-benefit-emi-sub">Get the best plan in seconds.</div>
                </div>
                <div className="rounded-2xl border bg-background/60 backdrop-blur p-4" data-testid="card-login-benefit-warranty">
                  <div className="text-sm font-semibold" data-testid="text-login-benefit-warranty-title">2-year warranty</div>
                  <div className="mt-1 text-xs text-muted-foreground" data-testid="text-login-benefit-warranty-sub">Peace of mind, always.</div>
                </div>
              </div>

              <div className="mt-8 text-xs text-muted-foreground" data-testid="text-login-note">
                Tip: This is a frontend prototype — no real account required.
              </div>
            </section>

            {/* Right: form */}
            <section className="rounded-3xl border bg-card/60 backdrop-blur p-8" data-testid="card-login-form">
              <h2 className="text-xl font-heading font-bold" data-testid="text-login-form-title">Sign in</h2>
              <p className="mt-2 text-sm text-muted-foreground" data-testid="text-login-form-subtitle">
                Use any email + password to continue in this mockup.
              </p>

              <div className="mt-6 space-y-4" data-testid="form-login">
                <div data-testid="group-login-email">
                  <label className="text-sm font-medium" htmlFor="login-email" data-testid="label-login-email">
                    Email
                  </label>
                  <div className="mt-2 relative" data-testid="wrap-login-email">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="login-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@gmail.com"
                      className="pl-10 rounded-2xl"
                      data-testid="input-login-email"
                    />
                  </div>
                </div>

                <div data-testid="group-login-password">
                  <label className="text-sm font-medium" htmlFor="login-password" data-testid="label-login-password">
                    Password
                  </label>
                  <div className="mt-2 relative" data-testid="wrap-login-password">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="login-password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="pl-10 pr-12 rounded-2xl"
                      data-testid="input-login-password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 h-9 w-9 rounded-xl hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                      data-testid="button-login-toggle-password"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between" data-testid="row-login-actions">
                  <label className="flex items-center gap-2 text-sm text-muted-foreground" data-testid="label-login-remember">
                    <input type="checkbox" className="h-4 w-4" data-testid="checkbox-login-remember" />
                    Remember me
                  </label>
                  <a href="#" className="text-sm text-primary hover:underline" data-testid="link-login-forgot">
                    Forgot password?
                  </a>
                </div>

                <Button
                  className="w-full rounded-2xl h-11 bg-gradient-to-r from-primary to-orange-700 hover:opacity-95"
                  disabled={!canSubmit}
                  onClick={() => setLocation("/")}
                  data-testid="button-login-submit"
                >
                  Continue
                </Button>

                <div className="text-center text-sm text-muted-foreground" data-testid="text-login-switch">
                  New here?{" "}
                  <Link href="/signup" className="text-primary hover:underline" data-testid="link-login-signup">
                    Create an account
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
