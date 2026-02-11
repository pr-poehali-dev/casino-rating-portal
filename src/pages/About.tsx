import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function About() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'O nas - bkreiting.com';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Poznaj zespół bkreiting.com - niezależny serwis z profesjonalnymi recenzjami i rankingami kasyn online w Polsce.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Poznaj zespół bkreiting.com - niezależny serwis z profesjonalnymi recenzjami i rankingami kasyn online w Polsce.';
      document.head.appendChild(meta);
    }

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/30 transition-all duration-300"></div>
                <div className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Crown" className="text-primary-foreground" size={28} />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-primary/90 to-foreground bg-clip-text text-transparent leading-tight">
                  bkreiting.com
                </div>
                <div className="flex items-center gap-1.5 text-xs md:text-sm text-primary/70 font-semibold tracking-wider">
                  <span>POLSKA 2026</span>
                  <Icon name="Dices" className="text-primary/80" size={14} />
                </div>
              </div>
            </button>
            <Button 
              onClick={() => navigate('/')}
              variant="outline"
              className="border-primary/30 hover:bg-primary/10"
            >
              <Icon name="ArrowLeft" className="mr-2" size={18} />
              Powrót
            </Button>
          </div>
        </div>
      </header>

      <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-6">
                <Icon name="Users" className="text-primary" size={40} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                O nas
              </h1>
              <p className="text-lg text-foreground/70">
                Niezależny serwis informacyjny o kasynach online w Polsce
              </p>
            </div>

            <Card className="border-primary/20 mb-8">
              <CardContent className="p-8 md:p-12 space-y-6">
                <div className="space-y-4 text-foreground/80 text-lg leading-relaxed">
                  <p>
                    Witamy w <strong className="text-primary">bkreiting.com</strong> – serwisie stworzonym z myślą 
                    o polskich graczach, którzy szukają rzetelnych informacji o kasynach online.
                  </p>
                  <p>
                    Naszą misją jest dostarczanie <strong>niezależnych, szczegółowych i aktualnych</strong> recenzji 
                    kasyn internetowych, porównań bonusów oraz praktycznych porad dotyczących bezpiecznej gry online.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                <CardHeader>
                  <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-3">
                    <Icon name="ShieldCheck" className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">Niezależność</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">
                    Nasze recenzje są obiektywne i niezależne. Testujemy kasyna osobiście, nie promujemy operatorów bez licencji.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                <CardHeader>
                  <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-3">
                    <Icon name="TrendingUp" className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">Aktualizacje</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">
                    Regularnie aktualizujemy rankingi, bonusy i informacje o promocjach, aby dostarczyć Ci najświeższe dane.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                <CardHeader>
                  <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-3">
                    <Icon name="Award" className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">Ekspertyza</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">
                    Nasz zespół ma wieloletnie doświadczenie w branży hazardowej i zna rynek kasyn online od podszewki.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="Target" className="text-primary" size={28} />
                  Nasza misja
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground/80">
                <p>
                  Rynek kasyn online w Polsce dynamicznie się rozwija, a wraz z nim pojawia się coraz więcej 
                  operatorów – zarówno renomowanych, jak i mniej znanych. Naszym celem jest pomóc Ci odnaleźć się 
                  w tym gąszczu ofert i wybrać kasyno, które najlepiej odpowiada Twoim potrzebom.
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Weryfikujemy licencje i bezpieczeństwo kasyn online</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Testujemy proces rejestracji, depozytu i wypłaty</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Analizujemy warunki bonusów i promocji</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Sprawdzamy opinie prawdziwych graczy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Oceniamy jakość obsługi klienta i czas wypłat</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20 mt-8">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="Info" className="text-primary" size={28} />
                  Ważna informacja
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground/80">
                <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-lg">
                  <p className="mb-3">
                    <strong className="text-primary">bkreiting.com to serwis wyłącznie informacyjny.</strong>
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <Icon name="X" className="text-red-500 mt-1 flex-shrink-0" size={16} />
                      <span>Nie prowadzimy gier hazardowych na pieniądze</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="X" className="text-red-500 mt-1 flex-shrink-0" size={16} />
                      <span>Nie przyjmujemy zakładów ani depozytów</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="X" className="text-red-500 mt-1 flex-shrink-0" size={16} />
                      <span>Nie obsługujemy wypłat wygranych</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm">
                    Linki na naszej stronie prowadzą do zewnętrznych kasyn online, które posiadają własne licencje 
                    i regulaminy. Przed rejestracją w jakimkolwiek kasynie zalecamy zapoznanie się z jego warunkami 
                    i polityką odpowiedzialnej gry.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 mt-8">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="Heart" className="text-primary" size={28} />
                  Odpowiedzialna gra
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground/80">
                <p>
                  Promujemy zasady odpowiedzialnej gry i zachęcamy do traktowania hazardu wyłącznie jako formy 
                  rozrywki, a nie sposobu na zarobek. Jeśli zauważysz u siebie lub bliskiej osoby symptomy 
                  uzależnienia od gier hazardowych, zwróć się o pomoc do specjalistów.
                </p>
                <div className="bg-card/50 border border-primary/20 rounded-lg p-4">
                  <p className="flex items-center gap-2 text-sm">
                    <Icon name="Phone" className="text-primary" size={16} />
                    <strong>Telefon zaufania:</strong> 
                    <a href="tel:800199990" className="text-primary hover:underline">800 199 990</a>
                  </p>
                  <p className="text-sm mt-2 text-foreground/60">
                    Bezpłatna linia wsparcia dla osób z problemem hazardowym
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="mt-12 text-center">
              <Button 
                onClick={() => navigate('/')}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Icon name="ArrowLeft" className="mr-2" size={20} />
                Powrót do strony głównej
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-foreground/60">
            <p>© 2026 bkreiting.com. Wszystkie prawa zastrzeżone.</p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <span className="flex items-center gap-1">
                <Icon name="Shield" size={14} />
                18+
              </span>
              <span>Odpowiedzialna Gra</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
