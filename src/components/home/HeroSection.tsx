import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-architecture.jpg";

const HeroSection = () => {
  return (
    <section className="section-padding bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="text-white space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-white/80">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-medium uppercase tracking-wider">
                  AI-Powered Design
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Design Your
                <span className="block text-transparent bg-gradient-to-r from-white to-white/60 bg-clip-text">
                  Dream Home
                </span>
                with AI
              </h1>
              <p className="text-xl text-white/80 max-w-lg">
                Transform your house design dreams into reality with AI-powered
                2D floorplans, 3D visualization, cost estimation, and regulatory
                compliance checks.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="btn-hero">
                <Link to="/design" className="group">
                  Start Designing Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              {/* <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-green hover:bg-white/10"
              >
                <Zap className="w-5 h-5 mr-2" />
                See Demo
              </Button> */}
            </div>

            <div className="flex items-center space-x-8 text-white/60">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10K+</div>
                <div className="text-sm">Designs Created</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">95%</div>
                <div className="text-sm">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm">AI Assistant</div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              <img
                src={heroImage}
                alt="AI-powered house design visualization with 3D models and floor plans"
                className="w-full h-auto rounded-2xl shadow-2xl animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Floating UI Elements */}
            <div
              className="absolute top-4 left-4 glass-card p-3 animate-scale-in"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="text-white text-sm font-medium">
                AI Processing...
              </div>
              <div className="w-24 h-2 bg-white/20 rounded-full mt-1">
                <div className="w-16 h-full bg-white rounded-full"></div>
              </div>
            </div>

            <div
              className="absolute bottom-4 right-4 glass-card p-4 animate-scale-in"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="text-white text-sm font-medium mb-1">
                Estimated Cost
              </div>
              <div className="text-white text-xl font-bold">$245,000</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
