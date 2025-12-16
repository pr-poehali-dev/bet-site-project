import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Match {
  id: number;
  sport: string;
  league: string;
  team1: string;
  team2: string;
  time: string;
  live: boolean;
  odds: {
    win1: number;
    draw: number;
    win2: number;
  };
}

const Index = () => {
  const [activeSection, setActiveSection] = useState('live');
  const [balance] = useState(15420.50);

  const sports = [
    { id: 'football', name: 'Футбол', icon: 'Trophy', count: 245 },
    { id: 'basketball', name: 'Баскетбол', icon: 'Circle', count: 128 },
    { id: 'tennis', name: 'Теннис', icon: 'CircleDot', count: 89 },
    { id: 'hockey', name: 'Хоккей', icon: 'Disc', count: 67 },
    { id: 'volleyball', name: 'Волейбол', icon: 'CircleOff', count: 42 },
  ];

  const liveMatches: Match[] = [
    {
      id: 1,
      sport: 'Футбол',
      league: 'Чемпионат Англии',
      team1: 'Манчестер Сити',
      team2: 'Ливерпуль',
      time: '68:24',
      live: true,
      odds: { win1: 2.15, draw: 3.40, win2: 3.20 }
    },
    {
      id: 2,
      sport: 'Баскетбол',
      league: 'NBA',
      team1: 'Лейкерс',
      team2: 'Бостон',
      time: '3 четв.',
      live: true,
      odds: { win1: 1.85, draw: 0, win2: 1.95 }
    },
    {
      id: 3,
      sport: 'Футбол',
      league: 'Лига Чемпионов',
      team1: 'Реал Мадрид',
      team2: 'Бавария',
      time: '45:00',
      live: true,
      odds: { win1: 2.45, draw: 3.10, win2: 2.80 }
    },
    {
      id: 4,
      sport: 'Теннис',
      league: 'ATP Masters',
      team1: 'Джокович',
      team2: 'Алькарас',
      time: 'Сет 2',
      live: true,
      odds: { win1: 1.72, draw: 0, win2: 2.10 }
    },
    {
      id: 5,
      sport: 'Хоккей',
      league: 'КХЛ',
      team1: 'ЦСКА',
      team2: 'СКА',
      time: '2 период',
      live: true,
      odds: { win1: 2.20, draw: 3.80, win2: 2.90 }
    }
  ];

  const upcomingMatches: Match[] = [
    {
      id: 6,
      sport: 'Футбол',
      league: 'Серия А',
      team1: 'Интер',
      team2: 'Милан',
      time: 'Сегодня 20:00',
      live: false,
      odds: { win1: 2.05, draw: 3.25, win2: 3.50 }
    },
    {
      id: 7,
      sport: 'Баскетбол',
      league: 'Евролига',
      team1: 'ЦСКА',
      team2: 'Реал',
      time: 'Сегодня 21:30',
      live: false,
      odds: { win1: 1.95, draw: 0, win2: 1.85 }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Icon name="Zap" className="text-primary" size={32} />
              <h1 className="text-2xl font-heading font-bold text-primary">BETMAX</h1>
            </div>
            
            <nav className="hidden md:flex items-center gap-1">
              {['Спорт', 'События', 'Лайв', 'Казино', 'Live-казино'].map((item) => (
                <Button
                  key={item}
                  variant={activeSection === item.toLowerCase() ? 'default' : 'ghost'}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className="text-sm font-medium"
                >
                  {item}
                </Button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 bg-secondary px-4 py-2 rounded-lg">
              <Icon name="Wallet" className="text-primary" size={20} />
              <span className="font-heading font-bold text-lg text-primary">
                {balance.toLocaleString('ru-RU', { minimumFractionDigits: 2 })} ₽
              </span>
            </div>
            
            <Button variant="ghost" size="icon">
              <Icon name="Bell" size={20} />
            </Button>
            
            <Button variant="ghost" size="icon">
              <Icon name="User" size={20} />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <aside className="lg:col-span-3">
            <Card className="p-4 bg-card border-border">
              <h2 className="text-lg font-heading font-bold mb-4 text-primary flex items-center gap-2">
                <Icon name="Trophy" size={20} />
                Виды спорта
              </h2>
              
              <div className="space-y-2">
                {sports.map((sport) => (
                  <button
                    key={sport.id}
                    className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-secondary transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <Icon name={sport.icon as any} size={18} className="text-primary" />
                      <span className="font-medium">{sport.name}</span>
                    </div>
                    <Badge variant="secondary" className="bg-primary/20 text-primary group-hover:bg-primary group-hover:text-black">
                      {sport.count}
                    </Badge>
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <Button className="w-full bg-primary hover:bg-primary/90 text-black font-bold" size="lg">
                  <Icon name="Star" size={18} className="mr-2" />
                  Избранное
                </Button>
              </div>
            </Card>
          </aside>

          <main className="lg:col-span-9">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary flex items-center gap-3">
                  <Icon name="Radio" className="animate-pulse" size={32} />
                  Live События
                </h2>
                <p className="text-muted-foreground mt-1">Прямые трансляции • {liveMatches.length} матчей</p>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Icon name="Filter" size={18} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="RefreshCw" size={18} />
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {liveMatches.map((match) => (
                <Card key={match.id} className="p-5 bg-card border-border hover:border-primary/50 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        {match.live && (
                          <Badge className="bg-destructive text-white animate-pulse">
                            <Icon name="Radio" size={12} className="mr-1" />
                            LIVE
                          </Badge>
                        )}
                        <span className="text-sm text-muted-foreground">{match.sport}</span>
                        <span className="text-sm text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">{match.league}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon name="Clock" size={16} className="text-primary" />
                        <span className="font-bold text-primary">{match.time}</span>
                      </div>
                    </div>
                    
                    <Button variant="ghost" size="icon">
                      <Icon name="Star" size={18} />
                    </Button>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-medium">{match.team1}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-medium">{match.team2}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-border">
                    <Button 
                      className="bg-secondary hover:bg-primary hover:text-black transition-all group h-14"
                      variant="secondary"
                    >
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground group-hover:text-black/70 mb-1">П1</div>
                        <div className="text-lg font-heading font-bold">{match.odds.win1.toFixed(2)}</div>
                      </div>
                    </Button>
                    
                    {match.odds.draw > 0 && (
                      <Button 
                        className="bg-secondary hover:bg-primary hover:text-black transition-all group h-14"
                        variant="secondary"
                      >
                        <div className="text-center">
                          <div className="text-xs text-muted-foreground group-hover:text-black/70 mb-1">X</div>
                          <div className="text-lg font-heading font-bold">{match.odds.draw.toFixed(2)}</div>
                        </div>
                      </Button>
                    )}
                    
                    <Button 
                      className="bg-secondary hover:bg-primary hover:text-black transition-all group h-14"
                      variant="secondary"
                    >
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground group-hover:text-black/70 mb-1">П2</div>
                        <div className="text-lg font-heading font-bold">{match.odds.win2.toFixed(2)}</div>
                      </div>
                    </Button>
                  </div>

                  <Button variant="outline" className="w-full mt-3 border-primary/30 hover:bg-primary hover:text-black">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Еще {Math.floor(Math.random() * 50) + 20} рынков
                  </Button>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4 flex items-center gap-2">
                <Icon name="Calendar" size={24} />
                Предстоящие события
              </h3>
              
              <div className="space-y-4">
                {upcomingMatches.map((match) => (
                  <Card key={match.id} className="p-5 bg-card border-border hover:border-primary/50 transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm text-muted-foreground">{match.sport}</span>
                          <span className="text-sm text-muted-foreground">•</span>
                          <span className="text-sm text-muted-foreground">{match.league}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Icon name="Clock" size={16} className="text-primary" />
                          <span className="font-bold text-primary">{match.time}</span>
                        </div>
                      </div>
                      
                      <Button variant="ghost" size="icon">
                        <Icon name="Star" size={18} />
                      </Button>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-medium">{match.team1}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-medium">{match.team2}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <Button 
                        className="bg-secondary hover:bg-primary hover:text-black transition-all group h-14"
                        variant="secondary"
                      >
                        <div className="text-center">
                          <div className="text-xs text-muted-foreground group-hover:text-black/70 mb-1">П1</div>
                          <div className="text-lg font-heading font-bold">{match.odds.win1.toFixed(2)}</div>
                        </div>
                      </Button>
                      
                      {match.odds.draw > 0 && (
                        <Button 
                          className="bg-secondary hover:bg-primary hover:text-black transition-all group h-14"
                          variant="secondary"
                        >
                          <div className="text-center">
                            <div className="text-xs text-muted-foreground group-hover:text-black/70 mb-1">X</div>
                            <div className="text-lg font-heading font-bold">{match.odds.draw.toFixed(2)}</div>
                          </div>
                        </Button>
                      )}
                      
                      <Button 
                        className="bg-secondary hover:bg-primary hover:text-black transition-all group h-14"
                        variant="secondary"
                      >
                        <div className="text-center">
                          <div className="text-xs text-muted-foreground group-hover:text-black/70 mb-1">П2</div>
                          <div className="text-lg font-heading font-bold">{match.odds.win2.toFixed(2)}</div>
                        </div>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-bold shadow-xl h-16 px-8">
          <Icon name="FileText" size={24} className="mr-2" />
          Купон ставок
          <Badge className="ml-3 bg-black text-primary">0</Badge>
        </Button>
      </div>
    </div>
  );
};

export default Index;
