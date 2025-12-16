import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function Balance() {
  return (
    <div className="space-y-6">
      <Card className="p-6 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Icon name="Wallet" size={20} />
            <span>Текущий баланс</span>
          </div>
          <div className="text-4xl font-bold text-primary">12,500.00 ₽</div>
          <div className="flex gap-2">
            <Button className="flex-1 gap-2">
              <Icon name="Plus" size={18} />
              Пополнить
            </Button>
            <Button variant="outline" className="flex-1 gap-2">
              <Icon name="ArrowUpRight" size={18} />
              Вывести
            </Button>
          </div>
        </div>
      </Card>

      <Tabs defaultValue="deposit" className="w-full">
        <TabsList className="w-full bg-card">
          <TabsTrigger value="deposit" className="flex-1">Пополнение</TabsTrigger>
          <TabsTrigger value="withdraw" className="flex-1">Вывод</TabsTrigger>
        </TabsList>

        <TabsContent value="deposit" className="space-y-4 mt-4">
          <Card className="p-4">
            <h3 className="font-semibold mb-4">Выберите способ пополнения</h3>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Icon name="CreditCard" size={24} />
                <span className="text-sm">Банковская карта</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Icon name="Smartphone" size={24} />
                <span className="text-sm">СБП</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Icon name="Wallet" size={24} />
                <span className="text-sm">Электронные кошельки</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Icon name="Bitcoin" size={24} />
                <span className="text-sm">Криптовалюта</span>
              </Button>
            </div>
          </Card>

          <Card className="p-4">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Сумма пополнения</label>
                <Input type="number" placeholder="1000" />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">500 ₽</Button>
                <Button variant="outline" size="sm" className="flex-1">1000 ₽</Button>
                <Button variant="outline" size="sm" className="flex-1">5000 ₽</Button>
                <Button variant="outline" size="sm" className="flex-1">10000 ₽</Button>
              </div>
              <Button className="w-full">Продолжить</Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="withdraw" className="space-y-4 mt-4">
          <Card className="p-4">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Сумма вывода</label>
                <Input type="number" placeholder="1000" />
                <p className="text-xs text-muted-foreground mt-1">Минимальная сумма вывода: 500 ₽</p>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Номер карты</label>
                <Input type="text" placeholder="0000 0000 0000 0000" />
              </div>
              <Button className="w-full">Вывести средства</Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
