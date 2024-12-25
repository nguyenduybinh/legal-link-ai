import { MessageSquare, Users, Scale, Smartphone, Clock } from "lucide-react";

const features = [
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "24/7 AI Consulting",
    description: "Get instant answers to your legal questions from our advanced AI chatbot.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Expert Lawyers Network",
    description: "Connect with verified, experienced lawyers when you need deeper expertise.",
  },
  {
    icon: <Scale className="h-8 w-8" />,
    title: "Diverse Legal Fields",
    description: "From criminal to corporate law, we cover all major legal areas.",
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "User-Friendly Interface",
    description: "Intuitive design makes getting legal help easier than ever.",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Consultation History",
    description: "Access your past conversations and advice anytime.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Features Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-accent mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-primary">{feature.title}</h3>
              <p className="text-secondary-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;