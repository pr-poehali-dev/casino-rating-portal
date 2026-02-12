import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 6,
    title: 'Sloty z wysokim RTP – co to znaczy?',
    excerpt: 'RTP to wskaźnik teoretycznego zwrotu w slotach. Dowiedz się, jak działa, co oznacza dla gracza i czy warto wybierać automaty z wysokim RTP.',
    category: 'Poradniki',
    date: '12 lutego 2026',
    readTime: '10 min',
    image: 'rtp',
    author: 'Redakcja bkreiting.com',
    slug: 'sloty-z-wysokim-rtp'
  },
  {
    id: 5,
    title: 'Czy bonus bez depozytu się opłaca?',
    excerpt: 'Bonus bez depozytu to promocja, która pozwala grać bez wpłaty. Sprawdź, czy rzeczywiście jest tak korzystny, jak obiecują kasyna i kiedy warto z niego skorzystać.',
    category: 'Bonusy',
    date: '11 lutego 2026',
    readTime: '8 min',
    image: 'nodeposit',
    author: 'Redakcja bkreiting.com',
    slug: 'czy-bonus-bez-depozytu-sie-oplaca'
  },
  {
    id: 4,
    title: 'Czym jest wagering i jak go obliczyć?',
    excerpt: 'Bonusy w kasynach online wyglądają kusząco, ale niemal każda promocja wiąże się z wageringiem. Dowiedz się, czym jest wymagany obrót bonusem i jak go prawidłowo obliczyć.',
    category: 'Bonusy',
    date: '11 lutego 2026',
    readTime: '7 min',
    image: 'wagering',
    author: 'Redakcja bkreiting.com',
    slug: 'czym-jest-wagering'
  },
  {
    id: 1,
    title: 'Jak działa bonus powitalny w kasynie online?',
    excerpt: 'Rejestrując się w kasynie internetowym, niemal zawsze natkniesz się na ofertę skierowaną do nowych użytkowników. Właśnie tak wygląda pierwszy kontakt z bonusem powitalnym.',
    category: 'Bonusy',
    date: '11 lutego 2026',
    readTime: '8 min',
    image: 'bonus',
    author: 'Redakcja bkreiting.com',
    slug: 'jak-dziala-bonus-powitalny'
  }
];

export default function Blog() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('Wszystkie');

  const filteredPosts = selectedCategory === 'Wszystkie' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  useEffect(() => {
    document.title = 'Blog - bkreiting.com';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Blog o kasynach online - poradniki, strategie, recenzje i aktualności ze świata gier hazardowych w Polsce.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Blog o kasynach online - poradniki, strategie, recenzje i aktualności ze świata gier hazardowych w Polsce.';
      document.head.appendChild(meta);
    }

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/30 transition-all duration-300"></div>
                <img 
                  src="https://cdn.poehali.dev/projects/c2933cfb-9ddd-413a-a6ef-7b99d3f5e883/bucket/a7cfc0ea-3593-4a47-a978-d8ffc6530c98.png"
                  alt="BKR Logo"
                  className="relative w-20 h-20 md:w-24 md:h-24 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </button>
            <Button 
              onClick={() => navigate('/')}
              variant="outline"
              className="border-primary/30 hover:bg-primary/10"
            >
              <Icon name="ArrowLeft" className="mr-2" size={18} />
              Powrót
            </Button>
          </div>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://cdn.poehali.dev/projects/c2933cfb-9ddd-413a-a6ef-7b99d3f5e883/bucket/243c8c17-53ff-402d-9b30-aeaa32b95e25.jpg"
            alt="Blog o Kasynach Online"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background/95"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2 text-sm">
              <Icon name="Newspaper" className="mr-2" size={16} />
              Blog o Kasynach Online
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Porady, Strategie i <span className="text-primary gold-glow">Aktualności</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
              Eksperckie artykuły o kasynach online, bonusach, strategiach gry i najnowszych trendach w branży hazardowej
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3 mb-12 justify-center">
              <Badge 
                variant="outline" 
                onClick={() => setSelectedCategory('Wszystkie')}
                className={`border-primary/30 hover:bg-primary/10 cursor-pointer px-4 py-2 transition-all ${selectedCategory === 'Wszystkie' ? 'bg-primary text-primary-foreground border-primary' : ''}`}
              >
                <Icon name="Sparkles" className="mr-2" size={14} />
                Wszystkie
              </Badge>
              <Badge 
                variant="outline" 
                onClick={() => setSelectedCategory('Poradniki')}
                className={`border-primary/30 hover:bg-primary/10 cursor-pointer px-4 py-2 transition-all ${selectedCategory === 'Poradniki' ? 'bg-primary text-primary-foreground border-primary' : ''}`}
              >
                <Icon name="BookOpen" className="mr-2" size={14} />
                Poradniki
              </Badge>
              <Badge 
                variant="outline" 
                onClick={() => setSelectedCategory('Strategie')}
                className={`border-primary/30 hover:bg-primary/10 cursor-pointer px-4 py-2 transition-all ${selectedCategory === 'Strategie' ? 'bg-primary text-primary-foreground border-primary' : ''}`}
              >
                <Icon name="Target" className="mr-2" size={14} />
                Strategie
              </Badge>
              <Badge 
                variant="outline" 
                onClick={() => setSelectedCategory('Bonusy')}
                className={`border-primary/30 hover:bg-primary/10 cursor-pointer px-4 py-2 transition-all ${selectedCategory === 'Bonusy' ? 'bg-primary text-primary-foreground border-primary' : ''}`}
              >
                <Icon name="Gift" className="mr-2" size={14} />
                Bonusy
              </Badge>
              <Badge 
                variant="outline" 
                onClick={() => setSelectedCategory('Nowości')}
                className={`border-primary/30 hover:bg-primary/10 cursor-pointer px-4 py-2 transition-all ${selectedCategory === 'Nowości' ? 'bg-primary text-primary-foreground border-primary' : ''}`}
              >
                <Icon name="TrendingUp" className="mr-2" size={14} />
                Nowości
              </Badge>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card 
                  key={post.id} 
                  className="bg-card border-border hover:border-primary/50 transition-all hover:scale-105 cursor-pointer overflow-hidden group"
                >
                  <div className="relative overflow-hidden h-48">
                    {post.image === 'rtp' && (
                      <img 
                        src="https://cdn.poehali.dev/projects/c2933cfb-9ddd-413a-a6ef-7b99d3f5e883/bucket/b4e83b02-1d89-404e-abf2-a33af0aad675.jpg"
                        alt={post.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    )}
                    {post.image === 'nodeposit' && (
                      <img 
                        src="https://cdn.poehali.dev/projects/c2933cfb-9ddd-413a-a6ef-7b99d3f5e883/bucket/dd60a2d0-1760-4c47-9950-f0c271536e91.jpg"
                        alt={post.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    )}
                    {post.image === 'wagering' && (
                      <img 
                        src="https://cdn.poehali.dev/projects/c2933cfb-9ddd-413a-a6ef-7b99d3f5e883/bucket/b9bf7684-0c17-4bc2-949a-c531dfe9e221.jpg"
                        alt={post.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    )}
                    {post.image === 'bonus' && (
                      <img 
                        src="https://cdn.poehali.dev/projects/c2933cfb-9ddd-413a-a6ef-7b99d3f5e883/bucket/26909adb-1e22-47a8-ab0e-7cfc23d1a006.jpg"
                        alt={post.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    )}
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-primary/90 text-primary-foreground border-0">
                        {post.category}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-foreground/70 text-sm line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-foreground/60 pt-4 border-t border-border">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Icon name="Calendar" size={14} />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Clock" size={14} />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </CardContent>

                  <div className="px-6 pb-6">
                    <Button 
                      onClick={() => navigate(`/blog/${post.slug}`)}
                      variant="outline" 
                      className="w-full border-primary/30 hover:bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                    >
                      Czytaj więcej
                      <Icon name="ArrowRight" className="ml-2" size={16} />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-16 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full"></div>
                    <div className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary p-6 rounded-2xl">
                      <Icon name="Send" className="text-primary-foreground" size={48} />
                    </div>
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    Dołącz do Kanału Telegram
                  </h3>
                  <p className="text-foreground/70 mb-4">
                    Otrzymuj najnowsze artykuły, ekskluzywne bonusy i porady ekspertów bezpośrednio na Telegram
                  </p>
                  <Button 
                    asChild
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <a href="https://t.me/bkreitingcom" target="_blank" rel="noopener noreferrer">
                      <Icon name="Send" className="mr-2" size={20} />
                      Dołącz do Kanału
                    </a>
                  </Button>
                  <p className="text-xs text-foreground/50 mt-3">
                    Aktualne bonusy i porady w jednym miejscu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-card/30 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Najpopularniejsze tematy
              </h2>
              <p className="text-foreground/70">
                Sprawdź, co czytają inni gracze
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card/50 border-border hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Shield" className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">Bezpieczeństwo w kasynach online</CardTitle>
                      <p className="text-sm text-foreground/70">
                        Jak rozpoznać legalne i bezpieczne kasyno? Licencje, certyfikaty i metody weryfikacji.
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="bg-card/50 border-border hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="DollarSign" className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">Zarządzanie bankrollem</CardTitle>
                      <p className="text-sm text-foreground/70">
                        Podstawowe zasady zarządzania budżetem na gry - jak nie stracić więcej niż planujesz.
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="bg-card/50 border-border hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Gamepad2" className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">RTP i zmienność slotów</CardTitle>
                      <p className="text-sm text-foreground/70">
                        Wyjaśniamy kluczowe pojęcia: Return to Player, volatility i hit frequency w automatach.
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="bg-card/50 border-border hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Zap" className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">Szybkie wypłaty wygranych</CardTitle>
                      <p className="text-sm text-foreground/70">
                        Które kasyna wypłacają najszybciej? Porównanie metod płatności i czasów realizacji.
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-foreground/60">
            <p>© 2026 bkreiting.com. Wszystkie prawa zastrzeżone.</p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <span className="flex items-center gap-1">
                <Icon name="Shield" size={14} />
                18+
              </span>
              <span>Odpowiedzialna Gra</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}