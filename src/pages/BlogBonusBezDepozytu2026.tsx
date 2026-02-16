import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import BlogShareButtons from '@/components/BlogShareButtons';
import BlogRelatedPosts from '@/components/BlogRelatedPosts';
import BlogCasinoRecommendations from '@/components/BlogCasinoRecommendations';

export default function BlogBonusBezDepozytu2026() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Najlepsze bonusy bez depozytu 2026 – ranking kasyn online w Polsce';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Najlepsze bonusy bez depozytu 2026 – ranking kasyn online w Polsce. Sprawdź aktualne oferty darmowych spinów i gotówki za rejestrację bez wpłaty.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Najlepsze bonusy bez depozytu 2026 – ranking kasyn online w Polsce. Sprawdź aktualne oferty darmowych spinów i gotówki za rejestrację bez wpłaty.';
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
              <div className="flex flex-col">
                <span className="text-lg font-bold bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">bkreiting.com</span>
                <div className="flex items-center gap-1 text-xs text-primary/60">
                  <span>POLSKA 2026</span>
                  <Icon name="Dices" className="text-primary/70" size={12} />
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
                  16 lutego 2026
                </span>
                <span className="text-sm text-foreground/60">
                  <Icon name="Clock" className="inline mr-1" size={14} />
                  12 min czytania
                </span>
                <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30">
                  Bonusy
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Najlepsze bonusy bez depozytu 2026 – ranking kasyn online w Polsce
              </h1>

              <div className="flex items-center gap-3 text-sm text-foreground/60">
                <Icon name="User" size={16} />
                <span>Redakcja bkreiting.com</span>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl mb-12 h-64 md:h-96 bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <Icon name="Gift" className="text-primary" size={64} />
                  <Icon name="Sparkles" className="text-primary/60" size={32} />
                </div>
                <p className="text-2xl font-bold text-primary">Bonusy bez depozytu 2026</p>
                <p className="text-foreground/60">Ranking najlepszych ofert w Polsce</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-card border border-border rounded-xl p-8 space-y-6 text-foreground/90 leading-relaxed">
                <p className="text-lg">
                  Rynek hazardu online w Polsce rozwija się dynamicznie, a kasyna internetowe prześcigają się w ofertach dla nowych graczy. Jedną z najbardziej poszukiwanych promocji są <strong className="text-primary">bonusy bez depozytu</strong> – nagrody przyznawane wyłącznie za założenie konta, bez konieczności wpłacania własnych środków. Brzmi kusząco, ale czy rzeczywiście warto z nich korzystać? Jakie warunki kryją się za atrakcyjnymi hasłami reklamowymi? I wreszcie – które oferty w 2026 roku zasługują na uwagę polskich graczy?
                </p>

                <p className="text-lg">
                  W tym przewodniku przyglądamy się tematowi kompleksowo. Wyjaśniamy mechanizm działania bonusów bez depozytu, prezentujemy aktualny ranking kasyn, analizujemy oferty <strong className="text-primary">darmowych spinów</strong> i gotówki za rejestrację, a także podpowiadamy, na co zwracać uwagę przy wyborze promocji. Naszym celem jest dostarczenie rzetelnych informacji, które pomogą podjąć świadomą decyzję – bez marketingowych przesadzeń i nierealistycznych obietnic.
                </p>
              </div>
            </div>

            <BlogShareButtons />

            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 mt-12">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-primary/20 rounded-2xl p-6">
                    <Icon name="Send" className="text-primary" size={48} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">
                    Podobał Ci się artykuł?
                  </h3>
                  <p className="text-foreground/70 mb-4">
                    Dołącz do naszego kanału Telegram i otrzymuj więcej porad, ekskluzywnych bonusów i aktualności!
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <a href="https://t.me/bkreitingcom" target="_blank" rel="noopener noreferrer">
                      <Icon name="Send" className="mr-2" size={20} />
                      Dołącz do Kanału Telegram
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <BlogCasinoRecommendations />

            <BlogRelatedPosts currentPostId={7} category="Bonusy" />

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
