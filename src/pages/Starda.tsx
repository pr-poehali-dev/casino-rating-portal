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

export default function Starda() {
  const navigate = useNavigate();
  const casinoUrl = 'https://strd-blit10.com/ca32b5f7f';

  useEffect(() => {
    document.title = 'Starda Casino Polska – opinie, bonus, rejestracja';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Starda kasyno – sprawdź opinie graczy, bonus na start, darmowe spiny i metody wypłat. Pełna recenzja Starda Casino Polska z opisem rejestracji i gier.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Starda kasyno – sprawdź opinie graczy, bonus na start, darmowe spiny i metody wypłat. Pełna recenzja Starda Casino Polska z opisem rejestracji i gier.';
      document.head.appendChild(meta);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Starda Casino",
      "description": "Starda Casino to nowoczesne kasyno online z licencją Curacao eGaming, oferujące ponad 3000 gier, Welcome Bonus 50% i szybkie wypłaty dla graczy w Polsce.",
      "brand": {
        "@type": "Brand",
        "name": "Starda Casino"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.6",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "1487"
      },
      "offers": {
        "@type": "Offer",
        "price": "50",
        "priceCurrency": "PLN",
        "availability": "https://schema.org/InStock",
        "description": "Minimalny depozyt: 50 PLN. Welcome Bonus 50%."
      },
      "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4.6",
          "bestRating": "5"
        },
        "author": {
          "@type": "Organization",
          "name": "bkreiting.com"
        },
        "reviewBody": "Starda Casino w Polsce oferuje rozbudowany katalog ponad 3000 gier, Welcome Bonus 50% i sprawną obsługę klienta. Platforma działa na licencji Curacao eGaming."
      },
      "image": "https://cdn.poehali.dev/projects/c2933cfb-9ddd-413a-a6ef-7b99d3f5e883/bucket/b256d5ca-0875-4899-9906-f72271d5ca39.png",
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
                      src="https://cdn.poehali.dev/projects/c2933cfb-9ddd-413a-a6ef-7b99d3f5e883/bucket/b256d5ca-0875-4899-9906-f72271d5ca39.png"
                      alt="Starda Casino"
                      className="relative w-full h-full object-contain rounded-2xl bg-card p-4"
                    />
                  </div>

                  <div className="flex-1 space-y-3">
                    <div>
                      <CardTitle className="text-4xl mb-2">Starda Casino</CardTitle>
                      <div className="flex items-center gap-4 flex-wrap">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">Ocena:</span>
                          <StarRating rating={4.6} size={20} />
                          <span className="text-lg font-semibold text-primary">4.6/5</span>
                        </div>
                        <Badge variant="outline" className="border-primary/30 text-lg px-3 py-1">
                          <Icon name="Trophy" className="mr-1" size={16} />
                          9.0/10
                        </Badge>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-l-4 border-primary rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Icon name="Gift" className="text-primary mt-1" size={24} />
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Bonus Powitalny</p>
                          <p className="text-xl font-bold text-primary">Welcome Bonus 50%</p>
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
                  Graj Teraz w Starda Casino
                </Button>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-muted/50 rounded-lg p-4 text-center">
                    <Icon name="Gamepad2" className="mx-auto text-primary mb-2" size={32} />
                    <p className="text-2xl font-bold text-foreground">3000+</p>
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
                    {['Welcome Bonus', 'Live Casino', 'Szybkie wypłaty', 'VIP Program'].map((feature, i) => (
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
                      Starda Casino Polska – opinie i pełna recenzja
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4 text-foreground/80 leading-relaxed">
                      <p className="text-lg">
                        Rynek hazardu internetowego rozwija się dynamicznie, a nowe platformy regularnie przyciągają uwagę polskich graczy. 
                        Jedną z nich jest <strong className="text-primary">Starda Casino</strong> — serwis, który zyskał rozpoznawalność dzięki szerokiej ofercie gier, 
                        systemowi bonusowemu oraz dostępności na urządzeniach mobilnych.
                      </p>
                      <p className="text-lg">
                        W niniejszej recenzji przyjrzymy się kluczowym aspektom tej platformy: od procesu rejestracji, przez dostępne promocje, 
                        aż po metody płatności i obsługę klienta. Celem tego tekstu jest dostarczenie rzetelnych informacji, które pomogą 
                        w podjęciu świadomej decyzji.
                      </p>
                    </div>

                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="Info" className="text-primary" size={28} />
                        Czym jest Starda Casino?
                      </h2>
                      <div className="space-y-4">
                        <p className="text-foreground/80 leading-relaxed text-lg">
                          <strong className="text-primary">Starda kasyno</strong> to międzynarodowa platforma hazardowa działająca w modelu online, skierowana 
                          między innymi do użytkowników z Europy. Serwis oferuje dostęp do automatów, gier stołowych oraz sekcji z krupierami 
                          na żywo. Platforma działa na podstawie licencji wydanej przez organ regulacyjny Curaçao, co jest standardem wśród wielu 
                          kasyn internetowych tego typu.
                        </p>
                        <p className="text-foreground/80 leading-relaxed">
                          <strong className="text-primary">Starda online</strong> wyróżnia się przejrzystym interfejsem, obsługą wielu walut oraz możliwością gry 
                          zarówno z komputera, jak i z urządzeń mobilnych. Strona dostępna jest w kilku wersjach językowych, a polska wersja serwisu 
                          pozwala na komfortowe korzystanie z wszystkich funkcji bez bariery językowej. Warto zwrócić uwagę, że platforma współpracuje 
                          z wieloma uznanymi dostawcami oprogramowania, co przekłada się na różnorodność biblioteki gier.
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="UserPlus" className="text-primary" size={28} />
                        Starda rejestracja i logowanie
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Edit" className="text-primary" size={22} />
                            Jak założyć konto?
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            Proces zakładania konta w serwisie jest stosunkowo prosty. <strong className="text-primary">Starda rejestracja</strong> wymaga podania 
                            podstawowych danych: adresu e-mail, hasła oraz wyboru waluty konta. Formularz rejestracyjny dostępny jest bezpośrednio 
                            na stronie głównej — wystarczy kliknąć odpowiedni przycisk, aby przejść do kolejnych kroków. Nowi użytkownicy mogą 
                            również skorzystać z rejestracji przez konta w mediach społecznościowych, co przyspiesza cały proces.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Lock" className="text-primary" size={22} />
                            Weryfikacja i logowanie
                          </h3>
                          <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                              Po utworzeniu profilu platforma może poprosić o weryfikację tożsamości. Standardowo polega to na przesłaniu skanu 
                              dokumentu tożsamości oraz potwierdzenia adresu zamieszkania. Weryfikacja jest wymagana najczęściej przed pierwszą 
                              wypłatą środków i stanowi element procedury bezpieczeństwa.
                            </p>
                            <p className="text-foreground/80 leading-relaxed">
                              <strong className="text-primary">Starda logowanie</strong> odbywa się za pomocą adresu e-mail i hasła. Użytkownicy mogą zalogować się 
                              zarówno przez przeglądarkę na komputerze, jak i na urządzeniu mobilnym. Warto pamiętać, że <strong className="text-primary">starda oficjalna 
                              strona</strong> to jedyne bezpieczne źródło dostępu do konta — należy unikać logowania przez nieznane linki.
                            </p>
                            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-l-4 border-primary rounded-lg p-4">
                              <div className="flex items-start gap-3">
                                <Icon name="Lightbulb" className="text-primary flex-shrink-0 mt-1" size={20} />
                                <p className="text-sm text-foreground/80">
                                  <strong className="text-primary">Wskazówka:</strong> Warto przygotować dokumenty weryfikacyjne zawczasu — 
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
                        Starda bonus i kody promocyjne
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Sparkles" className="text-primary" size={22} />
                            Bonus powitalny
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            Jednym z elementów, które przyciągają nowych użytkowników, jest <strong className="text-primary">starda bonus</strong> na start. 
                            Platforma oferuje pakiet powitalny, który zazwyczaj obejmuje dopłatę procentową do pierwszych wpłat oraz pulę darmowych 
                            spinów. Szczegółowe warunki — w tym wysokość bonusu, wymagany depozyt minimalny i wager — mogą się zmieniać, dlatego 
                            warto sprawdzać aktualne informacje bezpośrednio w regulaminie promocji na stronie kasyna.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Ticket" className="text-primary" size={22} />
                            Darmowe spiny i kody bonusowe
                          </h3>
                          <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                              W ofercie pojawiają się również <strong className="text-primary">starda darmowe spiny</strong> przyznawane w ramach promocji powitalnej 
                              lub cyklicznych akcji dla aktywnych graczy. Jeśli chodzi o <strong className="text-primary">starda kod promocyjny</strong> — platforma 
                              okresowo udostępnia specjalne kody, które mogą aktywować dodatkowe korzyści. <strong className="text-primary">Starda kody bonusowe</strong> warto 
                              szukać na oficjalnej stronie serwisu, w newsletterze lub w sekcji promocji po zalogowaniu.
                            </p>
                            <p className="text-foreground/80 leading-relaxed">
                              Należy podkreślić, że każdy bonus podlega warunkowi obrotu (wager), który określa, ile razy należy obrócić kwotą 
                              bonusową przed możliwością wypłaty. Jest to standardowa praktyka w branży kasyn online. Informacje o <strong className="text-primary">starda 
                              kody promocyjne 2026</strong> najlepiej weryfikować na bieżąco, ponieważ oferty mogą być ograniczone czasowo.
                            </p>
                            <p className="text-foreground/80 leading-relaxed">
                              Co do pytania o <strong className="text-primary">starda bonus bez depozytu</strong> — tego rodzaju promocje pojawiają się sporadycznie 
                              i nie zawsze są dostępne dla wszystkich użytkowników. Aktualną dostępność warto potwierdzić bezpośrednio na platformie.
                            </p>
                            <div className="bg-gradient-to-r from-amber-500/10 to-amber-500/5 border-l-4 border-amber-500 rounded-lg p-4">
                              <div className="flex items-start gap-3">
                                <Icon name="AlertTriangle" className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                                <p className="text-sm text-foreground/80">
                                  <strong className="text-amber-600">Ważne:</strong> Przed aktywacją jakiejkolwiek promocji warto dokładnie 
                                  zapoznać się z regulaminem i warunkami obrotu.
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
                        Starda gry hazardowe
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Joystick" className="text-primary" size={22} />
                            Automaty do gry
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            Biblioteka gier to jeden z mocniejszych punktów platformy. <strong className="text-primary">Starda gry hazardowe</strong> obejmują setki 
                            automatów od znanych producentów, takich jak <strong className="text-primary">Pragmatic Play</strong>, <strong className="text-primary">Play'n GO</strong>, 
                            <strong className="text-primary"> NetEnt</strong> czy <strong className="text-primary">Evolution</strong>. Automaty do gry dostępne w katalogu 
                            różnią się tematyką, mechaniką i poziomem RTP (Return to Player), co pozwala wybrać tytuł odpowiadający indywidualnym 
                            preferencjom.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Dices" className="text-primary" size={22} />
                            Gry stołowe i live casino
                          </h3>
                          <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                              Poza slotami platforma <strong className="text-primary">Starda online</strong> udostępnia klasyczne gry stołowe — ruletka, blackjack, 
                              bakarat i poker w różnych wariantach. Sekcja gier na żywo pozwala na rozgrywkę z prawdziwymi krupierami transmitowaną 
                              w czasie rzeczywistym. Live casino stanowi istotny element oferty, szczególnie dla użytkowników ceniących atmosferę 
                              zbliżoną do tradycyjnych kasyn.
                            </p>
                            <p className="text-foreground/80 leading-relaxed">
                              Dodatkowo platforma organizuje turnieje, w których gracze mogą rywalizować o pule nagród. Harmonogram turniejów 
                              jest aktualizowany regularnie i dostępny po zalogowaniu na konto.
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
                    Zagraj w Starda Casino Teraz
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