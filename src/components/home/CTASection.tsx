import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const benefits = [
    "No architectural experience required",
    "Generate designs in minutes",
    "Professional-grade results",
    "Unlimited revisions"
  ];

  return (
    <section className="section-padding bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Ready to Build Your
            <span className="block">Dream Home?</span>
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of homeowners who have transformed their vision into reality 
            with our AI-powered design platform.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto text-left">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-white/90">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-hero">
              <Link to="/design" className="group">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              View Sample Projects
            </Button>
          </div>

          <div className="mt-12 text-white/60 text-sm">
            No credit card required • Free to start • 30-day money-back guarantee
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;