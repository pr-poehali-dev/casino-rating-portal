import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const StarRating = ({ rating, size = 20 }: { rating: number; size?: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Icon
          key={star}
          name="Star"
          size={size}
          className={`${
            star <= rating
              ? 'fill-primary text-primary'
              : star - 0.5 <= rating
              ? 'fill-primary/50 text-primary'
              : 'fill-muted text-muted'
          }`}
        />
      ))}
    </div>
  );
};

export default function Irwin() {
  const navigate = useNavigate();
  const casinoUrl = 'https://irwin-way-one.com/c9959c858';

  useEffect(() => {
    document.title = 'Irwin Casino Polska – opinie, bonusy, rejestracja i wypłaty';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Irwin kasyno online – sprawdź opinie graczy, dostępne bonusy na start, proces rejestracji, metody wypłat i ofertę gier hazardowych. Pełna recenzja platformy Irwin Casino.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Irwin kasyno online – sprawdź opinie graczy, dostępne bonusy na start, proces rejestracji, metody wypłat i ofertę gier hazardowych. Pełna recenzja platformy Irwin Casino.';
      document.head.appendChild(meta);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Irwin Casino",
      "description": "Irwin Casino to nowoczesne kasyno online z licencją Curacao eGaming, oferujące szeroką gamę gier hazardowych, bonus powitalny 50% i szybkie wypłaty dla graczy w Polsce.",
      "brand": {
        "@type": "Brand",
        "name": "Irwin Casino"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.5",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "987"
      },
      "offers": {
        "@type": "Offer",
        "price": "50",
        "priceCurrency": "PLN",
        "availability": "https://schema.org/InStock",
        "description": "Minimalny depozyt: 50 PLN. Welcome Package 50%."
      },
      "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4.5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Organization",
          "name": "bkreiting.com"
        },
        "reviewBody": "Irwin Casino w Polsce oferuje rozbudowany katalog gier, Welcome Package 50% i sprawną obsługę klienta. Platforma działa na licencji Curacao eGaming."
      },
      "image": "https://cdn.poehali.dev/projects/c2933cfb-9ddd-413a-a6ef-7b99d3f5e883/bucket/e3d1a556-d018-4b5e-acc1-d5c3c3f2cb65.png",
      "url": window.location.href
    };

    const scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (scriptTag) {
      scriptTag.textContent = JSON.stringify(structuredData);
    } else {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => navigate('/')} className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/30 transition-all duration-300"></div>
                <img 
                  src="https://cdn.poehali.dev/projects/c2933cfb-9ddd-413a-a6ef-7b99d3f5e883/bucket/a7cfc0ea-3593-4a47-a978-d8ffc6530c98.png"
                  alt="BKR Logo"
                  className="relative w-20 h-20 md:w-24 md:h-24 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">bkreiting.com</span>
                <div className="flex items-center gap-1 text-xs text-primary/60">
                  <span>POLSKA 2026</span>
                  <Icon name="Dices" className="text-primary/70" size={12} />
                </div>
              </div>
            </button>
            <Button onClick={() => navigate('/')} variant="ghost" size="sm">
              <Icon name="ArrowLeft" className="mr-2" size={18} />
              Powrót
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl blur-2xl"></div>
            <Card className="relative border-2 border-primary/20 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"></div>
              
              <CardHeader className="relative">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="relative w-32 h-32 flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl blur-xl"></div>
                    <img 
                      src="https://cdn.poehali.dev/projects/c2933cfb-9ddd-413a-a6ef-7b99d3f5e883/bucket/e3d1a556-d018-4b5e-acc1-d5c3c3f2cb65.png"
                      alt="Irwin Casino"
                      className="relative w-full h-full object-contain rounded-2xl bg-card p-4"
                    />
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div>
                      <CardTitle className="text-4xl mb-2">Irwin Casino</CardTitle>
                      <div className="flex items-center gap-4 flex-wrap">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">Ocena:</span>
                          <StarRating rating={4.5} size={20} />
                          <span className="text-lg font-semibold text-primary">4.5/5</span>
                        </div>
                        <Badge variant="outline" className="border-primary/30 text-lg px-3 py-1">
                          <Icon name="Trophy" className="mr-1" size={16} />
                          8.8/10
                        </Badge>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-l-4 border-primary rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Icon name="Gift" className="text-primary mt-1" size={24} />
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Bonus Powitalny</p>
                          <p className="text-xl font-bold text-primary">Welcome Package 50%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <Button 
                  onClick={() => window.open(casinoUrl, '_blank')}
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-lg py-6"
                >
                  <Icon name="ExternalLink" className="mr-2" size={20} />
                  Graj Teraz w Irwin Casino
                </Button>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-muted/50 rounded-lg p-4 text-center">
                    <Icon name="Gamepad2" className="mx-auto text-primary mb-2" size={32} />
                    <p className="text-2xl font-bold text-foreground">2500+</p>
                    <p className="text-sm text-muted-foreground">Gier</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4 text-center">
                    <Icon name="ShieldCheck" className="mx-auto text-primary mb-2" size={32} />
                    <p className="text-lg font-bold text-foreground">Curacao eGaming</p>
                    <p className="text-sm text-muted-foreground">Licencja</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4 text-center">
                    <Icon name="Clock" className="mx-auto text-primary mb-2" size={32} />
                    <p className="text-lg font-bold text-foreground">24/7</p>
                    <p className="text-sm text-muted-foreground">Obsługa</p>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Icon name="Star" className="text-primary" size={24} />
                    Kluczowe Funkcje
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {['Welcome Package', 'Live Casino', 'Szybkie wypłaty', 'Kryptowaluty'].map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Icon name="CheckCircle2" className="text-primary flex-shrink-0" size={20} />
                        <span className="text-foreground/90">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                  <CardHeader>
                    <CardTitle className="text-3xl">
                      Irwin Casino Polska – pełna recenzja i opinie graczy
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4 text-foreground/80 leading-relaxed">
                      <p className="text-lg">
                        Rynek hazardu internetowego rozwija się dynamicznie, a nowe platformy regularnie pojawiają się w polu zainteresowania 
                        polskich użytkowników. Jedną z nich jest <strong className="text-primary">Irwin Casino</strong> – serwis, który w ostatnim czasie zyskuje 
                        coraz większą rozpoznawalność.
                      </p>
                      <p className="text-lg">
                        W niniejszej recenzji przyglądamy się szczegółowo wszystkim aspektom tego kasyna online: od rejestracji, przez ofertę 
                        bonusową i katalog gier, po metody płatności i obsługę klienta. Celem tego tekstu jest dostarczenie rzetelnych, 
                        obiektywnych informacji, które pomogą podjąć świadomą decyzję.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-lg p-6 text-center">
                  <h3 className="text-2xl font-bold mb-4">Gotowy na grę?</h3>
                  <Button 
                    onClick={() => window.open(casinoUrl, '_blank')}
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-lg px-8 py-6"
                  >
                    <Icon name="Rocket" className="mr-2" size={24} />
                    Zagraj w Irwin Casino Teraz
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    Dołącz do tysięcy zadowolonych graczy!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <footer className="border-t border-border bg-card/50 backdrop-blur-sm py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/projects/c2933cfb-9ddd-413a-a6ef-7b99d3f5e883/bucket/a7cfc0ea-3593-4a47-a978-d8ffc6530c98.png"
                alt="BKR Logo"
                className="w-12 h-12 object-contain"
              />
              <span className="text-xl font-bold">bkreiting.com</span>
            </div>
            <div className="flex items-center gap-6 text-xs text-muted-foreground">
              <span>© 2026 bkreiting.com</span>
              <span>•</span>
              <span>18+</span>
              <span>•</span>
              <span>Graj odpowiedzialnie</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
