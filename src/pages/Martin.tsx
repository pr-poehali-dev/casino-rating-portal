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
                        Rynek kasyn internetowych rozwija się dynamicznie, a nowe platformy regularnie przyciągają uwagę polskich użytkowników. 
                        Jedną z nich jest <strong className="text-primary">Martin Casino</strong> – serwis, który pojawił się w świadomości graczy stosunkowo niedawno, 
                        ale zdążył już wzbudzić spore zainteresowanie.
                      </p>
                      <p className="text-lg">
                        W niniejszej recenzji przyjrzymy się temu, co <strong className="text-primary">Martin kasyno</strong> oferuje w praktyce: od procesu rejestracji, 
                        przez bonusy i katalog gier, aż po wypłaty i obsługę klienta. Celem tego tekstu jest dostarczenie rzetelnych, 
                        neutralnych informacji, które pomogą podjąć świadomą decyzję.
                      </p>
                    </div>

                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="Info" className="text-primary" size={28} />
                        Czym jest Martin Casino?
                      </h2>
                      
                      <div className="space-y-6">
                        <p className="text-foreground/80 leading-relaxed text-lg">
                          Martin Casino to platforma hazardowa online, która kieruje swoją ofertę do graczy z różnych krajów, w tym z Polski. 
                          Serwis pozycjonuje się jako nowoczesne kasyno internetowe z szerokim wyborem automatów, gier stołowych oraz sekcji 
                          z krupierami na żywo. Strona dostępna jest w kilku wersjach językowych, a interfejs został zaprojektowany w sposób 
                          przejrzysty i intuicyjny.
                        </p>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Star" className="text-primary" size={22} />
                            Główne cechy platformy
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            Wśród głównych cech wyróżniających <strong className="text-primary">Martin Casino</strong> wymienia się rozbudowany system bonusowy, 
                            współpracę z uznanymi dostawcami oprogramowania oraz stosunkowo szybki proces obsługi transakcji. Platforma działa 
                            w oparciu o licencję wydaną przez międzynarodowy organ regulacyjny, co dla wielu użytkowników stanowi istotny element 
                            budujący zaufanie.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="TrendingUp" className="text-primary" size={22} />
                            Pozycjonowanie na rynku
                          </h3>
                          <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                              <strong className="text-primary">Martin kasyno online</strong> celuje w segment graczy poszukujących nowoczesnego interfejsu połączonego 
                              z bogatą ofertą rozrywkową. Na tle innych platform wyróżnia się przede wszystkim różnorodnością promocji oraz szerokim 
                              katalogiem automatów.
                            </p>
                            <div className="bg-gradient-to-r from-amber-500/10 to-amber-500/5 border-l-4 border-amber-500 rounded-lg p-4">
                              <div className="flex items-start gap-3">
                                <Icon name="AlertTriangle" className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                                <p className="text-sm text-foreground/80">
                                  <strong className="text-amber-600">Ważne:</strong> Warto jednak samodzielnie zweryfikować aktualność licencji 
                                  przed założeniem konta.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 1: Rejestracja i logowanie */}
                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="UserPlus" className="text-primary" size={28} />
                        Martin rejestracja i logowanie
                      </h2>
                      <p className="text-foreground/80 leading-relaxed text-lg mb-6">
                        Proces zakładania konta w Martin Casino jest stosunkowo prosty i nie zajmuje więcej niż kilka minut.
                      </p>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Edit" className="text-primary" size={22} />
                            Jak wygląda rejestracja w Martin?
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            <strong className="text-primary">Martin rejestracja</strong> wymaga podania podstawowych danych osobowych: imienia, nazwiska, 
                            adresu e-mail, numeru telefonu oraz ustalenia hasła. Po wypełnieniu formularza użytkownik otrzymuje wiadomość 
                            z linkiem aktywacyjnym. Cała procedura przebiega na <strong className="text-primary">Martin oficjalna strona</strong> i jest zgodna 
                            ze standardami branżowymi.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Lock" className="text-primary" size={22} />
                            Logowanie i weryfikacja konta
                          </h3>
                          <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                              <strong className="text-primary">Martin logowanie</strong> odbywa się za pośrednictwem oficjalnej strony – wystarczy wpisać 
                              adres e-mail i hasło. Warto pamiętać, że domena może ulegać zmianom, dlatego zaleca się korzystanie wyłącznie 
                              z zaufanych źródeł przy wyszukiwaniu aktualnego adresu.
                            </p>
                            <p className="text-foreground/80 leading-relaxed">
                              Po pierwszym logowaniu platforma zazwyczaj wymaga przejścia weryfikacji tożsamości (KYC). Polega ona na przesłaniu 
                              skanu dokumentu potwierdzającego tożsamość oraz – w niektórych przypadkach – potwierdzenia adresu zamieszkania. 
                              Weryfikacja jest standardową procedurą w branży i służy bezpieczeństwu zarówno operatora, jak i samego gracza.
                            </p>
                            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-l-4 border-primary rounded-lg p-4">
                              <div className="flex items-start gap-3">
                                <Icon name="Lightbulb" className="text-primary flex-shrink-0 mt-1" size={20} />
                                <p className="text-sm text-foreground/80">
                                  <strong className="text-primary">Wskazówka:</strong> Warto przygotować dokumenty zawczasu – wysłanie ich 
                                  zaraz po rejestracji pozwoli uniknąć opóźnień przy pierwszej wypłacie.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 2: Bonusy i kody promocyjne */}
                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="Gift" className="text-primary" size={28} />
                        Martin bonus i kody promocyjne
                      </h2>
                      <p className="text-foreground/80 leading-relaxed text-lg mb-6">
                        System promocyjny to jeden z elementów, na które gracze zwracają uwagę w pierwszej kolejności.
                      </p>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Sparkles" className="text-primary" size={22} />
                            Bonus powitalny i bonus bez depozytu
                          </h3>
                          <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                              <strong className="text-primary">Martin bonus</strong> na start obejmuje zazwyczaj dopasowanie do pierwszego depozytu – szczegółowe 
                              warunki mogą się zmieniać w zależności od aktualnej oferty. Niektórzy użytkownicy poszukują także informacji o tym, 
                              czy Martin oferuje <strong className="text-primary">bonus bez depozytu</strong>, czyli środki przyznawane bez konieczności wpłaty własnych 
                              pieniędzy. Tego typu promocje pojawiają się okresowo, dlatego warto śledzić aktualizacje na stronie kasyna.
                            </p>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Ticket" className="text-primary" size={22} />
                            Kody promocyjne i darmowe spiny
                          </h3>
                          <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                              Dodatkowe korzyści można uzyskać, korzystając z kodów promocyjnych. <strong className="text-primary">Martin kod promocyjny</strong> wprowadza 
                              się zazwyczaj podczas rejestracji lub wpłaty – w zamian użytkownik może otrzymać dodatkowe środki bonusowe lub 
                              darmowe spiny. <strong className="text-primary">Kody bonusowe Martin</strong> publikowane są zarówno na oficjalnej stronie, jak i w serwisach 
                              partnerskich.
                            </p>
                            <p className="text-foreground/80 leading-relaxed">
                              <strong className="text-primary">Martin darmowe spiny</strong> przyznawane są najczęściej na wybrane automaty i stanowią atrakcyjny 
                              element oferty powitalnej.
                            </p>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="AlertCircle" className="text-primary" size={22} />
                            Warunki obrotu – na co zwrócić uwagę
                          </h3>
                          <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed mb-3">
                              Najważniejsze aspekty, o których należy pamiętać przy bonusach:
                            </p>
                            <div className="bg-muted/50 rounded-lg p-5 space-y-3">
                              <div className="flex items-start gap-3">
                                <Icon name="Dot" className="text-primary flex-shrink-0 mt-1" size={16} />
                                <p className="text-foreground/80 text-sm">
                                  <strong className="text-primary">Wymóg obrotu (wager)</strong> – każdy bonus podlega warunkom obrotu, które trzeba spełnić 
                                  przed wypłatą wygranych. Standardowy wager wynosi od x30 do x45.
                                </p>
                              </div>
                              <div className="flex items-start gap-3">
                                <Icon name="Dot" className="text-primary flex-shrink-0 mt-1" size={16} />
                                <p className="text-foreground/80 text-sm">
                                  <strong className="text-primary">Czas na realizację</strong> – bonusy mają określony termin ważności, po którym 
                                  niewykorzystane środki przepadają.
                                </p>
                              </div>
                              <div className="flex items-start gap-3">
                                <Icon name="Dot" className="text-primary flex-shrink-0 mt-1" size={16} />
                                <p className="text-foreground/80 text-sm">
                                  <strong className="text-primary">Ograniczenia gier</strong> – nie wszystkie gry hazardowe w jednakowym stopniu 
                                  zaliczają się do obrotu bonusem.
                                </p>
                              </div>
                            </div>
                            <div className="bg-gradient-to-r from-amber-500/10 to-amber-500/5 border-l-4 border-amber-500 rounded-lg p-4">
                              <div className="flex items-start gap-3">
                                <Icon name="AlertTriangle" className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                                <p className="text-sm text-foreground/80">
                                  <strong className="text-amber-600">Ważne:</strong> Warto zawsze przeczytać regulamin promocji przed jej aktywacją.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 3: Gry hazardowe */}
                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="Gamepad2" className="text-primary" size={28} />
                        Martin gry hazardowe
                      </h2>
                      <p className="text-foreground/80 leading-relaxed text-lg mb-6">
                        Katalog gier to fundament każdego kasyna online, a Martin nie odstaje w tej kwestii od oczekiwań.
                      </p>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Joystick" className="text-primary" size={22} />
                            Automaty i sloty wideo
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            Biblioteka <strong className="text-primary">Martin gry hazardowe</strong> obejmuje kilka tysięcy tytułów, podzielonych na przejrzyste 
                            kategorie. Gracze znajdą tu zarówno klasyczne automaty, jak i nowoczesne sloty wideo z rozbudowaną mechaniką 
                            bonusową. W ofercie <strong className="text-primary">Martin online</strong> dostępne są gry od znanych dostawców oprogramowania, takich jak 
                            <strong className="text-primary"> Pragmatic Play</strong>, <strong className="text-primary">NetEnt</strong>, <strong className="text-primary">Play'n GO</strong>, 
                            <strong className="text-primary"> Evolution Gaming</strong> czy <strong className="text-primary">Microgaming</strong>. Obecność tych marek świadczy 
                            o określonym standardzie jakości – gry są testowane pod kątem uczciwości, a ich współczynnik zwrotu (RTP) jest 
                            publicznie dostępny.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Dices" className="text-primary" size={22} />
                            Gry stołowe i kasyno na żywo
                          </h3>
                          <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed mb-3">
                              Oprócz automatów platforma oferuje:
                            </p>
                            <div className="bg-muted/50 rounded-lg p-5 space-y-3">
                              <div className="flex items-start gap-3">
                                <Icon name="Dot" className="text-primary flex-shrink-0 mt-1" size={16} />
                                <p className="text-foreground/80 text-sm">
                                  <strong className="text-primary">Gry stołowe</strong> – ruletka, blackjack, bakarat, poker w różnych wariantach
                                </p>
                              </div>
                              <div className="flex items-start gap-3">
                                <Icon name="Dot" className="text-primary flex-shrink-0 mt-1" size={16} />
                                <p className="text-foreground/80 text-sm">
                                  <strong className="text-primary">Kasyno na żywo</strong> – transmisje z profesjonalnymi krupierami w czasie rzeczywistym, dostępne całą dobę
                                </p>
                              </div>
                              <div className="flex items-start gap-3">
                                <Icon name="Dot" className="text-primary flex-shrink-0 mt-1" size={16} />
                                <p className="text-foreground/80 text-sm">
                                  <strong className="text-primary">Gry typu crash i instant</strong> – szybkie rozgrywki dla tych, którzy preferują dynamiczne sesje
                                </p>
                              </div>
                            </div>
                            <p className="text-foreground/80 leading-relaxed">
                              Sekcja gier na żywo zasługuje na osobne wyróżnienie – to właśnie <strong className="text-primary">live casino</strong> coraz częściej 
                              przyciąga polskich graczy, którzy szukają wrażeń zbliżonych do tych z kasyna stacjonarnego.
                            </p>
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

                    {/* Section 5: Aplikacja i wersja mobilna */}
                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="Smartphone" className="text-primary" size={28} />
                        Martin aplikacja i wersja mobilna
                      </h2>
                      <p className="text-foreground/80 leading-relaxed text-lg mb-6">
                        Wielu użytkowników zastanawia się, czy Martin posiada dedykowaną aplikację mobilną.
                      </p>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Download" className="text-primary" size={22} />
                            Czy istnieje aplikacja do pobrania?
                          </h3>
                          <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                              Na chwilę obecną <strong className="text-primary">Martin aplikacja</strong> nie jest dostępna w oficjalnych sklepach Google Play 
                              ani App Store, co jest typowe dla kasyn online działających poza regulowanymi rynkami. Niektóre źródła sugerują 
                              możliwość pobrania pliku APK (<strong className="text-primary">Martin app download</strong>) bezpośrednio ze strony kasyna, jednak przy 
                              instalacji tego typu plików zawsze należy zachować ostrożność i weryfikować źródło.
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
                            Wersja mobilna w przeglądarce
                          </h3>
                          <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                              Alternatywą – i w praktyce najczęściej stosowanym rozwiązaniem – jest korzystanie z <strong className="text-primary">Martin Casino</strong> za 
                              pośrednictwem przeglądarki mobilnej. Strona została zoptymalizowana pod urządzenia z systemem Android oraz iOS 
                              i automatycznie dostosowuje się do rozmiaru ekranu. Funkcjonalność mobilna obejmuje pełen zakres gier, zarządzanie 
                              kontem, wpłaty i wypłaty oraz kontakt z obsługą klienta.
                            </p>
                            <p className="text-foreground/80 leading-relaxed">
                              Gracze, którzy regularnie korzystają z wersji mobilnej, mogą dodać stronę do ekranu głównego smartfona – działa 
                              to analogicznie do aplikacji, bez konieczności instalacji dodatkowego oprogramowania.
                            </p>
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