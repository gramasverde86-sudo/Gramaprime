import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import logo from '@/assets/logo-grama-prime.png';

const navLinks = [
  { href: '#tipos', label: 'Tipos de Grama' },
  { href: '#beneficios', label: 'Benefícios' },
  { href: '#como-funciona', label: 'Como Comprar' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contato', label: 'Contato' },
];

const whatsappLink = 'https://wa.me/5515997447930?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento!';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-soft py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <img 
              src={logo} 
              alt="Grama Prime" 
              className="h-16 w-auto transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm py-2.5"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <a href="#contato" className="btn-accent text-sm py-2.5">
              Orçamento Grátis
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg animate-fade-in">
            <div className="container-custom py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base font-medium text-foreground hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
                <a href="#contato" onClick={() => setIsMenuOpen(false)} className="btn-accent w-full">
                  Orçamento Grátis
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
