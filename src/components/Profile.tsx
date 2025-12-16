import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Profile() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-20 w-20 border-2 border-primary">
            <AvatarImage src="" />
            <AvatarFallback className="bg-primary text-primary-foreground text-2xl">АП</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h2 className="text-2xl font-bold">Алексей Петров</h2>
            <p className="text-muted-foreground">ID: 1234567890</p>
            <div className="flex items-center gap-2 mt-2">
              <Icon name="CheckCircle" size={16} className="text-green-600" />
              <span className="text-sm text-green-600">Аккаунт верифицирован</span>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Icon name="User" size={20} />
          Личные данные
        </h3>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Имя</label>
            <Input defaultValue="Алексей" />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Фамилия</label>
            <Input defaultValue="Петров" />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Email</label>
            <Input type="email" defaultValue="alexey.petrov@example.com" />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Телефон</label>
            <Input type="tel" defaultValue="+7 (999) 123-45-67" />
          </div>
          <Button className="w-full">Сохранить изменения</Button>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Icon name="Shield" size={20} />
          Безопасность
        </h3>
        <div className="space-y-4">
          <Button variant="outline" className="w-full justify-between">
            <span>Изменить пароль</span>
            <Icon name="ChevronRight" size={16} />
          </Button>
          <Button variant="outline" className="w-full justify-between">
            <span>Двухфакторная аутентификация</span>
            <Icon name="ChevronRight" size={16} />
          </Button>
          <Button variant="outline" className="w-full justify-between">
            <span>Активные сеансы</span>
            <Icon name="ChevronRight" size={16} />
          </Button>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Icon name="Settings" size={20} />
          Настройки
        </h3>
        <div className="space-y-4">
          <Button variant="outline" className="w-full justify-between">
            <span>Уведомления</span>
            <Icon name="ChevronRight" size={16} />
          </Button>
          <Button variant="outline" className="w-full justify-between">
            <span>Лимиты ставок</span>
            <Icon name="ChevronRight" size={16} />
          </Button>
          <Button variant="outline" className="w-full justify-between">
            <span>Предпочтения</span>
            <Icon name="ChevronRight" size={16} />
          </Button>
          <Separator />
          <Button variant="destructive" className="w-full gap-2">
            <Icon name="LogOut" size={18} />
            Выйти из аккаунта
          </Button>
        </div>
      </Card>
    </div>
  );
}
