import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroCard, { HeroProps } from "@/components/HeroCard";

// Примеры героев для демонстрации
const allHeroesData: HeroProps[] = [
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
  },
  {
    id: "4",
    name: "Соколов Дмитрий Андреевич",
    rank: "Майор",
    photo: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Командовал операцией по освобождению стратегически важного объекта, проявив высокий профессионализм.",
    awards: ["Орден Мужества", "Медаль «За боевые заслуги»"]
  },
  {
    id: "5",
    name: "Козлов Михаил Сергеевич",
    rank: "Старшина",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Организовал эффективную систему связи в условиях активного радиоэлектронного подавления противником.",
    awards: ["Медаль «За боевые заслуги»"]
  },
  {
    id: "6",
    name: "Морозов Андрей Викторович",
    rank: "Лейтенант",
    photo: "https://images.unsplash.com/photo-1542442828-287217bfb87f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Успешно руководил разведывательной группой, добыв ценные сведения о противнике.",
    awards: ["Медаль «За отвагу»"]
  }
];

const Heroes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [rankFilter, setRankFilter] = useState("");
  const [awardFilter, setAwardFilter] = useState("");

  // Фильтрация героев
  const filteredHeroes = allHeroesData.filter(hero => {
    const matchesSearch = hero.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRank = rankFilter === "" || hero.rank === rankFilter;
    const matchesAward = awardFilter === "" || hero.awards.includes(awardFilter);
    return matchesSearch && matchesRank && matchesAward;
  });

  // Уникальные звания для фильтра
  const uniqueRanks = Array.from(new Set(allHeroesData.map(hero => hero.rank)));

  // Уникальные награды для фильтра
  const uniqueAwards = Array.from(new Set(allHeroesData.flatMap(hero => hero.awards)));

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-accent py-16">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Герои СВО</h1>
            <p className="text-xl">
              Военнослужащие из Красноярского края, проявившие мужество и героизм 
              при выполнении боевых задач в ходе Специальной военной операции.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="w-full md:w-1/3">
              <Input
                placeholder="Поиск по имени..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="w-full md:w-1/4">
              <Select value={rankFilter} onValueChange={setRankFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Фильтр по званию" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Все звания</SelectItem>
                  {uniqueRanks.map(rank => (
                    <SelectItem key={rank} value={rank}>{rank}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="w-full md:w-1/4">
              <Select value={awardFilter} onValueChange={setAwardFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Фильтр по наградам" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Все награды</SelectItem>
                  {uniqueAwards.map(award => (
                    <SelectItem key={award} value={award}>{award}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Heroes Grid Section */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          {filteredHeroes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredHeroes.map(hero => (
                <HeroCard key={hero.id} {...hero} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold mb-3">Герои не найдены</h3>
              <p className="text-gray-600 mb-6">Попробуйте изменить параметры поиска</p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setRankFilter("");
                  setAwardFilter("");
                }}
              >
                Сбросить фильтры
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Знаете историю героя?</h2>
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

export default Heroes;
