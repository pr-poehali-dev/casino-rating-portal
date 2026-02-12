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

export default function Booi() {
  const navigate = useNavigate();
  const casinoUrl = 'https://booi-promo.com/alt/booipl/pl/sign-up?089c7e6f2881071efd3f2ff31a34293d';

  useEffect(() => {
    document.title = 'Booi kasyno online – opinie, bonusy i rejestracja 2026';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Booi kasyno online w Polsce – sprawdź opinie graczy, bonus bez depozytu, darmowe spiny i szybkie wypłaty. Rejestracja, kody bonusowe i aplikacja mobilna.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Booi kasyno online w Polsce – sprawdź opinie graczy, bonus bez depozytu, darmowe spiny i szybkie wypłaty. Rejestracja, kody bonusowe i aplikacja mobilna.';
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
                <img 
                  src="https://cdn.poehali.dev/projects/c2933cfb-9ddd-413a-a6ef-7b99d3f5e883/bucket/a7cfc0ea-3593-4a47-a978-d8ffc6530c98.png"
                  alt="BKR Logo"
                  className="relative w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-300"
                />
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
                      src="https://cdn.poehali.dev/projects/c2933cfb-9ddd-413a-a6ef-7b99d3f5e883/bucket/24ca2f82-0a85-4ae2-a2ef-623a8a58d022.png"
                      alt="Booi Casino"
                      className="relative w-full h-full object-contain rounded-2xl bg-card p-4"
                    />
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div>
                      <CardTitle className="text-4xl mb-2">Booi Casino</CardTitle>
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
                          <p className="text-xl font-bold text-primary">225% do 1500$ + 100 FS</p>
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
                  Graj Teraz w Booi
                </Button>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-muted/50 rounded-lg p-4 text-center">
                    <Icon name="Gamepad2" className="mx-auto text-primary mb-2" size={32} />
                    <p className="text-2xl font-bold">3200+</p>
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
                      Booi kasyno online – opinie, bonusy i rejestracja w Polsce
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <p className="text-foreground/80 leading-relaxed">
                        Booi to kasyno online, które od kilku lat buduje swoją pozycję wśród graczy z Europy Środkowo-Wschodniej. W Polsce platforma zyskała rozpoznawalność głównie dzięki rozbudowanemu systemowi bonusów i szerokiej ofercie automatów. Ale czy <strong className="text-primary">booi casino opinie</strong> w sieci pokrywają się z rzeczywistością?
                      </p>
                      <p className="text-foreground/80 leading-relaxed">
                        W tym przeglądzie sprawdzam, jak działa <strong className="text-primary">booi online</strong> na co dzień – od rejestracji, przez wpłaty i wypłaty, po jakość obsługi klienta. Jeśli zastanawiasz się, czy <strong className="text-primary">booi casino polska</strong> to opcja warta uwagi w 2026 roku, tutaj znajdziesz konkretne informacje, a nie marketingowe hasła.
                      </p>
                    </div>

                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="UserPlus" className="text-primary" size={28} />
                        Rejestracja i logowanie w Booi
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Edit" className="text-primary" size={22} />
                            Jak założyć konto w Booi?
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            Proces zakładania konta jest prosty i zajmuje dosłownie kilka minut. Booi rejestracja wymaga podania adresu e-mail, hasła, waluty konta oraz kraju zamieszkania. Po wypełnieniu formularza na skrzynkę przychodzi link aktywacyjny – dopiero po jego kliknięciu konto staje się w pełni funkcjonalne.
                          </p>
                          <p className="text-foreground/80 leading-relaxed mt-4">
                            Warto od razu przejść weryfikację tożsamości (KYC). Choć nie jest wymagana natychmiast, jej brak może opóźnić pierwszą wypłatę. Wystarczy skan dowodu osobistego lub paszportu oraz potwierdzenie adresu zamieszkania.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Lock" className="text-primary" size={22} />
                            Logowanie i problemy z dostępem
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            Booi logowanie odbywa się standardowo – przez e-mail i hasło. W przypadku problemów z dostępem platforma oferuje szybkie resetowanie hasła. Kilku użytkowników na forach wspomina o sporadycznych trudnościach z logowaniem po zmianie adresu IP, co może być związane z systemem bezpieczeństwa blokującym podejrzane lokalizacje. W takiej sytuacji wystarczy kontakt z supportem.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="Gift" className="text-primary" size={28} />
                        Bonusy w Booi – kod promocyjny i oferta na start
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Sparkles" className="text-primary" size={22} />
                            Bonus powitalny i darmowe spiny
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            System promocji w Booi jest rozbudowany, choć wymaga uważnego czytania regulaminu. <strong className="text-primary">Booi bonus na start</strong> to imponujące <strong className="text-primary">225% do 1500$ + 100 darmowych spinów</strong> – to jedna z najlepszych ofert powitalnych na rynku w 2026 roku.
                          </p>
                          <p className="text-foreground/80 leading-relaxed mt-4">
                            Czy istnieje <strong className="text-primary">booi bonus bez depozytu</strong>? Na ten moment kasyno nie oferuje klasycznego no deposit bonus w formie gotówki. Pojawiają się natomiast okresowe promocje z <strong className="text-primary">booi darmowe spiny</strong> za samą rejestrację – warto śledzić aktualne oferty na stronie, bo zmieniają się co kilka tygodni.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Tag" className="text-primary" size={22} />
                            Kody promocyjne i warunki obrotu
                          </h3>
                          <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                              Jeśli chodzi o <strong className="text-primary">booi kod promocyjny</strong>, kasyno udostępnia je w ramach kampanii partnerskich. <strong className="text-primary">Booi kasyno kod bonusowy</strong> można znaleźć na stronach afiliacyjnych lub w newsletterze po rejestracji. Wpisuje się go w odpowiednim polu podczas wpłaty. <strong className="text-primary">Booi kody bonusowe</strong> nie sumują się – w jednym momencie aktywna może być tylko jedna oferta promocyjna.
                            </p>
                            <p className="text-foreground/80 leading-relaxed">
                              Warunki obrotu bonusem to najczęściej x35 kwoty bonusu. To wynik zbliżony do średniej rynkowej. Ważne: nie wszystkie gry liczą się jednakowo do obrotu. Automaty zaliczają 100%, ale gry stołowe i live casino – zazwyczaj tylko 10-15%. Czas na spełnienie warunków to z reguły 7 dni.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="Gamepad2" className="text-primary" size={28} />
                        Gry hazardowe w Booi
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Dices" className="text-primary" size={22} />
                            Automaty i dostawcy gier
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            Katalog gier to zdecydowanie mocna strona tej platformy. <strong className="text-primary">Booi gry hazardowe</strong> obejmują kilka tysięcy tytułów od kilkudziesięciu dostawców. Wśród producentów znajdziesz zarówno uznane studia – Pragmatic Play, Play'n GO, Push Gaming, Hacksaw Gaming – jak i mniejsze, niszowe firmy, które dostarczają świeże tytuły.
                          </p>
                          <p className="text-foreground/80 leading-relaxed mt-4">
                            Automaty stanowią największą część oferty. Są podzielone na kategorie: popularne, nowe, megaways, bonus buy, jackpoty. Filtrowanie działa sprawnie, można też wyszukiwać po nazwie lub dostawcy.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Video" className="text-primary" size={22} />
                            Live casino
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            Sekcja live casino opiera się głównie na produkcjach Evolution i Pragmatic Play Live. Do dyspozycji są klasyczne stoły z blackjackiem, ruletką, baccaratem, a także game show – typu Crazy Time, Monopoly Live czy Sweet Bonanza Candyland. Jakość transmisji jest stabilna, choć w godzinach szczytu zdarzają się krótkie opóźnienia.
                          </p>
                          <p className="text-foreground/80 leading-relaxed mt-4">
                            Brakuje natomiast rozbudowanej sekcji z zakładami sportowymi – Booi skupia się przede wszystkim na grach kasynowych.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="Wallet" className="text-primary" size={28} />
                        Wypłaty w Booi – opinie użytkowników
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="CreditCard" className="text-primary" size={22} />
                            Dostępne metody płatności
                          </h3>
                          <p className="text-foreground/80 leading-relaxed mb-4">
                            Temat finansów to zawsze kluczowa kwestia. <strong className="text-primary">Booi wypłaty opinie</strong> w sieci są mieszane, ale przeważają pozytywne głosy. Kasyno obsługuje kilka metod płatności popularnych w Polsce:
                          </p>
                          <ul className="space-y-2 text-foreground/80">
                            <li className="flex items-start gap-2">
                              <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                              <span>Karty Visa i Mastercard</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                              <span>Portfele elektroniczne (Skrill, Neteller, ecoPayz)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                              <span>Kryptowaluty (Bitcoin, Ethereum, Litecoin, USDT)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                              <span>Przelewy bankowe</span>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="MessageSquare" className="text-primary" size={22} />
                            Czas realizacji i doświadczenia graczy
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            Minimalna kwota wypłaty zależy od metody – dla portfeli elektronicznych to zazwyczaj około 20 EUR, dla kryptowalut bywa niższa. Czas realizacji wypłat wynosi od kilku godzin do 3 dni roboczych. Kryptowaluty przetwarzane są najszybciej – często w ciągu godziny po zatwierdzeniu.
                          </p>
                          <p className="text-foreground/80 leading-relaxed mt-4">
                            <strong className="text-primary">Booi casino opinie</strong> dotyczące wypłat wskazują, że pierwsza transakcja trwa dłużej ze względu na weryfikację dokumentów. Kolejne przechodzą sprawniej. Sporadycznie pojawiają się skargi na opóźnienia przy większych kwotach, ale nie odbiegają one od standardów branży.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="Smartphone" className="text-primary" size={28} />
                        Booi casino mobile – aplikacja i wersja mobilna
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Globe" className="text-primary" size={22} />
                            Wersja przeglądarkowa na telefonie
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            Coraz więcej graczy korzysta z kasyna na telefonie, dlatego wersja mobilna ma duże znaczenie. <strong className="text-primary">Booi casino mobile</strong> działa przez przeglądarkę – strona jest w pełni responsywna i dostosowuje się do ekranów smartfonów i tabletów. Ładowanie gier na urządzeniach mobilnych przebiega płynnie, choć starsze modele telefonów mogą odczuwać lekkie spowolnienia przy bardziej rozbudowanych slotach.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Download" className="text-primary" size={22} />
                            Aplikacja na Androida i iOS
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            Czy istnieje dedykowana <strong className="text-primary">booi aplikacja</strong>? Kasyno udostępnia plik APK do pobrania na urządzenia z Androidem. <strong className="text-primary">Booi app download</strong> jest dostępny bezpośrednio ze strony kasyna – nie znajdziesz go w Google Play ze względu na politykę sklepu wobec aplikacji hazardowych. Na iOS brak natywnej aplikacji, ale wersja przeglądarkowa na Safari działa bez zastrzeżeń. Można ją dodać do ekranu głównego jako skrót, co w praktyce daje wrażenie korzystania z osobnej apki.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="Globe" className="text-primary" size={28} />
                        Oficjalna strona Booi i działający link
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Search" className="text-primary" size={22} />
                            Jak znaleźć aktualny adres?
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            Znalezienie właściwego adresu kasyna nie zawsze jest oczywiste. <strong className="text-primary">Booi oficjalna strona</strong> zmienia domenę – to praktyka stosowana przez kasyna działające na rynkach z ograniczeniami regulacyjnymi. Dlatego warto korzystać wyłącznie z zaufanych źródeł, żeby trafić na <strong className="text-primary">booi działający link</strong>.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Link" className="text-primary" size={22} />
                            Mirror – co to jest i czy jest bezpieczny?
                          </h3>
                          <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                              Czym jest <strong className="text-primary">booi mirror polska</strong>? To po prostu alternatywny adres prowadzący do tej samej platformy, z tym samym kontem, saldem i ofertą. Mirrory są tworzone, by zapewnić ciągłość dostępu, gdy główna domena jest chwilowo niedostępna. Z perspektywy bezpieczeństwa – mirror prowadzony przez operatora jest tak samo bezpieczny jak strona główna. Problem pojawia się, gdy ktoś tworzy fałszywe kopie witryny. Dlatego nigdy nie loguj się przez linki z nieznanych źródeł i zawsze sprawdzaj certyfikat SSL w przeglądarce.
                            </p>
                            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-l-4 border-primary rounded-lg p-4">
                              <div className="flex items-start gap-3">
                                <Icon name="ShieldCheck" className="text-primary flex-shrink-0 mt-1" size={20} />
                                <p className="text-sm text-foreground/80">
                                  <strong className="text-primary">Bezpieczeństwo przede wszystkim:</strong> zawsze sprawdzaj, czy strona ma aktywne szyfrowanie HTTPS (zielona kłódka w pasku adresu). Unikaj linków z niezaufanych źródeł – lepiej poczekać na oficjalny newsletter niż ryzykować.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="Headphones" className="text-primary" size={28} />
                        Kontakt z Booi
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="MessageCircle" className="text-primary" size={22} />
                            Czat na żywo i e-mail
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            <strong className="text-primary">Booi kontakt</strong> z obsługą klienta jest możliwy przede wszystkim przez czat na żywo dostępny 24/7. To najszybsza droga – odpowiedzi przychodzą zazwyczaj w ciągu kilku minut. Jakość wsparcia zależy od konsultanta, ale większość prostych spraw – pytania o bonusy, status wypłaty, weryfikacja – jest rozwiązywana od ręki.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Mail" className="text-primary" size={22} />
                            Inne kanały wsparcia
                          </h3>
                          <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                              Alternatywnie można napisać na adres e-mail podany w zakładce „Kontakt". Czas odpowiedzi mailowej to od kilku godzin do jednego dnia roboczego. Brakuje wsparcia telefonicznego i dedykowanej sekcji FAQ w języku polskim, co jest pewnym minusem. Czat obsługuje jednak język polski, co dla wielu graczy jest wystarczające.
                            </p>
                            <div className="bg-muted/50 rounded-lg p-4">
                              <div className="flex items-start gap-3">
                                <Icon name="Info" className="text-primary flex-shrink-0 mt-1" size={20} />
                                <p className="text-sm text-foreground/70">
                                  Jeśli nie mówisz biegle po angielsku, możesz skorzystać z narzędzi do tłumaczenia online – konsultanci są cierpliwi i pomagają rozwiązać problemy nawet w przypadku barier językowych.
                                </p>
                              </div>
                            </div>
                          </div>
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
                          <span>Duży wybór gier</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                          <span>Wsparcie 24/7</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                          <span>Szybkie wypłaty</span>
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