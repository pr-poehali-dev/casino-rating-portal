import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const PROMOTIONS_URL = 'https://functions.poehali.dev/22be5a26-b121-459b-bf52-706cdb683d86';
const ADMIN_URL = 'https://functions.poehali.dev/0a610d71-a24c-41d0-ac7f-8844f6c54dfa';

interface Promotion {
  id: number;
  casino_name: string;
  title: string;
  description: string;
  promo_code?: string;
  bonus_amount: string;
  bonus_type: string;
  valid_until?: string;
  is_exclusive: boolean;
  casino_url: string;
  viewed?: boolean;
  clicked?: boolean;
}

interface Notification {
  id: number;
  title: string;
  message: string;
  promotion_id?: number;
  is_read: boolean;
  created_at: string;
}

export default function Dashboard() {
  const { user, sessionToken, logout } = useAuth();
  const navigate = useNavigate();
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [showNotifications, setShowNotifications] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [copiedPromo, setCopiedPromo] = useState<number | null>(null);

  useEffect(() => {
    if (!sessionToken) {
      navigate('/');
      return;
    }
    loadPromotions();
    loadNotifications();
  }, [sessionToken]);

  const loadPromotions = async () => {
    try {
      const response = await fetch(`${PROMOTIONS_URL}/user`, {
        headers: {
          'Authorization': `Bearer ${sessionToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setPromotions(data.promotions || []);
      }
    } catch (error) {
      console.error('Load promotions error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadNotifications = async () => {
    try {
      const response = await fetch(`${ADMIN_URL}/notifications`, {
        headers: {
          'Authorization': `Bearer ${sessionToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setNotifications(data.notifications || []);
        setUnreadCount(data.notifications?.filter((n: Notification) => !n.is_read).length || 0);
      }
    } catch (error) {
      console.error('Load notifications error:', error);
    }
  };

  const markNotificationRead = async (notificationId: number) => {
    try {
      await fetch(`${ADMIN_URL}/notifications/${notificationId}/read`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${sessionToken}`,
        },
      });

      setNotifications(prev =>
        prev.map(n => (n.id === notificationId ? { ...n, is_read: true } : n))
      );
      setUnreadCount(prev => Math.max(0, prev - 1));
    } catch (error) {
      console.error('Mark read error:', error);
    }
  };

  const markAsViewed = async (promotionId: number, clicked: boolean = false) => {
    try {
      await fetch(`${PROMOTIONS_URL}/view`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionToken}`,
        },
        body: JSON.stringify({
          promotion_id: promotionId,
          clicked,
        }),
      });

      if (clicked) {
        setPromotions(prev =>
          prev.map(p => (p.id === promotionId ? { ...p, clicked: true, viewed: true } : p))
        );
      }
    } catch (error) {
      console.error('Mark viewed error:', error);
    }
  };

  const handleCopyPromo = (promoCode: string, promotionId: number) => {
    navigator.clipboard.writeText(promoCode);
    setCopiedPromo(promotionId);
    markAsViewed(promotionId, false);
    setTimeout(() => setCopiedPromo(null), 2000);
  };

  const handlePromoClick = (promotion: Promotion) => {
    markAsViewed(promotion.id, true);
    window.open(promotion.casino_url, '_blank', 'noopener,noreferrer');
  };

  const getBonusTypeLabel = (type: string) => {
    const types: Record<string, string> = {
      free_spins: 'Darmowe Spiny',
      deposit_match: 'Bonus Depozytowy',
      no_deposit: 'Bez Depozytu',
      cashback: 'Cashback',
    };
    return types[type] || type;
  };

  const getBonusTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      free_spins: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      deposit_match: 'bg-green-500/20 text-green-400 border-green-500/30',
      no_deposit: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      cashback: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    };
    return colors[type] || 'bg-secondary/20 text-secondary border-secondary/30';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Icon name="Loader2" className="animate-spin text-primary mx-auto mb-4" size={48} />
          <p className="text-foreground/70">Ładowanie...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
                <div className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary p-2.5 rounded-xl">
                  <Icon name="Crown" className="text-primary-foreground" size={28} />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-primary via-primary/90 to-foreground bg-clip-text text-transparent">
                  bkreiting.com
                </span>
                <span className="text-xs text-primary/70 font-semibold">MOJE KONTO</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <Button
                  variant="outline"
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="border-primary/30 hover:bg-primary/10 relative"
                >
                  <Icon name="Bell" size={18} />
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {unreadCount}
                    </span>
                  )}
                </Button>

                {showNotifications && (
                  <div className="absolute right-0 top-12 w-80 bg-card border border-border rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
                    <div className="p-3 border-b border-border flex justify-between items-center">
                      <span className="font-semibold">Powiadomienia</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowNotifications(false)}
                      >
                        <Icon name="X" size={16} />
                      </Button>
                    </div>
                    {notifications.length === 0 ? (
                      <div className="p-6 text-center text-foreground/60">
                        Brak powiadomień
                      </div>
                    ) : (
                      <div className="divide-y divide-border">
                        {notifications.map((notif) => (
                          <div
                            key={notif.id}
                            className={`p-3 hover:bg-muted/50 cursor-pointer ${
                              !notif.is_read ? 'bg-primary/5' : ''
                            }`}
                            onClick={() => markNotificationRead(notif.id)}
                          >
                            <div className="flex items-start gap-2">
                              <Icon
                                name={notif.is_read ? 'Mail' : 'MailOpen'}
                                size={16}
                                className={notif.is_read ? 'text-foreground/40' : 'text-primary'}
                              />
                              <div className="flex-1">
                                <div className="font-medium text-sm">{notif.title}</div>
                                <div className="text-xs text-foreground/70 mt-1">{notif.message}</div>
                                <div className="text-xs text-foreground/50 mt-1">
                                  {new Date(notif.created_at).toLocaleString('pl-PL')}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="hidden md:flex flex-col items-end">
                <span className="text-sm font-semibold">{user?.full_name || user?.email}</span>
                <span className="text-xs text-foreground/60">{user?.email}</span>
              </div>
              <Button
                variant="outline"
                onClick={logout}
                className="border-primary/30 hover:bg-primary/10"
              >
                <Icon name="LogOut" className="mr-2" size={18} />
                <span className="hidden md:inline">Wyloguj</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <Icon name="Sparkles" className="text-primary" size={32} />
                <h1 className="text-3xl md:text-4xl font-bold">Twoje Ekskluzywne Promocje</h1>
              </div>
              <p className="text-foreground/70 text-lg">
                Masz dostęp do {promotions.filter(p => !p.viewed).length} nowych ofert bonusowych!
              </p>
            </div>

            {promotions.length === 0 ? (
              <Card className="bg-card/50">
                <CardContent className="py-12 text-center">
                  <Icon name="Inbox" className="mx-auto text-foreground/40 mb-4" size={64} />
                  <h3 className="text-xl font-semibold mb-2">Brak aktywnych promocji</h3>
                  <p className="text-foreground/60">Wróć wkrótce - nowe oferty pojawiają się regularnie!</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6">
                {promotions.map((promo) => (
                  <Card
                    key={promo.id}
                    className={`card-glow bg-card border-border ${
                      promo.viewed ? 'opacity-75' : ''
                    }`}
                  >
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className="bg-primary/20 text-primary border-primary/40">
                              {promo.casino_name}
                            </Badge>
                            {promo.is_exclusive && (
                              <Badge className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
                                <Icon name="Star" className="mr-1" size={12} />
                                EKSKLUZYWNE
                              </Badge>
                            )}
                            {!promo.viewed && (
                              <Badge variant="outline" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                                <Icon name="Gift" className="mr-1" size={12} />
                                NOWE
                              </Badge>
                            )}
                            <Badge variant="outline" className={getBonusTypeColor(promo.bonus_type)}>
                              {getBonusTypeLabel(promo.bonus_type)}
                            </Badge>
                          </div>
                          <CardTitle className="text-2xl mb-2">{promo.title}</CardTitle>
                          <CardDescription className="text-base">{promo.description}</CardDescription>
                        </div>
                        <div className="flex flex-col items-start md:items-end gap-2">
                          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-lg px-4 py-2">
                            <p className="text-lg font-bold text-primary">{promo.bonus_amount}</p>
                          </div>
                          {promo.valid_until && (
                            <div className="flex items-center gap-1 text-xs text-foreground/60">
                              <Icon name="Clock" size={14} />
                              <span>Do: {new Date(promo.valid_until).toLocaleDateString('pl-PL')}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardHeader>

                    {promo.promo_code && (
                      <CardContent>
                        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-l-4 border-primary rounded-lg p-4">
                          <div className="flex items-center justify-between gap-4">
                            <div>
                              <p className="text-sm text-foreground/60 mb-1">Kod promocyjny:</p>
                              <p className="text-2xl font-mono font-bold text-primary tracking-wider">
                                {promo.promo_code}
                              </p>
                            </div>
                            <Button
                              variant="outline"
                              onClick={() => handleCopyPromo(promo.promo_code!, promo.id)}
                              className="border-primary/30 hover:bg-primary/10"
                            >
                              {copiedPromo === promo.id ? (
                                <>
                                  <Icon name="Check" className="mr-2" size={18} />
                                  Skopiowano!
                                </>
                              ) : (
                                <>
                                  <Icon name="Copy" className="mr-2" size={18} />
                                  Kopiuj
                                </>
                              )}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    )}

                    <CardFooter className="bg-card/50">
                      <Button
                        onClick={() => handlePromoClick(promo)}
                        className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:from-primary/90 hover:to-secondary/90"
                      >
                        <Icon name="ExternalLink" className="mr-2" size={18} />
                        {promo.clicked ? 'Przejdź ponownie' : 'Odbierz Bonus'}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}