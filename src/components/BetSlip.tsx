import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface BetSlipProps {
  bets: any[];
  onRemoveBet: (index: number) => void;
}

export default function BetSlip({ bets, onRemoveBet }: BetSlipProps) {
  const [betAmount, setBetAmount] = useState('');

  const totalOdds = bets.reduce((acc, bet) => acc * bet.odds, 1);
  const potentialWin = betAmount ? (parseFloat(betAmount) * totalOdds).toFixed(2) : '0.00';

  return (
    <Card className="p-4 sticky top-20">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold flex items-center gap-2">
            <Icon name="FileText" size={20} />
            Купон ставок
          </h3>
          {bets.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => bets.forEach((_, i) => onRemoveBet(i))}
            >
              Очистить
            </Button>
          )}
        </div>

        {bets.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <Icon name="Inbox" size={48} className="mx-auto mb-2 opacity-50" />
            <p>Купон пуст</p>
            <p className="text-sm">Выберите события для ставки</p>
          </div>
        ) : (
          <>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {bets.map((bet, index) => (
                <Card key={index} className="p-3 bg-secondary">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="text-xs text-muted-foreground">{bet.match.league || bet.match.sport}</div>
                        <div className="font-medium text-sm">{bet.match.team1} - {bet.match.team2}</div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0"
                        onClick={() => onRemoveBet(index)}
                      >
                        <Icon name="X" size={16} />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-primary">{bet.type}</span>
                      <span className="font-bold text-primary">{bet.odds}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Separator />

            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium mb-2 block">Сумма ставки</label>
                <Input
                  type="number"
                  placeholder="0.00"
                  value={betAmount}
                  onChange={(e) => setBetAmount(e.target.value)}
                  className="text-right"
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Общий коэффициент:</span>
                  <span className="font-bold text-primary">{totalOdds.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Возможный выигрыш:</span>
                  <span className="font-bold text-lg text-primary">{potentialWin} ₽</span>
                </div>
              </div>

              <Button className="w-full" size="lg" disabled={!betAmount || parseFloat(betAmount) <= 0}>
                <Icon name="CheckCircle" size={20} className="mr-2" />
                Сделать ставку
              </Button>
            </div>
          </>
        )}
      </div>
    </Card>
  );
}
