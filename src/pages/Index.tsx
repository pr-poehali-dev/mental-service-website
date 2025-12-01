import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappNumber = '79999999999';
  const telegramUsername = 'your_telegram';

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  const openTelegram = () => {
    window.open(`https://t.me/${telegramUsername}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white'
      }`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Icon name="Heart" size={24} className="text-white" />
            </div>
            <span className="font-bold text-xl text-primary">ПсихоПомощь</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition">
              Услуги
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition">
              О специалисте
            </button>
            <button onClick={() => scrollToSection('advantages')} className="text-foreground hover:text-primary transition">
              Преимущества
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-foreground hover:text-primary transition">
              Отзывы
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition">
              Контакты
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <Button onClick={openWhatsApp} className="bg-[#10B981] hover:bg-[#059669] text-white">
              <Icon name="MessageCircle" size={18} className="mr-2" />
              WhatsApp
            </Button>
            <Button onClick={openTelegram} className="bg-[#0088cc] hover:bg-[#006699] text-white">
              <Icon name="Send" size={18} className="mr-2" />
              Telegram
            </Button>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden bg-gradient-to-br from-secondary via-background to-secondary">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">Профессиональная психологическая помощь</h1>
              <p className="text-2xl text-muted-foreground">
                с гарантией полной анонимности
              </p>
              <p className="text-xl text-muted-foreground">
                Помогаем при тревоге, депрессии, панических атаках, выгорании и стрессовых состояниях
              </p>

              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Award" size={24} className="text-primary" />
                  </div>
                  <span className="text-foreground font-medium">Лицензированный специалист</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Briefcase" size={24} className="text-primary" />
                  </div>
                  <span className="text-foreground font-medium">Опыт более 10 лет</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Monitor" size={24} className="text-primary" />
                  </div>
                  <span className="text-foreground font-medium">Онлайн и офлайн</span>
                </div>
              </div>

              <div className="pt-6">
                <p className="text-3xl font-bold text-primary mb-6">Бесплатная первичная консультация</p>
                <div className="flex gap-4">
                  <Button onClick={openWhatsApp} size="lg" className="bg-[#10B981] hover:bg-[#059669] text-white text-lg px-8">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Записаться в WhatsApp
                  </Button>
                  <Button onClick={openTelegram} size="lg" className="bg-[#0088cc] hover:bg-[#006699] text-white text-lg px-8">
                    <Icon name="Send" size={20} className="mr-2" />
                    Написать в Telegram
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>
              <img
                src="https://cdn.poehali.dev/projects/8c800ed5-f4bc-4178-b162-839f7a09c7a7/files/3ee045b0-0bb5-4f1a-bbb7-d82e63a0dcc0.jpg"
                alt="Профессиональный психолог"
                className="relative rounded-3xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <img
                src="https://cdn.poehali.dev/projects/8c800ed5-f4bc-4178-b162-839f7a09c7a7/files/57941482-b788-406e-966c-eaf774493b93.jpg"
                alt="Кабинет психолога"
                className="rounded-3xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">О специалисте</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Я — дипломированный психолог и психиатр с более чем 10-летним опытом работы. 
                Специализируюсь на помощи людям в сложных эмоциональных состояниях, работе с тревогой, 
                депрессией и стрессовыми расстройствами.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Моя цель — помочь вам вернуть душевное равновесие и научиться справляться 
                с жизненными вызовами мягко и эффективно.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <Icon name="GraduationCap" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Образование</h4>
                    <p className="text-muted-foreground text-sm">Высшее медицинское, ординатура по психиатрии</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Award" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Сертификаты</h4>
                    <p className="text-muted-foreground text-sm">КПТ, EMDR, схема-терапия</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Users" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Опыт</h4>
                    <p className="text-muted-foreground text-sm">Более 1000 успешных консультаций</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Heart" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Подход</h4>
                    <p className="text-muted-foreground text-sm">Бережный, индивидуальный, научно обоснованный</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-secondary to-background">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">Лицензии и сертификаты</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Подтверждение квалификации</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: 'FileCheck', label: 'Диплом врача' },
              { icon: 'Award', label: 'Лицензия' },
              { icon: 'GraduationCap', label: 'КПТ сертификат' },
              { icon: 'BookOpen', label: 'EMDR терапия' },
              { icon: 'ShieldCheck', label: 'Повышение квалификации' },
              { icon: 'Medal', label: 'Схема-терапия' }
            ].map((cert, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name={cert.icon as any} size={32} className="text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">{cert.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">Услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Профессиональная помощь в различных направлениях</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'Heart', title: 'Лечение тревожных расстройств', color: 'from-purple-100 to-purple-50' },
              { icon: 'Cloud', title: 'Работа с депрессией', color: 'from-blue-100 to-blue-50' },
              { icon: 'Zap', title: 'Панические атаки', color: 'from-red-100 to-red-50' },
              { icon: 'Moon', title: 'Коррекция сна', color: 'from-indigo-100 to-indigo-50' },
              { icon: 'Flame', title: 'Эмоциональное выгорание', color: 'from-orange-100 to-orange-50' },
              { icon: 'Pill', title: 'Подбор медикаментозной терапии', color: 'from-green-100 to-green-50' },
              { icon: 'MessageSquare', title: 'Психотерапия', color: 'from-pink-100 to-pink-50' },
              { icon: 'Monitor', title: 'Онлайн-консультации', color: 'from-teal-100 to-teal-50' }
            ].map((service, index) => (
              <Card key={index} className={`p-6 bg-gradient-to-br ${service.color} border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
                  <Icon name={service.icon as any} size={28} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-secondary via-background to-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">С какими проблемами работаю</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Помогу справиться с:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'AlertCircle', text: 'Тревога и страхи' },
              { icon: 'CloudOff', text: 'Ощущение пустоты' },
              { icon: 'X', text: 'Потеря интереса' },
              { icon: 'Users', text: 'Сложности в отношениях' },
              { icon: 'RefreshCw', text: 'Навязчивые мысли' },
              { icon: 'Zap', text: 'Постоянное напряжение' },
              { icon: 'TrendingDown', text: 'Стресс и выгорание' },
              { icon: 'Activity', text: 'Эмоциональные качели' }
            ].map((problem, index) => (
              <Card key={index} className="p-6 bg-white/80 backdrop-blur hover:bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={problem.icon as any} size={24} className="text-primary" />
                  </div>
                  <p className="font-medium text-foreground">{problem.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">Почему обращаются ко мне</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Преимущества работы со мной</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'Lock', title: 'Гарантия полной анонимности', desc: 'Все данные строго конфиденциальны' },
              { icon: 'User', title: 'Индивидуальный подход', desc: 'Учитываю особенности каждого клиента' },
              { icon: 'Heart', title: 'Мягкая, бережная работа', desc: 'Комфортный темп и безопасное пространство' },
              { icon: 'Award', title: 'Лицензированный специалист', desc: 'Официальные документы и сертификаты' },
              { icon: 'MessageCircle', title: 'Поддержка между сессиями', desc: 'На связи в важные моменты' },
              { icon: 'Sparkles', title: 'Современные методы', desc: 'Научно обоснованные техники терапии' }
            ].map((advantage, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Icon name={advantage.icon as any} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-secondary to-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>
              <img
                src="https://cdn.poehali.dev/projects/8c800ed5-f4bc-4178-b162-839f7a09c7a7/files/a822aeb7-aed8-42e0-a50e-ddda499f09d8.jpg"
                alt="Спокойствие и поддержка"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">Моя философия работы</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Я помогаю людям мягко и бережно выходить из сложных состояний, находить внутренние ресурсы 
                и учиться управлять своими эмоциями.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                В моей практике нет осуждения — только поддержка, понимание и профессиональный подход. 
                Каждый человек уникален, и я подбираю методы работы индивидуально.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Моя задача — создать безопасное пространство, где вы сможете открыться, разобраться 
                в своих чувствах и найти путь к душевному равновесию.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">Цены</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Прозрачные условия сотрудничества</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: 'UserPlus', title: 'Первичная консультация', price: 'от 3 500 ₽', format: 'Очно/Онлайн', duration: '60 минут' },
              { icon: 'RefreshCw', title: 'Повторная консультация', price: 'от 4 000 ₽', format: 'Очно/Онлайн', duration: '60 минут' },
              { icon: 'Monitor', title: 'Онлайн консультация', price: 'от 3 000 ₽', format: 'Zoom/Skype', duration: '50 минут' }
            ].map((pricing, index) => (
              <Card key={index} className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto">
                  <Icon name={pricing.icon as any} size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 text-center">{pricing.title}</h3>
                <p className="text-4xl font-bold text-primary mb-6 text-center">{pricing.price}</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 justify-center text-muted-foreground">
                    <Icon name="MapPin" size={18} />
                    <span>{pricing.format}</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center text-muted-foreground">
                    <Icon name="Clock" size={18} />
                    <span>{pricing.duration}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <Button onClick={openWhatsApp} className="bg-[#10B981] hover:bg-[#059669] text-white w-full">
                    <Icon name="MessageCircle" size={18} className="mr-2" />
                    WhatsApp
                  </Button>
                  <Button onClick={openTelegram} className="bg-[#0088cc] hover:bg-[#006699] text-white w-full">
                    <Icon name="Send" size={18} className="mr-2" />
                    Telegram
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-gradient-to-br from-secondary to-background">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">Отзывы</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Что говорят мои клиенты</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Анна М.', text: 'Огромная благодарность за помощь! После нескольких сессий я наконец-то смогла справиться с паническими атаками. Очень бережный и профессиональный подход.' },
              { name: 'Дмитрий К.', text: 'Долго искал специалиста, которому смогу довериться. Здесь я нашёл не только профессионализм, но и искреннее желание помочь. Рекомендую!' },
              { name: 'Елена В.', text: 'Работа с депрессией далась непросто, но благодаря поддержке я смогла выйти из этого состояния. Спасибо за терпение и понимание.' },
              { name: 'Сергей П.', text: 'Очень удобно, что можно консультироваться онлайн. Профессиональный подход, чувствуется большой опыт. Состояние значительно улучшилось.' },
              { name: 'Мария Л.', text: 'Помогли разобраться в сложных отношениях и научили справляться с эмоциями. Теперь жизнь стала намного легче. Огромное спасибо!' },
              { name: 'Александр Т.', text: 'После выгорания не знал, как вернуться к нормальной жизни. Благодаря грамотной терапии смог восстановиться. Очень благодарен!' }
            ].map((review, index) => (
              <Card key={index} className="p-6 bg-white hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                    <Icon name="User" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{review.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Свяжитесь со мной удобным способом</p>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Телефон</h4>
                  <p className="text-muted-foreground">+7 (999) 999-99-99</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Адрес</h4>
                  <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 1</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Время приёма</h4>
                  <p className="text-muted-foreground">Пн-Пт: 10:00 - 20:00</p>
                  <p className="text-muted-foreground">Сб: 11:00 - 18:00</p>
                </div>
              </div>

              <div className="pt-6">
                <h4 className="font-semibold text-foreground mb-4">Свяжитесь со мной:</h4>
                <div className="flex gap-4">
                  <Button onClick={openWhatsApp} size="lg" className="bg-[#10B981] hover:bg-[#059669] text-white flex-1">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    WhatsApp
                  </Button>
                  <Button onClick={openTelegram} size="lg" className="bg-[#0088cc] hover:bg-[#006699] text-white flex-1">
                    <Icon name="Send" size={20} className="mr-2" />
                    Telegram
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <Icon name="Map" size={64} className="text-primary mx-auto mb-4" />
                  <p className="text-foreground font-medium">Карта будет здесь</p>
                  <p className="text-muted-foreground text-sm">г. Москва, ул. Примерная, д. 1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary via-primary/90 to-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Готов помочь вам пройти через сложный период
          </h2>
          <p className="text-2xl text-white/90 mb-12">
            Напишите — отвечу быстро
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <Button onClick={openWhatsApp} size="lg" className="bg-[#10B981] hover:bg-[#059669] text-white text-lg px-12 py-6">
              <Icon name="MessageCircle" size={24} className="mr-3" />
              Написать в WhatsApp
            </Button>
            <Button onClick={openTelegram} size="lg" className="bg-[#0088cc] hover:bg-[#006699] text-white text-lg px-12 py-6">
              <Icon name="Send" size={24} className="mr-3" />
              Написать в Telegram
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-foreground text-white">
        <div className="container mx-auto text-center">
          <p className="text-white/80">© 2024 ПсихоПомощь. Все права защищены.</p>
          <p className="text-white/60 text-sm mt-2">Профессиональная психологическая помощь</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;