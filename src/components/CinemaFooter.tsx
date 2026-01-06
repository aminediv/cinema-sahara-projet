import { Facebook, Instagram } from 'lucide-react';
import saharaLogo from '@/assets/cinema-sahara-logo.png';
import { useLanguage } from '@/contexts/LanguageContext';
const CINEMA_LOCATION_URL = 'https://maps.app.goo.gl/KaUPLViHH4ww7SBB9';
const socialLinks = [{
  icon: Facebook,
  href: 'https://www.facebook.com/p/Cin%C3%A9-club-Nour-Eddine-Sa%C3%AFl-100067500992086/',
  label: 'Facebook'
}, {
  icon: Instagram,
  href: 'https://www.instagram.com/ccns_agadir',
  label: 'Instagram'
}];
export function CinemaFooter() {
  const {
    t
  } = useLanguage();
  const footerLinks = {
    cinema: [{
      name: t('footer.findCinema'),
      href: '#'
    }, {
      name: t('footer.allFilms'),
      href: '#'
    }, {
      name: t('footer.comingSoon'),
      href: '#'
    }, {
      name: t('footer.offers'),
      href: '#'
    }],
    experience: [{
      name: t('footer.imax'),
      href: '#'
    }, {
      name: t('footer.4dx'),
      href: '#'
    }, {
      name: t('footer.vip'),
      href: '#'
    }, {
      name: t('footer.dolby'),
      href: '#'
    }],
    help: [{
      name: t('footer.faq'),
      href: '#'
    }, {
      name: t('footer.contact'),
      href: '#'
    }, {
      name: t('footer.terms'),
      href: '#'
    }, {
      name: t('footer.privacy'),
      href: '#'
    }]
  };
  return <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand & Location */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1">
            {/* Logo */}
            <div className="mb-4 sm:mb-6 -ml-8 sm:-ml-12 md:-ml-16 -mt-8 sm:-mt-12 md:-mt-16">
              <img src={saharaLogo} alt="Sahara Cinema" className="h-40 sm:h-52 md:h-64 w-auto object-contain" />
            </div>
            {/* Location Link */}
            
          </div>

          {/* Cinema Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">{t('footer.cinema')}</h4>
            <ul className="space-y-2">
              {footerLinks.cinema.map(link => <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary text-sm transition-colors">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Experience Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">{t('footer.experience')}</h4>
            <ul className="space-y-2">
              {footerLinks.experience.map(link => <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary text-sm transition-colors">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">{t('footer.help')}</h4>
            <ul className="space-y-2">
              {footerLinks.help.map(link => <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary text-sm transition-colors">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map(social => <a key={social.label} href={social.href} aria-label={social.label} className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors text-muted-foreground">
                <social.icon className="w-5 h-5" />
              </a>)}
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center md:text-right">
            © {new Date().getFullYear()} Sahara Cinema. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>;
}