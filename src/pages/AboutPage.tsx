import { Link } from "react-router-dom";
import { ArrowLeft, BarChart3, TrendingUp, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-12">
          <Link to="/">
            <Button variant="outline" size="sm" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <h1 className="text-4xl font-bold text-foreground mb-6">About EquityFrame</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            EquityFrame is a comprehensive financial analysis platform designed to provide 
            investors with deep insights into Indian equity markets. Our mission is to 
            democratize access to professional-grade financial research and analysis tools.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Our Mission</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              We believe that every investor deserves access to comprehensive, accurate, and 
              easy-to-understand financial data. EquityFrame bridges the gap between complex 
              financial information and actionable investment insights.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our platform combines cutting-edge technology with financial expertise to deliver 
              institutional-quality research to individual investors, helping them make informed 
              decisions in the dynamic Indian stock market.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-card-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Comprehensive Analysis</h3>
                </div>
                <p className="text-muted-foreground">
                  Detailed financial ratios, trend analysis, and key performance indicators 
                  for over 500+ Indian companies across various sectors.
                </p>
              </CardContent>
            </Card>

            <Card className="border-card-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-success-light rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-success" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Historical Data</h3>
                </div>
                <p className="text-muted-foreground">
                  Access to 5+ years of historical financial data with interactive charts 
                  and visualization tools to identify trends and patterns.
                </p>
              </CardContent>
            </Card>

            <Card className="border-card-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-warning-light rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-warning" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Reliable Data</h3>
                </div>
                <p className="text-muted-foreground">
                  All financial data is sourced from official exchanges and regulatory 
                  filings, ensuring accuracy and compliance with market standards.
                </p>
              </CardContent>
            </Card>

            <Card className="border-card-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-destructive-light rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-destructive" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">User-Friendly</h3>
                </div>
                <p className="text-muted-foreground">
                  Clean, intuitive interface designed for both novice and experienced 
                  investors, making complex financial data accessible to everyone.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Our Values</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Transparency</h3>
              <p className="text-muted-foreground">
                We believe in complete transparency in our data sources, methodologies, 
                and analysis. No hidden algorithms or black-box calculations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Accuracy</h3>
              <p className="text-muted-foreground">
                Our commitment to data accuracy is unwavering. We employ rigorous 
                quality checks and validation processes to ensure reliability.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Accessibility</h3>
              <p className="text-muted-foreground">
                Financial research should not be limited to institutional investors. 
                We make professional-grade analysis accessible to individual investors.
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section>
          <Card className="border-card-border bg-primary-light">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Get in Touch</h2>
              <p className="text-muted-foreground mb-6">
                Have questions about our platform or need assistance with your research? 
                We're here to help.
              </p>
              <Link to="/contact">
                <Button size="lg">Contact Us</Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;