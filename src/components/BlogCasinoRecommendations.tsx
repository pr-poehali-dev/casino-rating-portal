import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

interface Casino {
  id: number;
  name: string;
  rating: number;
  bonus: string;
  features: string[];
  image: string;
  link: string;
}

const topCasinos: Casino[] = [
  {
    id: 1,
    name: 'Vavada Casino',
    rating: 4.8,
    bonus: '100% do 5000 PLN + 100 FS',
    features: ['Szybkie wypłaty', 'Ogromny wybór gier', 'Live casino'],
    image: 'https://vavada.com/img/logo.svg',
    link: '/vavada'
  },
  {
    id: 2,
    name: 'PlayFortuna',
    rating: 4.7,
    bonus: '125% do 4000 PLN + 200 FS',
    features: ['Legalnie w Polsce', 'Bonus bez depozytu', 'Program VIP'],
    image: 'https://playfortuna.com/logo.svg',
    link: '/play-fortuna'
  },
  {
    id: 3,
    name: 'Booi Casino',
    rating: 4.6,
    bonus: '100% do 3000 PLN + 250 FS',
    features: ['Cashback do 25%', 'Turnament co tydzień', 'Crypto płatności'],
    image: 'https://booi.com/logo.svg',
    link: '/booi'
  }
];

export default function BlogCasinoRecommendations() {
  const navigate = useNavigate();

  return (
    <section className="py-12 border-t border-border bg-gradient-to-b from-primary/5 to-transparent rounded-2xl">
      <div className="mb-8 text-center">
        <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2 text-sm mb-4">
          <Icon name="Crown" className="mr-2" size={16} />
          Polecane kasyna
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Najlepsze kasyna online 2026
        </h2>
        <p className="text-foreground/70">
          Sprawdzone platformy z najlepszymi bonusami i szybkimi wypłatami
        </p>
      </div>

      <div className="space-y-4">
        {topCasinos.map((casino, index) => (
          <Card 
            key={casino.id}
            className="bg-card/50 border-border hover:border-primary/50 transition-all overflow-hidden group"
          >
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex items-center gap-4 flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">#{index + 1}</span>
                  </div>
                  <div className="w-32 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center p-3 border border-primary/20">
                    <span className="text-sm font-bold text-primary text-center leading-tight">
                      {casino.name.replace(' Casino', '')}
                    </span>
                  </div>
                </div>

                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{casino.name}</h3>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Icon 
                            key={i}
                            name={i < Math.floor(casino.rating) ? "Star" : "StarOff"} 
                            className={i < Math.floor(casino.rating) ? "text-primary fill-primary" : "text-muted"} 
                            size={16}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-foreground/70">{casino.rating}/5.0</span>
                    </div>
                  </div>

                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon name="Gift" className="text-primary" size={18} />
                      <span className="text-sm text-foreground/70 font-semibold">Bonus powitalny:</span>
                    </div>
                    <p className="text-lg font-bold text-primary">{casino.bonus}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {casino.features.map((feature, idx) => (
                      <Badge 
                        key={idx}
                        variant="outline" 
                        className="border-primary/30 text-foreground/80"
                      >
                        <Icon name="CheckCircle2" className="mr-1 text-primary" size={14} />
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex-shrink-0 w-full md:w-auto">
                  <Button 
                    onClick={() => navigate(casino.link)}
                    className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90 group-hover:scale-105 transition-all px-8 py-6 text-lg"
                  >
                    Odbierz bonus
                    <Icon name="ArrowRight" className="ml-2" size={20} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button 
          onClick={() => navigate('/')}
          variant="outline"
          className="border-primary/30 hover:bg-primary/10"
        >
          Zobacz wszystkie kasyna
          <Icon name="ExternalLink" className="ml-2" size={18} />
        </Button>
      </div>
    </section>
  );
}