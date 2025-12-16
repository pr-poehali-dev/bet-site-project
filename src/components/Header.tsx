import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  onNavigate: (section: string) => void;
  activeSection: string;
  onAuthClick: () => void;
  isAuthenticated: boolean;
}

export default function Header({ onNavigate, activeSection, onAuthClick, isAuthenticated }: HeaderProps) {
  const navItems = [
    { id: 'sport', label: 'Спорт', icon: 'Trophy' },
    { id: 'events', label: 'События', icon: 'Calendar' },
    { id: 'live', label: 'Лайв', icon: 'Radio' },
    { id: 'balance', label: 'Баланс', icon: 'Wallet' },
    { id: 'history', label: 'История', icon: 'History' },
    { id: 'profile', label: 'Профиль', icon: 'User' },
    { id: 'help', label: 'Помощь', icon: 'HelpCircle' },
  ];

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Icon name="Zap" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-primary">GOLDBET</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'default' : 'ghost'}
                size="sm"
                onClick={() => onNavigate(item.id)}
                className="gap-2"
              >
                <Icon name={item.icon as any} size={16} />
                {item.label}
              </Button>
            ))}
          </nav>

          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center gap-2 bg-secondary px-3 py-1.5 rounded-lg">
                <Icon name="Wallet" size={16} className="text-primary" />
                <span className="font-bold text-primary">12,500 ₽</span>
              </div>
              <Button variant="ghost" size="icon">
                <Icon name="Bell" size={18} />
              </Button>
            </div>
          ) : (
            <Button variant="default" size="sm" className="gap-2" onClick={onAuthClick}>
              <Icon name="LogIn" size={16} />
              Войти
            </Button>
          )}
        </div>

        <nav className="md:hidden flex overflow-x-auto pb-3 gap-2 scrollbar-hide">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant={activeSection === item.id ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onNavigate(item.id)}
              className="gap-2 whitespace-nowrap"
            >
              <Icon name={item.icon as any} size={16} />
              {item.label}
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
}