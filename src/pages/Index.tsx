import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroCard, { HeroProps } from "@/components/HeroCard";
import StoryCard, { StoryProps } from "@/components/StoryCard";

// Примеры героев для демонстрации
const heroesData: HeroProps[] = [
  {
    id: "1",
    name: "Иванов Иван Иванович",
    rank: "Капитан",
    photo: "https://images.unsplash.com/photo-1560806665-963b41589de9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Проявил исключительное мужество при спасении раненых товарищей под огнем противника.",
    awards: ["Медаль «За отвагу»"]
  },
  {
    id: "2",
    name: "Петров Петр Петрович",
    rank: "Старший лейтенант",
    photo: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Умело организовал оборону населенного пункта и обеспечил эвакуацию гражданского населения.",
    awards: ["Орден Мужества"]
  },
  {
    id: "3",
    name: "Сидоров Алексей Николаевич",
    rank: "Сержант",
    photo: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Лично обезвредил несколько взрывных устройств, спасая жизни мирных жителей и сослуживцев.",
    awards: ["Медаль «За отвагу»", "Орден Мужества"]
  }
];

// Примеры историй для демонстрации
const storiesData: StoryProps[] = [
  {
    id: "1",
    title: "Спасение раненых под обстрелом",
    date: "15 марта 2023",
    image: "https://images.unsplash.com/photo-1517554558809-9b4971b38f39?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    excerpt: "История о том, как Иванов И.И. рискуя своей жизнью вынес из-под обстрела пятерых раненых товарищей...",
    heroId: "1"
  },
  {
    id: "2",
    title: "Оборона села Каменка",
    date: "3 апреля 2023",
    image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    excerpt: "Под командованием Петрова П.П. небольшая группа военнослужащих успешно отразила атаку превосходящих сил противника...",
    heroId: "2"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-accent py-20">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Герои СВО Красноярского края</h1>
            <p className="text-xl mb-8">
              Проект посвящен нашим землякам — героям Специальной военной операции, 
              защищающим интересы Родины и мирное население.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/heroes">Познакомиться с героями</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <Link to="/about">О проекте</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Heroes Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Наши герои</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Военнослужащие из Красноярского края, проявившие мужество и героизм 
              при выполнении боевых задач в ходе Специальной военной операции.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {heroesData.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild size="lg">
              <Link to="/heroes">Все герои</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Stories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Истории подвигов</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Документальные истории о проявленных мужестве, героизме и стойкости
              наших земляков в ходе выполнения боевых задач.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {storiesData.map(story => (
              <StoryCard key={story.id} {...story} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild size="lg">
              <Link to="/stories">Все истории</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Медиаматериалы</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Интервью, видеосюжеты и фотографии, рассказывающие о подвигах 
              военнослужащих из Красноярского края.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video bg-gray-200 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1599675424220-8ff52f54cf00?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Интервью с ветераном" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="secondary">Смотреть</Button>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold">Интервью с участником СВО</h3>
                <p className="text-sm text-gray-600 mt-1">Апрель 2023</p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video bg-gray-200 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1591115765373-5207764f72e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Фотогалерея" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="secondary">Смотреть</Button>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold">Фотогалерея "На передовой"</h3>
                <p className="text-sm text-gray-600 mt-1">Март 2023</p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video bg-gray-200 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1530819568329-97653eafbbfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Документальный фильм" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="secondary">Смотреть</Button>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold">Документальный фильм "Герои нашего времени"</h3>
                <p className="text-sm text-gray-600 mt-1">Февраль 2023</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-10">
            <Button asChild size="lg">
              <Link to="/media">Все медиаматериалы</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Поделитесь историей</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Если вы хотите рассказать о подвиге вашего родственника, друга или знакомого 
            из Красноярского края, свяжитесь с нами. Вместе мы сохраним память о героях.
          </p>
          <Button asChild size="lg" variant="outline" className="border-white hover:bg-white/10">
            <Link to="/contact">Связаться с нами</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
