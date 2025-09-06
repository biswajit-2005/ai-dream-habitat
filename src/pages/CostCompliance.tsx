import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calculator, Shield, AlertTriangle, CheckCircle, TrendingUp, FileText } from "lucide-react";

const CostCompliance = () => {
  const costBreakdown = [
    { category: "Foundation", amount: 45000, percentage: 18 },
    { category: "Framing", amount: 65000, percentage: 26 },
    { category: "Roofing", amount: 25000, percentage: 10 },
    { category: "Plumbing", amount: 20000, percentage: 8 },
    { category: "Electrical", amount: 18000, percentage: 7 },
    { category: "HVAC", amount: 22000, percentage: 9 },
    { category: "Insulation", amount: 12000, percentage: 5 },
    { category: "Drywall & Paint", amount: 15000, percentage: 6 },
    { category: "Flooring", amount: 18000, percentage: 7 },
    { category: "Fixtures & Finishes", amount: 10000, percentage: 4 }
  ];

  const totalCost = costBreakdown.reduce((sum, item) => sum + item.amount, 0);

  const complianceChecks = [
    { item: "Building Height Restrictions", status: "passed", note: "Complies with 35ft limit" },
    { item: "Setback Requirements", status: "passed", note: "All setbacks met" },
    { item: "Fire Safety Codes", status: "passed", note: "Proper egress and detection" },
    { item: "Energy Efficiency Standards", status: "warning", note: "Consider additional insulation" },
    { item: "Accessibility (ADA)", status: "passed", note: "Doorways and ramps compliant" },
    { item: "Electrical Code", status: "passed", note: "GFCI and AFCI protected" },
    { item: "Plumbing Code", status: "passed", note: "Proper drainage and venting" },
    { item: "Structural Requirements", status: "review", note: "Engineering review required" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "passed": return "bg-success text-success-foreground";
      case "warning": return "bg-warning text-warning-foreground";
      case "review": return "bg-destructive text-destructive-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "passed": return <CheckCircle className="w-4 h-4" />;
      case "warning": return <AlertTriangle className="w-4 h-4" />;
      case "review": return <AlertTriangle className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-muted/20">
      <div className="container-custom section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Cost & <span className="gradient-text">Compliance</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Detailed cost breakdown and regulatory compliance analysis for your project.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Cost Analysis */}
            <Card className="animate-slide-in-left">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calculator className="w-5 h-5 text-primary" />
                  <span>Cost Estimation</span>
                </CardTitle>
                <CardDescription>
                  Detailed breakdown of construction costs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold">Total Estimated Cost</span>
                    <span className="text-3xl font-bold gradient-text">
                      ${totalCost.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span>Within budget range (±15%)</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {costBreakdown.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{item.category}</span>
                        <span>${item.amount.toLocaleString()}</span>
                      </div>
                      <Progress value={item.percentage} className="h-2" />
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Cost Factors</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Labor costs based on regional averages</li>
                    <li>• Material prices updated monthly</li>
                    <li>• Permits and inspections included</li>
                    <li>• Contingency buffer (10%) added</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Compliance Analysis */}
            <Card className="animate-slide-in-right">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <span>Regulatory Compliance</span>
                </CardTitle>
                <CardDescription>
                  Building code and regulation compliance check
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold">Compliance Score</span>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-success">85%</div>
                      <div className="text-sm text-muted-foreground">Good Standing</div>
                    </div>
                  </div>
                  <Progress value={85} className="h-3" />
                </div>

                <div className="space-y-3">
                  {complianceChecks.map((check, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 border border-border rounded-lg">
                      <div className={`p-1 rounded-full ${getStatusColor(check.status)}`}>
                        {getStatusIcon(check.status)}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{check.item}</div>
                        <div className="text-sm text-muted-foreground">{check.note}</div>
                      </div>
                      <Badge variant="outline" className={getStatusColor(check.status)}>
                        {check.status}
                      </Badge>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-warning/10 border border-warning/20 rounded-lg">
                  <h4 className="font-semibold text-warning-foreground mb-2 flex items-center">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Action Required
                  </h4>
                  <ul className="text-sm space-y-1">
                    <li>• Structural engineering review needed</li>
                    <li>• Consider upgrading insulation for energy efficiency</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostCompliance;