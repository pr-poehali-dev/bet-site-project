import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Help() {
  const faqs = [
    {
      question: 'Как сделать ставку?',
      answer: 'Выберите событие из списка, нажмите на коэффициент, введите сумму ставки в купоне и подтвердите ставку.'
    },
    {
      question: 'Как пополнить баланс?',
      answer: 'Перейдите в раздел "Баланс", выберите способ пополнения (карта, СБП, электронные кошельки), введите сумму и следуйте инструкциям.'
    },
    {
      question: 'Как вывести выигрыш?',
      answer: 'В разделе "Баланс" выберите вкладку "Вывод", укажите сумму и реквизиты для перевода. Минимальная сумма вывода - 500 ₽.'
    },
    {
      question: 'Что такое коэффициент?',
      answer: 'Коэффициент показывает, во сколько раз увеличится ваша ставка в случае выигрыша. Например, ставка 1000 ₽ с коэффициентом 2.5 принесет 2500 ₽.'
    },
    {
      question: 'Как отменить ставку?',
      answer: 'Ставку можно отменить только до начала события. После начала матча ставки изменить или отменить нельзя.'
    },
    {
      question: 'Что такое лайв-ставки?',
      answer: 'Лайв-ставки - это ставки на события, которые проходят в данный момент. Коэффициенты меняются в реальном времени в зависимости от хода игры.'
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-2">
          <Icon name="HelpCircle" size={28} />
          Помощь и поддержка
        </h2>
        <p className="text-muted-foreground">Найдите ответы на популярные вопросы или свяжитесь с нами</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6 hover:border-primary transition-colors cursor-pointer">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="p-3 rounded-full bg-primary/20">
              <Icon name="MessageCircle" size={32} className="text-primary" />
            </div>
            <h3 className="font-semibold">Онлайн-чат</h3>
            <p className="text-sm text-muted-foreground">Средний ответ за 2 минуты</p>
            <Button className="w-full">Начать чат</Button>
          </div>
        </Card>

        <Card className="p-6 hover:border-primary transition-colors cursor-pointer">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="p-3 rounded-full bg-primary/20">
              <Icon name="Mail" size={32} className="text-primary" />
            </div>
            <h3 className="font-semibold">Email поддержка</h3>
            <p className="text-sm text-muted-foreground">support@goldbet.com</p>
            <Button variant="outline" className="w-full">Написать письмо</Button>
          </div>
        </Card>

        <Card className="p-6 hover:border-primary transition-colors cursor-pointer">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="p-3 rounded-full bg-primary/20">
              <Icon name="Phone" size={32} className="text-primary" />
            </div>
            <h3 className="font-semibold">Телефон</h3>
            <p className="text-sm text-muted-foreground">8 (800) 555-35-35</p>
            <Button variant="outline" className="w-full">Позвонить</Button>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Часто задаваемые вопросы</h3>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Card>

      <Card className="p-6 bg-primary/10 border-primary/30">
        <div className="flex items-start gap-4">
          <Icon name="Info" size={24} className="text-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold mb-2">Ответственная игра</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Делайте ставки ответственно. Играйте в своё удовольствие и не превышайте установленные лимиты.
              Если вы чувствуете, что игра выходит из-под контроля, обратитесь за помощью.
            </p>
            <Button variant="outline" size="sm">Установить лимиты</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
