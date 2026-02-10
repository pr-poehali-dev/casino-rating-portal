import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

interface Casino {
  id: number;
  name: string;
  rating: number;
  userRating: number;
  bonus: string;
  games: number;
  license: string;
  features: string[];
  logo: string;
}

const casinos: Casino[] = [
  {
    id: 1,
    name: 'Royal Casino Palace',
    rating: 9.5,
    userRating: 4.8,
    bonus: 'Do 5000 PLN + 200 Darmowych Spinów',
    games: 3500,
    license: 'Malta Gaming Authority',
    features: ['Szybkie wypłaty', 'Obsługa 24/7', 'Aplikacja mobilna', 'Live Casino'],
    logo: '👑'
  },
  {
    id: 2,
    name: 'Golden Bet Casino',
    rating: 9.3,
    userRating: 4.7,
    bonus: 'Do 3000 PLN + 150 Darmowych Spinów',
    games: 2800,
    license: 'Curacao eGaming',
    features: ['Kryptowaluty', 'VIP Program', 'Turnieje', 'Cashback'],
    logo: '🎰'
  },
  {
    id: 3,
    name: 'Diamond Slots Premium',
    rating: 9.0,
    userRating: 4.6,
    bonus: 'Do 4000 PLN + 100 Darmowych Spinów',
    games: 3200,
    license: 'UK Gambling Commission',
    features: ['Bez depozytu bonus', 'Szybka weryfikacja', 'Polski support', 'Jackpoty'],
    logo: '💎'
  },
  {
    id: 4,
    name: 'Platinum Play Casino',
    rating: 8.8,
    userRating: 4.5,
    bonus: 'Do 2500 PLN + 75 Darmowych Spinów',
    games: 2500,
    license: 'Malta Gaming Authority',
    features: ['Live Dealer', 'Sports Betting', 'Reload Bonusy', 'Weekly Cashback'],
    logo: '🎲'
  }
];

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

export default function Index() {
  const [activeTab, setActiveTab] = useState('ranking');

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 group cursor-pointer">
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
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <button className="text-foreground/80 hover:text-primary transition-colors">Ranking</button>
              <button className="text-foreground/80 hover:text-primary transition-colors">Bonusy</button>
              <button className="text-foreground/80 hover:text-primary transition-colors">Gry</button>
              <button className="text-foreground/80 hover:text-primary transition-colors">Nowości</button>
              <button className="text-foreground/80 hover:text-primary transition-colors">Kontakt</button>
            </nav>
            <Button className="hidden md:flex bg-primary text-primary-foreground hover:bg-primary/90">
              <Icon name="Sparkles" className="mr-2" size={18} />
              VIP Oferty
            </Button>
            <Button size="icon" variant="ghost" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2 text-sm">
              <Icon name="TrendingUp" className="mr-2" size={16} />
              Najlepsze Kasyna w Polsce 2026
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Ekskluzywne <span className="text-primary gold-glow">Kasyna Online</span>
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
              Profesjonalne rankingi, szczegółowe recenzje i najlepsze bonusy powitalne.
              Wybierz swoje idealne kasyno z naszego premium rankingu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                <Icon name="Trophy" className="mr-2" size={20} />
                Zobacz Top 10 Kasyn
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10">
                <Icon name="Gift" className="mr-2" size={20} />
                Aktualne Bonusy
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-4 bg-card border border-border">
              <TabsTrigger value="ranking" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Icon name="Award" className="mr-2" size={18} />
                <span className="hidden sm:inline">Ranking</span>
              </TabsTrigger>
              <TabsTrigger value="bonusy" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Icon name="Gift" className="mr-2" size={18} />
                <span className="hidden sm:inline">Bonusy</span>
              </TabsTrigger>
              <TabsTrigger value="gry" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Icon name="Gamepad2" className="mr-2" size={18} />
                <span className="hidden sm:inline">Gry</span>
              </TabsTrigger>
              <TabsTrigger value="faq" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Icon name="HelpCircle" className="mr-2" size={18} />
                <span className="hidden sm:inline">FAQ</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="ranking" className="mt-8 space-y-6">
              <div className="relative max-w-5xl mx-auto mb-12">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl blur-3xl -z-10"></div>
                <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 md:p-12">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="h-1 w-12 bg-gradient-to-r from-transparent to-primary rounded-full"></div>
                    <Icon name="Star" className="text-primary" size={24} />
                    <div className="h-1 w-12 bg-gradient-to-l from-transparent to-primary rounded-full"></div>
                  </div>
                  <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight">
                    Ranking bukmacherów i kasyn online w Polsce – legalni operatorzy 2026
                  </h1>
                  <div className="space-y-6">
                    <p className="text-lg md:text-xl leading-relaxed text-center text-foreground/90">
                      Szukasz sprawdzonego miejsca do obstawiania meczów albo grania w ulubione sloty? Trafiłeś dobrze. 
                      Nasza strona to <span className="text-primary font-semibold">porównywarka bukmacherów i kasyn</span>, w której znajdziesz wyłącznie legalnych operatorów 
                      działających na polskim rynku. Bez ściemy, bez promowania podejrzanych platform.
                    </p>
                    <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                    <p className="text-lg md:text-xl leading-relaxed text-center text-foreground/90">
                      Nie wiesz, jaki bukmacher wybrać? A może chcesz sprawdzić, które kasyna dla Polaków naprawdę wypłacają 
                      wygrane? Przygotowaliśmy <span className="text-primary font-semibold">aktualne zestawienia na 2026 rok</span> – z konkretnymi informacjami o bonusach, 
                      licencjach i bezpieczeństwie środków. Każdy operator w naszym rankingu przeszedł weryfikację, więc 
                      nie musisz tracić czasu na własne śledztwo.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center mb-8 border-t border-border pt-12">
                <h3 className="text-3xl font-bold mb-2">Top Kasyna Online 2026</h3>
                <p className="text-foreground/70">Sprawdzone i zweryfikowane przez ekspertów</p>
              </div>

              {casinos.map((casino, index) => (
                <Card key={casino.id} className="card-glow bg-card border-border overflow-hidden">
                  <CardHeader className="relative">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg text-4xl">
                          {casino.logo}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                              #{index + 1}
                            </Badge>
                            <CardTitle className="text-2xl">{casino.name}</CardTitle>
                          </div>
                          <CardDescription className="flex items-center gap-2 text-foreground/60">
                            <Icon name="ShieldCheck" size={16} className="text-primary" />
                            {casino.license}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="md:ml-auto flex flex-col items-start md:items-end gap-2">
                        <div className="flex items-center gap-2 bg-primary/10 px-3 py-2 rounded-lg">
                          <Icon name="Award" className="text-primary" size={20} />
                          <span className="text-2xl font-bold text-primary">{casino.rating}</span>
                          <span className="text-sm text-foreground/60">/10</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <StarRating rating={casino.userRating} size={16} />
                          <span className="text-sm text-foreground/60 ml-1">({casino.userRating})</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Gift" className="text-primary" size={20} />
                        <span className="font-semibold text-foreground">Bonus Powitalny:</span>
                      </div>
                      <p className="text-xl font-bold text-primary">{casino.bonus}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 p-3 bg-card/50 rounded-lg border border-border">
                        <Icon name="Gamepad2" className="text-primary" size={24} />
                        <div>
                          <p className="text-sm text-foreground/60">Liczba gier</p>
                          <p className="font-semibold">{casino.games}+</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {casino.features.slice(0, 4).map((feature, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-secondary/20 text-foreground border-secondary/30">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="flex flex-col sm:flex-row gap-3 bg-card/50">
                    <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                      <Icon name="ExternalLink" className="mr-2" size={18} />
                      Graj Teraz
                    </Button>
                    <Button variant="outline" className="flex-1 border-primary/30 hover:bg-primary/10">
                      <Icon name="FileText" className="mr-2" size={18} />
                      Pełna Recenzja
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                      <Icon name="Heart" size={20} />
                    </Button>
                  </CardFooter>
                </Card>
              ))}

              <div className="relative max-w-5xl mx-auto mt-16">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-2xl blur-2xl -z-10"></div>
                <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-1 w-8 bg-primary rounded-full"></div>
                    <Icon name="TrendingUp" className="text-primary" size={20} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                    Najlepsi bukmacherzy w Polsce – ranking i porównanie
                  </h2>
                  <div className="space-y-6 text-foreground/90">
                  <p className="text-lg leading-relaxed">
                    Polski rynek zakładów sportowych rozwija się dynamicznie. Co roku pojawiają się nowe oferty, 
                    zmieniają się kursy i warunki promocji. Dlatego utrzymujemy nasz ranking na bieżąco – żebyś 
                    mógł porównać top bukmacherów w jednym miejscu.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Najlepsi bukmacherzy wyróżniają się nie jedną, a kilkoma cechami naraz: atrakcyjnymi kursami, 
                    szybkimi wypłatami, wygodną aplikacją i przejrzystymi zasadami. W naszym zestawieniu uwzględniamy 
                    to wszystko. Lista legalnych bukmacherów, którą publikujemy, opiera się na realnych testach – 
                    zakładamy konta, wpłacamy pieniądze i sprawdzamy, jak wygląda codzienne korzystanie z serwisu.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Kto jest najlepszy bukmacher w Polsce w 2026 roku? Odpowiedź nie jest jednoznaczna, bo zależy 
                    od tego, co jest dla Ciebie ważne – kursy na piłkę nożną, bogata oferta live czy może najwyższy 
                    bonus powitalny. Poniżej rozbijamy to na czynniki pierwsze.
                  </p>

                  <div className="flex items-center gap-3 mt-12 mb-6">
                    <Icon name="ShieldCheck" className="text-primary" size={24} />
                    <h3 className="text-2xl md:text-3xl font-bold">
                      Legalni bukmacherzy – bukmacherzy z licencją
                    </h3>
                  </div>
                  <p className="text-lg leading-relaxed">
                    W Polsce nie ma żartów z legalności zakładów. Ministerstwo Finansów prowadzi rejestr operatorów 
                    z licencją, a granie poza tym rejestrem to ryzyko – nie tylko prawne, ale przede wszystkim finansowe. 
                    Bukmacherzy z licencją podlegają kontrolom i muszą zapewniać ochronę środków graczy.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Dlatego w naszym rankingu umieszczamy wyłącznie licencjonowanych operatorów. Sprawdzamy aktualność 
                    zezwoleń i monitorujemy ewentualne zmiany regulacyjne. Szukając opinii o legalnych bukmacherach, 
                    zwracaj uwagę nie tylko na oceny użytkowników, ale też na numer licencji – każdy legalny bukmacher 
                    publikuje go na swojej stronie. Opinie graczy to jedno, ale formalny status operatora to absolutna podstawa.
                  </p>

                  <div className="flex items-center gap-3 mt-12 mb-6">
                    <Icon name="Gift" className="text-primary" size={24} />
                    <h3 className="text-2xl md:text-3xl font-bold">
                      Bonusy bukmacherskie i oferty na start
                    </h3>
                  </div>
                  <p className="text-lg leading-relaxed">
                    Bonusy bukmacherskie potrafią naprawdę ułatwić start. Większość legalnych operatorów oferuje bonus 
                    na start – zwykle jest to dopasowanie pierwszego depozytu lub zakład bez ryzyka. Ale diabeł tkwi 
                    w szczegółach, a dokładniej w warunkach obrotu.
                  </p>
                  <p className="text-lg leading-relaxed font-semibold">
                    Na co warto zwracać uwagę:
                  </p>
                  <ul className="space-y-4 text-lg leading-relaxed list-none pl-0">
                    <li className="flex items-start gap-3 p-4 bg-card/30 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                      <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span><strong className="text-primary">Bonus na start bukmacher</strong> – sprawdź, czy dotyczy pierwszego zakładu, czy depozytu. To robi ogromną różnicę.</span>
                    </li>
                    <li className="flex items-start gap-3 p-4 bg-card/30 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                      <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span><strong className="text-primary">Freebet bez depozytu</strong> – rzadkość, ale się zdarza. Niektórzy bukmacherzy dają darmowy zakład za samą rejestrację.</span>
                    </li>
                    <li className="flex items-start gap-3 p-4 bg-card/30 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                      <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span><strong className="text-primary">Kod promocyjny bukmacher</strong> – czasem wystarczy wpisać odpowiedni kod przy rejestracji, żeby odblokować dodatkową premię.</span>
                    </li>
                    <li className="flex items-start gap-3 p-4 bg-card/30 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                      <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span><strong className="text-primary">Zakład bez ryzyka</strong> – jeśli przegrasz pierwszy kupon, dostajesz zwrot stawki. Warunki bywają różne, więc czytaj regulamin.</span>
                    </li>
                  </ul>
                  <p className="text-lg leading-relaxed">
                    Oferty typu <strong>bukmacher bez depozytu</strong> to świetna opcja dla tych, którzy chcą przetestować 
                    platformę, zanim zaangażują własne pieniądze.
                  </p>

                  <div className="flex items-center gap-3 mt-12 mb-6">
                    <Icon name="Sparkles" className="text-primary" size={24} />
                    <h3 className="text-2xl md:text-3xl font-bold">
                      Nowi bukmacherzy 2026 – co oferują?
                    </h3>
                  </div>
                  <p className="text-lg leading-relaxed">
                    Rynek się zmienia i <strong>nowi bukmacherzy 2026</strong> wchodzą z naprawdę agresywnymi ofertami. 
                    Żeby przyciągnąć graczy, proponują wyższe bonusy, lepsze kursy na wybrane dyscypliny i nowoczesne 
                    aplikacje mobilne.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Czy warto im zaufać? Jeśli mają licencję – jak najbardziej. Nowi operatorzy często starają się 
                    bardziej niż ci zasiedziali, bo muszą zbudować bazę klientów. To dobry moment, żeby skorzystać 
                    z ich ofert powitalnych, dopóki są hojne.
                  </p>

                  <div className="mt-16 pt-12 border-t border-primary/20">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-1 w-8 bg-primary rounded-full"></div>
                      <Icon name="Star" className="text-primary" size={24} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                      Najlepsze kasyna online – ranking i opinie graczy
                    </h2>
                  </div>
                  <p className="text-lg leading-relaxed">
                    Jeśli interesują Cię automaty, ruletka albo poker, ten dział jest dla Ciebie. Nasz <strong>kasyna 
                    online ranking</strong> obejmuje wyłącznie sprawdzone i legalne platformy. Sprawdzamy je pod kątem 
                    gier, bonusów, metod płatności i – co najważniejsze – terminowości wypłat.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Najlepsze kasyno internetowe to nie to, które ma najładniejszą stronę, ale to, które wypłaca wygrane 
                    w rozsądnym czasie i oferuje uczciwe warunki gry. W zestawieniu uwzględniamy zarówno duże, znane marki, 
                    jak i <strong>polecane kasyna online</strong>, które dopiero zdobywają popularność wśród polskich graczy. 
                    <strong>Top kasyna online</strong> w naszym rankingu wybieramy na podstawie kilkudziesięciu kryteriów.
                  </p>

                  <div className="flex items-center gap-3 mt-12 mb-6">
                    <Icon name="DollarSign" className="text-primary" size={24} />
                    <h3 className="text-2xl md:text-3xl font-bold">
                      Wypłacalne kasyna internetowe – opinie i bezpieczeństwo
                    </h3>
                  </div>
                  <p className="text-lg leading-relaxed">
                    Najczęstsze pytanie, które dostajemy, brzmi: „Czy to kasyno naprawdę wypłaca?". I słusznie – bo to 
                    jest sedno sprawy. <strong>Wypłacalne kasyna internetowe</strong> to takie, które przelewają wygrane 
                    w zadeklarowanym terminie, bez szukania wymówek do zablokowania konta.
                  </p>
                  <p className="text-lg leading-relaxed">
                    W naszych recenzjach testujemy proces wypłat osobiście. Sprawdzamy, ile trwa weryfikacja dokumentów, 
                    jakie metody płatności są dostępne i czy pojawiają się ukryte limity. <strong>Najlepsze kasyno online 
                    opinie</strong> zbieramy nie tylko z forów, ale przede wszystkim z własnych doświadczeń. Najlepsze 
                    polskie kasyno w 2026 roku to takie, w którym czujesz się bezpiecznie – od pierwszego logowania po 
                    wypłatę wygranej.
                  </p>

                  <div className="flex items-center gap-3 mt-12 mb-6">
                    <Icon name="Zap" className="text-primary" size={24} />
                    <h3 className="text-2xl md:text-3xl font-bold">
                      Bonusy kasynowe bez depozytu i darmowe spiny
                    </h3>
                  </div>
                  <p className="text-lg leading-relaxed">
                    To chyba najbardziej pożądana kategoria ofert. <strong>Kasyno bez depozytu</strong> pozwala zagrać 
                    za pieniądze operatora – bez angażowania własnych środków. Brzmi za pięknie? Cóż, warunki obrotu 
                    bywają wymagające, ale sama możliwość przetestowania platformy za darmo jest bezcenna.
                  </p>
                  <p className="text-lg leading-relaxed font-semibold">
                    Oto najpopularniejsze rodzaje bonusów kasynowych:
                  </p>
                  <ul className="space-y-4 text-lg leading-relaxed list-none pl-0">
                    <li className="flex items-start gap-3 p-4 bg-card/30 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                      <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span><strong className="text-primary">Darmowe spiny za rejestrację</strong> – dostajesz określoną liczbę spinów od razu po założeniu konta. Nie musisz wpłacać ani złotówki.</span>
                    </li>
                    <li className="flex items-start gap-3 p-4 bg-card/30 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                      <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span><strong className="text-primary">Darmowe spiny bez depozytu (Polska)</strong> – jak wyżej, ale specjalnie dedykowane polskim graczom. Dostępność zmienia się w zależności od operatora.</span>
                    </li>
                    <li className="flex items-start gap-3 p-4 bg-card/30 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                      <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span><strong className="text-primary">Kasyno bonus na start</strong> – klasyczne dopasowanie pierwszego depozytu, czasem nawet 100% lub więcej.</span>
                    </li>
                    <li className="flex items-start gap-3 p-4 bg-card/30 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                      <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span><strong className="text-primary">Darmowa kasa za rejestrację w kasynie</strong> – zamiast spinów dostajesz konkretną kwotę do wykorzystania na dowolne gry.</span>
                    </li>
                    <li className="flex items-start gap-3 p-4 bg-card/30 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                      <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span><strong className="text-primary">Nowe kasyna bez depozytu</strong> – świeże platformy, które oferują bonusy bez wymaganej wpłaty, żeby przyciągnąć pierwszych użytkowników.</span>
                    </li>
                  </ul>
                  <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-l-4 border-primary rounded-lg p-6 mt-6">
                    <div className="flex items-start gap-3">
                      <Icon name="AlertCircle" className="text-primary flex-shrink-0 mt-1" size={24} />
                      <p className="text-lg leading-relaxed">
                        <strong className="text-primary">Ważne:</strong> Pamiętaj, żeby zawsze sprawdzić wymagania dotyczące obrotu bonusem. Darmowe spiny, które wymagają 
                        60-krotnego obrotu, wyglądają znacznie mniej atrakcyjnie niż te z wymogiem 30-krotnym.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mt-12 mb-6">
                    <Icon name="Gamepad2" className="text-primary" size={24} />
                    <h3 className="text-2xl md:text-3xl font-bold">
                      Gry online w kasynie – automaty, ruletka i poker
                    </h3>
                  </div>
                  <p className="text-lg leading-relaxed">
                    Oferta gier to jeden z kluczowych czynników wyboru. Większość kasyn stawia przede wszystkim na 
                    <strong> automaty do gier online</strong> – to one generują największy ruch. Znajdziesz tu klasyczne 
                    trójbębnowe maszyny, rozbudowane video sloty z liniami bonusowymi i progresywne jackpoty.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Wiele platform udostępnia też <strong>maszyny online za darmo</strong> w trybie demo. <strong>Gry 
                    hazardowe za darmo</strong> to świetny sposób, żeby poznać mechanikę danego automatu, zanim postawisz 
                    prawdziwe pieniądze. <strong>Gry online kasyno</strong> oferuje w setkach wariantów – od prostych 
                    owocówek po kinowe produkcje z rozbudowaną fabułą.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Ale automaty to nie wszystko. <strong>Ruletka online</strong> wciąż przyciąga rzesze fanów – zarówno 
                    w wersji RNG, jak i z prawdziwym krupierem na żywo. A jeśli wolisz strategię od szczęścia, 
                    <strong> poker online w Polsce</strong> ma stabilną i rosnącą społeczność. Turnieje, cash game, 
                    sit-and-go – wybór jest naprawdę spory.
                  </p>

                  <div className="mt-16 pt-12 border-t border-primary/20">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-1 w-8 bg-primary rounded-full"></div>
                      <Icon name="HelpCircle" className="text-primary" size={24} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                      Jaki bukmacher lub kasyno online wybrać?
                    </h2>
                  </div>
                  <p className="text-lg leading-relaxed">
                    To pytanie, które zadaje sobie każdy początkujący gracz. <strong>Jaki bukmacher wybrać?</strong> Które 
                    kasyno będzie najlepsze akurat dla Ciebie? Nie ma jednej uniwersalnej odpowiedzi, ale jest kilka rzeczy, 
                    które warto sprawdzić przed rejestracją. Traktuj poniższą listę jako mini <strong>porównywarkę bukmacherów 
                    i kasyn</strong>.
                  </p>
                  <p className="text-lg leading-relaxed font-semibold">
                    Na co zwrócić uwagę:
                  </p>
                  <ul className="space-y-4 text-lg leading-relaxed list-none pl-0">
                    <li className="flex items-start gap-3 p-4 bg-card/30 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                      <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span><strong className="text-primary">Licencja</strong> – to absolutna podstawa. Bez ważnego zezwolenia na prowadzenie działalności w Polsce – nie ryzykuj.</span>
                    </li>
                    <li className="flex items-start gap-3 p-4 bg-card/30 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                      <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span><strong className="text-primary">Bonusy</strong> – porównaj oferty powitalne, ale patrz na warunki, nie tylko na kwoty. Wysoki bonus z nierealnymi wymaganiami obrotu jest bezwartościowy.</span>
                    </li>
                    <li className="flex items-start gap-3 p-4 bg-card/30 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                      <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span><strong className="text-primary">Wypłaty</strong> – sprawdź dostępne metody, limity i czas realizacji. Szybka wypłata to znak dobrze zarządzanej platformy.</span>
                    </li>
                    <li className="flex items-start gap-3 p-4 bg-card/30 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                      <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span><strong className="text-primary">Oferta gier lub zakładów</strong> – czy znajdziesz tu swoje ulubione dyscypliny sportowe albo typy gier kasynowych? Dla jednych liczy się piłka nożna, dla innych automaty z jackpotem.</span>
                    </li>
                    <li className="flex items-start gap-3 p-4 bg-card/30 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                      <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span><strong className="text-primary">Opinie graczy</strong> – przeczytaj recenzje, ale filtruj je zdrowym rozsądkiem. Jedna zła opinia nie oznacza złego operatora, ale kilkadziesiąt podobnych skarg – to już sygnał ostrzegawczy.</span>
                    </li>
                  </ul>
                  <p className="text-lg leading-relaxed">
                    Nie musisz ograniczać się do jednej platformy. Wielu doświadczonych graczy korzysta z dwóch–trzech 
                    operatorów jednocześnie, żeby mieć dostęp do najlepszych kursów i najciekawszych promocji. Ważne, 
                    żeby każdy z nich był legalny i sprawdzony.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Nasz ranking aktualizujemy regularnie, więc wracaj tu, kiedy będziesz szukać nowych ofert albo zechcesz 
                    sprawdzić, co zmieniło się na rynku w 2026 roku.
                  </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="bonusy" className="mt-8">
              <div className="text-center py-20">
                <Icon name="Gift" className="mx-auto text-primary mb-4" size={64} />
                <h3 className="text-2xl font-bold mb-2">Sekcja Bonusów</h3>
                <p className="text-foreground/70">Tutaj będą najlepsze oferty bonusowe</p>
              </div>
            </TabsContent>

            <TabsContent value="gry" className="mt-8">
              <div className="text-center py-20">
                <Icon name="Gamepad2" className="mx-auto text-primary mb-4" size={64} />
                <h3 className="text-2xl font-bold mb-2">Katalog Gier</h3>
                <p className="text-foreground/70">Tysiące slotów i gier w jednym miejscu</p>
              </div>
            </TabsContent>

            <TabsContent value="faq" className="mt-8 max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-2">Najczęściej Zadawane Pytania</h3>
                <p className="text-foreground/70">Wszystko czego potrzebujesz wiedzieć</p>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="hover:text-primary">
                    Czy kasyna online w Polsce są legalne?
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70">
                    Tak, kasyna online z licencją są legalne w Polsce. Sprawdź czy kasyno posiada ważną licencję od
                    renomowanego regulatora jak Malta Gaming Authority czy UK Gambling Commission.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="hover:text-primary">
                    Jak wybrać najlepsze kasyno online?
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70">
                    Zwróć uwagę na licencję, ofertę gier, bonusy, metody płatności, czas wypłat i opinie graczy.
                    Nasze rankingi uwzględniają wszystkie te aspekty.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="hover:text-primary">
                    Jak działają bonusy powitalne?
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70">
                    Bonusy powitalne to dodatkowe środki lub darmowe spiny przyznawane nowym graczom. Sprawdź warunki
                    obrotu i wymagania przed skorzystaniem z oferty.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="hover:text-primary">
                    Jak długo trwa wypłata wygranej?
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70">
                    Czas wypłaty zależy od kasyna i metody płatności. E-portfele są najszybsze (24h), przelewy
                    bankowe mogą trwać 3-5 dni roboczych.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="hover:text-primary">
                    Czy mogę grać za darmo?
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70">
                    Większość kasyn oferuje darmowe wersje demo gier slotowych. To świetny sposób na przetestowanie
                    gry przed grą na prawdziwe pieniądze.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-card/30 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2">
              <Icon name="Shield" className="mr-2" size={16} />
              Bezpieczne i Sprawdzone
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold">
              Dlaczego <span className="text-primary">Nasz Ranking?</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <Icon name="Users" className="text-primary mb-2" size={40} />
                  <CardTitle className="text-xl">Ekspercka Ocena</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">
                    Każde kasyno jest dokładnie testowane przez zespół ekspertów z wieloletnim doświadczeniem
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <Icon name="ShieldCheck" className="text-primary mb-2" size={40} />
                  <CardTitle className="text-xl">Weryfikacja Licencji</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">
                    Sprawdzamy ważność licencji i bezpieczeństwo każdego polecalnego kasyna online
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <Icon name="TrendingUp" className="text-primary mb-2" size={40} />
                  <CardTitle className="text-xl">Aktualne Informacje</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">
                    Regularnie aktualizujemy rankingi, bonusy i recenzje aby dostarczyć najświeższe dane
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Crown" className="text-primary" size={28} />
                <span className="text-xl font-bold text-primary">CasinoRanking.pl</span>
              </div>
              <p className="text-sm text-foreground/60">
                Najlepszy ranking kasyn online w Polsce. Profesjonalne recenzje i bonusy.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Przydatne Linki</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-primary transition-colors">O nas</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Kontakt</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Polityka prywatności</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Regulamin</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kategorie</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-primary transition-colors">Top Kasyna</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Najlepsze Bonusy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Nowe Kasyna</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Live Casino</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-sm text-foreground/60 mb-3">
                Zapisz się i otrzymuj najlepsze oferty bonusowe
              </p>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Icon name="Mail" className="mr-2" size={18} />
                Zapisz się
              </Button>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground/60">
              © 2026 CasinoRanking.pl. Wszystkie prawa zastrzeżone.
            </p>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="border-primary/30">
                <Icon name="Shield" className="mr-1" size={14} />
                18+
              </Badge>
              <Badge variant="outline" className="border-primary/30">
                Odpowiedzialna Gra
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}