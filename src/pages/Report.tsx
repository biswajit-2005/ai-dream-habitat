import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Share2, Mail, Printer } from "lucide-react";

const Report = () => {
  const reportSections = [
    {
      title: "Executive Summary",
      description: "Project overview, key features, and recommendations",
      pages: 2
    },
    {
      title: "2D Floorplans",
      description: "Detailed architectural drawings with dimensions",
      pages: 4
    },
    {
      title: "3D Visualizations",
      description: "Photorealistic renderings and virtual walkthrough",
      pages: 6
    },
    {
      title: "Cost Analysis",
      description: "Comprehensive cost breakdown and timeline",
      pages: 3
    },
    {
      title: "Compliance Report",
      description: "Building code compliance and permit requirements",
      pages: 2
    },
    {
      title: "Specifications",
      description: "Material lists, vendor recommendations, and alternatives",
      pages: 5
    }
  ];

  const totalPages = reportSections.reduce((sum, section) => sum + section.pages, 0);

  return (
    <div className="min-h-screen pt-20 bg-muted/20">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Project <span className="gradient-text">Report</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Download comprehensive documentation for your house design project.
            </p>
          </div>

          {/* Report Preview */}
          <Card className="mb-8 animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-primary" />
                <span>Comprehensive Design Report</span>
              </CardTitle>
              <CardDescription>
                {totalPages} pages • Generated on {new Date().toLocaleDateString()}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Report Sections */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg mb-4">Report Contents</h3>
                  {reportSections.map((section, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 border border-border rounded-lg">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-semibold text-primary">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{section.title}</div>
                        <div className="text-sm text-muted-foreground">{section.description}</div>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {section.pages} {section.pages === 1 ? 'page' : 'pages'}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Report Preview */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg mb-4">Preview</h3>
                  <div className="aspect-[3/4] bg-muted rounded-lg border-2 border-dashed border-border flex items-center justify-center">
                    <div className="text-center">
                      <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">Report Preview</p>
                      <p className="text-sm text-muted-foreground">PDF/PPT format</p>
                    </div>
                  </div>

                  <div className="text-sm text-muted-foreground space-y-1">
                    <div>• Professional formatting</div>
                    <div>• High-resolution images</div>
                    <div>• Interactive elements (PPT)</div>
                    <div>• Print-ready layout</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Download Options */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="animate-slide-in-left">
              <CardHeader>
                <CardTitle>Download Options</CardTitle>
                <CardDescription>
                  Choose your preferred format and quality
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full justify-start" size="lg">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF Report
                  <span className="ml-auto text-sm text-muted-foreground">15.2 MB</span>
                </Button>
                
                <Button variant="outline" className="w-full justify-start" size="lg">
                  <Download className="w-4 h-4 mr-2" />
                  Download PowerPoint
                  <span className="ml-auto text-sm text-muted-foreground">28.5 MB</span>
                </Button>

                <Button variant="outline" className="w-full justify-start" size="lg">
                  <Printer className="w-4 h-4 mr-2" />
                  Print-Ready Version
                  <span className="ml-auto text-sm text-muted-foreground">12.1 MB</span>
                </Button>

                <div className="text-xs text-muted-foreground mt-4">
                  All downloads include: Floorplans, 3D renders, cost analysis, 
                  compliance report, and material specifications.
                </div>
              </CardContent>
            </Card>

            <Card className="animate-slide-in-right">
              <CardHeader>
                <CardTitle>Share & Collaborate</CardTitle>
                <CardDescription>
                  Share your report with stakeholders
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start" size="lg">
                  <Share2 className="w-4 h-4 mr-2" />
                  Generate Share Link
                </Button>
                
                <Button variant="outline" className="w-full justify-start" size="lg">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Report
                </Button>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Recent Activity</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>• Report generated 2 hours ago</div>
                    <div>• Shared with contractor@example.com</div>
                    <div>• Downloaded 3 times</div>
                  </div>
                </div>

                <div className="text-xs text-muted-foreground">
                  Share links expire after 30 days. Recipients can view but not edit.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;