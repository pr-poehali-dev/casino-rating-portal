import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const ADMIN_URL = 'https://functions.poehali.dev/0a610d71-a24c-41d0-ac7f-8844f6c54dfa';

export default function AdminSetup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('admin@grin.com');
  const [password, setPassword] = useState('');
  const [setupKey, setSetupKey] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSetup = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');
    
    try {
      const response = await fetch(`${ADMIN_URL}/setup-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, setup_key: setupKey }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setMessage('Hasło ustawione! Przekierowuję do logowania...');
        setTimeout(() => navigate('/admin'), 2000);
      } else {
        setError(data.error || 'Błąd ustawiania hasła');
      }
    } catch (err) {
      setError('Błąd połączenia z serwerem');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/10 backdrop-blur-md border-white/20">
        <CardHeader>
          <CardTitle className="text-2xl text-white text-center">Konfiguracja Administratora</CardTitle>
          <CardDescription className="text-gray-300 text-center">
            Ustaw hasło dla konta administratora
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSetup} className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="password" className="text-white">Nowe Hasło</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white/10 border-white/20 text-white"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="setupKey" className="text-white">Klucz Setup</Label>
              <Input
                id="setupKey"
                type="password"
                value={setupKey}
                onChange={(e) => setSetupKey(e.target.value)}
                className="bg-white/10 border-white/20 text-white"
                placeholder="Wprowadź klucz setup"
                required
              />
              <p className="text-xs text-gray-400 mt-1">
                Klucz setup to: Www373826483_setup
              </p>
            </div>
            
            {message && (
              <div className="text-green-300 text-sm flex items-center gap-2 p-3 bg-green-500/10 rounded-lg">
                <Icon name="Check" size={16} />
                {message}
              </div>
            )}
            
            {error && (
              <div className="text-red-300 text-sm flex items-center gap-2 p-3 bg-red-500/10 rounded-lg">
                <Icon name="AlertCircle" size={16} />
                {error}
              </div>
            )}
            
            <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500">
              Ustaw Hasło
            </Button>
            
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => navigate('/admin')}
              className="w-full border-white/20 text-white"
            >
              Powrót do logowania
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
