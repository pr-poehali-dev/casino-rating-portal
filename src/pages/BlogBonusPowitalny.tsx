import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function BlogBonusPowitalny() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Jak działa bonus powitalny w kasynie online? - bkreiting.com';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Rejestrując się w kasynie internetowym, niemal zawsze natkniesz się na ofertę skierowaną do nowych użytkowników. Właśnie tak wygląda pierwszy kontakt z bonusem powitalnym.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Rejestrując się w kasynie internetowym, niemal zawsze natkniesz się na ofertę skierowaną do nowych użytkowników. Właśnie tak wygląda pierwszy kontakt z bonusem powitalnym.';
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
                Jak działa bonus powitalny w kasynie online?
              </h1>
              
              <div className="flex items-center gap-3 text-sm text-foreground/60">
                <Icon name="User" size={16} />
                <span>Redakcja bkreiting.com</span>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl mb-12 h-64 md:h-96">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/20 flex items-center justify-center">
                <Icon name="Gift" className="text-primary opacity-30" size={120} />
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-card border border-border rounded-xl p-8 space-y-6 text-foreground/90 leading-relaxed">
                <p className="text-lg">
                  Rejestrując się w kasynie internetowym, niemal zawsze natkniesz się na ofertę skierowaną do nowych użytkowników. Właśnie tak wygląda pierwszy kontakt z bonusem powitalnym — mechanizmem, który kasyna stosują od lat, by przyciągnąć graczy i zachęcić ich do założenia konta. Ale co to jest bonus powitalny w praktyce? Czy rzeczywiście daje przewagę, czy raczej wiąże się z warunkami, o których mało kto czyta?
                </p>

                <p className="text-lg">
                  Pakiet powitalny dla nowych graczy to najczęściej dodatkowe środki lub darmowe obroty przyznawane po rejestracji i pierwszej wpłacie. Kasyna traktują go jako inwestycję marketingową — oferują coś w zamian za Twoją uwagę i dane. Nie jest to prezent bez zobowiązań, choć tak bywa przedstawiany. Jeśli szukasz rzetelnych informacji i opinii o bonusie na start w kasynie online, ten artykuł wyjaśni Ci wszystko krok po kroku — od rodzajów bonusów, przez warunki obrotu, aż po realne problemy, z jakimi spotykają się gracze.
                </p>

                <p className="text-lg">
                  Czy każdy gracz może otrzymać taki bonus? Teoretycznie tak — wystarczy być nowym użytkownikiem danej platformy. W praktyce jednak istnieje szereg wymagań, które trzeba spełnić. Przyjrzyjmy się temu bliżej.
                </p>

                <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-l-4 border-primary rounded-lg p-6 my-8">
                  <div className="flex items-start gap-3">
                    <Icon name="AlertCircle" className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="font-semibold text-primary mb-2">Ważna informacja</p>
                      <p className="text-foreground/80">
                        Artykuł w trakcie tworzenia. Wkrótce pojawi się pełna treść z dodatkowymi sekcjami i praktycznymi przykładami.
                      </p>
                    </div>
                  </div>
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
