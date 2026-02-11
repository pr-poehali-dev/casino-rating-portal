import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Privacy() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Polityka Prywatności - bkreiting.com';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Polityka prywatności serwisu bkreiting.com - informacje o przetwarzaniu danych osobowych.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Polityka prywatności serwisu bkreiting.com - informacje o przetwarzaniu danych osobowych.';
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

      <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-6">
                <Icon name="Shield" className="text-primary" size={40} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Polityka Prywatności
              </h1>
              <p className="text-lg text-foreground/70">
                Ostatnia aktualizacja: 11 lutego 2026
              </p>
            </div>

            <Card className="border-primary/20">
              <CardContent className="p-8 md:p-12 space-y-8">
                <section>
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Icon name="Info" className="text-primary" size={24} />
                      1. Informacje ogólne
                    </CardTitle>
                  </CardHeader>
                  <div className="space-y-4 text-foreground/80">
                    <p>
                      Serwis bkreiting.com (zwany dalej „Serwisem") szanuje prywatność swoich użytkowników 
                      i zobowiązuje się do ochrony danych osobowych zgodnie z obowiązującymi przepisami prawa, 
                      w tym Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. 
                      (RODO).
                    </p>
                    <p>
                      Niniejsza Polityka Prywatności wyjaśnia, jakie dane zbieramy, w jaki sposób je wykorzystujemy 
                      oraz jakie prawa przysługują użytkownikom w związku z przetwarzaniem ich danych osobowych.
                    </p>
                  </div>
                </section>

                <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

                <section>
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Icon name="Database" className="text-primary" size={24} />
                      2. Jakie dane zbieramy
                    </CardTitle>
                  </CardHeader>
                  <div className="space-y-4 text-foreground/80">
                    <p>
                      W ramach funkcjonowania Serwisu możemy zbierać następujące kategorie danych:
                    </p>
                    <ul className="space-y-3 ml-6">
                      <li className="flex items-start gap-3">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span><strong>Dane techniczne:</strong> adres IP, typ przeglądarki, system operacyjny, 
                        czas wizyty, odwiedzane podstrony (zbierane automatycznie przez pliki cookies)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span><strong>Dane dobrowolnie przekazane:</strong> adres e-mail (jeśli zapiszesz się 
                        do newslettera lub skontaktujesz z nami)</span>
                      </li>
                    </ul>
                    <p className="bg-primary/5 border-l-4 border-primary p-4 rounded">
                      <strong>Ważne:</strong> Serwis ma charakter informacyjny i nie prowadzi gier hazardowych. 
                      Nie zbieramy danych dotyczących Twojej aktywności w kasynach online ani nie przetwarzamy 
                      danych płatniczych.
                    </p>
                  </div>
                </section>

                <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

                <section>
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Icon name="Target" className="text-primary" size={24} />
                      3. Cel przetwarzania danych
                    </CardTitle>
                  </CardHeader>
                  <div className="space-y-4 text-foreground/80">
                    <p>Zbierane dane wykorzystujemy w następujących celach:</p>
                    <ul className="space-y-3 ml-6">
                      <li className="flex items-start gap-3">
                        <Icon name="ChevronRight" className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span>Zapewnienie prawidłowego funkcjonowania Serwisu</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="ChevronRight" className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span>Analiza statystyk i optymalizacja treści</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="ChevronRight" className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span>Wysyłka newslettera (jeśli wyraziłeś zgodę)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="ChevronRight" className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span>Odpowiedzi na pytania i zapytania użytkowników</span>
                      </li>
                    </ul>
                  </div>
                </section>

                <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

                <section>
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Icon name="Cookie" className="text-primary" size={24} />
                      4. Pliki cookies
                    </CardTitle>
                  </CardHeader>
                  <div className="space-y-4 text-foreground/80">
                    <p>
                      Serwis używa plików cookies w celu zapewnienia najlepszej jakości usług. Cookies to małe 
                      pliki tekstowe zapisywane na Twoim urządzeniu, które pomagają nam analizować ruch na stronie 
                      i dostosowywać treści do Twoich preferencji.
                    </p>
                    <p>
                      Możesz w każdej chwili zmienić ustawienia cookies w swojej przeglądarce. Pamiętaj jednak, 
                      że wyłączenie cookies może wpłynąć na funkcjonalność Serwisu.
                    </p>
                  </div>
                </section>

                <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

                <section>
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Icon name="ShieldCheck" className="text-primary" size={24} />
                      5. Twoje prawa
                    </CardTitle>
                  </CardHeader>
                  <div className="space-y-4 text-foreground/80">
                    <p>Zgodnie z RODO przysługują Ci następujące prawa:</p>
                    <ul className="space-y-3 ml-6">
                      <li className="flex items-start gap-3">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span><strong>Prawo dostępu</strong> do swoich danych osobowych</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span><strong>Prawo do sprostowania</strong> nieprawidłowych danych</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span><strong>Prawo do usunięcia</strong> danych („prawo do bycia zapomnianym")</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span><strong>Prawo do ograniczenia przetwarzania</strong></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span><strong>Prawo do przenoszenia danych</strong></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span><strong>Prawo do sprzeciwu</strong> wobec przetwarzania danych</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span><strong>Prawo do cofnięcia zgody</strong> w dowolnym momencie</span>
                      </li>
                    </ul>
                  </div>
                </section>

                <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

                <section>
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Icon name="Lock" className="text-primary" size={24} />
                      6. Bezpieczeństwo danych
                    </CardTitle>
                  </CardHeader>
                  <div className="space-y-4 text-foreground/80">
                    <p>
                      Stosujemy odpowiednie środki techniczne i organizacyjne, aby chronić Twoje dane osobowe 
                      przed nieautoryzowanym dostępem, utratą, zniszczeniem lub ujawnieniem. Dane są przechowywane 
                      na bezpiecznych serwerach z ograniczonym dostępem.
                    </p>
                  </div>
                </section>

                <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

                <section>
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Icon name="ExternalLink" className="text-primary" size={24} />
                      7. Linki do stron trzecich
                    </CardTitle>
                  </CardHeader>
                  <div className="space-y-4 text-foreground/80">
                    <p>
                      Serwis zawiera linki afiliacyjne do kasyn online. Po kliknięciu w taki link zostaniesz 
                      przekierowany na zewnętrzną stronę, która posiada własną politykę prywatności. Nie ponosimy 
                      odpowiedzialności za praktyki dotyczące prywatności stosowane przez te serwisy.
                    </p>
                    <p className="bg-primary/5 border-l-4 border-primary p-4 rounded">
                      <strong>Uwaga:</strong> Przed rejestracją w jakimkolwiek kasynie online zalecamy zapoznanie się 
                      z jego polityką prywatności i regulaminem.
                    </p>
                  </div>
                </section>

                <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

                <section>
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Icon name="Mail" className="text-primary" size={24} />
                      8. Kontakt
                    </CardTitle>
                  </CardHeader>
                  <div className="space-y-4 text-foreground/80">
                    <p>
                      W przypadku pytań dotyczących przetwarzania danych osobowych lub chęci skorzystania ze swoich praw, 
                      skontaktuj się z nami poprzez formularz kontaktowy dostępny na stronie głównej.
                    </p>
                  </div>
                </section>

                <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

                <section>
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Icon name="RefreshCw" className="text-primary" size={24} />
                      9. Zmiany w Polityce Prywatności
                    </CardTitle>
                  </CardHeader>
                  <div className="space-y-4 text-foreground/80">
                    <p>
                      Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności. Wszelkie 
                      aktualizacje będą publikowane na tej stronie wraz z datą ostatniej modyfikacji. Zalecamy 
                      regularne sprawdzanie tej sekcji w celu śledzenia ewentualnych zmian.
                    </p>
                  </div>
                </section>
              </CardContent>
            </Card>

            <div className="mt-12 text-center">
              <Button 
                onClick={() => navigate('/')}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Icon name="ArrowLeft" className="mr-2" size={20} />
                Powrót do strony głównej
              </Button>
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
