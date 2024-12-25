import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-primary py-20 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            24/7 Legal Advice with Smart AI Assistant
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Get fast, accurate legal advice from AI and connect directly with a team of leading lawyers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent-light text-primary font-semibold px-8"
            >
              Try It Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')] opacity-10 bg-cover bg-center" />
    </section>
  );
};

export default Hero;