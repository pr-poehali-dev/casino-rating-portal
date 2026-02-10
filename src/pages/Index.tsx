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
  url: string;
}

const casinos: Casino[] = [
  {
    id: 1,
    name: 'Vavada',
    rating: 9.5,
    userRating: 4.8,
    bonus: 'Do 5000 PLN + 200 Darmowych Spinów',
    games: 3500,
    license: 'Curacao eGaming',
    features: ['Szybkie wypłaty', 'Obsługa 24/7', 'Aplikacja mobilna', 'Live Casino'],
    logo: 'https://cdn.poehali.dev/projects/c2933cfb-9ddd-413a-a6ef-7b99d3f5e883/bucket/239958bf-e24d-4c54-9062-b0ce46b32b07.png',
    url: 'https://gate707.com/?promo=0e4cb864-e734-44ef-9820-29068cfbffac&target=register'
  },
  {
    id: 2,
    name: 'PlayFortuna',
    rating: 9.3,
    userRating: 4.7,
    bonus: 'Do 3000 PLN + 150 Darmowych Spinów',
    games: 2800,
    license: 'Curacao eGaming',
    features: ['Kryptowaluty', 'VIP Program', 'Turnieje', 'Cashback'],
    logo: 'https://cdn.poehali.dev/projects/c2933cfb-9ddd-413a-a6ef-7b99d3f5e883/bucket/528dcd24-53e0-4e1d-92f5-6276cda9a5b2.png',
    url: 'https://fortuna-promo1.net/alt/pf_new_year_new_ru/?ab4caec10f6f2577c5ad134c05b3b019'
  },
  {
    id: 3,
    name: 'Booi',
    rating: 9.0,
    userRating: 4.6,
    bonus: 'Do 4000 PLN + 100 Darmowych Spinów',
    games: 3200,
    license: 'Curacao eGaming',
    features: ['Bez depozytu bonus', 'Szybka weryfikacja', 'Polski support', 'Jackpoty'],
    logo: 'https://cdn.poehali.dev/projects/c2933cfb-9ddd-413a-a6ef-7b99d3f5e883/bucket/24ca2f82-0a85-4ae2-a2ef-623a8a58d022.png',
    url: 'https://booipromo1.com/alt/booi_7sinsnew_ru/?2cd1c9052f79f17d0fd62080016b1093'
  },
  {
    id: 4,
    name: 'Jozz',
    rating: 8.8,
    userRating: 4.5,
    bonus: 'Do 2500 PLN + 75 Darmowych Spinów',
    games: 2500,
    license: 'Curacao eGaming',
    features: ['Live Dealer', 'Sports Betting', 'Reload Bonusy', 'Weekly Cashback'],
    logo: 'https://cdn.poehali.dev/projects/c2933cfb-9ddd-413a-a6ef-7b99d3f5e883/bucket/bb6b019c-68dc-4044-9dc7-c4d60036d317.jpg',
    url: 'https://jozz-promo1.com/alt/jozz11_ru/?6ccd9bf32f7680ee0e290d1be59a4de5'
  },
  {
    id: 5,
    name: 'Winity',
    rating: 8.6,
    userRating: 4.4,
    bonus: 'Do 2000 PLN + 50 Darmowych Spinów',
    games: 2200,
    license: 'Curacao eGaming',
    features: ['Szybka rejestracja', 'Bonusy reload', 'Mobile-first', 'Cashback tygodniowy'],
    logo: 'https://cdn.poehali.dev/projects/c2933cfb-9ddd-413a-a6ef-7b99d3f5e883/bucket/8da4a15a-ccc7-4f8d-9df7-c1472090be1f.jpg',
    url: 'https://winity.one/alt/win_girl_ru/?be6866f5f4da4c4e8f73ba3f9d913383'
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

type Language = 'pl' | 'ru' | 'en';

const translations = {
  pl: {
    ageTitle: 'Potwierdzenie wieku',
    ageQuestion: 'Czy masz ukończone 18 lat?',
    ageYes: 'Tak, mam 18+',
    ageNo: 'Nie',
    ageWarning: 'Aby wejść na tę stronę musisz mieć ukończone 18 lat',
    heroTitle: 'Najlepsze Kasyna Online',
    heroSubtitle: 'Odkryj najwyżej oceniane kasyna z ekskluzywnymi bonusami',
    topCasinos: 'Top Kasyna',
    allCasinos: 'Wszystkie Kasyna',
    rating: 'Ocena',
    bonus: 'Bonus Powitalny',
    games: 'Gry',
    license: 'Licencja',
    features: 'Funkcje',
    playNow: 'Graj Teraz',
    faqTitle: 'Najczęściej Zadawane Pytania',
    faq1Q: 'Czy kasyna online są legalne w Polsce?',
    faq1A: 'Tak, kasyna online są legalne w Polsce, pod warunkiem że posiadają odpowiednią licencję hazardową.',
    faq2Q: 'Jak wybrać najlepsze kasyno online?',
    faq2A: 'Przy wyborze kasyna zwróć uwagę na licencję, opinie graczy, dostępne metody płatności, wybór gier oraz jakość obsługi klienta.',
    faq3Q: 'Czy mogę grać za darmo?',
    faq3A: 'Większość kasyn oferuje darmowe wersje gier, które pozwalają zapoznać się z rozgrywką bez ryzykowania własnych pieniędzy.',
    faq4Q: 'Jakie są najpopularniejsze gry kasynowe?',
    faq4A: 'Do najpopularniejszych gier należą automaty, ruletka, blackjack, poker oraz gry z krupierem na żywo.',
    footer: '© 2024 Najlepsze Kasyna. Graj odpowiedzialnie. 18+'
  },
  ru: {
    ageTitle: 'Подтверждение возраста',
    ageQuestion: 'Вам исполнилось 18 лет?',
    ageYes: 'Да, мне 18+',
    ageNo: 'Нет',
    ageWarning: 'Для входа на сайт вам должно быть 18 лет',
    heroTitle: 'Лучшие Онлайн Казино',
    heroSubtitle: 'Откройте для себя самые высоко оцененные казино с эксклюзивными бонусами',
    topCasinos: 'Топ Казино',
    allCasinos: 'Все Казино',
    rating: 'Рейтинг',
    bonus: 'Приветственный Бонус',
    games: 'Игры',
    license: 'Лицензия',
    features: 'Особенности',
    playNow: 'Играть Сейчас',
    faqTitle: 'Часто Задаваемые Вопросы',
    faq1Q: 'Легальны ли онлайн казино в России?',
    faq1A: 'Онлайн казино с лицензией работают легально. Важно выбирать проверенные платформы.',
    faq2Q: 'Как выбрать лучшее онлайн казино?',
    faq2A: 'При выборе казино обращайте внимание на лицензию, отзывы игроков, методы оплаты, выбор игр и качество поддержки.',
    faq3Q: 'Могу ли я играть бесплатно?',
    faq3A: 'Большинство казино предлагают демо-версии игр, позволяющие познакомиться с игрой без риска.',
    faq4Q: 'Какие самые популярные игры казино?',
    faq4A: 'К популярным играм относятся слоты, рулетка, блэкджек, покер и игры с живыми дилерами.',
    footer: '© 2024 Лучшие Казино. Играйте ответственно. 18+'
  },
  en: {
    ageTitle: 'Age Verification',
    ageQuestion: 'Are you 18 years old or older?',
    ageYes: 'Yes, I am 18+',
    ageNo: 'No',
    ageWarning: 'You must be 18 years old to enter this site',
    heroTitle: 'Best Online Casinos',
    heroSubtitle: 'Discover top-rated casinos with exclusive bonuses',
    topCasinos: 'Top Casinos',
    allCasinos: 'All Casinos',
    rating: 'Rating',
    bonus: 'Welcome Bonus',
    games: 'Games',
    license: 'License',
    features: 'Features',
    playNow: 'Play Now',
    faqTitle: 'Frequently Asked Questions',
    faq1Q: 'Are online casinos legal?',
    faq1A: 'Yes, online casinos are legal in many jurisdictions when they hold proper gaming licenses.',
    faq2Q: 'How to choose the best online casino?',
    faq2A: 'Look for licensing, player reviews, payment methods, game selection, and customer support quality.',
    faq3Q: 'Can I play for free?',
    faq3A: 'Most casinos offer demo versions of games that let you try without risking real money.',
    faq4Q: 'What are the most popular casino games?',
    faq4A: 'Popular games include slots, roulette, blackjack, poker, and live dealer games.',
    footer: '© 2024 Best Casinos. Play responsibly. 18+'
  }
};

export default function Index() {
  const [showAgeVerification, setShowAgeVerification] = useState(true);
  const [language, setLanguage] = useState<Language>('pl');

  const t = translations[language];

  const handleAgeConfirm = () => {
    setShowAgeVerification(false);
    localStorage.setItem('ageVerified', 'true');
  };

  if (showAgeVerification) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 p-4">
        <Card className="max-w-md w-full shadow-2xl border-primary/20">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <Icon name="ShieldCheck" size={40} className="text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl">{t.ageTitle}</CardTitle>
            <CardDescription className="text-base">{t.ageQuestion}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              onClick={handleAgeConfirm}
              className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-lg py-6"
            >
              {t.ageYes}
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.history.back()}
              className="w-full text-lg py-6"
            >
              {t.ageNo}
            </Button>
            <p className="text-xs text-center text-muted-foreground mt-4">
              {t.ageWarning}
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
                <div className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary p-2.5 rounded-xl">
                  <Icon name="Crown" className="text-primary-foreground" size={28} />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-primary via-primary/90 to-foreground bg-clip-text text-transparent">
                  bkreiting.com
                </span>
                <span className="text-xs text-primary/70 font-semibold tracking-wider">NAJLEPSZE KASYNA</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant={language === 'pl' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLanguage('pl')}
                className={language === 'pl' ? 'bg-primary' : ''}
              >
                🇵🇱 PL
              </Button>
              <Button
                variant={language === 'ru' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLanguage('ru')}
                className={language === 'ru' ? 'bg-primary' : ''}
              >
                🇷🇺 RU
              </Button>
              <Button
                variant={language === 'en' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLanguage('en')}
                className={language === 'en' ? 'bg-primary' : ''}
              >
                🇬🇧 EN
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Icon name="Sparkles" className="text-primary" size={18} />
              <span className="text-sm font-semibold text-primary">Топ-5 Kasyn 2024</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent leading-tight">
              {t.heroTitle}
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {t.heroSubtitle}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Icon name="Shield" className="text-primary" size={20} />
                <span className="text-muted-foreground">Licencjonowane</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Zap" className="text-primary" size={20} />
                <span className="text-muted-foreground">Szybkie wypłaty</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Award" className="text-primary" size={20} />
                <span className="text-muted-foreground">Sprawdzone bonusy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="top" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="top" className="text-base">
                <Icon name="TrendingUp" className="mr-2" size={18} />
                {t.topCasinos}
              </TabsTrigger>
              <TabsTrigger value="all" className="text-base">
                <Icon name="Grid" className="mr-2" size={18} />
                {t.allCasinos}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="top" className="space-y-6">
              {casinos.slice(0, 3).map((casino, index) => (
                <Card key={casino.id} className="card-glow bg-card border-border overflow-hidden">
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-gradient-to-r from-primary to-secondary text-primary-foreground text-lg px-4 py-2">
                      #{index + 1}
                    </Badge>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                      <div className="relative w-32 h-32 flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl"></div>
                        <img 
                          src={casino.logo} 
                          alt={casino.name}
                          className="relative w-full h-full object-contain rounded-2xl bg-card p-4"
                        />
                      </div>
                      
                      <div className="flex-1 space-y-3">
                        <div>
                          <CardTitle className="text-3xl mb-2">{casino.name}</CardTitle>
                          <div className="flex items-center gap-4 flex-wrap">
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-muted-foreground">{t.rating}:</span>
                              <StarRating rating={casino.userRating} />
                              <span className="text-sm font-semibold text-primary">
                                {casino.userRating}/5
                              </span>
                            </div>
                            <Badge variant="outline" className="border-primary/30">
                              <Icon name="Trophy" className="mr-1" size={14} />
                              {casino.rating}/10
                            </Badge>
                          </div>
                        </div>

                        <div className="grid gap-3">
                          <div className="flex items-start gap-2">
                            <Icon name="Gift" className="text-primary mt-1" size={18} />
                            <div>
                              <p className="text-xs text-muted-foreground">{t.bonus}</p>
                              <p className="font-semibold text-primary">{casino.bonus}</p>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-3 text-sm">
                            <div className="flex items-center gap-2">
                              <Icon name="Gamepad2" className="text-muted-foreground" size={16} />
                              <span>{casino.games}+ {t.games}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Icon name="ShieldCheck" className="text-muted-foreground" size={16} />
                              <span>{casino.license}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-2">{t.features}:</p>
                      <div className="flex flex-wrap gap-2">
                        {casino.features.map((feature, i) => (
                          <Badge key={i} variant="secondary">
                            <Icon name="Check" className="mr-1" size={12} />
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="bg-muted/30 pt-6">
                    <Button 
                      onClick={() => window.open(casino.url, '_blank')}
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-lg py-6"
                    >
                      <Icon name="ExternalLink" className="mr-2" size={20} />
                      {t.playNow}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="all" className="grid md:grid-cols-2 gap-6">
              {casinos.map((casino) => (
                <Card key={casino.id} className="card-glow bg-card border-border">
                  <CardHeader>
                    <div className="flex gap-4 items-center mb-4">
                      <img 
                        src={casino.logo} 
                        alt={casino.name}
                        className="w-20 h-20 object-contain rounded-lg bg-muted p-2"
                      />
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-1">{casino.name}</CardTitle>
                        <div className="flex items-center gap-2">
                          <StarRating rating={casino.userRating} size={16} />
                          <span className="text-sm text-muted-foreground">
                            {casino.userRating}/5
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <CardDescription className="space-y-2">
                      <div className="flex items-start gap-2">
                        <Icon name="Gift" className="text-primary mt-0.5" size={16} />
                        <span className="text-sm font-medium text-foreground">{casino.bonus}</span>
                      </div>
                    </CardDescription>
                  </CardHeader>

                  <CardFooter>
                    <Button 
                      onClick={() => window.open(casino.url, '_blank')}
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                    >
                      {t.playNow}
                      <Icon name="ExternalLink" className="ml-2" size={16} />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Icon name="HelpCircle" className="mx-auto text-primary mb-4" size={48} />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.faqTitle}</h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{t.faq1Q}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {t.faq1A}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{t.faq2Q}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {t.faq2A}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{t.faq3Q}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {t.faq3A}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{t.faq4Q}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {t.faq4A}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-card/50 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-lg">
                <Icon name="Crown" className="text-primary-foreground" size={24} />
              </div>
              <span className="text-xl font-bold">bkreiting.com</span>
            </div>
            
            <p className="text-center text-sm text-muted-foreground max-w-2xl">
              {t.footer}
            </p>
            
            <div className="flex items-center gap-6 text-xs text-muted-foreground">
              <span>© 2024 bkreiting.com</span>
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
