import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface BetTypesProps {
  match: any;
  onAddBet: (bet: any) => void;
}

export default function BetTypes({ match, onAddBet }: BetTypesProps) {
  const mainBets = [
    { type: 'П1', odds: match.odds.win1, label: 'Победа 1' },
    { type: 'X', odds: match.odds.draw, label: 'Ничья' },
    { type: 'П2', odds: match.odds.win2, label: 'Победа 2' },
  ];

  const totalBets = [
    { type: 'ТБ 2.5', odds: 1.85, label: 'Больше 2.5' },
    { type: 'ТМ 2.5', odds: 1.95, label: 'Меньше 2.5' },
    { type: 'ТБ 3.5', odds: 2.65, label: 'Больше 3.5' },
    { type: 'ТМ 3.5', odds: 1.45, label: 'Меньше 3.5' },
  ];

  const handicapBets = [
    { type: 'Ф1(-1.5)', odds: 2.35, label: 'Фора 1 (-1.5)' },
    { type: 'Ф2(+1.5)', odds: 1.60, label: 'Фора 2 (+1.5)' },
    { type: 'Ф1(-0.5)', odds: 1.75, label: 'Фора 1 (-0.5)' },
    { type: 'Ф2(+0.5)', odds: 2.05, label: 'Фора 2 (+0.5)' },
  ];

  const bothScoreBets = [
    { type: 'ОЗ Да', odds: 1.70, label: 'Обе забьют - Да' },
    { type: 'ОЗ Нет', odds: 2.15, label: 'Обе забьют - Нет' },
  ];

  const exactScoreBets = [
    { type: '1:0', odds: 7.50, label: '1:0' },
    { type: '2:0', odds: 9.00, label: '2:0' },
    { type: '2:1', odds: 8.50, label: '2:1' },
    { type: '0:0', odds: 11.00, label: '0:0' },
    { type: '1:1', odds: 6.50, label: '1:1' },
    { type: '0:1', odds: 12.00, label: '0:1' },
    { type: '0:2', odds: 15.00, label: '0:2' },
    { type: '1:2', odds: 13.00, label: '1:2' },
  ];

  return (
    <Card className="p-4 mt-3 bg-secondary/50">
      <Tabs defaultValue="main" className="w-full">
        <TabsList className="w-full justify-start overflow-x-auto bg-card mb-4">
          <TabsTrigger value="main">Основные</TabsTrigger>
          <TabsTrigger value="total">Тотал</TabsTrigger>
          <TabsTrigger value="handicap">Фора</TabsTrigger>
          <TabsTrigger value="both">Обе забьют</TabsTrigger>
          <TabsTrigger value="exact">Точный счёт</TabsTrigger>
        </TabsList>

        <TabsContent value="main">
          <div className="grid grid-cols-3 gap-2">
            {mainBets.filter(bet => bet.odds).map((bet) => (
              <Button
                key={bet.type}
                variant="outline"
                className="flex flex-col h-auto py-3 hover:bg-primary hover:text-primary-foreground"
                onClick={() => onAddBet({ match, type: bet.type, odds: bet.odds })}
              >
                <span className="text-xs text-muted-foreground mb-1">{bet.label}</span>
                <span className="font-bold text-lg text-primary">{bet.odds}</span>
              </Button>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="total">
          <div className="grid grid-cols-2 gap-2">
            {totalBets.map((bet) => (
              <Button
                key={bet.type}
                variant="outline"
                className="flex flex-col h-auto py-3 hover:bg-primary hover:text-primary-foreground"
                onClick={() => onAddBet({ match, type: bet.type, odds: bet.odds })}
              >
                <span className="text-xs text-muted-foreground mb-1">{bet.label}</span>
                <span className="font-bold text-lg text-primary">{bet.odds}</span>
              </Button>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="handicap">
          <div className="grid grid-cols-2 gap-2">
            {handicapBets.map((bet) => (
              <Button
                key={bet.type}
                variant="outline"
                className="flex flex-col h-auto py-3 hover:bg-primary hover:text-primary-foreground"
                onClick={() => onAddBet({ match, type: bet.type, odds: bet.odds })}
              >
                <span className="text-xs text-muted-foreground mb-1">{bet.label}</span>
                <span className="font-bold text-lg text-primary">{bet.odds}</span>
              </Button>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="both">
          <div className="grid grid-cols-2 gap-2">
            {bothScoreBets.map((bet) => (
              <Button
                key={bet.type}
                variant="outline"
                className="flex flex-col h-auto py-3 hover:bg-primary hover:text-primary-foreground"
                onClick={() => onAddBet({ match, type: bet.type, odds: bet.odds })}
              >
                <span className="text-xs text-muted-foreground mb-1">{bet.label}</span>
                <span className="font-bold text-lg text-primary">{bet.odds}</span>
              </Button>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="exact">
          <div className="grid grid-cols-4 gap-2">
            {exactScoreBets.map((bet) => (
              <Button
                key={bet.type}
                variant="outline"
                className="flex flex-col h-auto py-3 hover:bg-primary hover:text-primary-foreground"
                onClick={() => onAddBet({ match, type: bet.type, odds: bet.odds })}
              >
                <span className="text-xs text-muted-foreground mb-1">{bet.label}</span>
                <span className="font-bold text-primary">{bet.odds}</span>
              </Button>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
}
