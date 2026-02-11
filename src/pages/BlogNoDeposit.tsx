import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function BlogNoDeposit() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Czy bonus bez depozytu się opłaca? - bkreiting.com';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Bonus bez depozytu pozwala grać bez wpłaty. Sprawdź, czy jest korzystny, jakie ma wady i zalety oraz kiedy warto z niego skorzystać.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Bonus bez depozytu pozwala grać bez wpłaty. Sprawdź, czy jest korzystny, jakie ma wady i zalety oraz kiedy warto z niego skorzystać.';
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
              onClick={() => navigate('/blog')}
              variant="outline"
              className="border-primary/30 hover:bg-primary/10"
            >
              <Icon name="ArrowLeft" className="mr-2" size={18} />
              Blog
            </Button>
          </div>
        </div>
      </header>

      <article className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm text-foreground/60">
                  <Icon name="Calendar" className="inline mr-1" size={14} />
                  11 lutego 2026
                </span>
                <span className="text-sm text-foreground/60">
                  <Icon name="Clock" className="inline mr-1" size={14} />
                  8 min czytania
                </span>
                <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30">
                  Bonusy
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Czy bonus bez depozytu się opłaca?
              </h1>
              
              <div className="flex items-center gap-3 text-sm text-foreground/60">
                <Icon name="User" size={16} />
                <span>Redakcja bkreiting.com</span>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl mb-12 h-64 md:h-96">
              <div className="w-full h-full bg-gradient-to-br from-secondary/20 via-primary/10 to-primary/20 flex items-center justify-center">
                <Icon name="Gift" className="text-primary opacity-30" size={120} />
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-card border border-border rounded-xl p-8 space-y-6 text-foreground/90 leading-relaxed">
                <p className="text-lg">
                  Bonus bez depozytu to jedna z najczęściej wyszukiwanych promocji kasynowych w Polsce. Przyciąga uwagę prostą obietnicą — możesz zagrać, nie wydając ani złotówki. Brzmi kusząco, ale czy rzeczywiście jest tak korzystny, jak sugerują materiały promocyjne?
                </p>

                <p className="text-lg">
                  Opinie graczy na ten temat są podzielone. Jedni traktują go jako świetną okazję do sprawdzenia nowej platformy bez finansowego zobowiązania. Inni po lekturze regulaminu dochodzą do wniosku, że warunki obrotu sprawiają, iż realna wypłata wygranej graniczy z cudem. Prawda — jak zwykle — leży gdzieś pośrodku.
                </p>

                <p className="text-lg">
                  W tym artykule przyglądamy się temu zagadnieniu bez emocji i reklamy. Rozbieramy mechanizm działania, analizujemy realne zalety i ograniczenia, a na koniec odpowiadamy wprost: kiedy taki bonus ma sens, a kiedy lepiej go pominąć.
                </p>

                <div className="bg-primary/10 border-l-4 border-primary rounded-lg p-6 my-8">
                  <p className="text-lg font-semibold text-primary mb-2 flex items-center gap-2">
                    <Icon name="Info" size={20} />
                    Więcej treści w drodze
                  </p>
                  <p className="text-foreground/80">
                    Pracujemy nad kolejnymi sekcjami tego artykułu. Wkrótce dodamy szczegółową analizę bonusów bez depozytu.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <Button 
                onClick={() => navigate('/blog')}
                variant="outline"
                className="border-primary/30 hover:bg-primary/10"
              >
                <Icon name="ArrowLeft" className="mr-2" size={18} />
                Powrót do bloga
              </Button>
              <Button 
                onClick={() => navigate('/')}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Icon name="Home" className="mr-2" size={18} />
                Strona główna
              </Button>
            </div>
          </div>
        </div>
      </article>

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
