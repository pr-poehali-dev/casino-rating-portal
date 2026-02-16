import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
    bonus: '100% na pierwszy depozyt + 100 darmowych spinów w The Dog House',
    games: 3500,
    license: 'Curacao eGaming',
    features: ['Szybkie wypłaty', 'Obsługa 24/7', 'Aplikacja mobilna', 'Live Casino'],
    logo: 'https://cdn.poehali.dev/projects/c2933cfb-9ddd-413a-a6ef-7b99d3f5e883/bucket/239958bf-e24d-4c54-9062-b0ce46b32b07.png',
    url: 'https://gate707.com/?promo=fea49d76-145e-4e1d-8bb0-85a2bfbd8ca4&target=register'
  },
  {
    id: 2,
    name: 'PlayFortuna',
    rating: 9.3,
    userRating: 4.7,
    bonus: 'Do 1000$ + 200 FS + 25% ubezpieczenie depozytu',
    games: 2800,
    license: 'Curacao eGaming',
    features: ['Kryptowaluty', 'VIP Program', 'Turnieje', 'Cashback'],
    logo: 'https://cdn.poehali.dev/projects/c2933cfb-9ddd-413a-a6ef-7b99d3f5e883/bucket/528dcd24-53e0-4e1d-92f5-6276cda9a5b2.png',
    url: 'https://fortuna-promo.com/alt/playfortunapl/pl/registration?d67ce72a2b19146bdcd9a63e5f1978b3'
  },
  {
    id: 3,
    name: 'Booi',
    rating: 9.0,
    userRating: 4.6,
    bonus: '225% do 1500$ + 100 FS',
    games: 3200,
    license: 'Curacao eGaming',
    features: ['Bez depozytu bonus', 'Szybka weryfikacja', 'Polski support', 'Jackpoty'],
    logo: 'https://cdn.poehali.dev/projects/c2933cfb-9ddd-413a-a6ef-7b99d3f5e883/bucket/24ca2f82-0a85-4ae2-a2ef-623a8a58d022.png',
    url: 'https://booi-promo.com/alt/booipl/pl/sign-up?089c7e6f2881071efd3f2ff31a34293d'
  },
  {
    id: 4,
    name: 'Martin',
    rating: 8.9,
    userRating: 4.5,
    bonus: 'Welcome package do 50%',
    games: 2600,
    license: 'Curacao eGaming',
    features: ['Welcome Package', 'Szybkie wypłaty', 'Live Casino', 'Turnieje'],
    logo: 'https://cdn.poehali.dev/projects/c2933cfb-9ddd-413a-a6ef-7b99d3f5e883/bucket/83e0e007-0964-4062-be9c-39454e6e838c.png',
    url: 'https://martin-way-six.com/c1b69e954'
  },
  {
    id: 5,
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
    id: 6,
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
    topCasinos: 'Top Kasyna Online 2026',
    verifiedByExperts: 'Sprawdzone i zweryfikowane przez ekspertów',
    welcomeBonus: 'Bonus Powitalny:',
    gamesCount: 'Liczba gier',
    playNow: 'Graj Teraz',
    fullReview: 'Pełna Recenzja',
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
    topCasinos: 'Top Kasyna Online 2026',
    verifiedByExperts: 'Sprawdzone i zweryfikowane przez ekspertów',
    welcomeBonus: 'Bonus Powitalny:',
    gamesCount: 'Liczba gier',
    playNow: 'Graj Teraz',
    fullReview: 'Pełna Recenzja',
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
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('ranking');
  const [showAgeModal, setShowAgeModal] = useState(false);
  const [showPromoModal, setShowPromoModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [language, setLanguage] = useState<Language>('pl');
  const [copiedPromo, setCopiedPromo] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'pl' || savedLang === 'ru' || savedLang === 'en')) {
      setLanguage(savedLang);
    } else {
      localStorage.setItem('language', 'pl');
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

  const handleCopyPromo = () => {
    navigator.clipboard.writeText('6DRYKHC1');
    setCopiedPromo(true);
    setTimeout(() => setCopiedPromo(false), 2000);
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
    <div className="min-h-screen bg-gradient-to-b from-background via-card to-background">
      <header className="border-b border-border bg-card/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 group cursor-pointer">
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
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <button onClick={() => setActiveTab('ranking')} className="text-foreground/80 hover:text-primary transition-colors">Ranking</button>
              <button onClick={() => setActiveTab('bonusy')} className="text-foreground/80 hover:text-primary transition-colors">Bonusy</button>
              <button onClick={() => setActiveTab('gry')} className="text-foreground/80 hover:text-primary transition-colors">Gry</button>
              <button onClick={() => navigate('/blog')} className="relative px-4 py-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg hover:from-primary/90 hover:to-secondary/90 transition-all font-semibold shadow-lg shadow-primary/20">
                <Icon name="BookOpen" className="inline mr-2" size={18} />
                Blog
              </button>
            </nav>
            <div className="flex items-center gap-3">
              <Button 
                onClick={() => setShowPromoModal(true)}
                className="relative bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:from-primary/90 hover:to-secondary/90 animate-pulse"
              >
                <Icon name="Gift" className="mr-2" size={18} />
                <span className="hidden md:inline">Odbierz Bonus</span>
                <span className="md:hidden">Bonus</span>
                <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  !
                </div>
              </Button>
              <Button onClick={() => setShowMobileMenu(!showMobileMenu)} size="icon" variant="ghost" className="md:hidden">
                <Icon name={showMobileMenu ? "X" : "Menu"} size={24} />
              </Button>
            </div>
          </div>
          
          {showMobileMenu && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-lg border-b border-border shadow-xl z-50">
              <nav className="flex flex-col p-4 space-y-2">
                <button 
                  onClick={() => { setActiveTab('ranking'); setShowMobileMenu(false); }}
                  className="text-left px-4 py-3 text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                >
                  <Icon name="Award" className="inline mr-3" size={18} />
                  Ranking
                </button>
                <button 
                  onClick={() => { setActiveTab('bonusy'); setShowMobileMenu(false); }}
                  className="text-left px-4 py-3 text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                >
                  <Icon name="Gift" className="inline mr-3" size={18} />
                  Bonusy
                </button>
                <button 
                  onClick={() => { setActiveTab('gry'); setShowMobileMenu(false); }}
                  className="text-left px-4 py-3 text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                >
                  <Icon name="Gamepad2" className="inline mr-3" size={18} />
                  Gry
                </button>
                <button 
                  onClick={() => { navigate('/blog'); setShowMobileMenu(false); }}
                  className="text-left px-4 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-semibold shadow-lg"
                >
                  <Icon name="BookOpen" className="inline mr-3" size={18} />
                  Blog
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://cdn.poehali.dev/projects/c2933cfb-9ddd-413a-a6ef-7b99d3f5e883/bucket/243c8c17-53ff-402d-9b30-aeaa32b95e25.jpg"
            alt="Kasyna Online w Polsce"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/95"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2 text-sm backdrop-blur-sm">
              <Icon name="TrendingUp" className="mr-2" size={16} />
              Najlepsze Kasyna w Polsce 2026
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight drop-shadow-lg">
              Ekskluzywne <span className="text-primary gold-glow">Kasyna Online</span>
            </h2>
            <p className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto drop-shadow-md">
              Profesjonalne rankingi, szczegółowe recenzje i najlepsze bonusy powitalne. Wybierz swoje idealne kasyno z naszego premium rankingu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 shadow-xl" onClick={() => setActiveTab('ranking')}>
                <Icon name="Trophy" className="mr-2" size={20} />
                Zobacz Top 10 Kasyn
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10 backdrop-blur-sm bg-background/50 shadow-xl" onClick={() => setActiveTab('bonusy')}>
                <Icon name="Gift" className="mr-2" size={20} />
                Aktualne Bonusy
              </Button>
            </div>
          </div>
        </div>
      </section>

      {showPromoModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-lg p-4">
          <div className="relative max-w-2xl w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 rounded-2xl blur-2xl"></div>
            <Card className="relative bg-card/90 backdrop-blur-sm border-2 border-primary/30 shadow-2xl">
              <CardHeader className="relative">
                <button
                  onClick={() => setShowPromoModal(false)}
                  className="absolute top-4 right-4 text-foreground/60 hover:text-foreground transition-colors"
                >
                  <Icon name="X" size={24} />
                </button>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full"></div>
                    <div className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary p-4 rounded-xl">
                      <Icon name="Gift" className="text-primary-foreground" size={48} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-primary/20 text-primary border-primary/40 text-xs">
                        EKSKLUZYWNY BONUS
                      </Badge>
                      <img 
                        src={casinos[0].logo}
                        alt="Vavada"
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <CardTitle className="text-2xl md:text-3xl bg-gradient-to-r from-primary via-primary/90 to-foreground bg-clip-text text-transparent">
                      🎰 Gates of Olympus 1000
                    </CardTitle>
                    <CardDescription className="text-base mt-1">
                      20 darmowych aktywacji na slot
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-l-4 border-primary rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Sparkles" className="text-primary flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <p className="text-sm leading-relaxed text-foreground/90 mb-2">
                        <strong className="text-primary">Jak odebrać bonus:</strong>
                      </p>
                      <ol className="text-sm space-y-1 text-foreground/80 list-decimal list-inside">
                        <li>Skopiuj kod promocyjny poniżej</li>
                        <li>Kliknij "Odbierz Bonus" i zarejestruj się w Vavada</li>
                        <li>Wklej kod podczas rejestracji lub w profilu</li>
                        <li>Odbierz 20 free spins na Gates of Olympus 1000!</li>
                      </ol>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-sm text-foreground/60 mb-3">Twój kod promocyjny:</p>
                  <div className="relative inline-block group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-50 blur-xl group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative bg-gradient-to-r from-primary/20 to-secondary/20 border-2 border-primary/40 rounded-xl px-8 py-4 font-mono text-3xl font-bold text-primary tracking-wider">
                      6DRYKHC1
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  <Button
                    onClick={handleCopyPromo}
                    variant="outline"
                    className="flex-1 border-primary/30 hover:bg-primary/10 gap-2 font-semibold"
                    size="lg"
                  >
                    {copiedPromo ? (
                      <>
                        <Icon name="Check" size={20} />
                        Skopiowano!
                      </>
                    ) : (
                      <>
                        <Icon name="Copy" size={20} />
                        Kopiuj Kod
                      </>
                    )}
                  </Button>
                  
                  <Button
                    asChild
                    className="flex-1 bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:from-primary/90 hover:to-secondary/90 gap-2 font-semibold shadow-lg shadow-primary/20"
                    size="lg"
                  >
                    <a href={casinos[0].url} target="_blank" rel="nofollow noopener noreferrer">
                      <Icon name="ExternalLink" size={20} />
                      Odbierz Bonus w Vavada
                    </a>
                  </Button>
                </div>
                <p className="text-xs text-center text-foreground/50">
                  Warunki bonusu dostępne na stronie kasyna. Graj odpowiedzialnie 18+
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}

      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-4 bg-card border border-border">
              <TabsTrigger value="ranking" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Icon name="Award" className="mr-2" size={18} />
                <span className="hidden sm:inline">Ranking</span>
              </TabsTrigger>
              <TabsTrigger value="bonusy" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Icon name="Gift" className="mr-2" size={18} />
                <span className="hidden sm:inline">Bonusy</span>
              </TabsTrigger>
              <TabsTrigger value="gry" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Icon name="Gamepad2" className="mr-2" size={18} />
                <span className="hidden sm:inline">Gry</span>
              </TabsTrigger>
              <TabsTrigger value="faq" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Icon name="HelpCircle" className="mr-2" size={18} />
                <span className="hidden sm:inline">FAQ</span>
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
                <Card key={casino.id} className="card-glow overflow-hidden relative group">
                  {index === 0 && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-primary/20 text-primary border-primary/30 px-3 py-1">
                        <Icon name="Crown" className="mr-1" size={14} />
                        #1 TOP
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="relative">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="absolute inset-0 bg-primary/20 rounded-lg blur"></div>
                          <div className="relative flex items-center justify-center w-20 h-20 bg-card border border-border rounded-lg overflow-hidden">
                            <img 
                              src={casino.logo} 
                              alt={`${casino.name} logo`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30 font-bold">
                              #{index + 1}
                            </Badge>
                            <CardTitle className="text-2xl font-bold">{casino.name}</CardTitle>
                          </div>
                          <CardDescription className="flex items-center gap-2 text-foreground/70">
                            <Icon name="ShieldCheck" size={16} className="text-green-600" />
                            <span className="font-medium">{casino.license}</span>
                          </CardDescription>
                        </div>
                      </div>
                      <div className="md:ml-auto flex flex-col items-start md:items-end gap-2">
                        <div className="flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-lg border border-primary/30">
                          <Icon name="Award" size={20} />
                          <span className="text-2xl font-bold">{casino.rating}</span>
                          <span className="text-sm opacity-90">/10</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <StarRating rating={casino.userRating} size={16} />
                          <span className="text-sm text-foreground/70 ml-1 font-medium">({casino.userRating})</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 border-l-4 border-primary rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Gift" className="text-primary" size={22} />
                        <span className="font-bold text-foreground">{t.welcomeBonus}</span>
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

                  <CardFooter className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      asChild
                      className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <a href={casino.url} target="_blank" rel="nofollow noopener noreferrer">
                        <Icon name="Rocket" className="mr-2" size={20} />
                        {t.playNow}
                      </a>
                    </Button>
                    {(casino.id === 1 || casino.id === 2 || casino.id === 3 || casino.id === 4 || casino.id === 5) ? (
                      <Button 
                        variant="outline" 
                        className="flex-1 border-primary/30 hover:bg-primary/10"
                        onClick={() => {
                          if (casino.id === 1) {
                            navigate('/vavada');
                          } else if (casino.id === 2) {
                            navigate('/play-fortuna');
                          } else if (casino.id === 3) {
                            navigate('/booi');
                          } else if (casino.id === 4) {
                            navigate('/jozz');
                          } else if (casino.id === 5) {
                            navigate('/winity');
                          }
                        }}
                      >
                        <Icon name="FileText" className="mr-2" size={18} />
                        {t.fullReview}
                      </Button>
                    ) : (
                      <Button 
                        variant="outline" 
                        className="flex-1 border-2 border-amber-200 text-amber-700"
                        disabled
                      >
                        <Icon name="FileText" className="mr-2" size={18} />
                        {t.fullReview}
                      </Button>
                    )}
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

            <TabsContent value="bonusy" className="mt-8 space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-2">Najlepsze Bonusy Kasynowe 2026</h3>
                <p className="text-foreground/70">Aktualne oferty powitalne i darmowe spiny od top kasyn</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {casinos.slice(0, 4).map((casino) => (
                  <Card key={casino.id} className="bg-card border-border overflow-hidden hover:border-primary/50 transition-colors">
                    <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5">
                      <div className="flex items-center gap-4">
                        <img 
                          src={casino.logo}
                          alt={casino.name}
                          className="w-16 h-16 object-contain bg-card rounded-lg p-2"
                          loading="lazy"
                        />
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-1">{casino.name}</CardTitle>
                          <div className="flex items-center gap-2">
                            <StarRating rating={casino.userRating} size={14} />
                            <span className="text-sm text-foreground/60">({casino.userRating})</span>
                          </div>
                        </div>
                        <Badge className="bg-primary/20 text-primary border-primary/30">
                          TOP {casino.id}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6 space-y-4">
                      <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 border-l-4 border-primary rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <Icon name="Gift" className="text-primary mt-1 flex-shrink-0" size={28} />
                          <div>
                            <p className="text-xs text-foreground/60 mb-1">BONUS POWITALNY</p>
                            <p className="text-lg font-bold text-primary leading-tight">{casino.bonus}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {casino.features.slice(0, 3).map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="border-primary/30 text-xs">
                            <Icon name="Check" className="mr-1" size={12} />
                            {feature}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-2 pt-2">
                        <Button 
                          asChild
                          className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                        >
                          <a href={casino.url} target="_blank" rel="nofollow noopener noreferrer">
                            <Icon name="ExternalLink" className="mr-2" size={16} />
                            Odbierz Bonus
                          </a>
                        </Button>
                        <Button 
                          variant="outline"
                          size="icon"
                          className="border-primary/30 hover:bg-primary/10"
                          onClick={() => {
                            const routes: { [key: number]: string } = {
                              1: '/vavada',
                              2: '/play-fortuna',
                              3: '/booi',
                              4: '/jozz',
                              5: '/winity'
                            };
                            if (routes[casino.id]) navigate(routes[casino.id]);
                          }}
                        >
                          <Icon name="Info" size={18} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto mt-12">
                <div className="flex items-start gap-4">
                  <Icon name="Info" className="text-primary mt-1 flex-shrink-0" size={32} />
                  <div className="space-y-3">
                    <h4 className="text-xl font-bold">Jak odebrać bonus w kasynie?</h4>
                    <ol className="space-y-2 text-foreground/80">
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">1.</span>
                        <span>Kliknij "Odbierz Bonus" przy wybranym kasynie</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">2.</span>
                        <span>Zarejestruj nowe konto w kasynie</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">3.</span>
                        <span>Dokonaj pierwszego depozytu (jeśli wymagany)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">4.</span>
                        <span>Bonus zostanie automatycznie naliczony na konto</span>
                      </li>
                    </ol>
                    <p className="text-sm text-foreground/60 pt-2 border-t border-primary/20">
                      <Icon name="AlertCircle" className="inline mr-1" size={14} />
                      Pamiętaj sprawdzić warunki obrotu bonusem przed skorzystaniem z oferty
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="gry" className="mt-8 space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-2">Katalog Gier Kasynowych</h3>
                <p className="text-foreground/70">Tysiące slotów, gier stołowych i live casino w jednym miejscu</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover:border-primary/40 transition-all hover:scale-105 cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-primary/20 rounded-2xl mb-4">
                      <Icon name="Dices" className="text-primary" size={32} />
                    </div>
                    <CardTitle className="text-center text-2xl">Automaty do Gier</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-center text-foreground/70">
                      Ponad 3000+ slotów od najlepszych producentów
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className="text-primary" size={16} />
                        <span>Book of Dead</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className="text-primary" size={16} />
                        <span>Gates of Olympus</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className="text-primary" size={16} />
                        <span>Sweet Bonanza</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className="text-primary" size={16} />
                        <span>Starburst</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className="text-primary" size={16} />
                        <span>Gonzo's Quest</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20 hover:border-secondary/40 transition-all hover:scale-105 cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-secondary/20 rounded-2xl mb-4">
                      <Icon name="Video" className="text-primary" size={32} />
                    </div>
                    <CardTitle className="text-center text-2xl">Live Casino</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-center text-foreground/70">
                      Prawdziwi krupierzy w czasie rzeczywistym
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className="text-primary" size={16} />
                        <span>Live Ruletka</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className="text-primary" size={16} />
                        <span>Live Blackjack</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className="text-primary" size={16} />
                        <span>Live Baccarat</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className="text-primary" size={16} />
                        <span>Mega Ball</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className="text-primary" size={16} />
                        <span>Monopoly Live</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 hover:border-primary/40 transition-all hover:scale-105 cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-primary/20 rounded-2xl mb-4">
                      <Icon name="Spade" className="text-primary" size={32} />
                    </div>
                    <CardTitle className="text-center text-2xl">Gry Stołowe</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-center text-foreground/70">
                      Klasyczne gry karciane i stołowe
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className="text-primary" size={16} />
                        <span>Poker (Texas Hold'em)</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className="text-primary" size={16} />
                        <span>Ruletka Europejska</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className="text-primary" size={16} />
                        <span>Blackjack Classic</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className="text-primary" size={16} />
                        <span>Baccarat</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className="text-primary" size={16} />
                        <span>Sic Bo</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="max-w-6xl mx-auto">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Icon name="Trophy" className="text-primary" size={28} />
                      Top Producenci Gier
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { name: 'Pragmatic Play', games: '500+' },
                        { name: 'NetEnt', games: '300+' },
                        { name: "Play'n GO", games: '400+' },
                        { name: 'Evolution Gaming', games: '200+' },
                        { name: 'Microgaming', games: '600+' },
                        { name: 'Yggdrasil', games: '250+' },
                        { name: 'Red Tiger', games: '300+' },
                        { name: 'Quickspin', games: '150+' }
                      ].map((provider, idx) => (
                        <div key={idx} className="bg-muted/30 rounded-lg p-4 text-center hover:bg-primary/10 transition-colors cursor-pointer">
                          <p className="font-semibold">{provider.name}</p>
                          <p className="text-sm text-primary">{provider.games} gier</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
                <div className="flex items-start gap-4">
                  <Icon name="Lightbulb" className="text-primary mt-1 flex-shrink-0" size={32} />
                  <div className="space-y-3">
                    <h4 className="text-xl font-bold">Jak wybrać najlepszą grę kasynową?</h4>
                    <ul className="space-y-2 text-foreground/80">
                      <li className="flex items-start gap-2">
                        <Icon name="ChevronRight" className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span><strong>RTP (Return to Player)</strong> – wybieraj gry z RTP powyżej 96%</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="ChevronRight" className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span><strong>Zmienność</strong> – niska zmienność = częste małe wygrane, wysoka = rzadkie duże</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="ChevronRight" className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span><strong>Darmowe spiny</strong> – testuj gry w wersji demo przed grą na prawdziwe</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="ChevronRight" className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span><strong>Producent</strong> – sprawdzeni dostawcy = uczciwe generatory liczb losowych</span>
                      </li>
                    </ul>
                    <p className="text-sm text-foreground/60 pt-2 border-t border-primary/20">
                      <Icon name="AlertCircle" className="inline mr-1" size={14} />
                      Wszystkie gry w polecanych przez nas kasynach są certyfikowane i uczciwe
                    </p>
                  </div>
                </div>
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
                  <img 
                    src="https://cdn.poehali.dev/projects/c2933cfb-9ddd-413a-a6ef-7b99d3f5e883/bucket/a7cfc0ea-3593-4a47-a978-d8ffc6530c98.png"
                    alt="BKR Logo"
                    className="relative w-12 h-12 object-contain"
                  />
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
              <h4 className="font-semibold mb-4">Przydatne Linki</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>
                  <button onClick={() => navigate('/o-nas')} className="hover:text-primary transition-colors">
                    O nas
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('/polityka-prywatnosci')} className="hover:text-primary transition-colors">
                    Polityka prywatności
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kategorie</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>
                  <button onClick={() => setActiveTab('ranking')} className="hover:text-primary transition-colors">
                    Top Kasyna
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('bonusy')} className="hover:text-primary transition-colors">
                    Najlepsze Bonusy
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('gry')} className="hover:text-primary transition-colors">
                    Gry Kasynowe
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('faq')} className="hover:text-primary transition-colors">
                    FAQ
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kanał Telegram</h4>
              <p className="text-sm text-foreground/60 mb-3">
                Dołącz do naszego kanału i bądź na bieżąco
              </p>
              <Button 
                asChild
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a href="https://t.me/bkreitingcom" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" className="mr-2" size={18} />
                  Kanał Telegram
                </a>
              </Button>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground/60">
              © 2026 bkreiting.com. Wszystkie prawa zastrzeżone.
            </p>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="border-primary/30">
                <Icon name="Shield" className="mr-1" size={14} />
                18+
              </Badge>
              <Badge variant="outline" className="border-primary/30">
                Odpowiedzialna Gra
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}