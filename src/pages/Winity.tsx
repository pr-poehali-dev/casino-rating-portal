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

export default function Winity() {
  const navigate = useNavigate();
  const casinoUrl = 'https://winity.one/alt/win_girl_ru/?be6866f5f4da4c4e8f73ba3f9d913383';

  useEffect(() => {
    document.title = 'Winity kasyno online – opinie i bonus na start 2026';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Winity kasyno online w Polsce – sprawdź opinie graczy, bonus bez depozytu, darmowe spiny i szybkie wypłaty w 2026 roku.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Winity kasyno online w Polsce – sprawdź opinie graczy, bonus bez depozytu, darmowe spiny i szybkie wypłaty w 2026 roku.';
      document.head.appendChild(meta);
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
                      src="https://cdn.poehali.dev/projects/c2933cfb-9ddd-413a-a6ef-7b99d3f5e883/bucket/8da4a15a-ccc7-4f8d-9df7-c1472090be1f.jpg"
                      alt="Winity Casino"
                      className="relative w-full h-full object-contain rounded-2xl bg-card p-4"
                    />
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div>
                      <CardTitle className="text-4xl mb-2">Winity Casino</CardTitle>
                      <div className="flex items-center gap-4 flex-wrap">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">Ocena:</span>
                          <StarRating rating={4.4} size={20} />
                          <span className="text-lg font-semibold text-primary">4.4/5</span>
                        </div>
                        <Badge variant="outline" className="border-primary/30 text-lg px-3 py-1">
                          <Icon name="Trophy" className="mr-1" size={16} />
                          8.6/10
                        </Badge>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-l-4 border-primary rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Icon name="Gift" className="text-primary mt-1" size={24} />
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Bonus Powitalny</p>
                          <p className="text-xl font-bold text-primary">Do 2000 PLN + 50 Darmowych Spinów</p>
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
                  Graj Teraz w Winity
                </Button>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-muted/50 rounded-lg p-4 text-center">
                    <Icon name="Gamepad2" className="mx-auto text-primary mb-2" size={32} />
                    <p className="text-2xl font-bold">2200+</p>
                    <p className="text-sm text-muted-foreground">Gier</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4 text-center">
                    <Icon name="Zap" className="mx-auto text-primary mb-2" size={32} />
                    <p className="text-2xl font-bold">24/7</p>
                    <p className="text-sm text-muted-foreground">Wsparcie</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4 text-center">
                    <Icon name="CreditCard" className="mx-auto text-primary mb-2" size={32} />
                    <p className="text-2xl font-bold">Szybkie</p>
                    <p className="text-sm text-muted-foreground">Wypłaty</p>
                  </div>
                </div>

                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold">
                      Winity kasyno online – opinie, bonusy i rejestracja w Polsce
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <p className="text-foreground/80 leading-relaxed">
                        Winity to platforma hazardowa, która w ostatnich miesiącach zyskuje coraz większe zainteresowanie wśród polskich graczy. Kasyno działa w pełni online, co oznacza, że dostęp do gier jest możliwy z dowolnego miejsca – wystarczy przeglądarka i połączenie z internetem. W tym niezależnym przeglądzie sprawdzamy, jak faktycznie wygląda oferta <strong className="text-primary">Winity casino polska</strong>, co mówią o nim użytkownicy i czy warto zakładać tam konto.
                      </p>
                      <p className="text-foreground/80 leading-relaxed">
                        Platforma <strong className="text-primary">Winity online</strong> oferuje automaty, gry stołowe oraz sekcję z krupierami na żywo. Zanim jednak przejdziemy do szczegółów, warto odpowiedzieć na najważniejsze pytanie – kwestię legalności.
                      </p>
                    </div>

                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="ShieldCheck" className="text-primary" size={28} />
                        Winity – legalne czy nie w Polsce?
                      </h2>
                      
                      <div className="space-y-6">
                        <p className="text-foreground/80 leading-relaxed">
                          To pytanie pojawia się najczęściej i słusznie. Polskie prawo hazardowe jest restrykcyjne, a jedynym legalnym operatorem online pozostaje państwowy monopolista. Serwisy zagraniczne – nawet te posiadające licencje międzynarodowe – formalnie nie mają zezwolenia Ministerstwa Finansów na działalność w Polsce.
                        </p>
                        <p className="text-foreground/80 leading-relaxed">
                          Winity działa na podstawie licencji wydanej przez zagranicznego regulatora, co oznacza, że kasyno podlega kontroli, ale nie polskiej. Dla użytkowników kluczowe jest to, że platforma stosuje szyfrowanie SSL, a dane osobowe są chronione zgodnie z międzynarodowymi standardami. Pytanie <strong className="text-primary">winity legalne czy nie</strong> nie ma jednoznacznej odpowiedzi – formalnie nie posiada polskiej koncesji, ale spełnia wymogi bezpieczeństwa narzucone przez swojego licencjodawcę.
                        </p>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Lock" className="text-primary" size={22} />
                            Bezpieczeństwo danych i transakcji
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            Serwis wykorzystuje protokół szyfrowania 256-bit SSL. Oznacza to, że zarówno dane rejestracyjne, jak i informacje finansowe są chronione na poziomie porównywalnym z bankowością elektroniczną. Generatory liczb losowych (RNG) w grach są certyfikowane przez niezależne laboratoria.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="UserPlus" className="text-primary" size={28} />
                        Rejestracja i logowanie w Winity
                      </h2>
                      
                      <div className="space-y-6">
                        <p className="text-foreground/80 leading-relaxed">
                          Proces zakładania konta jest prosty i zajmuje dosłownie kilka minut. Po wejściu na stronę wystarczy kliknąć przycisk rejestracji i uzupełnić formularz.
                        </p>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Edit" className="text-primary" size={22} />
                            Jakie dane są wymagane?
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            Podczas rejestracji Winity prosi o podanie adresu e-mail, hasła, waluty konta oraz podstawowych danych osobowych – imienia, nazwiska i daty urodzenia. W niektórych przypadkach konieczna jest weryfikacja tożsamości przed pierwszą wypłatą, co wymaga przesłania skanu dokumentu.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Lock" className="text-primary" size={22} />
                            Logowanie do konta
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            <strong className="text-primary">Winity logowanie</strong> odbywa się standardowo – za pomocą adresu e-mail i hasła. Platforma umożliwia także odzyskanie hasła przez link wysyłany na skrzynkę pocztową. Warto ustawić silne hasło i nie udostępniać danych logowania osobom trzecim.
                          </p>
                          <p className="text-foreground/80 leading-relaxed mt-4">
                            Cała procedura <strong className="text-primary">winity rejestracja</strong> jest intuicyjna i nie wymaga instalowania dodatkowego oprogramowania.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="Gift" className="text-primary" size={28} />
                        Bonusy w Winity – kod promocyjny i oferta na start
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Sparkles" className="text-primary" size={22} />
                            Bonus powitalny i warunki
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            Nowi gracze mogą liczyć na <strong className="text-primary">Winity bonus na start</strong>, który obejmuje dopasowanie pierwszego depozytu oraz pulę darmowych spinów. Szczegóły oferty powitalnej mogą się zmieniać w zależności od aktualnej promocji, dlatego warto sprawdzać warunki bezpośrednio na stronie kasyna.
                          </p>
                          <p className="text-foreground/80 leading-relaxed mt-4">
                            Każdy bonus podlega wymogowi obrotu – najczęściej jest to wielokrotność kwoty bonusu, którą trzeba rozegrać, zanim możliwa będzie wypłata wygranych. Warunki obrotu w Winity są na poziomie zbliżonym do średniej rynkowej, choć zawsze warto przeczytać regulamin konkretnej promocji.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Tag" className="text-primary" size={22} />
                            Kody promocyjne i bonusy bez depozytu
                          </h3>
                          <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                              Gracze często pytają o <strong className="text-primary">Winity kod promocyjny</strong> i możliwość aktywowania dodatkowych nagród. Kody bonusowe pojawiają się okresowo – mogą być dystrybuowane przez partnerów kasyna, w newsletterach lub w ramach specjalnych akcji sezonowych. Aktualne <strong className="text-primary">Winity kody promocyjne 2026</strong> najlepiej śledzić na oficjalnych kanałach platformy.
                            </p>
                            <p className="text-foreground/80 leading-relaxed">
                              Jeśli chodzi o <strong className="text-primary">Winity bonus bez depozytu</strong> – tego typu oferta nie jest dostępna na stałe, ale pojawia się w ramach wybranych kampanii. Podobnie <strong className="text-primary">Winity darmowe spiny</strong> są przyznawane zarówno jako część pakietu powitalnego, jak i w cotygodniowych promocjach dla aktywnych użytkowników.
                            </p>
                            <p className="text-foreground/80 leading-relaxed">
                              Warto pamiętać, że <strong className="text-primary">Winity kasyno kod bonusowy</strong> należy wpisać w odpowiednim polu podczas rejestracji lub wpłaty – w przeciwnym razie bonus może nie zostać naliczony. Aktualne <strong className="text-primary">Winity kody bonusowe</strong> są z reguły podawane wraz z instrukcją aktywacji.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="Gamepad2" className="text-primary" size={28} />
                        Gry hazardowe w Winity
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Dices" className="text-primary" size={22} />
                            Automaty i dostawcy gier
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            Katalog <strong className="text-primary">Winity gry hazardowe</strong> obejmuje ponad 2000 tytułów od znanych dostawców oprogramowania. Wśród producentów znajdziemy takie marki jak Pragmatic Play, NetEnt, Play'n GO, Quickspin czy Yggdrasil. Dzięki temu wybór slotów jest naprawdę szeroki – od klasycznych automatów po nowoczesne sloty z mechanikami Megaways i jackpotami.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Video" className="text-primary" size={22} />
                            Kasyno na żywo
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            Sekcja live casino w Winity pozwala grać z prawdziwymi krupierami w blackjacka, ruletkę, baccarata i różne odmiany pokera. Transmisje realizowane są w jakości HD, a gry pochodzą głównie od Evolution i Pragmatic Play Live. To dobra opcja dla tych, którzy szukają wrażeń zbliżonych do prawdziwego kasyna stacjonarnego.
                          </p>
                          <p className="text-foreground/80 leading-relaxed mt-4">
                            Platforma umożliwia filtrowanie gier według kategorii, dostawcy i popularności, co ułatwia odnalezienie konkretnego tytułu.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="Wallet" className="text-primary" size={28} />
                        Wypłaty w Winity – opinie użytkowników
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="CreditCard" className="text-primary" size={22} />
                            Metody płatności i czas realizacji
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            Kasyno udostępnia kilka metod wpłat i wypłat, w tym karty bankowe, portfele elektroniczne oraz kryptowaluty. Minimalny depozyt jest stosunkowo niski, co obniża barierę wejścia dla nowych graczy.
                          </p>
                          <p className="text-foreground/80 leading-relaxed mt-4">
                            Czas realizacji wypłat zależy od wybranej metody. Portfele elektroniczne i kryptowaluty to zazwyczaj najszybsza opcja – środki pojawiają się w ciągu kilku godzin do jednego dnia roboczego. Przelewy bankowe i karty mogą wymagać od dwóch do pięciu dni roboczych.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="MessageSquare" className="text-primary" size={22} />
                            Co mówią gracze?
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            <strong className="text-primary">Winity wypłaty opinie</strong> są stosunkowo pozytywne, choć platforma jest jeszcze młoda i nie ma tak bogatej historii jak konkurencja. Gracze chwalą prostotę procesu wypłaty oraz przejrzystość warunków bonusowych. Wśród zastrzeżeń pojawiają się uwagi dotyczące procesu weryfikacji – niektórzy użytkownicy wspominają, że przy pierwszej wypłacie konieczne jest przesłanie dokumentów, co wydłuża oczekiwanie.
                          </p>
                          <p className="text-foreground/80 leading-relaxed mt-4">
                            Ogólnie <strong className="text-primary">Winity casino opinie</strong> wskazują, że platforma działa stabilnie, a większość problemów rozwiązywana jest przez obsługę klienta w rozsądnym czasie. Jak w przypadku każdego kasyna online, warto zachować ostrożność i grać odpowiedzialnie.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="Smartphone" className="text-primary" size={28} />
                        Aplikacja Winity i wersja mobilna
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Download" className="text-primary" size={22} />
                            Czy jest dedykowana aplikacja?
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            Wielu graczy pyta o to, czy istnieje <strong className="text-primary">Winity aplikacja</strong> do pobrania na telefon. Na ten moment kasyno nie oferuje natywnej aplikacji w Google Play ani App Store. Jednak <strong className="text-primary">Winity app download</strong> jest możliwy w formie pliku APK bezpośrednio ze strony kasyna – dotyczy to urządzeń z Androidem.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Globe" className="text-primary" size={22} />
                            Wersja mobilna w przeglądarce
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            Alternatywą jest mobilna wersja strony, która działa w pełni responsywnie na smartfonach i tabletach. Interfejs dostosowuje się do rozmiaru ekranu, a wszystkie funkcje – od rejestracji po wypłaty – są dostępne bez ograniczeń. W praktyce gra przez przeglądarkę mobilną jest wygodna i nie wymaga instalowania niczego dodatkowego.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="Globe" className="text-primary" size={28} />
                        Oficjalna strona Winity i działający link
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Search" className="text-primary" size={22} />
                            Jak znaleźć aktualny adres?
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            <strong className="text-primary">Winity oficjalna strona</strong> może zmieniać adres URL ze względu na ograniczenia regionalne. Dlatego gracze czasem szukają hasła <strong className="text-primary">Winity działający link</strong>, aby dotrzeć do aktualnej wersji serwisu. Najlepszym sposobem jest korzystanie z zakładek w przeglądarce po znalezieniu zweryfikowanego adresu lub subskrypcja newslettera kasyna.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Link" className="text-primary" size={22} />
                            Czym jest mirror?
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            <strong className="text-primary">Winity mirror polska</strong> to tak zwane lustrzane kopie strony, które zawierają identyczną zawartość i funkcjonalność co oryginał, ale działają pod innym adresem. Mirrory służą zapewnieniu ciągłego dostępu do platformy. Korzystając z nich, warto upewnić się, że link pochodzi z oficjalnego źródła – unikniemy w ten sposób stron phishingowych.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="Headphones" className="text-primary" size={28} />
                        Kontakt z Winity
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="MessageCircle" className="text-primary" size={22} />
                            Formy kontaktu i jakość obsługi
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            <strong className="text-primary">Winity kontakt</strong> jest dostępny przede wszystkim poprzez czat na żywo, który działa całodobowo. To najszybszy sposób na uzyskanie pomocy – odpowiedzi pojawiają się zwykle w ciągu kilku minut. Dodatkowo można wysłać wiadomość na adres e-mail podany na stronie kasyna.
                          </p>
                          <p className="text-foreground/80 leading-relaxed mt-4">
                            Obsługa klienta komunikuje się w kilku językach. Jakość wsparcia oceniana jest przez graczy jako przyzwoita – konsultanci potrafią rozwiązać większość typowych problemów związanych z kontem, bonusami czy wypłatami. W przypadku bardziej złożonych spraw czas oczekiwania na odpowiedź mailową wynosi do 24 godzin.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-xl">
                        <Icon name="CheckCircle2" className="text-primary" size={24} />
                        Zalety
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                          <span>Szybka rejestracja</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                          <span>Mobile-first design</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                          <span>Cashback tygodniowy</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-xl">
                        <Icon name="XCircle" className="text-destructive" size={24} />
                        Wady
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Icon name="X" className="text-destructive mt-1 flex-shrink-0" size={16} />
                          <span>Brak oficjalnej licencji w Polsce</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="X" className="text-destructive mt-1 flex-shrink-0" size={16} />
                          <span>Młodsza platforma – mniej opinii</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Button 
                  onClick={() => window.open(casinoUrl, '_blank')}
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-lg py-6"
                >
                  <Icon name="Play" className="mr-2" size={20} />
                  Rozpocznij Grę
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}