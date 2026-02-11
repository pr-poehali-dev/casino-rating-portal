import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function BlogWagering() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Czym jest wagering i jak go obliczyć?';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Bonusy w kasynach online wiążą się z wageringiem. Dowiedz się, czym jest wymagany obrót bonusem, jak go obliczyć i na co uważać przy bonusach.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Bonusy w kasynach online wiążą się z wageringiem. Dowiedz się, czym jest wymagany obrót bonusem, jak go obliczyć i na co uważać przy bonusach.';
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
                  7 min czytania
                </span>
                <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30">
                  Bonusy
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Czym jest wagering i jak go obliczyć?
              </h1>
              
              <div className="flex items-center gap-3 text-sm text-foreground/60">
                <Icon name="User" size={16} />
                <span>Redakcja bkreiting.com</span>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl mb-12 h-64 md:h-96">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/20 flex items-center justify-center">
                <Icon name="Calculator" className="text-primary opacity-30" size={120} />
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-card border border-border rounded-xl p-8 space-y-6 text-foreground/90 leading-relaxed">
                <p className="text-lg">
                  Bonusy w kasynach online wyglądają kusząco — dodatkowe środki na grę, darmowe spiny czy podwojenie depozytu. Jednak niemal każda taka promocja wiąże się z warunkami, których wielu graczy nie czyta lub nie rozumie. Najważniejszym z tych warunków jest właśnie wagering, czyli wymagany obrót bonusem.
                </p>

                <p className="text-lg">
                  W praktyce oznacza to, że otrzymanych środków bonusowych nie można od razu wypłacić. Trzeba je najpierw „obrócić" — postawić określoną liczbę razy w grach kasynowych. Dopiero po spełnieniu tego warunku ewentualna wygrana staje się dostępna do wypłaty. Brzmi prosto, ale diabeł tkwi w szczegółach. Ten artykuł wyjaśnia krok po kroku, czym dokładnie jest wagering, jak go obliczyć i dlaczego warto znać te zasady, zanim aktywujesz jakikolwiek bonus.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Co to jest wagering w kasynie?</h2>
                
                <p className="text-lg">
                  Wagering to wymóg obrotu, jaki kasyno nakłada na środki bonusowe. Określa, ile razy gracz musi postawić kwotę bonusu (lub bonusu i depozytu łącznie), zanim będzie mógł wypłacić wygrane. Warunek ten wyrażany jest jako mnożnik — np. x20, x30 czy x40.
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Dlaczego kasyna stosują wagering?</h3>
                
                <p className="text-lg">
                  Mechanizm ten pełni prostą funkcję — chroni kasyno przed natychmiastową wypłatą środków bonusowych. Gdyby takiego warunku nie było, każdy gracz mógłby odebrać bonus i od razu przelać go na konto bankowe. Wagering wymusza faktyczną grę, co jest warunkiem korzystania z promocji.
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Obrót bonusem a obrót depozytem — różnica</h3>
                
                <p className="text-lg">
                  To kluczowe rozróżnienie, które wpływa na całkowitą kwotę, jaką trzeba postawić. W niektórych przypadkach wagering dotyczy wyłącznie kwoty bonusu. W innych obejmuje zarówno bonus, jak i wpłacony depozyt. Różnica bywa ogromna — przy depozycie 200 zł i bonusie 200 zł wagering x30 tylko od bonusu to 6000 zł obrotu, ale jeśli dotyczy bonusu i depozytu, kwota rośnie do 12 000 zł. Dlatego zawsze warto sprawdzić, od jakiej podstawy liczony jest mnożnik.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Jak obliczyć wagering krok po kroku?</h2>
                
                <p className="text-lg">
                  Obliczenie wymaganego obrotu nie wymaga zaawansowanej matematyki. Wystarczy prosta formuła:
                </p>

                <div className="bg-card border-2 border-primary/30 rounded-xl p-6 my-6">
                  <p className="text-xl font-bold text-primary text-center">
                    Wymagany obrót = kwota objęta wageringiem × mnożnik
                  </p>
                </div>

                <p className="text-lg">
                  Poniżej kilka przykładów, które pokazują, jak to działa w praktyce.
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Przykład 1 — wagering tylko od bonusu</h3>
                
                <p className="text-lg mb-3">
                  Gracz wpłaca 200 zł i otrzymuje bonus 200 zł. Wagering wynosi x30 i dotyczy wyłącznie bonusu.
                </p>
                
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 my-4">
                  <p className="text-lg font-semibold text-primary mb-2">Obliczenie:</p>
                  <p className="text-lg">200 zł × 30 = <strong className="text-primary">6000 zł obrotu</strong></p>
                </div>

                <p className="text-lg">
                  To oznacza, że gracz musi łącznie postawić 6000 zł w kwalifikujących się grach, zanim będzie mógł wypłacić wygrane z bonusu.
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Przykład 2 — wagering od bonusu i depozytu</h3>
                
                <p className="text-lg mb-3">
                  Gracz wpłaca 300 zł i otrzymuje bonus 300 zł. Wagering x25 dotyczy sumy depozytu i bonusu.
                </p>
                
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 my-4">
                  <p className="text-lg font-semibold text-primary mb-2">Obliczenie:</p>
                  <p className="text-lg">(300 zł + 300 zł) × 25 = <strong className="text-primary">15 000 zł obrotu</strong></p>
                </div>

                <p className="text-lg">
                  Jak widać, ta sama wartość mnożnika generuje znacznie wyższą kwotę, gdy obrót liczony jest od obu składników.
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Przykład 3 — darmowe spiny z wageringiem</h3>
                
                <p className="text-lg mb-3">
                  Gracz otrzymuje 50 darmowych spinów, z których wygrywa 80 zł. Wygrana objęta jest wageringiem x40.
                </p>
                
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 my-4">
                  <p className="text-lg font-semibold text-primary mb-2">Obliczenie:</p>
                  <p className="text-lg">80 zł × 40 = <strong className="text-primary">3200 zł obrotu</strong></p>
                </div>

                <p className="text-lg">
                  W przypadku free spinów wagering odnosi się zazwyczaj do kwoty wygranej, a nie do liczby spinów. To częsty punkt nieporozumień.
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Jak działa mnożnik?</h3>
                
                <p className="text-lg">
                  Mnożnik to po prostu liczba, która określa, ile razy trzeba postawić daną kwotę. Im wyższy mnożnik, tym więcej trzeba zagrać. Wagering x20 jest uznawany za stosunkowo niski i korzystny. Wartość x30–x35 to standard rynkowy. Mnożnik x40 i wyżej oznacza już poważne wymagania, które trudniej spełnić.
                </p>

                <p className="text-lg">
                  Warto pamiętać, że obrót to łączna suma zakładów, nie strat. Jeśli postawisz 50 zł i wygrasz 60 zł, a potem postawisz te 60 zł — Twój obrót wynosi 110 zł. Środki „krążą" w grze, co oznacza, że nie musisz dysponować pełną kwotą obrotu jednocześnie.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Jakie gry liczą się do wageringu?</h2>
                
                <p className="text-lg">
                  Nie każda gra w kasynie przyczynia się w równym stopniu do realizacji wymaganego obrotu. Kasyna określają tzw. procentowy wkład poszczególnych kategorii gier — i to kolejny element, który warto znać przed rozpoczęciem gry z bonusem.
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Automaty online — zazwyczaj 100%</h3>
                
                <p className="text-lg">
                  W zdecydowanej większości przypadków gry na automatach (sloty) liczą się do wageringu w 100%. Oznacza to, że każda postawiona złotówka w pełni zalicza się do wymaganego obrotu. To dlatego automaty są najczęściej wybierane przez graczy realizujących warunki bonusu.
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Gry stołowe — częściowy wkład</h3>
                
                <p className="text-lg mb-3">
                  Ruletka, blackjack, bakarat i poker w wersji kasynowej najczęściej mają obniżony wkład do wageringu. Typowe wartości to:
                </p>

                <div className="bg-card border border-primary/20 rounded-lg p-5 my-4 space-y-2">
                  <p className="text-lg"><strong className="text-primary">Ruletka</strong> — 10–20% wkładu</p>
                  <p className="text-lg"><strong className="text-primary">Blackjack</strong> — 5–10% wkładu</p>
                  <p className="text-lg"><strong className="text-primary">Bakarat</strong> — 5–15% wkładu</p>
                </div>

                <p className="text-lg">
                  W praktyce oznacza to, że postawienie 100 zł w blackjacku przy wkładzie 10% zalicza jedynie 10 zł do wymaganego obrotu. Spełnienie wageringu grając wyłącznie w gry stołowe jest więc znacznie trudniejsze i bardziej czasochłonne.
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Gry wykluczone</h3>
                
                <p className="text-lg">
                  Niektóre tytuły lub kategorie gier mogą być całkowicie wyłączone z realizacji wageringu. Często dotyczy to wybranych automatów o wysokim RTP, gier z jackpotem progresywnym lub określonych wariantów ruletki. Gra w wykluczone tytuły nie tylko nie zalicza obrotu, ale w wielu przypadkach może prowadzić do utraty bonusu i wygranych.
                </p>

                <div className="bg-primary/10 border-l-4 border-primary rounded-lg p-6 my-8">
                  <p className="text-lg font-semibold text-primary mb-2 flex items-center gap-2">
                    <Icon name="Info" size={20} />
                    Więcej treści w drodze
                  </p>
                  <p className="text-foreground/80">
                    Pracujemy nad kolejnymi sekcjami tego artykułu. Wkrótce dodamy więcej porad i przykładów dotyczących wageringu.
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