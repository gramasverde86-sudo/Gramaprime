import Header from '@/components/Header';
import Hero from '@/components/Hero';
import GrassTypes from '@/components/GrassTypes';
import Calculator from '@/components/Calculator';
import Benefits from '@/components/Benefits';
import HowItWorks from '@/components/HowItWorks';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ServiceAreas from '@/components/ServiceAreas';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Hero />
        <GrassTypes />
        <Calculator />
        <Benefits />
        <HowItWorks />
        <Gallery />
        <Testimonials />
        <FAQ />
        <ServiceAreas />
        <ContactForm />
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
