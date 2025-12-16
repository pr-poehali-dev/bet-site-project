import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface LiveEventsProps {
  onAddBet: (bet: any) => void;
}

export default function LiveEvents({ onAddBet }: LiveEventsProps) {
  const liveMatches = [
    {
      id: 1,
      sport: 'Футбол',
      team1: 'Челси',
      team2: 'Арсенал',
      score: '2:1',
      time: "67'",
      status: 'live',
      odds: { win1: 1.95, draw: 3.80, win2: 3.40 }
    },
    {
      id: 2,
      sport: 'Баскетбол',
      team1: 'Бруклин Нетс',
      team2: 'Бостон Селтикс',
      score: '89:92',
      time: 'Q3 8:24',
      status: 'live',
      odds: { win1: 2.20, draw: null, win2: 1.65 }
    },
    {
      id: 3,
      sport: 'Теннис',
      team1: 'Рафаэль Надаль',
      team2: 'Даниил Медведев',
      score: '6:4, 3:2',
      time: 'Set 2',
      status: 'live',
      odds: { win1: 1.55, draw: null, win2: 2.45 }
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Badge variant="destructive" className="animate-pulse">
          <Icon name="Radio" size={14} className="mr-1" />
          LIVE
        </Badge>
        <h2 className="text-xl font-bold">Прямые трансляции</h2>
      </div>

      <div className="space-y-3">
        {liveMatches.map((match) => (
          <Card key={match.id} className="p-4 border-primary/50 bg-card/80 backdrop-blur">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Badge variant="destructive" className="animate-pulse">
                  LIVE
                </Badge>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">{match.sport}</div>
                  <div className="font-bold text-primary">{match.time}</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{match.team1}</span>
                  <span className="text-2xl font-bold text-primary">{match.score.split(':')[0]}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">{match.team2}</span>
                  <span className="text-2xl font-bold text-primary">{match.score.split(':')[1]}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <Button
                  variant="outline"
                  className="flex flex-col h-auto py-2 hover:bg-primary hover:text-primary-foreground border-primary/30"
                  onClick={() => onAddBet({ match, type: 'П1', odds: match.odds.win1 })}
                >
                  <span className="text-xs text-muted-foreground">П1</span>
                  <span className="font-bold text-primary">{match.odds.win1}</span>
                </Button>
                {match.odds.draw && (
                  <Button
                    variant="outline"
                    className="flex flex-col h-auto py-2 hover:bg-primary hover:text-primary-foreground border-primary/30"
                    onClick={() => onAddBet({ match, type: 'X', odds: match.odds.draw })}
                  >
                    <span className="text-xs text-muted-foreground">X</span>
                    <span className="font-bold text-primary">{match.odds.draw}</span>
                  </Button>
                )}
                <Button
                  variant="outline"
                  className="flex flex-col h-auto py-2 hover:bg-primary hover:text-primary-foreground border-primary/30"
                  onClick={() => onAddBet({ match, type: 'П2', odds: match.odds.win2 })}
                >
                  <span className="text-xs text-muted-foreground">П2</span>
                  <span className="font-bold text-primary">{match.odds.win2}</span>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
