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

export default function Martin() {
  const navigate = useNavigate();
  const casinoUrl = 'https://martin-way-six.com/c1b69e954';

  useEffect(() => {
    document.title = 'Martin Casino Polska – pełna recenzja i opinie graczy 2026';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Martin Casino Polska – pełna recenzja, opinie graczy, bonus powitalny do 50%, katalog 2600+ gier i szybkie wypłaty. Sprawdź szczegóły.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Martin Casino Polska – pełna recenzja, opinie graczy, bonus powitalny do 50%, katalog 2600+ gier i szybkie wypłaty. Sprawdź szczegóły.';
      document.head.appendChild(meta);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Martin Casino",
      "description": "Martin Casino to nowoczesne kasyno online z licencją Curacao eGaming, oferujące ponad 2600 gier, szybkie wypłaty i bonus powitalny do 50% dla graczy w Polsce.",
      "brand": {
        "@type": "Brand",
        "name": "Martin Casino"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.5",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "1253"
      },
      "offers": {
        "@type": "Offer",
        "price": "50",
        "priceCurrency": "PLN",
        "availability": "https://schema.org/InStock",
        "description": "Minimalny depozyt: 50 PLN. Bonus powitalny do 50%."
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
        "reviewBody": "Martin Casino w Polsce oferuje solidny katalog ponad 2600 gier, bonus powitalny do 50% i sprawną obsługę klienta. Platforma działa na licencji Curacao eGaming."
      },
      "image": "https://cdn.poehali.dev/projects/c2933cfb-9ddd-413a-a6ef-7b99d3f5e883/bucket/83e0e007-0964-4062-be9c-39454e6e838c.png",
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
                      src="https://cdn.poehali.dev/projects/c2933cfb-9ddd-413a-a6ef-7b99d3f5e883/bucket/83e0e007-0964-4062-be9c-39454e6e838c.png"
                      alt="Martin Casino"
                      className="relative w-full h-full object-contain rounded-2xl bg-card p-4"
                    />
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div>
                      <CardTitle className="text-4xl mb-2">Martin Casino</CardTitle>
                      <div className="flex items-center gap-4 flex-wrap">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">Ocena:</span>
                          <StarRating rating={4.5} size={20} />
                          <span className="text-lg font-semibold text-primary">4.5/5</span>
                        </div>
                        <Badge variant="outline" className="border-primary/30 text-lg px-3 py-1">
                          <Icon name="Trophy" className="mr-1" size={16} />
                          8.9/10
                        </Badge>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-l-4 border-primary rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Icon name="Gift" className="text-primary mt-1" size={24} />
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Bonus Powitalny</p>
                          <p className="text-xl font-bold text-primary">Welcome package do 50%</p>
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
                  Graj Teraz w Martin Casino
                </Button>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-muted/50 rounded-lg p-4 text-center">
                    <Icon name="Gamepad2" className="mx-auto text-primary mb-2" size={32} />
                    <p className="text-2xl font-bold text-foreground">2600+</p>
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
                    {['Szybkie wypłaty', 'Obsługa 24/7', 'Wersja mobilna', 'Live Casino'].map((feature, i) => (
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
                      Martin Casino Polska – pelna recenzja i opinie graczy
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4 text-foreground/80 leading-relaxed">
                      <p className="text-lg">
                        Rynek kasyn internetowych rozwija sie dynamicznie, a nowe platformy regularnie przyciagaja uwage polskich uzytkownikow. 
                        Jedna z nich jest <strong className="text-primary">Martin Casino</strong> – serwis, ktory pojawil sie w swiadomosci graczy stosunkowo niedawno, 
                        ale zdazyl juz wzbudzic spore zainteresowanie.
                      </p>
                      <p className="text-lg">
                        W niniejszej recenzji przyjrzymy sie temu, co <strong className="text-primary">Martin kasyno</strong> oferuje w praktyce: od procesu rejestracji, 
                        przez bonusy i katalog gier, az po wyplaty i obsluge klienta. Celem tego tekstu jest dostarczenie rzetelnych, 
                        neutralnych informacji, ktore pomoga podjac swiadoma decyzje.
                      </p>
                    </div>

                    {/* Section 1: Rejestracja */}
                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="UserPlus" className="text-primary" size={28} />
                        Rejestracja w Martin Casino
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Edit" className="text-primary" size={22} />
                            Jak zalozyc konto
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            Proces rejestracji w <strong className="text-primary">Martin Casino</strong> jest prosty i szybki. Wystarczy podac adres e-mail, 
                            utworzyc haslo i zaakceptowac regulamin. Caly formularz zajmuje nie wiecej niz minute – nie ma potrzeby 
                            podawania rozbudowanych danych osobowych na etapie zakladania konta.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Lock" className="text-primary" size={22} />
                            Weryfikacja tozsamosci
                          </h3>
                          <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                              Weryfikacja dokumentow nastepuje dopiero przy pierwszej wyplacie, co jest standardowa praktyka w brazy. 
                              Martin Casino wymaga przeslania skanu dokumentu tozsamosci oraz potwierdzenia metody platnosci. Wedlug 
                              opinii uzytkownikow, proces weryfikacji trwa od kilku godzin do jednego dnia roboczego.
                            </p>
                            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-l-4 border-primary rounded-lg p-4">
                              <div className="flex items-start gap-3">
                                <Icon name="Lightbulb" className="text-primary flex-shrink-0 mt-1" size={20} />
                                <p className="text-sm text-foreground/80">
                                  <strong className="text-primary">Wskazowka:</strong> Warto przygotowac dokumenty zawczasu – wyslanie ich 
                                  zaraz po rejestracji pozwoli uniknac opoznien przy pierwszej wyplacie.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 2: Bonusy */}
                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="Gift" className="text-primary" size={28} />
                        Bonusy w Martin Casino
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Sparkles" className="text-primary" size={22} />
                            Bonus powitalny i warunki obrotu
                          </h3>
                          <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                              Nowi gracze w Martin Casino moga liczyc na <strong className="text-primary">welcome package do 50%</strong> wartosci pierwszego depozytu. 
                              To oferta skierowana przede wszystkim do osob, ktore dopiero zaczynaja przygode z platforma i chca rozpoczac 
                              gre z dodatkowym kapitalem.
                            </p>
                            <p className="text-foreground/80 leading-relaxed">
                              Warunki obrotu (wagering) sa opisane w regulaminie bonusu. Przed aktywacja warto dokladnie zapoznac sie z 
                              wymaganiami dotyczacymi wielokrotnosci obrotu oraz z lista gier, ktore licza sie do spelnienia warunkow. 
                              Nie wszystkie automaty i gry stolowe wliczaja sie w identycznym stopniu.
                            </p>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Ticket" className="text-primary" size={22} />
                            Praktyczne wskazowki dotyczace bonusow
                          </h3>
                          <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                              Przy korzystaniu z bonusow w <strong className="text-primary">Martin Casino</strong> warto pamietac o kilku rzeczach. Po pierwsze, 
                              sprawdz maksymalna stawke dozwolona podczas gry z aktywnym bonusem. Po drugie, zwroc uwage na termin 
                              waznosci – bonusy maja okreslony czas, w ktorym nalezy spelnic warunki obrotu.
                            </p>
                            <div className="bg-gradient-to-r from-amber-500/10 to-amber-500/5 border-l-4 border-amber-500 rounded-lg p-4">
                              <div className="flex items-start gap-3">
                                <Icon name="AlertTriangle" className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                                <p className="text-sm text-foreground/80">
                                  <strong className="text-amber-600">Wazne:</strong> Zawsze czytaj regulamin bonusu przed jego aktywacja. 
                                  Warto upewnic sie, ze warunki obrotu sa realne do spelnienia w wyznaczonym czasie.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 3: Katalog gier */}
                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="Gamepad2" className="text-primary" size={28} />
                        Katalog gier i dostawcy
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Joystick" className="text-primary" size={22} />
                            Automaty i live casino
                          </h3>
                          <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                              <strong className="text-primary">Martin Casino</strong> oferuje katalog liczacy ponad <strong className="text-primary">2600 gier</strong>, 
                              co plasuje platforme w sredniej-wyzszej polce pod wzgledem roznorodnosci. Dominuja automaty online – od 
                              klasycznych slotow z trzema bebnami po nowoczesne produkcje z mechanikami megaways, bonus buy i kaskadowymi 
                              symbolami.
                            </p>
                            <p className="text-foreground/80 leading-relaxed">
                              Sekcja <strong className="text-primary">live casino</strong> obejmuje ruletke, blackjacka, baccarata oraz popularne gry typu game show. 
                              Transmisje prowadzone sa w czasie rzeczywistym przez profesjonalnych krupierow, a jakosc obrazu jest stabilna 
                              nawet na przecietnym laczu internetowym.
                            </p>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Building2" className="text-primary" size={22} />
                            Dostawcy oprogramowania
                          </h3>
                          <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                              W katalogu Martin Casino znajdziemy tytuly od renomowanych dostawcow, takich jak <strong className="text-primary">Pragmatic Play</strong>, 
                              <strong className="text-primary"> Evolution</strong>, <strong className="text-primary">Play'n GO</strong>, <strong className="text-primary">NetEnt</strong>, 
                              <strong className="text-primary"> Yggdrasil</strong> czy <strong className="text-primary">Push Gaming</strong>. Obecnosc tych marek swiadczy o 
                              wiarygodnosci platformy – uznani producenci nie wspolpracuja z kasynami o watpliwej reputacji.
                            </p>
                            <div className="bg-gradient-to-r from-green-500/10 to-green-500/5 border-l-4 border-green-500 rounded-lg p-4">
                              <div className="flex items-start gap-3">
                                <Icon name="CheckCircle2" className="text-green-500 flex-shrink-0 mt-1" size={20} />
                                <div>
                                  <p className="text-sm font-semibold text-foreground mb-1">Zalety katalogu gier:</p>
                                  <ul className="text-sm text-foreground/70 space-y-1">
                                    <li>• Ponad 2600 tytulow od sprawdzonych dostawcow</li>
                                    <li>• Rozbudowana sekcja live casino z Evolution</li>
                                    <li>• Regularne dodawanie nowych premier</li>
                                    <li>• Mozliwosc filtrowania po dostawcy i typie gry</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 4: Wyplaty i metody platnosci */}
                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="DollarSign" className="text-primary" size={28} />
                        Wyplaty i metody platnosci
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Zap" className="text-primary" size={22} />
                            Szybkosc wyplat
                          </h3>
                          <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                              Szybkosc wyplat to jeden z najwazniejszych kryteriow oceny kasyna. W <strong className="text-primary">Martin Casino</strong> wyplaty 
                              na portfele elektroniczne realizowane sa zazwyczaj w ciagu kilku godzin. Przelewy na karty bankowe moga 
                              zajac do trzech dni roboczych, co jest standardowym czasem w branzy.
                            </p>
                            <p className="text-foreground/80 leading-relaxed">
                              Dostepne <strong className="text-primary">metody platnosci</strong> obejmuja karty Visa i Mastercard, przelewy bankowe oraz popularne 
                              portfele elektroniczne. Minimalna kwota wyplaty jest przystepna, co doceniaja gracze stawiajacy mniejsze stawki.
                            </p>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="ShieldCheck" className="text-primary" size={22} />
                            Weryfikacja KYC
                          </h3>
                          <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                              Pierwsza wyplata wymaga przejscia procedury KYC (Know Your Customer). Obejmuje ona przeslanie skanu dokumentu 
                              tozsamosci oraz potwierdzenie metody platnosci. Po pomyslnej weryfikacji kolejne wyplaty przebiegaja znacznie 
                              szybciej, bez koniecznosci ponownego potwierdzania danych.
                            </p>
                            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-l-4 border-primary rounded-lg p-4">
                              <div className="flex items-start gap-3">
                                <Icon name="Lightbulb" className="text-primary flex-shrink-0 mt-1" size={20} />
                                <p className="text-sm text-foreground/80">
                                  <strong className="text-primary">Praktyczna wskazowka:</strong> Aby przyspieszyc pierwsza wyplate, warto 
                                  przeslac dokumenty weryfikacyjne zaraz po rejestracji – jeszcze przed zlozeniem pierwszego depozytu.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 5: Wersja mobilna */}
                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="Smartphone" className="text-primary" size={28} />
                        Wersja mobilna
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Globe" className="text-primary" size={22} />
                            Gra w przegladarce mobilnej
                          </h3>
                          <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                              <strong className="text-primary">Martin Casino</strong> nie wymaga pobierania dedykowanej aplikacji. Platforma dziala w pelni 
                              responsywnie w przegladarce smartfona lub tabletu – niezaleznie od systemu operacyjnego (iOS, Android). 
                              Interfejs automatycznie dostosowuje sie do rozmiaru ekranu, zachowujac pelna funkcjonalnosc.
                            </p>
                            <p className="text-foreground/80 leading-relaxed">
                              Wszystkie kluczowe funkcje – od rejestracji i logowania, przez wplaty i wyplaty, az po gre na automatach 
                              i w live casino – sa dostepne w wersji mobilnej dokladnie tak samo jak na komputerze. Gry laduja sie 
                              plynnie, a nawigacja jest intuicyjna.
                            </p>
                            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-l-4 border-primary rounded-lg p-4">
                              <div className="flex items-start gap-3">
                                <Icon name="Lightbulb" className="text-primary flex-shrink-0 mt-1" size={20} />
                                <p className="text-sm text-foreground/80">
                                  <strong className="text-primary">Praktyczna wskazowka:</strong> Mozesz dodac Martin Casino jako skrot na 
                                  ekranie glownym telefonu – daje to efekt zblizony do natywnej aplikacji, bez koniecznosci pobierania 
                                  dodatkowego oprogramowania.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 6: Obsluga klienta */}
                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="MessageCircle" className="text-primary" size={28} />
                        Obsluga klienta
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="MessagesSquare" className="text-primary" size={22} />
                            Czat na zywo
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            Podstawowym kanalem kontaktu z <strong className="text-primary">Martin Casino</strong> jest czat na zywo, dostepny calodobowo. 
                            To najszybsza metoda uzyskania pomocy – odpowiedz pojawia sie zazwyczaj w ciagu kilku minut. Konsultanci 
                            pomagaja w sprawach zwiazanych z kontem, bonusami, wyplatami i kwestiami technicznymi.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Mail" className="text-primary" size={22} />
                            Kontakt e-mail
                          </h3>
                          <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                              Dla bardziej zlozonych spraw dostepna jest rowniez obsluga przez e-mail. Sprawdza sie ona szczegolnie 
                              w przypadku reklamacji, problemow z weryfikacja lub pytan dotyczacych regulaminu. Czas odpowiedzi 
                              wynosi zazwyczaj do 24 godzin.
                            </p>
                            <p className="text-foreground/80 leading-relaxed">
                              Ogolna jakosc obslugi klienta oceniana jest przez graczy jako solidna. Wiekszosc standardowych kwestii – 
                              zmiana danych, pytania o bonusy, status wyplaty – rozwiazywana jest podczas jednej rozmowy na czacie.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 7: Key info box */}
                    <div className="bg-muted/50 rounded-lg p-4 mt-6">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Icon name="Info" className="text-primary" size={18} />
                        Kluczowe informacje
                      </h4>
                      <ul className="space-y-2 text-sm text-foreground/70">
                        <li className="flex items-start gap-2">
                          <Icon name="Dot" className="text-primary flex-shrink-0 mt-1" size={16} />
                          <span>Minimalny depozyt: 50 PLN</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Dot" className="text-primary flex-shrink-0 mt-1" size={16} />
                          <span>Bonus powitalny: welcome package do 50%</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Dot" className="text-primary flex-shrink-0 mt-1" size={16} />
                          <span>Warunek obrotu: szczegoly w regulaminie bonusu</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Dot" className="text-primary flex-shrink-0 mt-1" size={16} />
                          <span>Czas wyplaty portfele: kilka godzin</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Dot" className="text-primary flex-shrink-0 mt-1" size={16} />
                          <span>Czas wyplaty karty: do 3 dni roboczych</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Dot" className="text-primary flex-shrink-0 mt-1" size={16} />
                          <span>Obsluga klienta: 24/7 czat na zywo + e-mail</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Section 8: Final CTA */}
                <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-lg p-6 text-center">
                  <h3 className="text-2xl font-bold mb-4">Gotowy na gre?</h3>
                  <Button 
                    onClick={() => window.open(casinoUrl, '_blank')}
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-lg px-8 py-6"
                  >
                    <Icon name="Rocket" className="mr-2" size={24} />
                    Zagraj w Martin Casino Teraz
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    Dolacz do tysiecy zadowolonych graczy!
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