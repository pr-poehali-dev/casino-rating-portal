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

export default function PlayFortuna() {
  const navigate = useNavigate();
  const casinoUrl = 'https://fortuna-promo1.net/alt/pf_new_year_new_ru/?ab4caec10f6f2577c5ad134c05b3b019';

  useEffect(() => {
    document.title = 'Play Fortuna kasyno online – opinie, bonusy i rejestracja';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Play Fortuna kasyno online w Polsce – opinie graczy, bonusy, rejestracja i wypłaty.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Play Fortuna kasyno online w Polsce – opinie graczy, bonusy, rejestracja i wypłaty.';
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
                    <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <Icon name="Star" className="text-primary" size={64} />
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div>
                      <CardTitle className="text-4xl mb-2">Play Fortuna Casino</CardTitle>
                      <div className="flex items-center gap-4 flex-wrap">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">Ocena:</span>
                          <StarRating rating={4.5} size={20} />
                          <span className="text-lg font-semibold text-primary">4.5/5</span>
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
                          <p className="text-xl font-bold text-primary">Bonus powitalny dla nowych graczy</p>
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
                  Graj Teraz w Play Fortuna
                </Button>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-muted/50 rounded-lg p-4 text-center">
                    <Icon name="Gamepad2" className="mx-auto text-primary mb-2" size={32} />
                    <p className="text-2xl font-bold">2000+</p>
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
                      PlayFortuna kasyno online – opinie, bonusy i rejestracja w Polsce
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <p className="text-foreground/80 leading-relaxed">
                        PlayFortuna to platforma hazardowa działająca na rynku od 2012 roku, która przez ostatnią dekadę zdążyła zbudować rozpoznawalną markę wśród graczy z Europy Wschodniej i Centralnej. Jako <strong className="text-primary">PlayFortuna online</strong> jest dostępne bez konieczności instalowania dodatkowego oprogramowania – wystarczy przeglądarka i połączenie z internetem.
                      </p>
                      <p className="text-foreground/80 leading-relaxed">
                        <strong className="text-primary">PlayFortuna casino Polska</strong> kieruje swoją ofertę przede wszystkim do osób szukających szerokiego katalogu automatów, regularnych promocji i stosunkowo prostego interfejsu bez zbędnych komplikacji. Platforma sprawdzi się zarówno dla początkujących, jak i dla bardziej doświadczonych graczy, którzy cenią sobie przejrzystość zasad.
                      </p>
                    </div>

                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="UserPlus" className="text-primary" size={28} />
                        Rejestracja i logowanie w PlayFortuna
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Edit" className="text-primary" size={22} />
                            Jak założyć konto
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            Proces zakładania konta w tym kasynie nie odbiega od standardów branżowych. PlayFortuna rejestracja wymaga podania adresu e-mail, hasła, waluty konta i kraju zamieszkania. Całość zajmuje dosłownie dwie-trzy minuty. Nie trzeba od razu przechodzić pełnej weryfikacji – ta wymagana jest dopiero przy pierwszej wypłacie, co jest normalną praktyką.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Lock" className="text-primary" size={22} />
                            Logowanie i bezpieczeństwo
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            PlayFortuna logowanie odbywa się przez standardowy formularz na stronie głównej. Kasyno oferuje również opcję zapamiętania sesji na zaufanym urządzeniu. Pod względem bezpieczeństwa strona korzysta z szyfrowania SSL, a samo konto można dodatkowo zabezpieczyć silnym hasłem. Brakuje natomiast uwierzytelniania dwuskładnikowego (2FA), co w 2026 roku jest już pewnym minusem – wiele konkurencyjnych platform oferuje tę funkcję standardowo.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="Gift" className="text-primary" size={28} />
                        Bonusy w PlayFortuna – kod promocyjny i darmowe spiny
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Sparkles" className="text-primary" size={22} />
                            Bonus powitalny i warunki obrotu
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            PlayFortuna bonus na start w standardowej wersji daje dodatkowe środki oraz pulę darmowych spinów rozłożonych na kolejne wpłaty. Szczegóły zmieniają się w zależności od aktualnej kampanii, dlatego warto sprawdzić warunki bezpośrednio na stronie w momencie rejestracji. Warunki obrotu (wager) kształtują się zwykle na poziomie x30–x40, co plasuje kasyno w średniej półce branżowej. Nie jest to ani wyjątkowo korzystne, ani wygórowane.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Ticket" className="text-primary" size={22} />
                            Bonus bez depozytu i darmowe spiny
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            Gracze często pytają o PlayFortuna bonus bez depozytu. Takie oferty pojawiają się sporadycznie, najczęściej w ramach akcji sezonowych lub dla graczy powracających. Nie jest to stały element oferty, więc nie warto na nim polegać jako na gwarantowanym beneficie.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Tag" className="text-primary" size={22} />
                            Kody promocyjne
                          </h3>
                          <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                              Jeśli chodzi o PlayFortuna kod promocyjny i kody bonusowe – kasyno udostępnia je przez newsletter, kanały społecznościowe oraz strony partnerskie. Wpisanie kodu podczas rejestracji lub wpłaty może odblokować dodatkowe PlayFortuna darmowe spiny lub podwyższony bonus.
                            </p>
                            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-l-4 border-primary rounded-lg p-4">
                              <div className="flex items-start gap-3">
                                <Icon name="Lightbulb" className="text-primary flex-shrink-0 mt-1" size={20} />
                                <p className="text-sm text-foreground/80">
                                  <strong className="text-primary">Praktyczna rada:</strong> przed aktywacją zawsze sprawdzajcie regulamin danej promocji, szczególnie listę gier, w których bonus można wykorzystać.
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
                        Gry hazardowe i darmowe gry w PlayFortuna
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Dices" className="text-primary" size={22} />
                            Automaty i dostawcy gier
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            Biblioteka gier to zdecydowanie mocna strona platformy. PlayFortuna gry hazardowe obejmują kilka tysięcy tytułów od dostawców takich jak NetEnt, Pragmatic Play, Microgaming, Play'n GO czy Yggdrasil. Automaty stanowią trzon oferty – od klasycznych slotów po rozbudowane gry z mechanikami megaways i bonus buy.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Video" className="text-primary" size={22} />
                            Live casino
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            Sekcja live casino opiera się głównie na stołach Evolution Gaming, co gwarantuje przyzwoitą jakość streamingu i szeroką gamę wariantów ruletki, blackjacka oraz baccarata. Dostępne są również gry show w stylu Crazy Time czy Monopoly Live.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Play" className="text-primary" size={22} />
                            Tryb demo – graj za darmo
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            PlayFortuna darmowe gry są dostępne w trybie demo dla większości automatów. Wystarczy najechać na tytuł i wybrać opcję gry za darmo – nie wymaga to nawet logowania. To dobra opcja dla osób, które chcą przetestować mechanikę slotu przed grą za realne pieniądze. Tryb demo nie obejmuje oczywiście live casino, gdzie gra toczy się wyłącznie za prawdziwe stawki.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="Wallet" className="text-primary" size={28} />
                        Wypłaty w PlayFortuna – opinie użytkowników
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="CreditCard" className="text-primary" size={22} />
                            Metody płatności i czas realizacji
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            Dostępne metody obejmują karty Visa i Mastercard, portfele elektroniczne (Skrill, Neteller, ecoPayz) oraz w niektórych przypadkach przelewy bankowe i kryptowaluty. Minimalna kwota wypłaty zależy od wybranej metody – najczęściej to równowartość 10–20 EUR. Standardowe wypłaty realizowane są w ciągu 24–72 godzin, choć pierwsze zlecenie może potrwać dłużej ze względu na procedurę weryfikacji tożsamości (KYC).
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="MessageSquare" className="text-primary" size={22} />
                            Co mówią gracze?
                          </h3>
                          <div className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">
                              PlayFortuna wypłaty opinie, które można znaleźć na forach takich jak AskGamblers czy LCB, wskazują na dość zróżnicowane doświadczenia. PlayFortuna opinie na temat wypłat są generalnie pozytywne w przypadku zweryfikowanych kont i standardowych kwot. Problemy pojawiają się głównie przy dużych wygranych lub gdy gracz nie dostarczył wymaganych dokumentów na czas. To schemat typowy dla większości kasyn z licencją Curaçao i nie jest specyficzny wyłącznie dla tej platformy.
                            </p>
                            <div className="bg-muted/50 rounded-lg p-4">
                              <div className="flex items-start gap-3">
                                <Icon name="AlertCircle" className="text-primary flex-shrink-0 mt-1" size={20} />
                                <p className="text-sm text-foreground/70">
                                  Warto pamiętać, że negatywne opinie często dotyczą przypadków, w których gracz nie przeczytał regulaminu lub próbował obejść warunki bonusowe. Kluczem do sprawnej wypłaty jest przestrzeganie zasad i terminowe dostarczenie dokumentów weryfikacyjnych.
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