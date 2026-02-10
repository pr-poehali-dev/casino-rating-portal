import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const ADMIN_URL = 'https://functions.poehali.dev/0a610d71-a24c-41d0-ac7f-8844f6c54dfa';

interface User {
  id: number;
  email: string;
  full_name?: string;
  created_at: string;
  last_login?: string;
  is_active: boolean;
  promotions_viewed: number;
  promotions_clicked: number;
}

interface Stats {
  user_stats: {
    total_users: number;
    active_users_7d: number;
    new_users_7d: number;
  };
  promo_stats: {
    total_promotions: number;
    active_promotions: number;
    exclusive_promotions: number;
  };
  top_promotions: Array<{
    title: string;
    casino_name: string;
    unique_views: number;
    unique_clicks: number;
  }>;
}

export default function AdminPanel() {
  const navigate = useNavigate();
  const [adminToken, setAdminToken] = useState<string | null>(localStorage.getItem('admin_token'));
  const [isLoggedIn, setIsLoggedIn] = useState(!!adminToken);
  
  // Login state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  
  // Users state
  const [users, setUsers] = useState<User[]>([]);
  const [usersTotal, setUsersTotal] = useState(0);
  const [usersSearch, setUsersSearch] = useState('');
  const [usersPage, setUsersPage] = useState(0);
  
  // Stats state
  const [stats, setStats] = useState<Stats | null>(null);
  
  // Notification form state
  const [notifUserId, setNotifUserId] = useState('');
  const [notifTitle, setNotifTitle] = useState('');
  const [notifMessage, setNotifMessage] = useState('');
  const [notifSuccess, setNotifSuccess] = useState('');
  
  // Broadcast form state
  const [broadcastTitle, setBroadcastTitle] = useState('');
  const [broadcastMessage, setBroadcastMessage] = useState('');
  const [broadcastSuccess, setBroadcastSuccess] = useState('');
  
  // Promotion form state
  const [promoCasino, setPromoCasino] = useState('');
  const [promoTitle, setPromoTitle] = useState('');
  const [promoDescription, setPromoDescription] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [promoAmount, setPromoAmount] = useState('');
  const [promoType, setPromoType] = useState('free_spins');
  const [promoUrl, setPromoUrl] = useState('');
  const [promoValidUntil, setPromoValidUntil] = useState('');
  const [promoExclusive, setPromoExclusive] = useState(false);
  const [promoNotify, setPromoNotify] = useState(true);
  const [promoSuccess, setPromoSuccess] = useState('');
  const [promoImageFile, setPromoImageFile] = useState<File | null>(null);
  const [promoImagePreview, setPromoImagePreview] = useState('');
  const [promoImageUrl, setPromoImageUrl] = useState('');
  const [uploadingImage, setUploadingImage] = useState(false);
  
  // Active tab
  const [activeTab, setActiveTab] = useState<'users' | 'stats' | 'notifications' | 'promotions'>('stats');

  useEffect(() => {
    if (isLoggedIn) {
      loadStats();
      if (activeTab === 'users') {
        loadUsers();
      }
    }
  }, [isLoggedIn, activeTab, usersPage, usersSearch]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    
    try {
      const response = await fetch(`${ADMIN_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        setLoginError(data.error || 'Błąd logowania');
        return;
      }
      
      localStorage.setItem('admin_token', data.session_token);
      setAdminToken(data.session_token);
      setIsLoggedIn(true);
    } catch (err) {
      setLoginError('Błąd połączenia z serwerem');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    setAdminToken(null);
    setIsLoggedIn(false);
    navigate('/');
  };

  const loadUsers = async () => {
    try {
      const params = new URLSearchParams({
        limit: '50',
        offset: (usersPage * 50).toString(),
      });
      
      if (usersSearch) {
        params.append('search', usersSearch);
      }
      
      const response = await fetch(`${ADMIN_URL}/users?${params}`, {
        headers: { 'Authorization': `Bearer ${adminToken}` },
      });
      
      const data = await response.json();
      setUsers(data.users || []);
      setUsersTotal(data.total || 0);
    } catch (err) {
      console.error('Error loading users:', err);
    }
  };

  const loadStats = async () => {
    try {
      const response = await fetch(`${ADMIN_URL}/stats`, {
        headers: { 'Authorization': `Bearer ${adminToken}` },
      });
      
      const data = await response.json();
      setStats(data);
    } catch (err) {
      console.error('Error loading stats:', err);
    }
  };

  const sendNotification = async (e: React.FormEvent) => {
    e.preventDefault();
    setNotifSuccess('');
    
    try {
      const response = await fetch(`${ADMIN_URL}/notifications/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${adminToken}`,
        },
        body: JSON.stringify({
          user_id: parseInt(notifUserId),
          title: notifTitle,
          message: notifMessage,
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setNotifSuccess('Powiadomienie wysłane pomyślnie!');
        setNotifUserId('');
        setNotifTitle('');
        setNotifMessage('');
        setTimeout(() => setNotifSuccess(''), 3000);
      } else {
        alert(data.error || 'Błąd wysyłania');
      }
    } catch (err) {
      alert('Błąd połączenia');
    }
  };

  const sendBroadcast = async (e: React.FormEvent) => {
    e.preventDefault();
    setBroadcastSuccess('');
    
    if (!confirm('Wysłać powiadomienie do wszystkich użytkowników?')) {
      return;
    }
    
    try {
      const response = await fetch(`${ADMIN_URL}/notifications/broadcast`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${adminToken}`,
        },
        body: JSON.stringify({
          title: broadcastTitle,
          message: broadcastMessage,
          user_filter: 'all',
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setBroadcastSuccess(`Wysłano do ${data.sent_count} użytkowników!`);
        setBroadcastTitle('');
        setBroadcastMessage('');
        setTimeout(() => setBroadcastSuccess(''), 5000);
      } else {
        alert(data.error || 'Błąd wysyłania');
      }
    } catch (err) {
      alert('Błąd połączenia');
    }
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    if (!file.type.startsWith('image/')) {
      alert('Proszę wybrać plik obrazu');
      return;
    }
    
    if (file.size > 5 * 1024 * 1024) {
      alert('Rozmiar pliku nie może przekraczać 5 MB');
      return;
    }
    
    setPromoImageFile(file);
    
    const reader = new FileReader();
    reader.onloadend = () => {
      setPromoImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const uploadImage = async () => {
    if (!promoImageFile) return null;
    
    setUploadingImage(true);
    try {
      const reader = new FileReader();
      const base64Promise = new Promise<string>((resolve) => {
        reader.onloadend = () => {
          const base64 = (reader.result as string).split(',')[1];
          resolve(base64);
        };
        reader.readAsDataURL(promoImageFile);
      });
      
      const base64 = await base64Promise;
      
      const response = await fetch(`${ADMIN_URL}/promotions/upload-image`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${adminToken}`,
        },
        body: JSON.stringify({
          image: base64,
          filename: promoImageFile.name,
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        return data.image_url;
      } else {
        alert(data.error || 'Błąd uploadu obrazu');
        return null;
      }
    } catch (err) {
      alert('Błąd połączenia podczas uploadu');
      return null;
    } finally {
      setUploadingImage(false);
    }
  };

  const createPromotion = async (e: React.FormEvent) => {
    e.preventDefault();
    setPromoSuccess('');
    
    let imageUrl = promoImageUrl;
    
    if (promoImageFile && !imageUrl) {
      imageUrl = await uploadImage() || '';
      if (promoImageFile && !imageUrl) {
        return;
      }
    }
    
    try {
      const response = await fetch(`${ADMIN_URL}/promotions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${adminToken}`,
        },
        body: JSON.stringify({
          casino_name: promoCasino,
          title: promoTitle,
          description: promoDescription,
          promo_code: promoCode || null,
          bonus_amount: promoAmount,
          bonus_type: promoType,
          casino_url: promoUrl,
          valid_until: promoValidUntil || null,
          is_exclusive: promoExclusive,
          notify_users: promoNotify,
          image_url: imageUrl || null,
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setPromoSuccess('Promocja utworzona i wysłana do użytkowników!');
        setPromoCasino('');
        setPromoTitle('');
        setPromoDescription('');
        setPromoCode('');
        setPromoAmount('');
        setPromoType('free_spins');
        setPromoUrl('');
        setPromoValidUntil('');
        setPromoExclusive(false);
        setPromoNotify(true);
        setPromoImageFile(null);
        setPromoImagePreview('');
        setPromoImageUrl('');
        loadStats();
        setTimeout(() => setPromoSuccess(''), 5000);
      } else {
        alert(data.error || 'Błąd tworzenia promocji');
      }
    } catch (err) {
      alert('Błąd połączenia');
    }
  };

  // Login screen
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-2xl text-white text-center">Panel Administratora</CardTitle>
            <CardDescription className="text-gray-300 text-center">
              Zaloguj się aby zarządzać systemem
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-white">Login</Label>
                <Input
                  id="email"
                  type="text"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white"
                  placeholder="Grin"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="password" className="text-white">Hasło</Label>
                <Input
                  id="password"
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="bg-white/10 border-white/20 text-white"
                  required
                />
              </div>
              
              {loginError && (
                <div className="text-red-300 text-sm flex items-center gap-2">
                  <Icon name="AlertCircle" size={16} />
                  {loginError}
                </div>
              )}
              
              <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500">
                Zaloguj się
              </Button>
              
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => navigate('/admin/setup')}
                  className="text-sm text-gray-300 hover:text-white underline"
                >
                  Nie możesz się zalogować? Ustaw nowe hasło
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Admin panel
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <Icon name="Shield" size={28} />
            Panel Administratora
          </h1>
          <Button onClick={handleLogout} variant="outline" className="border-white/20 text-white">
            <Icon name="LogOut" className="mr-2" size={18} />
            Wyloguj
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-2 mb-6">
          <Button
            onClick={() => setActiveTab('stats')}
            variant={activeTab === 'stats' ? 'default' : 'outline'}
            className={activeTab === 'stats' ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'border-white/20 text-white'}
          >
            <Icon name="BarChart3" className="mr-2" size={18} />
            Statystyki
          </Button>
          <Button
            onClick={() => setActiveTab('users')}
            variant={activeTab === 'users' ? 'default' : 'outline'}
            className={activeTab === 'users' ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'border-white/20 text-white'}
          >
            <Icon name="Users" className="mr-2" size={18} />
            Użytkownicy
          </Button>
          <Button
            onClick={() => setActiveTab('notifications')}
            variant={activeTab === 'notifications' ? 'default' : 'outline'}
            className={activeTab === 'notifications' ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'border-white/20 text-white'}
          >
            <Icon name="Bell" className="mr-2" size={18} />
            Powiadomienia
          </Button>
          <Button
            onClick={() => setActiveTab('promotions')}
            variant={activeTab === 'promotions' ? 'default' : 'outline'}
            className={activeTab === 'promotions' ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'border-white/20 text-white'}
          >
            <Icon name="Gift" className="mr-2" size={18} />
            Promocje
          </Button>
        </div>

        {/* Stats Tab */}
        {activeTab === 'stats' && stats && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Icon name="Users" size={20} />
                    Użytkownicy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-3xl font-bold text-white">{stats.user_stats.total_users}</div>
                  <div className="text-sm text-gray-300">Aktywnych (7 dni): {stats.user_stats.active_users_7d}</div>
                  <div className="text-sm text-gray-300">Nowych (7 dni): {stats.user_stats.new_users_7d}</div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Icon name="Gift" size={20} />
                    Promocje
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-3xl font-bold text-white">{stats.promo_stats.total_promotions}</div>
                  <div className="text-sm text-gray-300">Aktywnych: {stats.promo_stats.active_promotions}</div>
                  <div className="text-sm text-gray-300">Ekskluzywnych: {stats.promo_stats.exclusive_promotions}</div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Icon name="TrendingUp" size={20} />
                    Zaangażowanie
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-sm text-gray-300">
                    Średnio {stats.user_stats.total_users > 0 ? 
                      Math.round(stats.top_promotions.reduce((sum, p) => sum + p.unique_views, 0) / stats.user_stats.total_users * 10) / 10 : 0} 
                    &nbsp;wyświetleń na użytkownika
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Top 10 Promocji</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {stats.top_promotions.map((promo, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                      <div>
                        <div className="text-white font-medium">{promo.title}</div>
                        <div className="text-sm text-gray-400">{promo.casino_name}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-white">{promo.unique_views} wyświetleń</div>
                        <div className="text-sm text-gray-400">{promo.unique_clicks} kliknięć</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <div className="space-y-4">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Szukaj użytkowników</CardTitle>
              </CardHeader>
              <CardContent>
                <Input
                  placeholder="Email lub imię..."
                  value={usersSearch}
                  onChange={(e) => {
                    setUsersSearch(e.target.value);
                    setUsersPage(0);
                  }}
                  className="bg-white/10 border-white/20 text-white"
                />
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Użytkownicy ({usersTotal})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {users.map((user) => (
                    <div key={user.id} className="p-4 bg-white/5 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="text-white font-medium">
                            {user.full_name || 'Bez nazwy'} #{user.id}
                          </div>
                          <div className="text-sm text-gray-400">{user.email}</div>
                          <div className="text-xs text-gray-500 mt-1">
                            Rejestracja: {new Date(user.created_at).toLocaleDateString('pl-PL')}
                          </div>
                        </div>
                        <div className="text-right text-sm">
                          <div className="text-gray-300">{user.promotions_viewed} wyświetleń</div>
                          <div className="text-gray-300">{user.promotions_clicked} kliknięć</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-between items-center mt-4">
                  <Button
                    onClick={() => setUsersPage(Math.max(0, usersPage - 1))}
                    disabled={usersPage === 0}
                    variant="outline"
                    className="border-white/20 text-white"
                  >
                    Poprzednia
                  </Button>
                  <span className="text-white">Strona {usersPage + 1}</span>
                  <Button
                    onClick={() => setUsersPage(usersPage + 1)}
                    disabled={(usersPage + 1) * 50 >= usersTotal}
                    variant="outline"
                    className="border-white/20 text-white"
                  >
                    Następna
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Notifications Tab */}
        {activeTab === 'notifications' && (
          <div className="grid md:grid-cols-2 gap-6">
            {/* Single notification */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Wyślij powiadomienie do użytkownika</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={sendNotification} className="space-y-4">
                  <div>
                    <Label htmlFor="notifUserId" className="text-white">ID Użytkownika</Label>
                    <Input
                      id="notifUserId"
                      type="number"
                      value={notifUserId}
                      onChange={(e) => setNotifUserId(e.target.value)}
                      className="bg-white/10 border-white/20 text-white"
                      placeholder="np. 1"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="notifTitle" className="text-white">Tytuł</Label>
                    <Input
                      id="notifTitle"
                      value={notifTitle}
                      onChange={(e) => setNotifTitle(e.target.value)}
                      className="bg-white/10 border-white/20 text-white"
                      placeholder="Nowa promocja..."
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="notifMessage" className="text-white">Wiadomość</Label>
                    <Textarea
                      id="notifMessage"
                      value={notifMessage}
                      onChange={(e) => setNotifMessage(e.target.value)}
                      className="bg-white/10 border-white/20 text-white"
                      placeholder="Opis promocji..."
                      rows={4}
                      required
                    />
                  </div>
                  
                  {notifSuccess && (
                    <div className="text-green-300 text-sm flex items-center gap-2">
                      <Icon name="Check" size={16} />
                      {notifSuccess}
                    </div>
                  )}
                  
                  <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500">
                    <Icon name="Send" className="mr-2" size={18} />
                    Wyślij
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Broadcast */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Wyślij do wszystkich użytkowników</CardTitle>
                <CardDescription className="text-gray-300">
                  Powiadomienie otrzymają wszyscy aktywni użytkownicy
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={sendBroadcast} className="space-y-4">
                  <div>
                    <Label htmlFor="broadcastTitle" className="text-white">Tytuł</Label>
                    <Input
                      id="broadcastTitle"
                      value={broadcastTitle}
                      onChange={(e) => setBroadcastTitle(e.target.value)}
                      className="bg-white/10 border-white/20 text-white"
                      placeholder="Nowa promocja..."
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="broadcastMessage" className="text-white">Wiadomość</Label>
                    <Textarea
                      id="broadcastMessage"
                      value={broadcastMessage}
                      onChange={(e) => setBroadcastMessage(e.target.value)}
                      className="bg-white/10 border-white/20 text-white"
                      placeholder="Opis promocji..."
                      rows={4}
                      required
                    />
                  </div>
                  
                  {broadcastSuccess && (
                    <div className="text-green-300 text-sm flex items-center gap-2">
                      <Icon name="Check" size={16} />
                      {broadcastSuccess}
                    </div>
                  )}
                  
                  <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-red-500">
                    <Icon name="Radio" className="mr-2" size={18} />
                    Wyślij broadcast
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Promotions Tab */}
        {activeTab === 'promotions' && (
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Utwórz nową promocję</CardTitle>
              <CardDescription className="text-gray-300">
                Wypełnij formularz, aby dodać promocję i wysłać ją użytkownikom
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={createPromotion} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="promoCasino" className="text-white">Kasyno *</Label>
                    <Input
                      id="promoCasino"
                      value={promoCasino}
                      onChange={(e) => setPromoCasino(e.target.value)}
                      className="bg-white/10 border-white/20 text-white"
                      placeholder="np. Vavada"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="promoType" className="text-white">Typ bonusu *</Label>
                    <select
                      id="promoType"
                      value={promoType}
                      onChange={(e) => setPromoType(e.target.value)}
                      className="w-full h-10 px-3 rounded-md bg-white/10 border border-white/20 text-white"
                      required
                    >
                      <option value="free_spins">Darmowe Spiny</option>
                      <option value="deposit_match">Bonus Depozytowy</option>
                      <option value="no_deposit">Bez Depozytu</option>
                      <option value="cashback">Cashback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="promoTitle" className="text-white">Tytuł promocji *</Label>
                  <Input
                    id="promoTitle"
                    value={promoTitle}
                    onChange={(e) => setPromoTitle(e.target.value)}
                    className="bg-white/10 border-white/20 text-white"
                    placeholder="np. Gates of Olympus 1000 - 20 Free Spins"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="promoDescription" className="text-white">Opis *</Label>
                  <Textarea
                    id="promoDescription"
                    value={promoDescription}
                    onChange={(e) => setPromoDescription(e.target.value)}
                    className="bg-white/10 border-white/20 text-white"
                    placeholder="Szczegółowy opis promocji..."
                    rows={4}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="promoImage" className="text-white">Obraz promocji</Label>
                  <div className="space-y-2">
                    <Input
                      id="promoImage"
                      type="file"
                      accept="image/*"
                      onChange={handleImageSelect}
                      className="bg-white/10 border-white/20 text-white"
                    />
                    {promoImagePreview && (
                      <div className="mt-2">
                        <img 
                          src={promoImagePreview} 
                          alt="Preview" 
                          className="max-w-xs rounded-lg border border-white/20"
                        />
                      </div>
                    )}
                    <p className="text-xs text-gray-400">Maksymalny rozmiar: 5 MB. Formaty: JPG, PNG, WebP</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="promoAmount" className="text-white">Wartość bonusu *</Label>
                    <Input
                      id="promoAmount"
                      value={promoAmount}
                      onChange={(e) => setPromoAmount(e.target.value)}
                      className="bg-white/10 border-white/20 text-white"
                      placeholder="np. 20 Free Spins lub Do 5000 PLN"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="promoCode" className="text-white">Kod promocyjny</Label>
                    <Input
                      id="promoCode"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="bg-white/10 border-white/20 text-white"
                      placeholder="np. WELCOME5000"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="promoUrl" className="text-white">Link do kasyna *</Label>
                    <Input
                      id="promoUrl"
                      value={promoUrl}
                      onChange={(e) => setPromoUrl(e.target.value)}
                      className="bg-white/10 border-white/20 text-white"
                      placeholder="https://..."
                      type="url"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="promoValidUntil" className="text-white">Ważne do</Label>
                    <Input
                      id="promoValidUntil"
                      value={promoValidUntil}
                      onChange={(e) => setPromoValidUntil(e.target.value)}
                      className="bg-white/10 border-white/20 text-white"
                      type="datetime-local"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2 text-white cursor-pointer">
                    <input
                      type="checkbox"
                      checked={promoExclusive}
                      onChange={(e) => setPromoExclusive(e.target.checked)}
                      className="w-4 h-4"
                    />
                    <span>Oferta ekskluzywna</span>
                  </label>
                  
                  <label className="flex items-center gap-2 text-white cursor-pointer">
                    <input
                      type="checkbox"
                      checked={promoNotify}
                      onChange={(e) => setPromoNotify(e.target.checked)}
                      className="w-4 h-4"
                    />
                    <span>Wyślij powiadomienia użytkownikom</span>
                  </label>
                </div>

                {promoSuccess && (
                  <div className="text-green-300 text-sm flex items-center gap-2 p-3 bg-green-500/10 rounded-lg">
                    <Icon name="Check" size={16} />
                    {promoSuccess}
                  </div>
                )}

                <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500">
                  <Icon name="Plus" className="mr-2" size={18} />
                  Utwórz promocję
                </Button>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}