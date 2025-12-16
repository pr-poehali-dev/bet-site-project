import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface SportsEventsProps {
  onAddBet: (bet: any) => void;
}

export default function SportsEvents({ onAddBet }: SportsEventsProps) {
  const sports = [
    { id: 'football', name: 'Футбол', icon: '⚽' },
    { id: 'basketball', name: 'Баскетбол', icon: '🏀' },
    { id: 'tennis', name: 'Теннис', icon: '🎾' },
    { id: 'hockey', name: 'Хоккей', icon: '🏒' },
    { id: 'boxing', name: 'Бокс', icon: '🥊' },
  ];

  const matches = [
    {
      id: 1,
      sport: 'Футбол',
      league: 'Премьер-лига',
      team1: 'Манчестер Юнайтед',
      team2: 'Ливерпуль',
      time: '19:00',
      odds: { win1: 2.45, draw: 3.20, win2: 2.80 }
    },
    {
      id: 2,
      sport: 'Футбол',
      league: 'Ла Лига',
      team1: 'Реал Мадрид',
      team2: 'Барселона',
      time: '21:00',
      odds: { win1: 2.10, draw: 3.40, win2: 3.50 }
    },
    {
      id: 3,
      sport: 'Баскетбол',
      league: 'NBA',
      team1: 'Лос-Анджелес Лейкерс',
      team2: 'Голден Стэйт Уорриорз',
      time: '03:00',
      odds: { win1: 1.85, draw: null, win2: 1.95 }
    },
    {
      id: 4,
      sport: 'Теннис',
      league: 'ATP',
      team1: 'Новак Джокович',
      team2: 'Карлос Алькарас',
      time: '15:00',
      odds: { win1: 1.70, draw: null, win2: 2.15 }
    },
  ];

  return (
    <div className="space-y-4">
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full justify-start overflow-x-auto bg-card">
          <TabsTrigger value="all">Все</TabsTrigger>
          {sports.map((sport) => (
            <TabsTrigger key={sport.id} value={sport.id}>
              <span className="mr-2">{sport.icon}</span>
              {sport.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all" className="space-y-3 mt-4">
          {matches.map((match) => (
            <Card key={match.id} className="p-4 hover:border-primary transition-colors">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-muted-foreground">{match.league}</div>
                    <div className="font-semibold text-primary">{match.time}</div>
                  </div>
                  <Icon name="Star" size={20} className="text-muted-foreground hover:text-primary cursor-pointer" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{match.team1}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{match.team2}</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <Button
                    variant="outline"
                    className="flex flex-col h-auto py-2 hover:bg-primary hover:text-primary-foreground"
                    onClick={() => onAddBet({ match, type: 'П1', odds: match.odds.win1 })}
                  >
                    <span className="text-xs text-muted-foreground">П1</span>
                    <span className="font-bold text-primary">{match.odds.win1}</span>
                  </Button>
                  {match.odds.draw && (
                    <Button
                      variant="outline"
                      className="flex flex-col h-auto py-2 hover:bg-primary hover:text-primary-foreground"
                      onClick={() => onAddBet({ match, type: 'X', odds: match.odds.draw })}
                    >
                      <span className="text-xs text-muted-foreground">X</span>
                      <span className="font-bold text-primary">{match.odds.draw}</span>
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    className="flex flex-col h-auto py-2 hover:bg-primary hover:text-primary-foreground"
                    onClick={() => onAddBet({ match, type: 'П2', odds: match.odds.win2 })}
                  >
                    <span className="text-xs text-muted-foreground">П2</span>
                    <span className="font-bold text-primary">{match.odds.win2}</span>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
