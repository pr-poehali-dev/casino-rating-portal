import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

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
    id: 2,
    title: 'Jak wybrać najlepszy slot online w 2026? Poradnik dla początkujących',
    excerpt: 'Automaty do gier to najpopularniejsza forma rozrywki w kasynach online. Dowiedz się, na co zwracać uwagę przy wyborze slotu, czym jest RTP i jak działają darmowe spiny.',
    category: 'Poradniki',
    date: '8 lutego 2026',
    readTime: '5 min',
    image: 'slots',
    author: 'Redakcja bkreiting.com',
    slug: 'jak-wybrac-najlepszy-slot'
  },
  {
    id: 3,
    title: 'Top 5 strategii gry w blackjack - zwiększ swoje szanse na wygraną',
    excerpt: 'Blackjack to jedna z niewielu gier kasynowych, gdzie strategia naprawdę ma znaczenie. Poznaj podstawowe zasady zarządzania bankrollem i taktyki używane przez profesjonalistów.',
    category: 'Strategie',
    date: '5 lutego 2026',
    readTime: '7 min',
    image: 'blackjack',
    author: 'Redakcja bkreiting.com',
    slug: 'top-5-strategii-blackjack'
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

      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-primary/5 via-transparent to-transparent">
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
          <Icon name="BookOpen" className="absolute top-10 left-5 text-primary animate-pulse" size={120} style={{ animationDuration: '3s' }} />
          <Icon name="Lightbulb" className="absolute top-32 right-10 text-primary/80 animate-pulse" size={100} style={{ animationDuration: '4s', animationDelay: '1s' }} />
          <Icon name="TrendingUp" className="absolute bottom-10 left-20 text-primary/70 animate-pulse" size={110} style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
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
              <Badge variant="outline" className="border-primary/30 hover:bg-primary/10 cursor-pointer px-4 py-2">
                <Icon name="Sparkles" className="mr-2" size={14} />
                Wszystkie
              </Badge>
              <Badge variant="outline" className="border-primary/30 hover:bg-primary/10 cursor-pointer px-4 py-2">
                <Icon name="BookOpen" className="mr-2" size={14} />
                Poradniki
              </Badge>
              <Badge variant="outline" className="border-primary/30 hover:bg-primary/10 cursor-pointer px-4 py-2">
                <Icon name="Target" className="mr-2" size={14} />
                Strategie
              </Badge>
              <Badge variant="outline" className="border-primary/30 hover:bg-primary/10 cursor-pointer px-4 py-2">
                <Icon name="Gift" className="mr-2" size={14} />
                Bonusy
              </Badge>
              <Badge variant="outline" className="border-primary/30 hover:bg-primary/10 cursor-pointer px-4 py-2">
                <Icon name="TrendingUp" className="mr-2" size={14} />
                Nowości
              </Badge>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card 
                  key={post.id} 
                  className="bg-card border-border hover:border-primary/50 transition-all hover:scale-105 cursor-pointer overflow-hidden group"
                >
                  <div className="relative overflow-hidden h-48">
                    {post.image === 'nodeposit' && (
                      <div className="w-full h-full bg-gradient-to-br from-secondary/20 via-primary/10 to-primary/20 flex items-center justify-center">
                        <Icon name="Gift" className="text-primary opacity-30" size={80} />
                      </div>
                    )}
                    {post.image === 'wagering' && (
                      <img 
                        src="https://cdn.poehali.dev/projects/c2933cfb-9ddd-413a-a6ef-7b99d3f5e883/bucket/b9bf7684-0c17-4bc2-949a-c531dfe9e221.jpg"
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                    {post.image === 'slots' && (
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 flex items-center justify-center">
                        <Icon name="Dices" className="text-primary opacity-30" size={80} />
                      </div>
                    )}
                    {post.image === 'blackjack' && (
                      <div className="w-full h-full bg-gradient-to-br from-secondary/20 via-primary/10 to-primary/20 flex items-center justify-center">
                        <Icon name="Spade" className="text-primary opacity-30" size={80} />
                      </div>
                    )}
                    {post.image === 'bonus' && (
                      <img 
                        src="https://cdn.poehali.dev/projects/c2933cfb-9ddd-413a-a6ef-7b99d3f5e883/bucket/26909adb-1e22-47a8-ab0e-7cfc23d1a006.jpg"
                        alt={post.title}
                        className="w-full h-full object-cover"
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
                      <Icon name="Mail" className="text-primary-foreground" size={48} />
                    </div>
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    Zapisz się do newslettera
                  </h3>
                  <p className="text-foreground/70 mb-4">
                    Otrzymuj najnowsze artykuły, ekskluzywne bonusy i poradniki ekspertów prosto na swoją skrzynkę
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto md:mx-0">
                    <input 
                      type="email" 
                      placeholder="Twój adres e-mail"
                      className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-primary"
                    />
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6">
                      <Icon name="Send" className="mr-2" size={18} />
                      Zapisz się
                    </Button>
                  </div>
                  <p className="text-xs text-foreground/50 mt-3">
                    Gwarantujemy prywatność. Bez spamu.
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