import { useState, useEffect } from 'react';
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
    ageDisclaimer: 'Ta strona ma charakter wyłącznie informacyjny i nie prowadzi gier hazardowych na pieniądze. Nie przyjmujemy zakładów ani wpłat.',
    ageConfirmText: 'Potwierdzam, że mam ukończone 18 lat i akceptuję warunki korzystania z serwisu informacyjnego.',
    ageWarning: 'Hazard może uzależniać. Graj odpowiedzialnie.',
    ageButton: 'Potwierdzam - mam 18 lat',
    ageNote: 'To okno pojawi się ponownie za 24 godziny',
    navRanking: 'Ranking',
    navBonuses: 'Bonusy',
    navGames: 'Gry',
    navNews: 'Nowości',
    navContact: 'Kontakt',
    vipOffers: 'VIP Oferty',
    bestCasinos: 'Najlepsze Kasyna w Polsce 2026',
    heroTitle: 'Ekskluzywne Kasyna Online',
    heroDesc: 'Profesjonalne rankingi, szczegółowe recenzje i najlepsze bonusy powitalne. Wybierz swoje idealne kasyno z naszego premium rankingu.',
    viewTop10: 'Zobacz Top 10 Kasyn',
    currentBonuses: 'Aktualne Bonusy',
    tabRanking: 'Ranking',
    tabBonuses: 'Bonusy',
    tabGames: 'Gry',
    tabFaq: 'FAQ',
    topCasinos: 'Top Kasyna Online 2026',
    verifiedByExperts: 'Sprawdzone i zweryfikowane przez ekspertów',
    welcomeBonus: 'Bonus Powitalny:',
    gamesCount: 'Liczba gier',
    playNow: 'Graj Teraz',
    fullReview: 'Pełna Recenzja',
    bonusSection: 'Sekcja Bonusów',
    bestBonusOffers: 'Tutaj będą najlepsze oferty bonusowe',
    gamesSection: 'Katalog Gier',
    thousandsOfGames: 'Tysiące slotów i gier w jednym miejscu',
    faqSection: 'Najczęściej Zadawane Pytania',
    everythingYouNeed: 'Wszystko czego potrzebujesz wiedzieć',
    whyOurRanking: 'Dlaczego Nasz Ranking?',
    expertReview: 'Ekspercka Ocena',
    expertReviewDesc: 'Każde kasyno jest dokładnie testowane przez zespół ekspertów z wieloletnim doświadczeniem',
    licenseVerification: 'Weryfikacja Licencji',
    licenseVerificationDesc: 'Sprawdzamy ważność licencji i bezpieczeństwo każdego polecalnego kasyna online',
    currentInfo: 'Aktualne Informacje',
    currentInfoDesc: 'Regularnie aktualizujemy rankingi, bonusy i recenzje aby dostarczyć najświeższe dane',
    usefulLinks: 'Przydatne Linki',
    aboutUs: 'O nas',
    contact: 'Kontakt',
    privacyPolicy: 'Polityka prywatności',
    terms: 'Regulamin',
    categories: 'Kategorie',
    topCasinosLink: 'Top Kasyna',
    bestBonuses: 'Najlepsze Bonusy',
    newCasinos: 'Nowe Kasyna',
    liveCasino: 'Live Casino',
    newsletter: 'Newsletter',
    newsletterDesc: 'Zapisz się i otrzymuj najlepsze oferty bonusowe',
    subscribe: 'Zapisz się',
    copyright: '© 2026 bkreiting.com. Wszystkie prawa zastrzeżone.',
    responsibleGaming: 'Odpowiedzialna Gra',
  },
  ru: {
    ageTitle: 'Подтверждение возраста',
    ageDisclaimer: 'Этот сайт носит исключительно информационный характер и не проводит азартные игры на деньги. Мы не принимаем ставки и депозиты.',
    ageConfirmText: 'Подтверждаю, что мне исполнилось 18 лет и я принимаю условия использования информационного сервиса.',
    ageWarning: 'Азартные игры могут вызывать зависимость. Играйте ответственно.',
    ageButton: 'Подтверждаю - мне есть 18 лет',
    ageNote: 'Это окно появится снова через 24 часа',
    navRanking: 'Рейтинг',
    navBonuses: 'Бонусы',
    navGames: 'Игры',
    navNews: 'Новости',
    navContact: 'Контакты',
    vipOffers: 'VIP Предложения',
    bestCasinos: 'Лучшие Казино в Польше 2026',
    heroTitle: 'Эксклюзивные Онлайн Казино',
    heroDesc: 'Профессиональные рейтинги, подробные обзоры и лучшие приветственные бонусы. Выберите идеальное казино из нашего премиум рейтинга.',
    viewTop10: 'Смотреть Топ 10 Казино',
    currentBonuses: 'Актуальные Бонусы',
    tabRanking: 'Рейтинг',
    tabBonuses: 'Бонусы',
    tabGames: 'Игры',
    tabFaq: 'FAQ',
    topCasinos: 'Топ Онлайн Казино 2026',
    verifiedByExperts: 'Проверено и верифицировано экспертами',
    welcomeBonus: 'Приветственный Бонус:',
    gamesCount: 'Количество игр',
    playNow: 'Играть Сейчас',
    fullReview: 'Полный Обзор',
    bonusSection: 'Раздел Бонусов',
    bestBonusOffers: 'Здесь будут лучшие бонусные предложения',
    gamesSection: 'Каталог Игр',
    thousandsOfGames: 'Тысячи слотов и игр в одном месте',
    faqSection: 'Часто Задаваемые Вопросы',
    everythingYouNeed: 'Всё что вам нужно знать',
    whyOurRanking: 'Почему Наш Рейтинг?',
    expertReview: 'Экспертная Оценка',
    expertReviewDesc: 'Каждое казино тщательно тестируется командой экспертов с многолетним опытом',
    licenseVerification: 'Проверка Лицензии',
    licenseVerificationDesc: 'Мы проверяем актуальность лицензии и безопасность каждого рекомендуемого онлайн казино',
    currentInfo: 'Актуальная Информация',
    currentInfoDesc: 'Регулярно обновляем рейтинги, бонусы и обзоры для предоставления самых свежих данных',
    usefulLinks: 'Полезные Ссылки',
    aboutUs: 'О нас',
    contact: 'Контакты',
    privacyPolicy: 'Политика конфиденциальности',
    terms: 'Условия использования',
    categories: 'Категории',
    topCasinosLink: 'Топ Казино',
    bestBonuses: 'Лучшие Бонусы',
    newCasinos: 'Новые Казино',
    liveCasino: 'Живое Казино',
    newsletter: 'Рассылка',
    newsletterDesc: 'Подпишитесь и получайте лучшие бонусные предложения',
    subscribe: 'Подписаться',
    copyright: '© 2026 bkreiting.com. Все права защищены.',
    responsibleGaming: 'Ответственная Игра',
  },
  en: {
    ageTitle: 'Age Confirmation',
    ageDisclaimer: 'This website is for informational purposes only and does not conduct real money gambling. We do not accept bets or deposits.',
    ageConfirmText: 'I confirm that I am 18 years old and accept the terms of use of the information service.',
    ageWarning: 'Gambling can be addictive. Play responsibly.',
    ageButton: 'I Confirm - I am 18+',
    ageNote: 'This window will appear again in 24 hours',
    navRanking: 'Ranking',
    navBonuses: 'Bonuses',
    navGames: 'Games',
    navNews: 'News',
    navContact: 'Contact',
    vipOffers: 'VIP Offers',
    bestCasinos: 'Best Casinos in Poland 2026',
    heroTitle: 'Exclusive Online Casinos',
    heroDesc: 'Professional rankings, detailed reviews and best welcome bonuses. Choose your ideal casino from our premium ranking.',
    viewTop10: 'View Top 10 Casinos',
    currentBonuses: 'Current Bonuses',
    tabRanking: 'Ranking',
    tabBonuses: 'Bonuses',
    tabGames: 'Games',
    tabFaq: 'FAQ',
    topCasinos: 'Top Online Casinos 2026',
    verifiedByExperts: 'Verified and checked by experts',
    welcomeBonus: 'Welcome Bonus:',
    gamesCount: 'Number of games',
    playNow: 'Play Now',
    fullReview: 'Full Review',
    bonusSection: 'Bonuses Section',
    bestBonusOffers: 'Best bonus offers will be here',
    gamesSection: 'Games Catalog',
    thousandsOfGames: 'Thousands of slots and games in one place',
    faqSection: 'Frequently Asked Questions',
    everythingYouNeed: 'Everything you need to know',
    whyOurRanking: 'Why Our Ranking?',
    expertReview: 'Expert Review',
    expertReviewDesc: 'Each casino is thoroughly tested by a team of experts with years of experience',
    licenseVerification: 'License Verification',
    licenseVerificationDesc: 'We verify the validity of licenses and security of every recommended online casino',
    currentInfo: 'Current Information',
    currentInfoDesc: 'We regularly update rankings, bonuses and reviews to provide the freshest data',
    usefulLinks: 'Useful Links',
    aboutUs: 'About Us',
    contact: 'Contact',
    privacyPolicy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    categories: 'Categories',
    topCasinosLink: 'Top Casinos',
    bestBonuses: 'Best Bonuses',
    newCasinos: 'New Casinos',
    liveCasino: 'Live Casino',
    newsletter: 'Newsletter',
    newsletterDesc: 'Subscribe and receive the best bonus offers',
    subscribe: 'Subscribe',
    copyright: '© 2026 bkreiting.com. All rights reserved.',
    responsibleGaming: 'Responsible Gaming',
    h1Title: 'Ranking bukmacherów i kasyn online w Polsce – legalni operatorzy 2026',
    introPara1: 'Szukasz sprawdzonego miejsca do obstawiania meczów albo grania w ulubione sloty? Trafiłeś dobrze. Nasza strona to porównywarka bukmacherów i kasyn, w której znajdziesz wyłącznie legalnych operatorów działających na polskim rynku. Bez ściemy, bez promowania podejrzanych platform.',
    introPara2: 'Nie wiesz, jaki bukmacher wybrać? A może chcesz sprawdzić, które kasyna dla Polaków naprawdę wypłacają wygrane? Przygotowaliśmy aktualne zestawienia na 2026 rok – z konkretnymi informacjami o bonusach, licencjach i bezpieczeństwie środków. Każdy operator w naszym rankingu przeszedł weryfikację, więc nie musisz tracić czasu na własne śledztwo.',
  },
  ru: {
    ageTitle: 'Подтверждение возраста',
    ageDisclaimer: 'Этот сайт носит исключительно информационный характер и не проводит азартные игры на деньги. Мы не принимаем ставки и депозиты.',
    ageConfirmText: 'Подтверждаю, что мне исполнилось 18 лет и я принимаю условия использования информационного сервиса.',
    ageWarning: 'Азартные игры могут вызывать зависимость. Играйте ответственно.',
    ageButton: 'Подтверждаю - мне есть 18 лет',
    ageNote: 'Это окно появится снова через 24 часа',
    navRanking: 'Рейтинг',
    navBonuses: 'Бонусы',
    navGames: 'Игры',
    navNews: 'Новости',
    navContact: 'Контакты',
    vipOffers: 'VIP Предложения',
    bestCasinos: 'Лучшие Казино в Польше 2026',
    heroTitle: 'Эксклюзивные Онлайн Казино',
    heroDesc: 'Профессиональные рейтинги, подробные обзоры и лучшие приветственные бонусы. Выберите идеальное казино из нашего премиум рейтинга.',
    viewTop10: 'Смотреть Топ 10 Казино',
    currentBonuses: 'Актуальные Бонусы',
    tabRanking: 'Рейтинг',
    tabBonuses: 'Бонусы',
    tabGames: 'Игры',
    tabFaq: 'FAQ',
    topCasinos: 'Топ Онлайн Казино 2026',
    verifiedByExperts: 'Проверено и верифицировано экспертами',
    welcomeBonus: 'Приветственный Бонус:',
    gamesCount: 'Количество игр',
    playNow: 'Играть Сейчас',
    fullReview: 'Полный Обзор',
    bonusSection: 'Раздел Бонусов',
    bestBonusOffers: 'Здесь будут лучшие бонусные предложения',
    gamesSection: 'Каталог Игр',
    thousandsOfGames: 'Тысячи слотов и игр в одном месте',
    faqSection: 'Часто Задаваемые Вопросы',
    everythingYouNeed: 'Всё что вам нужно знать',
    whyOurRanking: 'Почему Наш Рейтинг?',
    expertReview: 'Экспертная Оценка',
    expertReviewDesc: 'Каждое казино тщательно тестируется командой экспертов с многолетним опытом',
    licenseVerification: 'Проверка Лицензии',
    licenseVerificationDesc: 'Мы проверяем актуальность лицензии и безопасность каждого рекомендуемого онлайн казино',
    currentInfo: 'Актуальная Информация',
    currentInfoDesc: 'Регулярно обновляем рейтинги, бонусы и обзоры для предоставления самых свежих данных',
    usefulLinks: 'Полезные Ссылки',
    aboutUs: 'О нас',
    contact: 'Контакты',
    privacyPolicy: 'Политика конфиденциальности',
    terms: 'Условия использования',
    categories: 'Категории',
    topCasinosLink: 'Топ Казино',
    bestBonuses: 'Лучшие Бонусы',
    newCasinos: 'Новые Казино',
    liveCasino: 'Живое Казино',
    newsletter: 'Рассылка',
    newsletterDesc: 'Подпишитесь и получайте лучшие бонусные предложения',
    subscribe: 'Подписаться',
    copyright: '© 2026 bkreiting.com. Все права защищены.',
    responsibleGaming: 'Ответственная Игра',
  },
  en: {
    ageTitle: 'Age Confirmation',
    ageDisclaimer: 'This website is for informational purposes only and does not conduct real money gambling. We do not accept bets or deposits.',
    ageConfirmText: 'I confirm that I am 18 years old and accept the terms of use of the information service.',
    ageWarning: 'Gambling can be addictive. Play responsibly.',
    ageButton: 'I Confirm - I am 18+',
    ageNote: 'This window will appear again in 24 hours',
    navRanking: 'Ranking',
    navBonuses: 'Bonuses',
    navGames: 'Games',
    navNews: 'News',
    navContact: 'Contact',
    vipOffers: 'VIP Offers',
    bestCasinos: 'Best Casinos in Poland 2026',
    heroTitle: 'Exclusive Online Casinos',
    heroDesc: 'Professional rankings, detailed reviews and best welcome bonuses. Choose your ideal casino from our premium ranking.',
    viewTop10: 'View Top 10 Casinos',
    currentBonuses: 'Current Bonuses',
    tabRanking: 'Ranking',
    tabBonuses: 'Bonuses',
    tabGames: 'Games',
    tabFaq: 'FAQ',
    topCasinos: 'Top Online Casinos 2026',
    verifiedByExperts: 'Verified and checked by experts',
    welcomeBonus: 'Welcome Bonus:',
    gamesCount: 'Number of games',
    playNow: 'Play Now',
    fullReview: 'Full Review',
    bonusSection: 'Bonuses Section',
    bestBonusOffers: 'Best bonus offers will be here',
    gamesSection: 'Games Catalog',
    thousandsOfGames: 'Thousands of slots and games in one place',
    faqSection: 'Frequently Asked Questions',
    everythingYouNeed: 'Everything you need to know',
    whyOurRanking: 'Why Our Ranking?',
    expertReview: 'Expert Review',
    expertReviewDesc: 'Each casino is thoroughly tested by a team of experts with years of experience',
    licenseVerification: 'License Verification',
    licenseVerificationDesc: 'We verify the validity of licenses and security of every recommended online casino',
    currentInfo: 'Current Information',
    currentInfoDesc: 'We regularly update rankings, bonuses and reviews to provide the freshest data',
    usefulLinks: 'Useful Links',
    aboutUs: 'About Us',
    contact: 'Contact',
    privacyPolicy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    categories: 'Categories',
    topCasinosLink: 'Top Casinos',
    bestBonuses: 'Best Bonuses',
    newCasinos: 'New Casinos',
    liveCasino: 'Live Casino',
    newsletter: 'Newsletter',
    newsletterDesc: 'Subscribe and receive the best bonus offers',
    subscribe: 'Subscribe',
    copyright: '© 2026 bkreiting.com. All rights reserved.',
    responsibleGaming: 'Responsible Gaming',
  },
};

export default function Index() {
  const [activeTab, setActiveTab] = useState('ranking');
  const [showAgeModal, setShowAgeModal] = useState(false);
  const [language, setLanguage] = useState<Language>('pl');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'pl' || savedLang === 'ru' || savedLang === 'en')) {
      setLanguage(savedLang);
    }

    const lastConfirmed = localStorage.getItem('ageConfirmed');
    const now = new Date().getTime();
    
    if (!lastConfirmed || now - parseInt(lastConfirmed) > 24 * 60 * 60 * 1000) {
      setShowAgeModal(true);
    }
  }, []);

  const handleAgeConfirm = () => {
    localStorage.setItem('ageConfirmed', new Date().getTime().toString());
    setShowAgeModal(false);
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = translations[language];

  return (
    <>
      {showAgeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-lg">
          <div className="relative max-w-md mx-4">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 rounded-2xl blur-2xl"></div>
            <Card className="relative bg-card/90 backdrop-blur-sm border-2 border-primary/30 shadow-2xl">
              <CardHeader className="text-center space-y-4 pb-4">
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full"></div>
                    <div className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary p-4 rounded-xl">
                      <Icon name="ShieldAlert" className="text-primary-foreground" size={48} />
                    </div>
                  </div>
                </div>
                <div>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary via-primary/90 to-foreground bg-clip-text text-transparent">
                    {t.ageTitle}
                  </CardTitle>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary"></div>
                    <Badge className="bg-primary/20 text-primary border-primary/40 text-xs">18+</Badge>
                    <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary"></div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 px-6">
                <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-l-4 border-primary rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Info" className="text-primary flex-shrink-0 mt-0.5" size={20} />
                    <p className="text-sm leading-relaxed text-foreground/90">
                      {t.ageDisclaimer.split('wyłącznie informacyjny')[0]}
                      <strong className="text-primary">{language === 'pl' ? 'wyłącznie informacyjny' : language === 'ru' ? 'исключительно информационный характер' : 'informational purposes only'}</strong>
                      {language === 'pl' ? ' i nie prowadzi gier hazardowych na pieniądze. Nie przyjmujemy zakładów ani wpłat.' : language === 'ru' ? ' и не проводит азартные игры на деньги. Мы не принимаем ставки и депозиты.' : ' and does not conduct real money gambling. We do not accept bets or deposits.'}
                    </p>
                  </div>
                </div>
                <div className="bg-card/50 border border-primary/20 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Icon name="AlertCircle" className="text-primary flex-shrink-0 mt-0.5" size={20} />
                    <p className="text-sm leading-relaxed text-foreground/80">
                      {language === 'pl' ? 'Potwierdzam, że mam ukończone ' : language === 'ru' ? 'Подтверждаю, что мне исполнилось ' : 'I confirm that I am '}
                      <strong className="text-primary">18 {language === 'pl' ? 'lat' : language === 'ru' ? 'лет' : 'years old'}</strong>
                      {language === 'pl' ? ' i akceptuję warunki korzystania z serwisu informacyjnego.' : language === 'ru' ? ' и я принимаю условия использования информационного сервиса.' : ' and accept the terms of use of the information service.'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 pt-2">
                  <Icon name="Scale" className="text-primary/60" size={16} />
                  <p className="text-xs text-center text-foreground/60">
                    {t.ageWarning}
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-3 pt-2 pb-6 px-6">
                <Button 
                  onClick={handleAgeConfirm}
                  className="w-full bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-primary/90 hover:to-primary font-semibold py-6 text-base shadow-lg shadow-primary/20"
                >
                  <Icon name="CheckCircle2" className="mr-2" size={20} />
                  {t.ageButton}
                </Button>
                <p className="text-xs text-center text-foreground/50">
                  {t.ageNote}
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 group cursor-pointer">
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
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <button className="text-foreground/80 hover:text-primary transition-colors">{t.navRanking}</button>
              <button className="text-foreground/80 hover:text-primary transition-colors">{t.navBonuses}</button>
              <button className="text-foreground/80 hover:text-primary transition-colors">{t.navGames}</button>
              <button className="text-foreground/80 hover:text-primary transition-colors">{t.navNews}</button>
              <button className="text-foreground/80 hover:text-primary transition-colors">{t.navContact}</button>
            </nav>
            <div className="flex items-center gap-3">
              <Button className="hidden md:flex bg-primary text-primary-foreground hover:bg-primary/90">
                <Icon name="Sparkles" className="mr-2" size={18} />
                {t.vipOffers}
              </Button>
              <Button size="icon" variant="ghost" className="md:hidden">
                <Icon name="Menu" size={24} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2 text-sm">
              <Icon name="TrendingUp" className="mr-2" size={16} />
              {t.bestCasinos}
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              {language === 'pl' ? 'Ekskluzywne' : language === 'ru' ? 'Эксклюзивные' : 'Exclusive'} <span className="text-primary gold-glow">{language === 'pl' ? 'Kasyna Online' : language === 'ru' ? 'Онлайн Казино' : 'Online Casinos'}</span>
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
              {t.heroDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                <Icon name="Trophy" className="mr-2" size={20} />
                {t.viewTop10}
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10">
                <Icon name="Gift" className="mr-2" size={20} />
                {t.currentBonuses}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-4 bg-card border border-border">
              <TabsTrigger value="ranking" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Icon name="Award" className="mr-2" size={18} />
                <span className="hidden sm:inline">{t.tabRanking}</span>
              </TabsTrigger>
              <TabsTrigger value="bonusy" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Icon name="Gift" className="mr-2" size={18} />
                <span className="hidden sm:inline">{t.tabBonuses}</span>
              </TabsTrigger>
              <TabsTrigger value="gry" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Icon name="Gamepad2" className="mr-2" size={18} />
                <span className="hidden sm:inline">{t.tabGames}</span>
              </TabsTrigger>
              <TabsTrigger value="faq" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Icon name="HelpCircle" className="mr-2" size={18} />
                <span className="hidden sm:inline">{t.tabFaq}</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="ranking" className="mt-8 space-y-6">
              <div className="relative max-w-5xl mx-auto mb-12">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl blur-3xl -z-10"></div>
                <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 md:p-12">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="h-1 w-12 bg-gradient-to-r from-transparent to-primary rounded-full"></div>
                    <Icon name="Star" className="text-primary" size={24} />
                    <div className="h-1 w-12 bg-gradient-to-l from-transparent to-primary rounded-full"></div>
                  </div>
                  <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight">
                    Ranking bukmacherów i kasyn online w Polsce – legalni operatorzy 2026
                  </h1>
                  <div className="space-y-6">
                    <p className="text-lg md:text-xl leading-relaxed text-center text-foreground/90">
                      Szukasz sprawdzonego miejsca do obstawiania meczów albo grania w ulubione sloty? Trafiłeś dobrze. 
                      Nasza strona to porównywarka bukmacherów i kasyn, w której znajdziesz wyłącznie legalnych operatorów 
                      działających na polskim rynku. Bez ściemy, bez promowania podejrzanych platform.
                    </p>
                    <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                    <p className="text-lg md:text-xl leading-relaxed text-center text-foreground/90">
                      Nie wiesz, jaki bukmacher wybrać? A może chcesz sprawdzić, które kasyna dla Polaków naprawdę wypłacają 
                      wygrane? Przygotowaliśmy aktualne zestawienia na 2026 rok – z konkretnymi informacjami o bonusach, 
                      licencjach i bezpieczeństwie środków. Każdy operator w naszym rankingu przeszedł weryfikację, więc 
                      nie musisz tracić czasu na własne śledztwo.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center mb-8 border-t border-border pt-12">
                <h3 className="text-3xl font-bold mb-2">{t.topCasinos}</h3>
                <p className="text-foreground/70">{t.verifiedByExperts}</p>
              </div>

              {casinos.map((casino, index) => (
                <Card key={casino.id} className="card-glow bg-card border-border overflow-hidden">
                  <CardHeader className="relative">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-16 h-16 bg-card/80 border border-border rounded-lg overflow-hidden">
                          <img 
                            src={casino.logo} 
                            alt={`${casino.name} logo`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                              #{index + 1}
                            </Badge>
                            <CardTitle className="text-2xl">{casino.name}</CardTitle>
                          </div>
                          <CardDescription className="flex items-center gap-2 text-foreground/60">
                            <Icon name="ShieldCheck" size={16} className="text-primary" />
                            {casino.license}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="md:ml-auto flex flex-col items-start md:items-end gap-2">
                        <div className="flex items-center gap-2 bg-primary/10 px-3 py-2 rounded-lg">
                          <Icon name="Award" className="text-primary" size={20} />
                          <span className="text-2xl font-bold text-primary">{casino.rating}</span>
                          <span className="text-sm text-foreground/60">/10</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <StarRating rating={casino.userRating} size={16} />
                          <span className="text-sm text-foreground/60 ml-1">({casino.userRating})</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Gift" className="text-primary" size={20} />
                        <span className="font-semibold text-foreground">{t.welcomeBonus}</span>
                      </div>
                      <p className="text-xl font-bold text-primary">{casino.bonus}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 p-3 bg-card/50 rounded-lg border border-border">
                        <Icon name="Gamepad2" className="text-primary" size={24} />
                        <div>
                          <p className="text-sm text-foreground/60">{t.gamesCount}</p>
                          <p className="font-semibold">{casino.games}+</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {casino.features.slice(0, 4).map((feature, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-secondary/20 text-foreground border-secondary/30">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="flex flex-col sm:flex-row gap-3 bg-card/50">
                    <Button 
                      asChild
                      className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <a href={casino.url} target="_blank" rel="nofollow noopener noreferrer">
                        <Icon name="ExternalLink" className="mr-2" size={18} />
                        {t.playNow}
                      </a>
                    </Button>
                    <Button variant="outline" className="flex-1 border-primary/30 hover:bg-primary/10">
                      <Icon name="FileText" className="mr-2" size={18} />
                      {t.fullReview}
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                      <Icon name="Heart" size={20} />
                    </Button>
                  </CardFooter>
                </Card>
              ))}

              <div className="relative max-w-5xl mx-auto mt-16">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-2xl blur-2xl -z-10"></div>
                <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-1 w-8 bg-primary rounded-full"></div>
                    <Icon name="TrendingUp" className="text-primary" size={20} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                    Najlepsi bukmacherzy w Polsce – ranking i porównanie
                  </h2>
                  <div className="space-y-6 text-foreground/90">
                  <p className="text-lg leading-relaxed">
                    Polski rynek zakładów sportowych rozwija się dynamicznie. Co roku pojawiają się nowe oferty, 
                    zmieniają się kursy i warunki promocji. Dlatego utrzymujemy nasz ranking na bieżąco – żebyś 
                    mógł porównać top bukmacherów w jednym miejscu.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Najlepsi bukmacherzy wyróżniają się nie jedną, a kilkoma cechami naraz: atrakcyjnymi kursami, 
                    szybkimi wypłatami, wygodną aplikacją i przejrzystymi zasadami. W naszym zestawieniu uwzględniamy 
                    to wszystko. Lista legalnych bukmacherów, którą publikujemy, opiera się na realnych testach – 
                    zakładamy konta, wpłacamy pieniądze i sprawdzamy, jak wygląda codzienne korzystanie z serwisu.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Kto jest najlepszy bukmacher w Polsce w 2026 roku? Odpowiedź nie jest jednoznaczna, bo zależy 
                    od tego, co jest dla Ciebie ważne – kursy na piłkę nożną, bogata oferta live czy może najwyższy 
                    bonus powitalny. Poniżej rozbijamy to na czynniki pierwsze.
                  </p>

                  <div className="flex items-center gap-3 mt-12 mb-6">
                    <Icon name="ShieldCheck" className="text-primary" size={24} />
                    <h3 className="text-2xl md:text-3xl font-bold">
                      Legalni bukmacherzy – bukmacherzy z licencją
                    </h3>
                  </div>
                  <p className="text-lg leading-relaxed">
                    W Polsce nie ma żartów z legalności zakładów. Ministerstwo Finansów prowadzi rejestr operatorów 
                    z licencją, a granie poza tym rejestrem to ryzyko – nie tylko prawne, ale przede wszystkim finansowe. 
                    Bukmacherzy z licencją podlegają kontrolom i muszą zapewniać ochronę środków graczy.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Dlatego w naszym rankingu umieszczamy wyłącznie licencjonowanych operatorów. Sprawdzamy aktualność 
                    zezwoleń i monitorujemy ewentualne zmiany regulacyjne. Szukając opinii o legalnych bukmacherach, 
                    zwracaj uwagę nie tylko na oceny użytkowników, ale też na numer licencji – każdy legalny bukmacher 
                    publikuje go na swojej stronie. Opinie graczy to jedno, ale formalny status operatora to absolutna podstawa.
                  </p>

                  <div className="flex items-center gap-3 mt-12 mb-6">
                    <Icon name="Gift" className="text-primary" size={24} />
                    <h3 className="text-2xl md:text-3xl font-bold">
                      Bonusy bukmacherskie i oferty na start
                    </h3>
                  </div>
                  <p className="text-lg leading-relaxed">
                    Bonusy bukmacherskie potrafią naprawdę ułatwić start. Większość legalnych operatorów oferuje bonus 
                    na start – zwykle jest to dopasowanie pierwszego depozytu lub zakład bez ryzyka. Ale diabeł tkwi 
                    w szczegółach, a dokładniej w warunkach obrotu.
                  </p>
                  <p className="text-lg leading-relaxed font-semibold">
                    Na co warto zwracać uwagę:
                  </p>
                  <ul className="space-y-4 text-lg leading-relaxed list-none pl-0">
                    <li className="flex items-start gap-3 p-4 bg-card/30 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                      <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span><strong className="text-primary">Bonus na start bukmacher</strong> – sprawdź, czy dotyczy pierwszego zakładu, czy depozytu. To robi ogromną różnicę.</span>
                    </li>
                    <li className="flex items-start gap-3 p-4 bg-card/30 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                      <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span><strong className="text-primary">Freebet bez depozytu</strong> – rzadkość, ale się zdarza. Niektórzy bukmacherzy dają darmowy zakład za samą rejestrację.</span>
                    </li>
                    <li className="flex items-start gap-3 p-4 bg-card/30 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                      <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span><strong className="text-primary">Kod promocyjny bukmacher</strong> – czasem wystarczy wpisać odpowiedni kod przy rejestracji, żeby odblokować dodatkową premię.</span>
                    </li>
                    <li className="flex items-start gap-3 p-4 bg-card/30 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                      <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span><strong className="text-primary">Zakład bez ryzyka</strong> – jeśli przegrasz pierwszy kupon, dostajesz zwrot stawki. Warunki bywają różne, więc czytaj regulamin.</span>
                    </li>
                  </ul>
                  <p className="text-lg leading-relaxed">
                    Oferty typu <strong>bukmacher bez depozytu</strong> to świetna opcja dla tych, którzy chcą przetestować 
                    platformę, zanim zaangażują własne pieniądze.
                  </p>

                  <div className="flex items-center gap-3 mt-12 mb-6">
                    <Icon name="Sparkles" className="text-primary" size={24} />
                    <h3 className="text-2xl md:text-3xl font-bold">
                      Nowi bukmacherzy 2026 – co oferują?
                    </h3>
                  </div>
                  <p className="text-lg leading-relaxed">
                    Rynek się zmienia i <strong>nowi bukmacherzy 2026</strong> wchodzą z naprawdę agresywnymi ofertami. 
                    Żeby przyciągnąć graczy, proponują wyższe bonusy, lepsze kursy na wybrane dyscypliny i nowoczesne 
                    aplikacje mobilne.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Czy warto im zaufać? Jeśli mają licencję – jak najbardziej. Nowi operatorzy często starają się 
                    bardziej niż ci zasiedziali, bo muszą zbudować bazę klientów. To dobry moment, żeby skorzystać 
                    z ich ofert powitalnych, dopóki są hojne.
                  </p>

                  <div className="mt-16 pt-12 border-t border-primary/20">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-1 w-8 bg-primary rounded-full"></div>
                      <Icon name="Star" className="text-primary" size={24} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                      Najlepsze kasyna online – ranking i opinie graczy
                    </h2>
                  </div>
                  <p className="text-lg leading-relaxed">
                    Jeśli interesują Cię automaty, ruletka albo poker, ten dział jest dla Ciebie. Nasz <strong>kasyna 
                    online ranking</strong> obejmuje wyłącznie sprawdzone i legalne platformy. Sprawdzamy je pod kątem 
                    gier, bonusów, metod płatności i – co najważniejsze – terminowości wypłat.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Najlepsze kasyno internetowe to nie to, które ma najładniejszą stronę, ale to, które wypłaca wygrane 
                    w rozsądnym czasie i oferuje uczciwe warunki gry. W zestawieniu uwzględniamy zarówno duże, znane marki, 
                    jak i <strong>polecane kasyna online</strong>, które dopiero zdobywają popularność wśród polskich graczy. 
                    <strong>Top kasyna online</strong> w naszym rankingu wybieramy na podstawie kilkudziesięciu kryteriów.
                  </p>

                  <div className="flex items-center gap-3 mt-12 mb-6">
                    <Icon name="DollarSign" className="text-primary" size={24} />
                    <h3 className="text-2xl md:text-3xl font-bold">
                      Wypłacalne kasyna internetowe – opinie i bezpieczeństwo
                    </h3>
                  </div>
                  <p className="text-lg leading-relaxed">
                    Najczęstsze pytanie, które dostajemy, brzmi: „Czy to kasyno naprawdę wypłaca?". I słusznie – bo to 
                    jest sedno sprawy. <strong>Wypłacalne kasyna internetowe</strong> to takie, które przelewają wygrane 
                    w zadeklarowanym terminie, bez szukania wymówek do zablokowania konta.
                  </p>
                  <p className="text-lg leading-relaxed">
                    W naszych recenzjach testujemy proces wypłat osobiście. Sprawdzamy, ile trwa weryfikacja dokumentów, 
                    jakie metody płatności są dostępne i czy pojawiają się ukryte limity. <strong>Najlepsze kasyno online 
                    opinie</strong> zbieramy nie tylko z forów, ale przede wszystkim z własnych doświadczeń. Najlepsze 
                    polskie kasyno w 2026 roku to takie, w którym czujesz się bezpiecznie – od pierwszego logowania po 
                    wypłatę wygranej.
                  </p>

                  <div className="flex items-center gap-3 mt-12 mb-6">
                    <Icon name="Zap" className="text-primary" size={24} />
                    <h3 className="text-2xl md:text-3xl font-bold">
                      Bonusy kasynowe bez depozytu i darmowe spiny
                    </h3>
                  </div>
                  <p className="text-lg leading-relaxed">
                    To chyba najbardziej pożądana kategoria ofert. <strong>Kasyno bez depozytu</strong> pozwala zagrać 
                    za pieniądze operatora – bez angażowania własnych środków. Brzmi za pięknie? Cóż, warunki obrotu 
                    bywają wymagające, ale sama możliwość przetestowania platformy za darmo jest bezcenna.
                  </p>
                  <p className="text-lg leading-relaxed font-semibold">
                    Oto najpopularniejsze rodzaje bonusów kasynowych:
                  </p>
                  <ul className="space-y-4 text-lg leading-relaxed list-none pl-0">
                    <li className="flex items-start gap-3 p-4 bg-card/30 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                      <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span><strong className="text-primary">Darmowe spiny za rejestrację</strong> – dostajesz określoną liczbę spinów od razu po założeniu konta. Nie musisz wpłacać ani złotówki.</span>
                    </li>
                    <li className="flex items-start gap-3 p-4 bg-card/30 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                      <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span><strong className="text-primary">Darmowe spiny bez depozytu (Polska)</strong> – jak wyżej, ale specjalnie dedykowane polskim graczom. Dostępność zmienia się w zależności od operatora.</span>
                    </li>
                    <li className="flex items-start gap-3 p-4 bg-card/30 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                      <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span><strong className="text-primary">Kasyno bonus na start</strong> – klasyczne dopasowanie pierwszego depozytu, czasem nawet 100% lub więcej.</span>
                    </li>
                    <li className="flex items-start gap-3 p-4 bg-card/30 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                      <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span><strong className="text-primary">Darmowa kasa za rejestrację w kasynie</strong> – zamiast spinów dostajesz konkretną kwotę do wykorzystania na dowolne gry.</span>
                    </li>
                    <li className="flex items-start gap-3 p-4 bg-card/30 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                      <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span><strong className="text-primary">Nowe kasyna bez depozytu</strong> – świeże platformy, które oferują bonusy bez wymaganej wpłaty, żeby przyciągnąć pierwszych użytkowników.</span>
                    </li>
                  </ul>
                  <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-l-4 border-primary rounded-lg p-6 mt-6">
                    <div className="flex items-start gap-3">
                      <Icon name="AlertCircle" className="text-primary flex-shrink-0 mt-1" size={24} />
                      <p className="text-lg leading-relaxed">
                        <strong className="text-primary">Ważne:</strong> Pamiętaj, żeby zawsze sprawdzić wymagania dotyczące obrotu bonusem. Darmowe spiny, które wymagają 
                        60-krotnego obrotu, wyglądają znacznie mniej atrakcyjnie niż te z wymogiem 30-krotnym.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mt-12 mb-6">
                    <Icon name="Gamepad2" className="text-primary" size={24} />
                    <h3 className="text-2xl md:text-3xl font-bold">
                      Gry online w kasynie – automaty, ruletka i poker
                    </h3>
                  </div>
                  <p className="text-lg leading-relaxed">
                    Oferta gier to jeden z kluczowych czynników wyboru. Większość kasyn stawia przede wszystkim na 
                    <strong> automaty do gier online</strong> – to one generują największy ruch. Znajdziesz tu klasyczne 
                    trójbębnowe maszyny, rozbudowane video sloty z liniami bonusowymi i progresywne jackpoty.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Wiele platform udostępnia też <strong>maszyny online za darmo</strong> w trybie demo. <strong>Gry 
                    hazardowe za darmo</strong> to świetny sposób, żeby poznać mechanikę danego automatu, zanim postawisz 
                    prawdziwe pieniądze. <strong>Gry online kasyno</strong> oferuje w setkach wariantów – od prostych 
                    owocówek po kinowe produkcje z rozbudowaną fabułą.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Ale automaty to nie wszystko. <strong>Ruletka online</strong> wciąż przyciąga rzesze fanów – zarówno 
                    w wersji RNG, jak i z prawdziwym krupierem na żywo. A jeśli wolisz strategię od szczęścia, 
                    <strong> poker online w Polsce</strong> ma stabilną i rosnącą społeczność. Turnieje, cash game, 
                    sit-and-go – wybór jest naprawdę spory.
                  </p>

                  <div className="mt-16 pt-12 border-t border-primary/20">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-1 w-8 bg-primary rounded-full"></div>
                      <Icon name="HelpCircle" className="text-primary" size={24} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                      Jaki bukmacher lub kasyno online wybrać?
                    </h2>
                  </div>
                  <p className="text-lg leading-relaxed">
                    To pytanie, które zadaje sobie każdy początkujący gracz. <strong>Jaki bukmacher wybrać?</strong> Które 
                    kasyno będzie najlepsze akurat dla Ciebie? Nie ma jednej uniwersalnej odpowiedzi, ale jest kilka rzeczy, 
                    które warto sprawdzić przed rejestracją. Traktuj poniższą listę jako mini <strong>porównywarkę bukmacherów 
                    i kasyn</strong>.
                  </p>
                  <p className="text-lg leading-relaxed font-semibold">
                    Na co zwrócić uwagę:
                  </p>
                  <ul className="space-y-4 text-lg leading-relaxed list-none pl-0">
                    <li className="flex items-start gap-3 p-4 bg-card/30 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                      <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span><strong className="text-primary">Licencja</strong> – to absolutna podstawa. Bez ważnego zezwolenia na prowadzenie działalności w Polsce – nie ryzykuj.</span>
                    </li>
                    <li className="flex items-start gap-3 p-4 bg-card/30 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                      <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span><strong className="text-primary">Bonusy</strong> – porównaj oferty powitalne, ale patrz na warunki, nie tylko na kwoty. Wysoki bonus z nierealnymi wymaganiami obrotu jest bezwartościowy.</span>
                    </li>
                    <li className="flex items-start gap-3 p-4 bg-card/30 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                      <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span><strong className="text-primary">Wypłaty</strong> – sprawdź dostępne metody, limity i czas realizacji. Szybka wypłata to znak dobrze zarządzanej platformy.</span>
                    </li>
                    <li className="flex items-start gap-3 p-4 bg-card/30 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                      <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span><strong className="text-primary">Oferta gier lub zakładów</strong> – czy znajdziesz tu swoje ulubione dyscypliny sportowe albo typy gier kasynowych? Dla jednych liczy się piłka nożna, dla innych automaty z jackpotem.</span>
                    </li>
                    <li className="flex items-start gap-3 p-4 bg-card/30 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                      <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span><strong className="text-primary">Opinie graczy</strong> – przeczytaj recenzje, ale filtruj je zdrowym rozsądkiem. Jedna zła opinia nie oznacza złego operatora, ale kilkadziesiąt podobnych skarg – to już sygnał ostrzegawczy.</span>
                    </li>
                  </ul>
                  <p className="text-lg leading-relaxed">
                    Nie musisz ograniczać się do jednej platformy. Wielu doświadczonych graczy korzysta z dwóch–trzech 
                    operatorów jednocześnie, żeby mieć dostęp do najlepszych kursów i najciekawszych promocji. Ważne, 
                    żeby każdy z nich był legalny i sprawdzony.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Nasz ranking aktualizujemy regularnie, więc wracaj tu, kiedy będziesz szukać nowych ofert albo zechcesz 
                    sprawdzić, co zmieniło się na rynku w 2026 roku.
                  </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="bonusy" className="mt-8">
              <div className="text-center py-20">
                <Icon name="Gift" className="mx-auto text-primary mb-4" size={64} />
                <h3 className="text-2xl font-bold mb-2">{t.bonusSection}</h3>
                <p className="text-foreground/70">{t.bestBonusOffers}</p>
              </div>
            </TabsContent>

            <TabsContent value="gry" className="mt-8">
              <div className="text-center py-20">
                <Icon name="Gamepad2" className="mx-auto text-primary mb-4" size={64} />
                <h3 className="text-2xl font-bold mb-2">{t.gamesSection}</h3>
                <p className="text-foreground/70">{t.thousandsOfGames}</p>
              </div>
            </TabsContent>

            <TabsContent value="faq" className="mt-8 max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-2">{t.faqSection}</h3>
                <p className="text-foreground/70">{t.everythingYouNeed}</p>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="hover:text-primary">
                    Czy kasyna online w Polsce są legalne?
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70">
                    Tak, kasyna online z licencją są legalne w Polsce. Sprawdź czy kasyno posiada ważną licencję od
                    renomowanego regulatora jak Malta Gaming Authority czy UK Gambling Commission.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="hover:text-primary">
                    Jak wybrać najlepsze kasyno online?
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70">
                    Zwróć uwagę na licencję, ofertę gier, bonusy, metody płatności, czas wypłat i opinie graczy.
                    Nasze rankingi uwzględniają wszystkie te aspekty.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="hover:text-primary">
                    Jak działają bonusy powitalne?
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70">
                    Bonusy powitalne to dodatkowe środki lub darmowe spiny przyznawane nowym graczom. Sprawdź warunki
                    obrotu i wymagania przed skorzystaniem z oferty.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="hover:text-primary">
                    Jak długo trwa wypłata wygranej?
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70">
                    Czas wypłaty zależy od kasyna i metody płatności. E-portfele są najszybsze (24h), przelewy
                    bankowe mogą trwać 3-5 dni roboczych.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="hover:text-primary">
                    Czy mogę grać za darmo?
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70">
                    Większość kasyn oferuje darmowe wersje demo gier slotowych. To świetny sposób na przetestowanie
                    gry przed grą na prawdziwe pieniądze.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-card/30 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2">
              <Icon name="Shield" className="mr-2" size={16} />
              {language === 'pl' ? 'Bezpieczne i Sprawdzone' : language === 'ru' ? 'Безопасно и Проверено' : 'Safe and Verified'}
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold">
              {language === 'pl' ? 'Dlaczego' : language === 'ru' ? 'Почему' : 'Why'} <span className="text-primary">{language === 'pl' ? 'Nasz Ranking?' : language === 'ru' ? 'Наш Рейтинг?' : 'Our Ranking?'}</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <Icon name="Users" className="text-primary mb-2" size={40} />
                  <CardTitle className="text-xl">{t.expertReview}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">
                    {t.expertReviewDesc}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <Icon name="ShieldCheck" className="text-primary mb-2" size={40} />
                  <CardTitle className="text-xl">{t.licenseVerification}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">
                    {t.licenseVerificationDesc}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <Icon name="TrendingUp" className="text-primary mb-2" size={40} />
                  <CardTitle className="text-xl">Aktualne Informacje</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">
                    Regularnie aktualizujemy rankingi, bonusy i recenzje aby dostarczyć najświeższe dane
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full"></div>
                  <div className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary p-2 rounded-lg">
                    <Icon name="Crown" className="text-primary-foreground" size={24} />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">bkreiting.com</span>
                  <div className="flex items-center gap-1 text-xs text-primary/60">
                    <span>POLSKA 2026</span>
                    <Icon name="Dices" className="text-primary/70" size={12} />
                  </div>
                </div>
              </div>
              <p className="text-sm text-foreground/60">
                Najlepszy ranking kasyn online w Polsce. Profesjonalne recenzje i bonusy.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{t.usefulLinks}</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-primary transition-colors">{t.aboutUs}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">{t.contact}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">{t.privacyPolicy}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">{t.terms}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{t.categories}</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-primary transition-colors">{t.topCasinosLink}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">{t.bestBonuses}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">{t.newCasinos}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">{t.liveCasino}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{t.newsletter}</h4>
              <p className="text-sm text-foreground/60 mb-3">
                {t.newsletterDesc}
              </p>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Icon name="Mail" className="mr-2" size={18} />
                {t.subscribe}
              </Button>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground/60">
              {t.copyright}
            </p>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="border-primary/30">
                <Icon name="Shield" className="mr-1" size={14} />
                18+
              </Badge>
              <Badge variant="outline" className="border-primary/30">
                {t.responsibleGaming}
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}