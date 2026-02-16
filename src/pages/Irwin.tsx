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

                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="Info" className="text-primary" size={28} />
                        Czym jest Irwin Casino?
                      </h2>
                      <div className="space-y-4">
                        <p className="text-foreground/80 leading-relaxed text-lg">
                          <strong className="text-primary">Irwin kasyno</strong> to platforma hazardowa działająca w modelu online, skierowana do graczy 
                          z różnych krajów, w tym z Polski. Serwis oferuje dostęp do szerokiego katalogu gier – od automatów, przez gry stołowe, 
                          po transmisje na żywo z krupierami. <strong className="text-primary">Irwin online</strong> wyróżnia się nowoczesnym interfejsem, przejrzystą 
                          nawigacją i stosunkowo szybkim procesem zakładania konta.
                        </p>
                        <p className="text-foreground/80 leading-relaxed">
                          Platforma działa na licencji wydanej przez zagranicznego regulatora, co jest standardem wśród międzynarodowych kasyn 
                          internetowych. Strona dostępna jest w kilku wersjach językowych, a polski użytkownik znajdzie na niej treści dostosowane 
                          do swojego rynku. Warto podkreślić, że <strong className="text-primary">Irwin Casino</strong> współpracuje z renomowanymi dostawcami 
                          oprogramowania, co wpływa na jakość i różnorodność dostępnych tytułów.
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="UserPlus" className="text-primary" size={28} />
                        Irwin rejestracja i logowanie
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Edit" className="text-primary" size={22} />
                            Jak założyć konto w Irwin Casino?
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            Proces rejestracji w serwisie Irwin jest stosunkowo prosty i nie odbiega od standardów branżowych. 
                            <strong className="text-primary"> Irwin rejestracja</strong> wymaga podania podstawowych danych osobowych: adresu e-mail, hasła, 
                            waluty konta oraz daty urodzenia. Formularz rejestracyjny znajduje się na <strong className="text-primary">irwin oficjalnej stronie</strong> i 
                            jego wypełnienie zajmuje kilka minut.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="ShieldCheck" className="text-primary" size={22} />
                            Weryfikacja tożsamości
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            Po utworzeniu konta platforma może poprosić o przesłanie dokumentów potwierdzających tożsamość. Jest to standardowa 
                            procedura KYC (Know Your Customer), wymagana przez większość licencjonowanych kasyn online. Weryfikacja obejmuje 
                            zazwyczaj skan dowodu osobistego lub paszportu oraz potwierdzenie adresu zamieszkania.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Lock" className="text-primary" size={22} />
                            Logowanie do profilu
                          </h3>
                          <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                              <strong className="text-primary">Irwin logowanie</strong> odbywa się za pomocą adresu e-mail i hasła podanego przy rejestracji. 
                              Platforma oferuje również opcję zapamiętania urządzenia, co przyspiesza kolejne wizyty. W razie utraty hasła 
                              dostępna jest procedura jego odzyskania przez adres e-mail powiązany z kontem.
                            </p>
                            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-l-4 border-primary rounded-lg p-4">
                              <div className="flex items-start gap-3">
                                <Icon name="Lightbulb" className="text-primary flex-shrink-0 mt-1" size={20} />
                                <p className="text-sm text-foreground/80">
                                  <strong className="text-primary">Wskazówka:</strong> Warto przygotować dokumenty weryfikacyjne zawczasu – 
                                  wysłanie ich zaraz po rejestracji pozwoli uniknąć opóźnień przy pierwszej wypłacie.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="Gift" className="text-primary" size={28} />
                        Irwin bonusy i kody promocyjne
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Sparkles" className="text-primary" size={22} />
                            Rodzaje dostępnych bonusów
                          </h3>
                          <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                              Oferta promocyjna to jeden z elementów, na które gracze zwracają szczególną uwagę. <strong className="text-primary">Irwin bonus</strong> na 
                              start obejmuje zazwyczaj dopłatę procentową do pierwszego depozytu – jest to klasyczny bonus powitalny spotykany 
                              w większości kasyn internetowych. W ofercie mogą pojawiać się również <strong className="text-primary">irwin darmowe spiny</strong> przyznawane 
                              na wybrane automaty do gry.
                            </p>
                            <p className="text-foreground/80 leading-relaxed">
                              Część graczy poszukuje informacji o <strong className="text-primary">irwin bonus bez depozytu</strong>, czyli promocji niewymagającej 
                              wpłaty własnych środków. Dostępność tego typu ofert zmienia się w czasie i zależy od aktualnej polityki promocyjnej 
                              kasyna. Warto sprawdzać bieżące warunki bezpośrednio na stronie platformy.
                            </p>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Ticket" className="text-primary" size={22} />
                            Kody promocyjne i warunki obrotu
                          </h3>
                          <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                              <strong className="text-primary">Irwin kod promocyjny</strong> może być wymagany przy aktywacji wybranych bonusów. 
                              <strong className="text-primary"> Irwin kody bonusowe</strong> pojawiają się niekiedy w materiałach partnerskich lub w wiadomościach 
                              e-mail kierowanych do zarejestrowanych użytkowników. Każdy bonus objęty jest warunkami obrotu, czyli tzw. wagerem. 
                              Oznacza to, że przed wypłatą środków bonusowych konieczne jest obrócenie ich określoną liczbę razy.
                            </p>
                            <div className="bg-gradient-to-r from-amber-500/10 to-amber-500/5 border-l-4 border-amber-500 rounded-lg p-4">
                              <div className="flex items-start gap-3">
                                <Icon name="AlertTriangle" className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                                <p className="text-sm text-foreground/80">
                                  <strong className="text-amber-600">Ważne:</strong> Przed aktywacją jakiejkolwiek promocji warto dokładnie 
                                  zapoznać się z regulaminem.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="Gamepad2" className="text-primary" size={28} />
                        Irwin gry hazardowe
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Joystick" className="text-primary" size={22} />
                            Automaty do gry
                          </h3>
                          <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                              <strong className="text-primary">Irwin gry hazardowe</strong> obejmują przede wszystkim szeroką kolekcję automatów online. 
                              W katalogu znajdują się klasyczne sloty trójbębnowe, nowoczesne video sloty z rozbudowaną mechaniką oraz automaty 
                              z jackpotami. Gry pochodzą od uznanych dostawców oprogramowania, takich jak <strong className="text-primary">Pragmatic Play</strong>, 
                              <strong className="text-primary"> NetEnt</strong>, <strong className="text-primary">Play'n GO</strong> czy <strong className="text-primary">Microgaming</strong>, 
                              co przekłada się na wysoką jakość grafiki i mechaniki rozgrywki.
                            </p>
                            <p className="text-foreground/80 leading-relaxed">
                              Każdy automat charakteryzuje się określonym współczynnikiem RTP, który informuje o teoretycznym zwrocie dla gracza 
                              w długim okresie. Przed rozpoczęciem gry warto sprawdzić ten parametr w opisie danego tytułu.
                            </p>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Dices" className="text-primary" size={22} />
                            Gry stołowe i karciane
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            Oprócz automatów, <strong className="text-primary">Irwin online</strong> oferuje klasyczne gry stołowe: różne odmiany ruletki, 
                            blackjacka, bakarata i pokera. Są to zarówno wersje komputerowe z generatorem liczb losowych, jak i tytuły 
                            dostępne w formacie live.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Video" className="text-primary" size={22} />
                            Live casino
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            Sekcja gier na żywo pozwala na rozgrywkę z prawdziwymi krupierami w czasie rzeczywistym. Transmisje realizowane 
                            są przez profesjonalne studia, a gracze mogą komunikować się z prowadzącymi za pośrednictwem czatu. Gry na żywo 
                            obejmują ruletkę, blackjacka, bakarata oraz popularne gry typu game show.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="Smartphone" className="text-primary" size={28} />
                        Irwin aplikacja i wersja mobilna
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Download" className="text-primary" size={22} />
                            Aplikacja na Android i iOS
                          </h3>
                          <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                              Wielu graczy poszukuje informacji o tym, czy <strong className="text-primary">irwin aplikacja</strong> jest dostępna do pobrania. 
                              Na chwilę obecną platforma może oferować plik APK do pobrania na urządzenia z systemem Android. 
                              <strong className="text-primary"> Irwin app download</strong> odbywa się zazwyczaj bezpośrednio ze strony kasyna, ponieważ aplikacje 
                              hazardowe nie zawsze są dostępne w oficjalnych sklepach Google Play czy App Store ze względu na politykę tych platform.
                            </p>
                            <div className="bg-gradient-to-r from-amber-500/10 to-amber-500/5 border-l-4 border-amber-500 rounded-lg p-4">
                              <div className="flex items-start gap-3">
                                <Icon name="AlertTriangle" className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                                <p className="text-sm text-foreground/80">
                                  <strong className="text-amber-600">Uwaga:</strong> Przy pobieraniu plików APK spoza oficjalnych sklepów zawsze 
                                  weryfikuj źródło – korzystaj wyłącznie z oficjalnej strony kasyna.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Globe" className="text-primary" size={22} />
                            Wersja przeglądarkowa na telefon
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            Niezależnie od dostępności dedykowanej aplikacji, strona <strong className="text-primary">Irwin Casino</strong> jest w pełni responsywna. 
                            Oznacza to, że dostosowuje się do rozmiaru ekranu smartfona lub tabletu i pozwala na komfortową grę bezpośrednio 
                            z poziomu przeglądarki mobilnej. Funkcjonalność wersji mobilnej obejmuje pełen zakres opcji: od rejestracji i logowania, 
                            przez zarządzanie kontem, po dostęp do katalogu gier i obsługi płatności.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="DollarSign" className="text-primary" size={28} />
                        Irwin wypłaty i metody płatności
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Zap" className="text-primary" size={22} />
                            Dostępne metody wpłat i wypłat
                          </h3>
                          <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed mb-3">
                              Platforma udostępnia kilka metod realizacji transakcji finansowych. Wśród najpopularniejszych opcji znajdują się:
                            </p>
                            <div className="bg-muted/50 rounded-lg p-5 space-y-3">
                              <div className="flex items-start gap-3">
                                <Icon name="Dot" className="text-primary flex-shrink-0 mt-1" size={16} />
                                <p className="text-foreground/80 text-sm"><strong className="text-primary">Przelewy bankowe</strong></p>
                              </div>
                              <div className="flex items-start gap-3">
                                <Icon name="Dot" className="text-primary flex-shrink-0 mt-1" size={16} />
                                <p className="text-foreground/80 text-sm"><strong className="text-primary">Karty płatnicze</strong> – Visa, Mastercard</p>
                              </div>
                              <div className="flex items-start gap-3">
                                <Icon name="Dot" className="text-primary flex-shrink-0 mt-1" size={16} />
                                <p className="text-foreground/80 text-sm"><strong className="text-primary">Portfele elektroniczne</strong> – np. Skrill, Neteller</p>
                              </div>
                              <div className="flex items-start gap-3">
                                <Icon name="Dot" className="text-primary flex-shrink-0 mt-1" size={16} />
                                <p className="text-foreground/80 text-sm"><strong className="text-primary">Kryptowaluty</strong> – w wybranych przypadkach</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Clock" className="text-primary" size={22} />
                            Czas realizacji i limity
                          </h3>
                          <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                              <strong className="text-primary">Irwin wypłaty opinie</strong> wskazują, że czas przetwarzania wniosków o wypłatę wynosi zazwyczaj 
                              od kilku godzin do kilku dni roboczych – w zależności od wybranej metody. Portfele elektroniczne są z reguły najszybszą 
                              opcją, natomiast przelewy bankowe mogą wymagać dłuższego czasu realizacji.
                            </p>
                            <p className="text-foreground/80 leading-relaxed">
                              Platforma określa minimalne i maksymalne limity transakcji, które warto sprawdzić przed dokonaniem wpłaty. 
                              Pierwszy wniosek o wypłatę może wymagać przejścia weryfikacji tożsamości.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="Link" className="text-primary" size={28} />
                        Irwin mirror i działający link
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Eye" className="text-primary" size={22} />
                            Czym jest mirror i dlaczego jest używany?
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            <strong className="text-primary">Irwin mirror polska</strong> to alternatywny adres strony internetowej kasyna, który zawiera 
                            identyczną zawartość jak strona główna. Serwisy lustrzane stosowane są w branży hazardowej w sytuacjach, gdy dostęp 
                            do głównej domeny jest ograniczony z przyczyn technicznych lub regulacyjnych.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Search" className="text-primary" size={22} />
                            Jak znaleźć aktualny adres?
                          </h3>
                          <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                              <strong className="text-primary">Irwin działający link</strong> można odnaleźć poprzez oficjalne kanały komunikacji kasyna: 
                              newslettery e-mailowe, profile w mediach społecznościowych lub kontakt z obsługą klienta. Należy zachować ostrożność 
                              i unikać klikania w linki pochodzące z nieznanych źródeł, ponieważ mogą prowadzić do fałszywych stron stworzonych 
                              w celu wyłudzenia danych.
                            </p>
                            <div className="bg-gradient-to-r from-amber-500/10 to-amber-500/5 border-l-4 border-amber-500 rounded-lg p-4">
                              <div className="flex items-start gap-3">
                                <Icon name="AlertTriangle" className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                                <p className="text-sm text-foreground/80">
                                  <strong className="text-amber-600">Ważne:</strong> Zawsze warto weryfikować autentyczność adresu przed zalogowaniem 
                                  się do konta. Sprawdź certyfikat SSL (kłódka obok adresu w przeglądarce).
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="Shield" className="text-primary" size={28} />
                        Irwin czy legalne w Polsce?
                      </h2>
                      <div className="space-y-4">
                        <p className="text-foreground/80 leading-relaxed">
                          Kwestia legalności to jedno z najczęściej pojawiających się pytań wśród polskich użytkowników. 
                          <strong className="text-primary"> Irwin czy legalne</strong> – odpowiedź na to pytanie wymaga zrozumienia aktualnych regulacji 
                          dotyczących hazardu internetowego w Polsce.
                        </p>
                        <p className="text-foreground/80 leading-relaxed">
                          Zgodnie z polskim prawem, legalną działalność w zakresie gier hazardowych online mogą prowadzić wyłącznie podmioty 
                          posiadające zezwolenie wydane przez Ministra Finansów. Platformy zagraniczne, nawet posiadające licencje od międzynarodowych 
                          regulatorów, nie są formalnie dopuszczone do działania na polskim rynku w świetle ustawy o grach hazardowych.
                        </p>
                        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-l-4 border-primary rounded-lg p-4">
                          <div className="flex items-start gap-3">
                            <Icon name="Info" className="text-primary flex-shrink-0 mt-1" size={20} />
                            <p className="text-sm text-foreground/80">
                              Każdy użytkownik powinien samodzielnie zapoznać się z obowiązującymi przepisami i ocenić konsekwencje prawne 
                              korzystania z takich serwisów. Niniejszy tekst ma charakter wyłącznie informacyjny i nie stanowi porady prawnej.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="MessageCircle" className="text-primary" size={28} />
                        Irwin kontakt i obsługa klienta
                      </h2>
                      <div className="space-y-4">
                        <p className="text-foreground/80 leading-relaxed">
                          Sprawna obsługa klienta to istotny element oceny każdego kasyna online. <strong className="text-primary">Irwin kontakt</strong> z pomocą 
                          techniczną możliwy jest przede wszystkim za pośrednictwem czatu na żywo, który dostępny jest bezpośrednio na stronie 
                          platformy. Jest to najszybszy sposób uzyskania odpowiedzi – czas oczekiwania na połączenie z konsultantem wynosi 
                          zazwyczaj od kilku sekund do kilku minut.
                        </p>
                        <p className="text-foreground/80 leading-relaxed">
                          Alternatywną formą kontaktu jest poczta elektroniczna. Wiadomości e-mail są przetwarzane wolniej – odpowiedź może 
                          nadejść w ciągu kilku godzin lub w następnym dniu roboczym. Dla graczy z Polski istotne jest, czy wsparcie dostępne 
                          jest w języku polskim. Warto to zweryfikować przy pierwszym kontakcie z obsługą.
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="Users" className="text-primary" size={28} />
                        Irwin opinie – zalety i wady
                      </h2>
                      <p className="text-foreground/80 leading-relaxed text-lg mb-6">
                        Na podstawie dostępnych informacji i <strong className="text-primary">irwin opinie</strong> użytkowników można wskazać zarówno mocne, 
                        jak i słabsze strony platformy.
                      </p>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="ThumbsUp" className="text-primary" size={22} />
                            Zalety
                          </h3>
                          <div className="bg-gradient-to-r from-green-500/10 to-green-500/5 border-l-4 border-green-500 rounded-lg p-4">
                            <div className="flex items-start gap-3">
                              <Icon name="CheckCircle2" className="text-green-500 flex-shrink-0 mt-1" size={20} />
                              <ul className="text-sm text-foreground/80 space-y-2">
                                <li>• Rozbudowany katalog gier od renomowanych dostawców</li>
                                <li>• Przejrzysty interfejs i intuicyjna nawigacja</li>
                                <li>• Responsywna wersja mobilna umożliwiająca grę z telefonu</li>
                                <li>• Dostępność czatu na żywo dla szybkiego kontaktu z obsługą</li>
                                <li>• Kilka metod płatności do wyboru, w tym portfele elektroniczne</li>
                                <li>• Oferta bonusowa obejmująca bonus powitalny i darmowe spiny</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="ThumbsDown" className="text-primary" size={22} />
                            Wady
                          </h3>
                          <div className="bg-gradient-to-r from-red-500/10 to-red-500/5 border-l-4 border-red-500 rounded-lg p-4">
                            <div className="flex items-start gap-3">
                              <Icon name="AlertCircle" className="text-red-500 flex-shrink-0 mt-1" size={20} />
                              <ul className="text-sm text-foreground/80 space-y-2">
                                <li>• Brak licencji wydanej przez polskiego regulatora</li>
                                <li>• Możliwe ograniczenia w dostępie do strony głównej</li>
                                <li>• Czas weryfikacji tożsamości może wydłużyć pierwszą wypłatę</li>
                                <li>• Warunki obrotu bonusów mogą być wymagające</li>
                                <li>• Obsługa klienta nie zawsze dostępna w języku polskim</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="BarChart3" className="text-primary" size={22} />
                            Krótkie podsumowanie opinii
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            <strong className="text-primary">Irwin Casino</strong> zbiera mieszane opinie. Gracze chwalą przede wszystkim ofertę gier 
                            i bezpieczeństwo transakcji, natomiast zgłaszają uwagi dotyczące warunków bonusowych i czasu weryfikacji. Jak w przypadku 
                            każdej platformy hazardowej, doświadczenia mogą się różnić w zależności od indywidualnych oczekiwań.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="FileText" className="text-primary" size={28} />
                        Podsumowanie
                      </h2>
                      <div className="space-y-4">
                        <p className="text-foreground/80 leading-relaxed">
                          <strong className="text-primary">Irwin Casino</strong> to platforma hazardowa online, która oferuje rozbudowany katalog gier, system 
                          bonusowy i kilka kanałów kontaktu z obsługą klienta. Serwis posiada wersję mobilną umożliwiającą komfortową rozgrywkę 
                          na urządzeniach przenośnych. Proces rejestracji i logowania przebiega sprawnie, a dostępne metody płatności obejmują 
                          popularne opcje stosowane na rynku europejskim.
                        </p>
                        <p className="text-foreground/80 leading-relaxed">
                          Przed założeniem konta warto zapoznać się z regulaminem platformy oraz obowiązującymi przepisami dotyczącymi hazardu 
                          internetowego w Polsce.
                        </p>
                        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-l-4 border-primary rounded-lg p-4">
                          <div className="flex items-start gap-3">
                            <Icon name="Info" className="text-primary flex-shrink-0 mt-1" size={20} />
                            <p className="text-sm text-foreground/80">
                              Niniejsza recenzja ma charakter wyłącznie informacyjny i służy przedstawieniu obiektywnego obrazu opisywanej usługi. 
                              Każda decyzja dotycząca udziału w grach hazardowych powinna być podejmowana świadomie i odpowiedzialnie.
                            </p>
                          </div>
                        </div>
                      </div>
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