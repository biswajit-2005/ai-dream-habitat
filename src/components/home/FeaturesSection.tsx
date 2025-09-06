import { Grid3X3, Palette, Calculator, Shield, FileText, MessageCircleQuestion } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Grid3X3,
      title: "2D Floorplan Generation",
      description: "AI creates detailed floorplans based on your requirements and preferences."
    },
    {
      icon: Palette,
      title: "3D Visualization",
      description: "See your house come to life with realistic 3D renderings and walkthroughs."
    },
    {
      icon: Calculator,
      title: "Cost Estimation",
      description: "Get accurate cost breakdowns including materials, labor, and permits."
    },
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "Automated checks ensure your design meets local building codes and regulations."
    },
    {
      icon: FileText,
      title: "Downloadable Reports",
      description: "Export comprehensive PDF/PPT reports with all design details and specifications."
    },
    {
      icon: MessageCircleQuestion,
      title: "AI Assistant",
      description: "Get instant answers to design questions and explore modifications."
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to
            <span className="gradient-text"> Design & Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive AI-powered platform handles every aspect of house design and planning, 
            from initial concepts to final blueprints.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="feature-card animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;