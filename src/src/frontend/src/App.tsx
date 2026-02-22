import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplet, Heart, Shield, Sparkles, Award, Phone } from "lucide-react";

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: Droplet,
      title: "100% Pure",
      description:
        "Sourced from pristine natural springs, filtered through multiple purification stages",
    },
    {
      icon: Shield,
      title: "Quality Tested",
      description:
        "Every batch tested for purity and mineral balance to ensure premium quality",
    },
    {
      icon: Heart,
      title: "Health First",
      description:
        "Perfectly balanced minerals for optimal hydration and wellness",
    },
    {
      icon: Sparkles,
      title: "Refreshingly Pure",
      description:
        "Crisp, clean taste that refreshes your body and revitalizes your spirit",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Droplet className="w-8 h-8 text-primary" />
            <span className="font-display text-2xl font-bold text-foreground">
              Aqua Regia
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#home"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#product"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Product
            </a>
            <a
              href="#benefits"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Benefits
            </a>
            <Button size="sm" className="shadow-glow">
              Contact Us
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
        style={{
          backgroundImage: "url(/assets/generated/hero-background.dim_1920x1080.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-8 animate-fade-in">
              <Badge className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-primary/10 text-primary border-primary/20">
                <Award className="w-4 h-4" />
                Premium Quality
              </Badge>

              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-black tracking-tight">
                <span className="text-foreground">Aqua</span>
                <br />
                <span className="text-primary drop-shadow-glow">Regia</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-xl">
                Premium mineral water that refreshes your life. Pure, pristine,
                and perfectly priced.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 lg:justify-start justify-center">
                <div className="bg-primary text-primary-foreground rounded-2xl px-8 py-6 shadow-glow-lg">
                  <p className="text-sm font-medium opacity-90">Only at</p>
                  <p className="font-display text-5xl font-black">₹9</p>
                  <p className="text-sm opacity-90">per bottle</p>
                </div>

                <div className="flex flex-col gap-3">
                  <Button size="lg" className="text-lg px-8 shadow-glow">
                    Order Now
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 border-2"
                  >
                    Learn More
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-6 pt-4 justify-center lg:justify-start">
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-primary">
                    100%
                  </p>
                  <p className="text-sm text-muted-foreground">Pure</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-primary">
                    500ml
                  </p>
                  <p className="text-sm text-muted-foreground">Standard</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-primary">
                    ₹9
                  </p>
                  <p className="text-sm text-muted-foreground">Affordable</p>
                </div>
              </div>
            </div>

            <div className="relative lg:block hidden animate-float">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-ripple" />
              <img
                src="/assets/generated/aqua-regia-bottle-transparent.dim_800x1200.png"
                alt="Aqua Regia Mineral Water Bottle"
                className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section id="product" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge className="inline-flex px-4 py-2 text-sm bg-primary/10 text-primary border-primary/20">
              Our Product
            </Badge>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground">
              Designed for <span className="text-primary">Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every aspect of Aqua Regia is crafted to deliver the purest,
              most refreshing hydration experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <Card className="relative overflow-hidden border-2 shadow-xl">
                <CardContent className="p-0">
                  <img
                    src="/assets/generated/aqua-regia-bottle-transparent.dim_800x1200.png"
                    alt="Aqua Regia Product"
                    className="w-full h-auto"
                  />
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-display text-3xl font-bold text-foreground">
                  Premium Bottle Design
                </h3>
                <p className="text-lg text-muted-foreground">
                  Our signature cyan and white color scheme represents purity
                  and trust. The ergonomic design ensures a comfortable grip,
                  while the transparent body lets you see the crystal-clear
                  water inside.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Droplet className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      500ml Perfect Size
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Ideal for on-the-go hydration throughout your day
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      BPA-Free Materials
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Safe, food-grade plastic that keeps your water pure
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Tamper-Proof Cap
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Ensures freshness and safety from source to you
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button size="lg" className="w-full md:w-auto shadow-glow">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact for Bulk Orders
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge className="inline-flex px-4 py-2 text-sm bg-primary/10 text-primary border-primary/20">
              Why Choose Us
            </Badge>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground">
              Pure <span className="text-primary">Perfection</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We don't just bottle water—we deliver health, trust, and
              refreshment in every drop
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </Card>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Card className="inline-block border-2 border-primary/20 bg-primary/5 shadow-glow">
              <CardContent className="p-8">
                <p className="text-sm text-muted-foreground mb-2">
                  Unbeatable Price
                </p>
                <p className="font-display text-6xl font-black text-primary mb-2">
                  ₹9
                </p>
                <p className="text-muted-foreground mb-6">
                  Premium quality at an affordable price—refreshment for everyone
                </p>
                <Button size="lg" className="shadow-glow">
                  Order Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-2 shadow-2xl overflow-hidden">
            <CardContent className="p-12 text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Droplet className="w-10 h-10 text-primary" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                Experience Pure Hydration
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust Aqua Regia for
                their daily hydration needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="text-lg px-8 shadow-glow">
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-2"
                >
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Droplet className="w-8 h-8 text-primary" />
                <span className="font-display text-2xl font-bold text-foreground">
                  Aqua Regia
                </span>
              </div>
              <p className="text-muted-foreground">
                Premium mineral water at ₹9. Refreshing lives, one bottle at a
                time.
              </p>
            </div>

            <div>
              <h3 className="font-display text-lg font-bold text-foreground mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#product"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Product
                  </a>
                </li>
                <li>
                  <a
                    href="#benefits"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Benefits
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-lg font-bold text-foreground mb-4">
                Contact
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Email: info@aquaregia.in</li>
                <li>Phone: +91 1234567890</li>
                <li>Available 24/7</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 Aqua Regia. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              Built with <Heart className="w-4 h-4 text-primary fill-primary" />{" "}
              using{" "}
              <a
                href="https://caffeine.ai"
                className="text-primary hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
