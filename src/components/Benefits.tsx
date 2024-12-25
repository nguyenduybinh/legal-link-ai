import { DollarSign, Clock, Shield, Users } from "lucide-react";

const benefits = [
  {
    icon: <DollarSign className="h-12 w-12" />,
    title: "Cost Effective",
    description: "Save money compared to traditional legal consultations",
  },
  {
    icon: <Clock className="h-12 w-12" />,
    title: "Time Saving",
    description: "Get instant answers 24/7, no waiting for appointments",
  },
  {
    icon: <Shield className="h-12 w-12" />,
    title: "Secure & Private",
    description: "Your information is protected with enterprise-grade security",
  },
  {
    icon: <Users className="h-12 w-12" />,
    title: "Expert Access",
    description: "Connect with qualified lawyers when needed",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-accent mb-4 flex justify-center">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-primary">{benefit.title}</h3>
              <p className="text-secondary-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;