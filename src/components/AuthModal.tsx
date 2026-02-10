import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useAuth } from '@/contexts/AuthContext';

interface AuthModalProps {
  onClose: () => void;
  initialMode?: 'login' | 'register';
}

export default function AuthModal({ onClose, initialMode = 'login' }: AuthModalProps) {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login, register } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (mode === 'login') {
        await login(email, password);
      } else {
        await register(email, password, fullName);
      }
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Wystąpił błąd');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative max-w-md w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 rounded-2xl blur-2xl"></div>
        <Card className="relative bg-card backdrop-blur-sm border-2 border-primary/30 shadow-2xl">
          <CardHeader className="relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-foreground/60 hover:text-foreground transition-colors"
            >
              <Icon name="X" size={24} />
            </button>
            <div className="flex items-center gap-4 mb-2">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full"></div>
                <div className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary p-4 rounded-xl">
                  <Icon name="User" className="text-primary-foreground" size={32} />
                </div>
              </div>
              <div>
                <CardTitle className="text-2xl bg-gradient-to-r from-primary via-primary/90 to-foreground bg-clip-text text-transparent">
                  {mode === 'login' ? 'Logowanie' : 'Rejestracja'}
                </CardTitle>
                <CardDescription className="mt-1">
                  {mode === 'login' 
                    ? 'Zaloguj się aby otrzymywać ekskluzywne bonusy' 
                    : 'Załóż konto i odbieraj najlepsze oferty'}
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              {error && (
                <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-3 flex items-start gap-2">
                  <Icon name="AlertCircle" className="text-destructive mt-0.5" size={18} />
                  <p className="text-sm text-destructive">{error}</p>
                </div>
              )}

              {mode === 'register' && (
                <div className="space-y-2">
                  <Label htmlFor="fullName">Imię i nazwisko (opcjonalne)</Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Jan Kowalski"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="bg-card/50 border-border"
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="twoj@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-card/50 border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Hasło</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Minimum 6 znaków"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="bg-card/50 border-border"
                />
              </div>

              {mode === 'register' && (
                <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-l-4 border-primary rounded-lg p-3">
                  <div className="flex items-start gap-2">
                    <Icon name="Info" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                    <p className="text-xs text-foreground/80">
                      Rejestrując się, zgadzasz się na otrzymywanie powiadomień o najlepszych bonusach i promocjach
                    </p>
                  </div>
                </div>
              )}
            </CardContent>

            <CardFooter className="flex flex-col gap-3">
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:from-primary/90 hover:to-secondary/90"
              >
                {isLoading ? (
                  <>
                    <Icon name="Loader2" className="mr-2 animate-spin" size={18} />
                    Proszę czekać...
                  </>
                ) : (
                  <>
                    {mode === 'login' ? (
                      <>
                        <Icon name="LogIn" className="mr-2" size={18} />
                        Zaloguj się
                      </>
                    ) : (
                      <>
                        <Icon name="UserPlus" className="mr-2" size={18} />
                        Zarejestruj się
                      </>
                    )}
                  </>
                )}
              </Button>

              <div className="text-center text-sm">
                {mode === 'login' ? (
                  <p className="text-foreground/60">
                    Nie masz konta?{' '}
                    <button
                      type="button"
                      onClick={() => {
                        setMode('register');
                        setError('');
                      }}
                      className="text-primary hover:underline font-semibold"
                    >
                      Zarejestruj się
                    </button>
                  </p>
                ) : (
                  <p className="text-foreground/60">
                    Masz już konto?{' '}
                    <button
                      type="button"
                      onClick={() => {
                        setMode('login');
                        setError('');
                      }}
                      className="text-primary hover:underline font-semibold"
                    >
                      Zaloguj się
                    </button>
                  </p>
                )}
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}