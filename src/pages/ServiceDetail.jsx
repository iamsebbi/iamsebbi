import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import { services } from "../constants/services";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Button onClick={() => navigate("/")}>Back to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-6 pt-32 pb-8">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span>Services</span>
          <span>/</span>
          <span className="text-white">{service.title}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover opacity-40 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#007AFF] font-bold uppercase tracking-widest text-sm mb-4 block"
          >
            {service.category}
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold mb-8 uppercase tracking-tight"
          >
            {service.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            {service.description}
          </motion.p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Works</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {service.process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="text-5xl font-bold text-[#007AFF]">
                    {String(item.step).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6 bg-white/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            What's <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Included</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 bg-black/50 border border-white/10 rounded-xl p-4"
              >
                <Check className="w-5 h-5 text-[#007AFF] flex-shrink-0" />
                <span className="text-gray-200">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Ready to Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Started?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Let's bring your vision to life. Get in touch to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => navigate("/#contact")}>
              Get in Touch*
            </Button>
            <Button 
              onClick={() => navigate("/")}
              icon={ArrowLeft}
              className="!bg-white/5 hover:!bg-white/10"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
