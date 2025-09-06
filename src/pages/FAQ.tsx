import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Send, Search, HelpCircle, Bot } from "lucide-react";

const FAQ = () => {
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      type: "bot",
      message: "Hello! I'm your AI assistant. I can help answer questions about your house design project. What would you like to know?"
    }
  ]);

  const faqs = [
    {
      question: "How accurate are the AI-generated designs?",
      answer: "Our AI designs achieve 95%+ accuracy by analyzing thousands of architectural plans, building codes, and design principles. Each design is validated against structural requirements and regulatory standards."
    },
    {
      question: "Can I modify the generated floorplans?",
      answer: "Yes! You can request modifications through our AI assistant or download the plans in CAD-compatible formats for professional editing. Common changes include room sizes, layout adjustments, and feature additions."
    },
    {
      question: "What's included in the cost estimation?",
      answer: "Our cost estimates include materials, labor, permits, inspections, and a 10% contingency buffer. Prices are based on regional averages and updated monthly for accuracy."
    },
    {
      question: "How long does the design process take?",
      answer: "Initial designs are generated in 2-3 minutes. Complete reports with 3D visualizations and compliance checks typically take 10-15 minutes to generate."
    },
    {
      question: "Are the designs compliant with local building codes?",
      answer: "Yes, our AI checks designs against local building codes, zoning requirements, and safety standards. We provide a detailed compliance report highlighting any areas that need attention."
    },
    {
      question: "Can I use these plans for actual construction?",
      answer: "The plans provide an excellent foundation, but we recommend having them reviewed by a licensed architect or engineer in your area before construction begins."
    },
    {
      question: "What if I need to increase my budget?",
      answer: "Our AI can instantly recalculate designs for different budget ranges. Simply adjust the budget slider and we'll show you what additional features or improvements are possible."
    },
    {
      question: "Do you support accessibility features?",
      answer: "Absolutely! Our AI can incorporate ADA-compliant features like ramps, wider doorways, accessible bathrooms, and other accessibility requirements into your design."
    }
  ];

  const handleSendMessage = () => {
    if (!chatMessage.trim()) return;
    
    setChatHistory(prev => [...prev, { type: "user", message: chatMessage }]);
    
    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "That's a great question! Based on your project requirements, I'd recommend...",
        "Let me help you with that. For a project like yours, typically...",
        "I can definitely assist with that. Here's what I suggest...",
        "That's an important consideration. In most cases..."
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setChatHistory(prev => [...prev, { type: "bot", message: randomResponse }]);
    }, 1000);
    
    setChatMessage("");
  };

  return (
    <div className="min-h-screen pt-20 bg-muted/20">
      <div className="container-custom section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              FAQ & <span className="gradient-text">AI Assistant</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions or chat with our AI assistant for personalized help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* FAQ Section */}
            <Card className="animate-slide-in-left">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <HelpCircle className="w-5 h-5 text-primary" />
                  <span>Frequently Asked Questions</span>
                </CardTitle>
                <CardDescription>
                  Quick answers to common questions about our platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Search FAQs..."
                      className="form-input pl-10"
                    />
                  </div>
                </div>

                <Accordion type="single" collapsible className="space-y-2">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-4">
                      <AccordionTrigger className="text-left hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {/* AI Chat Assistant */}
            <Card className="animate-slide-in-right">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bot className="w-5 h-5 text-primary" />
                  <span>AI Assistant</span>
                </CardTitle>
                <CardDescription>
                  Get instant answers to your specific questions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] flex flex-col">
                  {/* Chat History */}
                  <div className="flex-1 space-y-4 overflow-y-auto mb-4 p-4 bg-muted/30 rounded-lg">
                    {chatHistory.map((chat, index) => (
                      <div key={index} className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] p-3 rounded-lg ${
                          chat.type === 'user' 
                            ? 'bg-primary text-primary-foreground ml-4' 
                            : 'bg-card border border-border mr-4'
                        }`}>
                          {chat.type === 'bot' && (
                            <div className="flex items-center space-x-2 mb-1">
                              <Bot className="w-4 h-4 text-primary" />
                              <span className="text-sm font-medium text-primary">AI Assistant</span>
                            </div>
                          )}
                          <p className="text-sm">{chat.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chat Input */}
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Ask about your project..."
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="form-input"
                    />
                    <Button onClick={handleSendMessage} size="icon">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2">Try asking:</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>• "What if I increase my budget to $300k?"</div>
                    <div>• "Can we add solar panels to the design?"</div>
                    <div>• "How much would a basement add to the cost?"</div>
                    <div>• "What permits will I need for construction?"</div>
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

export default FAQ;