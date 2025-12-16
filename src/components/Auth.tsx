import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

interface AuthProps {
  onClose: () => void;
  onSuccess: () => void;
}

export default function Auth({ onClose, onSuccess }: AuthProps) {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-6 relative">
        <Button
          variant="ghost"
          size="sm"
          className="absolute right-4 top-4"
          onClick={onClose}
        >
          <Icon name="X" size={20} />
        </Button>

        <div className="mb-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Icon name="Zap" size={40} className="text-primary" />
            <span className="text-3xl font-bold text-primary">GOLDBET</span>
          </div>
          <p className="text-muted-foreground">Ваша премиальная платформа для ставок</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full bg-secondary">
            <TabsTrigger value="login" className="flex-1">Вход</TabsTrigger>
            <TabsTrigger value="register" className="flex-1">Регистрация</TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="space-y-4 mt-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Email или телефон</label>
                <Input type="text" placeholder="example@mail.com или +7 (999) 123-45-67" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Пароль</label>
                <Input type="password" placeholder="••••••••" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <label htmlFor="remember" className="text-sm cursor-pointer">
                    Запомнить меня
                  </label>
                </div>
                <Button variant="link" size="sm" className="px-0 text-primary">
                  Забыли пароль?
                </Button>
              </div>
              <Button className="w-full" size="lg" onClick={onSuccess}>
                <Icon name="LogIn" size={20} className="mr-2" />
                Войти
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Или войти через</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline">
                <Icon name="Mail" size={18} className="mr-2" />
                Google
              </Button>
              <Button variant="outline">
                <Icon name="Phone" size={18} className="mr-2" />
                Телефон
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="register" className="space-y-4 mt-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Имя</label>
                <Input type="text" placeholder="Иван" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Фамилия</label>
                <Input type="text" placeholder="Иванов" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="example@mail.com" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Телефон</label>
                <Input type="tel" placeholder="+7 (999) 123-45-67" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Пароль</label>
                <Input type="password" placeholder="Минимум 8 символов" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Промокод (необязательно)</label>
                <Input type="text" placeholder="WELCOME2024" />
              </div>

              <div className="flex items-start gap-2">
                <Checkbox id="terms" className="mt-1" />
                <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
                  Я принимаю{' '}
                  <span className="text-primary underline">условия использования</span> и{' '}
                  <span className="text-primary underline">политику конфиденциальности</span>
                </label>
              </div>

              <Card className="p-4 bg-primary/10 border-primary/30">
                <div className="flex items-start gap-3">
                  <Icon name="Gift" size={24} className="text-primary flex-shrink-0" />
                  <div className="space-y-1">
                    <h4 className="font-semibold text-primary">Приветственный бонус!</h4>
                    <p className="text-sm text-muted-foreground">
                      +100% к первому депозиту до 25,000 ₽ + 50 фрибетов
                    </p>
                  </div>
                </div>
              </Card>

              <Button className="w-full" size="lg" onClick={onSuccess}>
                <Icon name="UserPlus" size={20} className="mr-2" />
                Создать аккаунт
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}
