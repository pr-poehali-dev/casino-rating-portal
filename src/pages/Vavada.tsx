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

export default function Vavada() {
  const navigate = useNavigate();
  const casinoUrl = 'https://gate707.com/?promo=0e4cb864-e734-44ef-9820-29068cfbffac&target=register';

  useEffect(() => {
    document.title = 'Vavada kasyno online – opinie, bonusy i rejestracja';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Vavada kasyno online w Polsce – opinie graczy, bonus bez depozytu, darmowe spiny, rejestracja i szybkie wypłaty. Sprawdź szczegóły.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Vavada kasyno online w Polsce – opinie graczy, bonus bez depozytu, darmowe spiny, rejestracja i szybkie wypłaty. Sprawdź szczegóły.';
      document.head.appendChild(meta);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Vavada Casino",
      "description": "Vavada to międzynarodowe kasyno online z licencją Curaçao, oferujące ponad 3500 gier, szybkie wypłaty i atrakcyjne bonusy dla graczy w Polsce.",
      "brand": {
        "@type": "Brand",
        "name": "Vavada"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "2847"
      },
      "offers": {
        "@type": "Offer",
        "price": "50",
        "priceCurrency": "PLN",
        "availability": "https://schema.org/InStock",
        "description": "Minimalny depozyt: 50 PLN. Bonus powitalny do 5000 PLN + 200 darmowych spinów."
      },
      "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4.8",
          "bestRating": "5"
        },
        "author": {
          "@type": "Organization",
          "name": "bkreiting.com"
        },
        "reviewBody": "Vavada kasyno online w Polsce oferuje szybkie wypłaty, szeroki wybór gier od renomowanych dostawców i atrakcyjne bonusy. Platforma działa na licencji Curaçao i zapewnia obsługę klienta 24/7."
      },
      "image": "https://cdn.poehali.dev/projects/c2933cfb-9ddd-413a-a6ef-7b99d3f5e883/bucket/239958bf-e24d-4c54-9062-b0ce46b32b07.png",
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
                      src="https://cdn.poehali.dev/projects/c2933cfb-9ddd-413a-a6ef-7b99d3f5e883/bucket/239958bf-e24d-4c54-9062-b0ce46b32b07.png"
                      alt="Vavada Casino"
                      className="relative w-full h-full object-contain rounded-2xl bg-card p-4"
                    />
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div>
                      <CardTitle className="text-4xl mb-2">Vavada Casino</CardTitle>
                      <div className="flex items-center gap-4 flex-wrap">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">Ocena:</span>
                          <StarRating rating={4.8} size={20} />
                          <span className="text-lg font-semibold text-primary">4.8/5</span>
                        </div>
                        <Badge variant="outline" className="border-primary/30 text-lg px-3 py-1">
                          <Icon name="Trophy" className="mr-1" size={16} />
                          9.5/10
                        </Badge>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-l-4 border-primary rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Icon name="Gift" className="text-primary mt-1" size={24} />
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Bonus Powitalny</p>
                          <p className="text-xl font-bold text-primary">Do 5000 PLN + 200 Darmowych Spinów</p>
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
                  Graj Teraz w Vavada
                </Button>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-muted/50 rounded-lg p-4 text-center">
                    <Icon name="Gamepad2" className="mx-auto text-primary mb-2" size={32} />
                    <p className="text-2xl font-bold text-foreground">3500+</p>
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
                    {['Szybkie wypłaty', 'Obsługa 24/7', 'Aplikacja mobilna', 'Live Casino'].map((feature, i) => (
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
                      Vavada kasyno online – opinie graczy i bonusy w Polsce
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4 text-foreground/80 leading-relaxed">
                      <p className="text-lg">
                        Vavada to międzynarodowe kasyno online, które od kilku lat przyciąga graczy z różnych krajów – w tym z Polski. 
                        Platforma działa na licencji Curaçao i oferuje szeroki katalog gier od uznanych dostawców. <strong className="text-primary">Vavada online</strong> jest 
                        dostępne bez konieczności instalowania dodatkowego oprogramowania – wystarczy przeglądarka i połączenie z internetem.
                      </p>
                      <p className="text-lg">
                        <strong className="text-primary">Vavada casino w Polsce</strong> cieszy się rosnącym zainteresowaniem przede wszystkim wśród osób, które szukają prostej 
                        rejestracji, uczciwych warunków bonusowych i szybkich wypłat. Serwis jest w pełni przetłumaczony na język polski, co ułatwia 
                        nawigację i kontakt z obsługą. Platforma sprawdzi się zarówno dla początkujących, jak i dla bardziej doświadczonych graczy, 
                        którzy cenią sobie przejrzystość zasad.
                      </p>
                    </div>

                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="UserPlus" className="text-primary" size={28} />
                        Rejestracja i logowanie w Vavada
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Edit" className="text-primary" size={22} />
                            Jak założyć konto
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            Założenie konta w Vavada zajmuje dosłownie minutę. Rejestracja wymaga podania adresu e-mail i utworzenia 
                            hasła – nie trzeba od razu przesyłać dokumentów. Weryfikacja tożsamości następuje dopiero przy pierwszej 
                            wypłacie, co jest standardową praktyką w branży.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Lock" className="text-primary" size={22} />
                            Logowanie i bezpieczeństwo
                          </h3>
                          <p className="text-foreground/80 leading-relaxed mb-3">
                            Po rejestracji <strong className="text-primary">logowanie w Vavada</strong> odbywa się za pomocą tych samych danych. Warto od razu włączyć 
                            uwierzytelnianie dwuskładnikowe – platforma daje taką możliwość i jest to najskuteczniejszy sposób na 
                            zabezpieczenie konta. W przypadku zapomnienia hasła procedura odzyskiwania działa sprawnie przez e-mail.
                          </p>
                          <div className="bg-muted/50 rounded-lg p-4">
                            <div className="flex items-start gap-3">
                              <Icon name="AlertCircle" className="text-primary flex-shrink-0 mt-1" size={20} />
                              <p className="text-sm text-foreground/70">
                                Kilka osób na forach wspominało o sporadycznych problemach z logowaniem, które najczęściej wynikały 
                                z blokad dostawców internetowych, a nie z samej platformy. W takiej sytuacji warto skorzystać z 
                                aktualnego linku do strony – o tym więcej w dalszej części tekstu.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="Gift" className="text-primary" size={28} />
                        Bonusy w Vavada – kody promocyjne i darmowe spiny
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Sparkles" className="text-primary" size={22} />
                            Bonus powitalny i warunki obrotu
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            System bonusowy w Vavada jest dość rozbudowany i regularnie aktualizowany. Nowi gracze mogą liczyć na 
                            <strong className="text-primary"> bonus na start</strong>, który obejmuje dodatkowe środki na grę oraz pakiet darmowych spinów. Warunki obrotu są 
                            jasno opisane w regulaminie – najczęściej wynoszą x30 lub x35, co w tej branży mieści się w normie.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Ticket" className="text-primary" size={22} />
                            Kody promocyjne i bonus bez depozytu
                          </h3>
                          <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                              Warto sprawdzać dostępność <strong className="text-primary">kodów promocyjnych</strong> – Vavada publikuje je na swoich kanałach społecznościowych 
                              i w newsletterze. Aktywny <strong className="text-primary">kod bonusowy</strong> można wpisać podczas rejestracji lub w ustawieniach profilu. 
                              Kody bonusowe dają dostęp do dodatkowych spinów lub zwiększają wartość depozytu.
                            </p>
                            <p className="text-foreground/80 leading-relaxed">
                              Na szczególną uwagę zasługuje <strong className="text-primary">bonus bez depozytu</strong> – nie każde kasyno go oferuje. W Vavada pojawia się 
                              on okresowo i pozwala przetestować platformę bez angażowania własnych środków. <strong className="text-primary">Darmowe spiny</strong> z kolei 
                              są przypisane do konkretnych automatów, co warto sprawdzić przed aktywacją.
                            </p>
                            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-l-4 border-primary rounded-lg p-4">
                              <div className="flex items-start gap-3">
                                <Icon name="Lightbulb" className="text-primary flex-shrink-0 mt-1" size={20} />
                                <p className="text-sm text-foreground/80">
                                  <strong className="text-primary">Praktyczna rada:</strong> przed aktywacją jakiegokolwiek bonusu warto przeczytać warunki 
                                  obrotu do końca. Nie każdy bonus opłaca się aktywować – czasem lepiej wpłacić środki bez promocji i grać bez 
                                  ograniczeń dotyczących wypłat.
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
                        Gry hazardowe i turnieje w Vavada
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Dices" className="text-primary" size={22} />
                            Automaty i live casino
                          </h3>
                          <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                              Katalog gier w Vavada obejmuje kilka tysięcy pozycji od dostawców takich jak <strong className="text-primary">Pragmatic Play</strong>, 
                              <strong className="text-primary"> Play'n GO</strong>, <strong className="text-primary">Evolution Gaming</strong> czy <strong className="text-primary">NetEnt</strong>. 
                              Dominują automaty – od klasycznych trójbębnowych po rozbudowane sloty z mechanikami megaways i bonus buy.
                            </p>
                            <p className="text-foreground/80 leading-relaxed">
                              Sekcja <strong className="text-primary">live casino</strong> obejmuje ruletkę, blackjacka, baccarata i kilkadziesiąt wariantów game show. 
                              Transmisje prowadzone są w czasie rzeczywistym, a jakość obrazu jest stabilna nawet na słabszym łączu.
                            </p>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Trophy" className="text-primary" size={22} />
                            Turnieje i rankingi
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            Osobny element to <strong className="text-primary">turnieje</strong>. Vavada organizuje je regularnie – zarówno dzienne, jak i tygodniowe. 
                            Udział jest zazwyczaj automatyczny po spełnieniu minimalnych warunków. Pule nagród potrafią sięgać kilkudziesięciu 
                            tysięcy euro, a opinie graczy o turniejach są przeważnie pozytywne – przede wszystkim ze względu na uczciwy 
                            system punktacji i terminowe wypłaty nagród.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="DollarSign" className="text-primary" size={28} />
                        Wypłaty w Vavada – opinie i doświadczenia graczy
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Zap" className="text-primary" size={22} />
                            Szybkość i metody płatności
                          </h3>
                          <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                              To jeden z najczęściej komentowanych tematów na forach. <strong className="text-primary">Wypłaty w Vavada</strong> według opinii graczy 
                              realizowane są stosunkowo szybko – przelewy na portfele elektroniczne przychodzą zwykle w ciągu kilku godzin, 
                              a na kartę bankową – do trzech dni roboczych.
                            </p>
                            <p className="text-foreground/80 leading-relaxed">
                              Dostępne <strong className="text-primary">metody płatności</strong> obejmują karty Visa i Mastercard, przelewy bankowe oraz popularne portfele 
                              elektroniczne. Minimalna kwota wypłaty nie jest wygórowana, co doceniają gracze stawiający mniejsze stawki.
                            </p>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="ShieldCheck" className="text-primary" size={22} />
                            Weryfikacja i zaufanie graczy
                          </h3>
                          <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                              Warto wspomnieć, że pierwsza wypłata wymaga weryfikacji dokumentów. Proces KYC obejmuje przesłanie skanu 
                              dowodu tożsamości i potwierdzenie metody płatności. Według opinii użytkowników weryfikacja trwa od kilku 
                              godzin do jednego dnia roboczego. Po jej zakończeniu kolejne wypłaty przebiegają znacznie szybciej.
                            </p>
                            <div className="bg-gradient-to-r from-green-500/10 to-green-500/5 border-l-4 border-green-500 rounded-lg p-4">
                              <div className="flex items-start gap-3">
                                <Icon name="CheckCircle2" className="text-green-500 flex-shrink-0 mt-1" size={20} />
                                <div>
                                  <p className="text-sm font-semibold text-foreground mb-1">Plusy wypłat:</p>
                                  <ul className="text-sm text-foreground/70 space-y-1">
                                    <li>• Szybka realizacja przelewów elektronicznych (kilka godzin)</li>
                                    <li>• Niska minimalna kwota wypłaty</li>
                                    <li>• Sprawna weryfikacja dokumentów</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="Smartphone" className="text-primary" size={28} />
                        Aplikacja Vavada – wersja mobilna i app download
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Download" className="text-primary" size={22} />
                            Pobieranie aplikacji
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            Vavada nie posiada natywnej aplikacji w Google Play ani App Store – wynika to z polityki obu sklepów wobec 
                            gier hazardowych. Dostępna jest jednak <strong className="text-primary">aplikacja w formacie APK</strong> do pobrania bezpośrednio ze strony kasyna. 
                            Instalacja wymaga zezwolenia na instalację z nieznanych źródeł w ustawieniach telefonu.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Globe" className="text-primary" size={22} />
                            Mobilna wersja w przeglądarce
                          </h3>
                          <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                              Alternatywą jest <strong className="text-primary">mobilna wersja strony</strong>, która działa w przeglądarce smartfona bez konieczności 
                              pobierania czegokolwiek. Interfejs jest responsywny, gry ładują się płynnie, a wszystkie funkcje – od rejestracji 
                              po wypłaty – są dostępne tak samo jak na komputerze.
                            </p>
                            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-l-4 border-primary rounded-lg p-4">
                              <div className="flex items-start gap-3">
                                <Icon name="Lightbulb" className="text-primary flex-shrink-0 mt-1" size={20} />
                                <p className="text-sm text-foreground/80">
                                  <strong className="text-primary">Praktyczna wskazówka:</strong> Z praktycznego punktu widzenia wersja przeglądarkowa w 
                                  zupełności wystarcza. Można ją dodać jako skrót na ekranie głównym telefonu, co daje efekt zbliżony do 
                                  natywnej aplikacji.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="Link" className="text-primary" size={28} />
                        Oficjalna strona Vavada i działający link w Polsce
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Eye" className="text-primary" size={22} />
                            Jak uzyskać dostęp
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            Dostęp do <strong className="text-primary">oficjalnej strony Vavada</strong> bywa ograniczany przez polskich dostawców internetu. 
                            To dość częsta sytuacja, która nie oznacza, że platforma przestała działać – po prostu główny adres może być 
                            zablokowany na poziomie DNS.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Shield" className="text-primary" size={22} />
                            Mirrory i bezpieczeństwo
                          </h3>
                          <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                              W takim przypadku pomocne są tzw. <strong className="text-primary">mirrory</strong>, czyli alternatywne adresy prowadzące do tej samej 
                              platformy. <strong className="text-primary">Działający link do Vavada w Polsce</strong> najłatwiej znaleźć na oficjalnych kanałach kasyna 
                              w mediach społecznościowych lub w newsletterze. Ważne, aby unikać linków z nieznanych źródeł – ryzyko 
                              trafienia na fałszywą stronę jest realne.
                            </p>
                            <div className="bg-gradient-to-r from-amber-500/10 to-amber-500/5 border-l-4 border-amber-500 rounded-lg p-4">
                              <div className="flex items-start gap-3">
                                <Icon name="AlertTriangle" className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                                <p className="text-sm text-foreground/80">
                                  <strong className="text-amber-600">Ważne:</strong> Przed zalogowaniem warto sprawdzić, czy adres w pasku przeglądarki 
                                  zawiera certyfikat SSL (kłódka obok adresu). To najprostszy sposób weryfikacji, czy strona jest autentyczna.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="MessageCircle" className="text-primary" size={28} />
                        Kontakt z Vavada i obsługa klienta
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="MessagesSquare" className="text-primary" size={22} />
                            Czat na żywo i e-mail
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            <strong className="text-primary">Kontakt z Vavada</strong> jest możliwy przez czat na żywo, który działa całą dobę, oraz przez e-mail. 
                            Czat to zdecydowanie najszybsza opcja – odpowiedź pojawia się zazwyczaj w ciągu kilku minut. Konsultanci komunikują 
                            się po angielsku i rosyjsku; obsługa w języku polskim bywa dostępna, choć nie zawsze.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Star" className="text-primary" size={22} />
                            Jakość obsługi
                          </h3>
                          <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                              E-mail sprawdza się lepiej w przypadku bardziej złożonych spraw, takich jak problemy z weryfikacją czy reklamacje 
                              dotyczące bonusów. Czas odpowiedzi wynosi zwykle do 24 godzin.
                            </p>
                            <p className="text-foreground/80 leading-relaxed">
                              Ogólna jakość obsługi jest oceniana przez graczy jako przyzwoita. Większość standardowych kwestii – zmiana danych, 
                              pytania o bonusy, status wypłaty – rozwiązywana jest podczas jednej rozmowy na czacie.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

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
                          <span>Warunek obrotu: x40</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Dot" className="text-primary flex-shrink-0 mt-1" size={16} />
                          <span>Czas wypłaty portfele: kilka godzin</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Dot" className="text-primary flex-shrink-0 mt-1" size={16} />
                          <span>Czas wypłaty karty: do 3 dni roboczych</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Dot" className="text-primary flex-shrink-0 mt-1" size={16} />
                          <span>Obsługa klienta: 24/7 czat na żywo</span>
                        </li>
                      </ul>
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
                    Zagraj w Vavada Teraz
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
              <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-lg">
                <Icon name="Crown" className="text-primary-foreground" size={24} />
              </div>
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