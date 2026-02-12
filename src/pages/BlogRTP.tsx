import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function BlogRTP() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Sloty z wysokim RTP – co to znaczy? | Poradnik 2026';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'RTP w slotach – jak działa, co oznacza i czy warto wybierać automaty z wysokim RTP? Praktyczny przewodnik po wskaźniku zwrotu w kasynach online.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'RTP w slotach – jak działa, co oznacza i czy warto wybierać automaty z wysokim RTP? Praktyczny przewodnik po wskaźniku zwrotu w kasynach online.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="gap-2"
          >
            <Icon name="Home" size={20} />
            Strona główna
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate('/blog')}
            className="gap-2 mb-4"
          >
            <Icon name="ArrowLeft" size={20} />
            Powrót do bloga
          </Button>
        </div>

        <article>
          <header className="mb-8">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
              <Icon name="Calendar" size={16} />
              <time dateTime="2026-02-12">12 lutego 2026</time>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Icon name="Clock" size={16} />
                <span>5 min czytania</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Sloty z wysokim RTP – co to znaczy?
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                RTP
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Automaty
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Poradnik
              </span>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Przeglądając opisy automatów online, niemal zawsze natkniesz się na skrót RTP. Jedni gracze traktują go jako najważniejszy parametr przy wyborze slotu, inni kompletnie go ignorują. Prawda – jak zwykle – leży gdzieś pośrodku.
            </p>
          </header>

          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-foreground/80 leading-relaxed">
              RTP to procentowy wskaźnik teoretycznego zwrotu, który mówi, ile z postawionych pieniędzy slot oddaje graczom w długim okresie. Brzmi prosto, ale interpretacja tego parametru potrafi być zaskakująco myląca. Czy automat z RTP 97% rzeczywiście daje lepsze szanse niż ten z 94%? Czy wysoki procent zwrotu oznacza, że wygrasz częściej? I wreszcie – czy warto w ogóle kierować się tym wskaźnikiem?
            </p>

            <p className="text-foreground/80 leading-relaxed">
              W tym artykule wyjaśniamy wszystko, co powinieneś wiedzieć o RTP: od definicji, przez praktyczne różnice między automatami, aż po najczęstsze mity, które mogą prowadzić do błędnych decyzji.
            </p>

            <Card className="border-primary/20 my-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Info" className="text-primary" size={24} />
                  Czekaj na więcej treści
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">
                  Artykuł jest w trakcie tworzenia. Wkrótce dodamy szczegółowe informacje o tym, jak działa RTP, jakie są różnice między slotami o różnym RTP oraz jak praktycznie wykorzystać tę wiedzę podczas gry.
                </p>
              </CardContent>
            </Card>

            <div className="border-t border-border pt-8 mt-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                <Icon name="TrendingUp" className="text-primary" size={28} />
                Co dalej w artykule?
              </h2>

              <div className="grid gap-4">
                <Card className="border-muted">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Icon name="BookOpen" className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Definicja RTP i jak to działa</h3>
                        <p className="text-sm text-muted-foreground">
                          Dokładne wyjaśnienie wskaźnika RTP, jak się go oblicza i co faktycznie oznacza dla gracza
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-muted">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Icon name="BarChart" className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Różnice między slotami</h3>
                        <p className="text-sm text-muted-foreground">
                          Praktyczne porównanie automatów z RTP 94%, 96% i 98% – jak wpływa to na Twoje szanse
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-muted">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Icon name="AlertCircle" className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Najczęstsze mity o RTP</h3>
                        <p className="text-sm text-muted-foreground">
                          Co NIE jest prawdą o RTP i jakie błędy popełniają gracze przy interpretacji tego wskaźnika
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-12 pt-8 border-t border-border">
          <Button
            variant="outline"
            onClick={() => navigate('/blog')}
            className="gap-2"
          >
            <Icon name="ArrowLeft" size={20} />
            Zobacz więcej artykułów
          </Button>
        </div>
      </main>
    </div>
  );
}
