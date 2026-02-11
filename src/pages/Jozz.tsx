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

export default function Jozz() {
  const navigate = useNavigate();
  const casinoUrl = 'https://jozz-promo1.com/alt/jozz11_ru/?6ccd9bf32f7680ee0e290d1be59a4de5';

  useEffect(() => {
    document.title = 'Jozz kasyno online – opinie, bonusy i rejestracja 2026';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Jozz kasyno online w Polsce – sprawdź opinie graczy, bonus powitalny, zakłady sportowe i szybkie wypłaty. Rejestracja, gry live i cashback tygodniowy.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Jozz kasyno online w Polsce – sprawdź opinie graczy, bonus powitalny, zakłady sportowe i szybkie wypłaty. Rejestracja, gry live i cashback tygodniowy.';
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
                      src="https://cdn.poehali.dev/projects/c2933cfb-9ddd-413a-a6ef-7b99d3f5e883/bucket/bb6b019c-68dc-4044-9dc7-c4d60036d317.jpg"
                      alt="Jozz Casino"
                      className="relative w-full h-full object-contain rounded-2xl bg-card p-4"
                    />
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div>
                      <CardTitle className="text-4xl mb-2">Jozz Casino</CardTitle>
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
                          <p className="text-xl font-bold text-primary">Do 2500 PLN + 75 Darmowych Spinów</p>
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
                  Graj Teraz w Jozz
                </Button>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-muted/50 rounded-lg p-4 text-center">
                    <Icon name="Gamepad2" className="mx-auto text-primary mb-2" size={32} />
                    <p className="text-2xl font-bold">2500+</p>
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
                      Jozz kasyno online – opinie, bonusy i rejestracja w Polsce
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <p className="text-foreground/80 leading-relaxed">
                        Jozz to platforma hazardowa, która w ostatnich miesiącach zyskała spore zainteresowanie wśród polskich graczy. Kasyno działa w pełni jako <strong className="text-primary">Jozz online</strong> – bez konieczności pobierania dodatkowego oprogramowania, bezpośrednio z poziomu przeglądarki. Serwis oferuje szeroki katalog gier, system bonusów i całodobową obsługę klienta.
                      </p>
                      <p className="text-foreground/80 leading-relaxed">
                        Wielu użytkowników szuka informacji o tym, czy <strong className="text-primary">Jozz casino polska</strong> to wiarygodne miejsce do gry. W tym niezależnym przeglądzie sprawdzamy, jak wygląda rejestracja, jakie bonusy są dostępne, jak działają wypłaty i co na temat tego kasyna mówią sami gracze. Wszystkie informacje dotyczą aktualnej oferty na rok 2026.
                      </p>
                    </div>

                    <div className="border-t border-primary/20 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="UserPlus" className="text-primary" size={28} />
                        Rejestracja i logowanie w Jozz
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Edit" className="text-primary" size={22} />
                            Jak założyć konto?
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            Proces rejestracji w Jozz jest prosty i zajmuje dosłownie kilka minut. Na stronie głównej wystarczy kliknąć przycisk rejestracji, a następnie podać adres e-mail, wybrać walutę konta i ustawić hasło. Platforma wymaga również potwierdzenia, że użytkownik ma ukończone 18 lat.
                          </p>
                          <p className="text-foreground/80 leading-relaxed mt-4">
                            <strong className="text-primary">Jozz rejestracja</strong> nie wymaga na starcie weryfikacji dokumentów – ta następuje zazwyczaj przy pierwszej wypłacie środków. To standardowa praktyka w branży, która przyspiesza sam moment zakładania konta.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Icon name="Lock" className="text-primary" size={22} />
                            Logowanie i bezpieczeństwo
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">
                            <strong className="text-primary">Jozz logowanie</strong> odbywa się za pomocą adresu e-mail i hasła. Platforma korzysta z szyfrowania SSL, co oznacza, że dane użytkowników są chronione podczas przesyłania. Warto ustawić silne hasło i nie udostępniać danych logowania osobom trzecim. W razie problemów z dostępem do konta można skorzystać z opcji odzyskiwania hasła.
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
                          <span>Kasyno + zakłady sportowe w jednym</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                          <span>Cashback tygodniowy</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                          <span>Live dealer wysokiej jakości</span>
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