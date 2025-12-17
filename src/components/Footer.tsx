import { Mail, Phone, MapPin, Instagram } from 'lucide-react';
import logo from '@/assets/logo-grama-prime.png';

const footerLinks = [
  { href: '#tipos', label: 'Tipos de Grama' },
  { href: '#como-funciona', label: 'Como Comprar' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-dark text-primary-foreground">
      <div className="container-custom py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-10 md:gap-8">
          {/* About */}
          <div>
            <a href="#" className="flex items-center mb-4">
              <img
                src={logo}
                alt="Grama Prime"
                className="h-16 w-auto"
              />
            </a>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Qualidade em grama natural direto do produtor para você desde 2000.
              Compromisso com excelência em cada metro entregue.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:gramasverde86@gmail.com"
                  className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  gramasverde86@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5515997447930?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (15) 99744-7930
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-sm text-primary-foreground/70">
                  <MapPin className="w-4 h-4" />
                  Região de Sorocaba, SP
                </span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Instagram */}
          <div>
            <h3 className="font-semibold mb-4">Siga-nos</h3>
            <a
              href="https://bit.ly/4oZ0kgU"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
                <Instagram className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-primary-foreground group-hover:text-primary transition-colors">
                  @grama.prime
                </p>
                <p className="text-xs text-primary-foreground/60">
                  Siga no Instagram
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-primary-foreground/50 text-center md:text-left">
            <p>© 2024 Grama Prime. Todos os direitos reservados.</p>
            <p className="mt-1">CNPJ: 57.604.762/0001-14</p>
          </div>
          <a
            href="#"
            className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
          >
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}
