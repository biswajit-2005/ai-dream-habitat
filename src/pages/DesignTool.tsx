import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Home, Users, DollarSign, MapPin, Palette, Zap } from "lucide-react";

const DesignTool = () => {
  const [formData, setFormData] = useState({
    projectName: "",
    rooms: 3,
    floors: 1,
    style: "",
    budget: [250000],
    location: "",
    requirements: ""
  });

  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsGenerating(false);
  };

  return (
    <div className="min-h-screen pt-20 bg-muted/20">
      <div className="container-custom section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Design Your <span className="gradient-text">Dream Home</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tell us about your vision and our AI will generate detailed floorplans, 
              3D visualizations, and cost estimates.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card className="animate-slide-in-left">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Home className="w-5 h-5 text-primary" />
                  <span>Project Requirements</span>
                </CardTitle>
                <CardDescription>
                  Provide details about your ideal home to get started
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="projectName">Project Name</Label>
                  <Input
                    id="projectName"
                    placeholder="My Dream Home"
                    value={formData.projectName}
                    onChange={(e) => setFormData({...formData, projectName: e.target.value})}
                    className="form-input"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Number of Rooms</Label>
                    <div className="flex items-center space-x-4">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <Slider
                        value={[formData.rooms]}
                        onValueChange={(value) => setFormData({...formData, rooms: value[0]})}
                        max={10}
                        min={1}
                        step={1}
                        className="flex-1"
                      />
                      <span className="text-sm font-medium w-8">{formData.rooms}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Number of Floors</Label>
                    <div className="flex items-center space-x-4">
                      <Home className="w-4 h-4 text-muted-foreground" />
                      <Slider
                        value={[formData.floors]}
                        onValueChange={(value) => setFormData({...formData, floors: value[0]})}
                        max={4}
                        min={1}
                        step={1}
                        className="flex-1"
                      />
                      <span className="text-sm font-medium w-8">{formData.floors}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Architectural Style</Label>
                  <Select value={formData.style} onValueChange={(value) => setFormData({...formData, style: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="modern">Modern</SelectItem>
                      <SelectItem value="traditional">Traditional</SelectItem>
                      <SelectItem value="contemporary">Contemporary</SelectItem>
                      <SelectItem value="colonial">Colonial</SelectItem>
                      <SelectItem value="craftsman">Craftsman</SelectItem>
                      <SelectItem value="mediterranean">Mediterranean</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Budget Range</Label>
                  <div className="flex items-center space-x-4">
                    <DollarSign className="w-4 h-4 text-muted-foreground" />
                    <Slider
                      value={formData.budget}
                      onValueChange={(value) => setFormData({...formData, budget: value})}
                      max={1000000}
                      min={100000}
                      step={25000}
                      className="flex-1"
                    />
                    <span className="text-sm font-medium w-20">
                      ${formData.budget[0].toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="location"
                      placeholder="City, State"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      className="form-input pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requirements">Special Requirements</Label>
                  <Textarea
                    id="requirements"
                    placeholder="Describe any special features, accessibility needs, or preferences..."
                    value={formData.requirements}
                    onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                    className="form-input min-h-[100px]"
                  />
                </div>

                <Button 
                  onClick={handleGenerate} 
                  disabled={isGenerating}
                  className="w-full"
                  size="lg"
                >
                  {isGenerating ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Generating Design...
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4 mr-2" />
                      Generate Design
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Preview/Results */}
            <Card className="animate-slide-in-right">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Palette className="w-5 h-5 text-primary" />
                  <span>Design Preview</span>
                </CardTitle>
                <CardDescription>
                  Your generated designs will appear here
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Home className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      {isGenerating 
                        ? "AI is generating your design..." 
                        : "Fill out the form to generate your design"
                      }
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-xs text-muted-foreground">2D Floorplan</div>
                    </div>
                  </div>
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-xs text-muted-foreground">3D View</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignTool;