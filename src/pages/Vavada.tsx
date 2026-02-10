import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

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
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => window.open(casinoUrl, '_blank')}
                    className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-lg py-6"
                  >
                    <Icon name="ExternalLink" className="mr-2" size={20} />
                    Graj Teraz w Vavada
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-primary/30 hover:bg-primary/10 text-lg py-6"
                  >
                    <Icon name="FileText" className="mr-2" size={20} />
                    Pełna Recenzja
                  </Button>
                </div>

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

                    <div className="bg-muted/50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Icon name="AlertCircle" className="text-primary" size={18} />
                        Ważne informacje
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
                          <span>Czas wypłaty: 24-48 godzin</span>
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