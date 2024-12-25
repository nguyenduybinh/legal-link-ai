const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    content: "The AI assistant helped me understand my legal obligations quickly. Saved me hours of research!",
  },
  {
    name: "Michael Chen",
    role: "Startup Founder",
    content: "Being able to chat with both AI and real lawyers on the same platform is incredibly convenient.",
  },
  {
    name: "Emily Rodriguez",
    role: "Real Estate Agent",
    content: "The instant legal advice has been invaluable for my business dealings.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-secondary-foreground mb-4">{testimonial.content}</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <p className="text-sm text-secondary-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;