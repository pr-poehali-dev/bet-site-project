import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function History() {
  const bets = [
    {
      id: 1,
      date: '15.12.2024',
      time: '18:30',
      match: 'Манчестер Юнайтед - Ливерпуль',
      bet: 'П1',
      odds: 2.45,
      stake: 1000,
      status: 'win',
      payout: 2450
    },
    {
      id: 2,
      date: '15.12.2024',
      time: '21:00',
      match: 'Реал Мадрид - Барселона',
      bet: 'X',
      odds: 3.40,
      stake: 500,
      status: 'loss',
      payout: 0
    },
    {
      id: 3,
      date: '14.12.2024',
      time: '19:45',
      match: 'Челси - Арсенал',
      bet: 'П2',
      odds: 2.80,
      stake: 2000,
      status: 'pending',
      payout: 0
    },
    {
      id: 4,
      date: '14.12.2024',
      time: '15:00',
      match: 'Новак Джокович - Карлос Алькарас',
      bet: 'П1',
      odds: 1.70,
      stake: 1500,
      status: 'win',
      payout: 2550
    },
  ];

  const transactions = [
    { id: 1, date: '16.12.2024', time: '10:23', type: 'deposit', amount: 5000, method: 'Банковская карта' },
    { id: 2, date: '15.12.2024', time: '14:15', type: 'withdraw', amount: 3000, method: 'СБП' },
    { id: 3, date: '14.12.2024', time: '09:30', type: 'deposit', amount: 10000, method: 'Электронный кошелек' },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'win':
        return <Badge className="bg-green-600">Выигрыш</Badge>;
      case 'loss':
        return <Badge variant="destructive">Проигрыш</Badge>;
      case 'pending':
        return <Badge variant="secondary">В ожидании</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <Icon name="History" size={28} />
        История операций
      </h2>

      <Tabs defaultValue="bets" className="w-full">
        <TabsList className="w-full bg-card">
          <TabsTrigger value="bets" className="flex-1">Ставки</TabsTrigger>
          <TabsTrigger value="transactions" className="flex-1">Транзакции</TabsTrigger>
        </TabsList>

        <TabsContent value="bets" className="space-y-3 mt-4">
          {bets.map((bet) => (
            <Card key={bet.id} className="p-4">
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-xs text-muted-foreground">{bet.date} • {bet.time}</div>
                    <div className="font-semibold mt-1">{bet.match}</div>
                  </div>
                  {getStatusBadge(bet.status)}
                </div>

                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-muted-foreground">Ставка</div>
                    <div className="font-medium text-primary">{bet.bet}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Коэффициент</div>
                    <div className="font-medium text-primary">{bet.odds}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Сумма</div>
                    <div className="font-medium">{bet.stake} ₽</div>
                  </div>
                </div>

                {bet.status !== 'pending' && (
                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <span className="text-sm text-muted-foreground">
                      {bet.status === 'win' ? 'Выигрыш' : 'Результат'}:
                    </span>
                    <span className={`font-bold ${bet.status === 'win' ? 'text-green-600' : 'text-red-600'}`}>
                      {bet.status === 'win' ? `+${bet.payout} ₽` : `-${bet.stake} ₽`}
                    </span>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="transactions" className="space-y-3 mt-4">
          {transactions.map((transaction) => (
            <Card key={transaction.id} className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${transaction.type === 'deposit' ? 'bg-green-600/20' : 'bg-primary/20'}`}>
                    <Icon name={transaction.type === 'deposit' ? 'ArrowDownRight' : 'ArrowUpRight'} size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">
                      {transaction.type === 'deposit' ? 'Пополнение' : 'Вывод'}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {transaction.date} • {transaction.time} • {transaction.method}
                    </div>
                  </div>
                </div>
                <div className={`font-bold text-lg ${transaction.type === 'deposit' ? 'text-green-600' : 'text-primary'}`}>
                  {transaction.type === 'deposit' ? '+' : '-'}{transaction.amount} ₽
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
