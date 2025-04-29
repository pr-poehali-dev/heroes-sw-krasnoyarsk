import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HeroProps } from "@/components/HeroCard";

// Фейковая база данных героев (в реальном приложении это должно быть API)
const allHeroesData: (HeroProps & { 
  fullDescription?: string; 
  birthDate?: string;
  birthPlace?: string;
  service?: string;
  story?: string;
  videos?: { id: string; title: string; url: string; thumbnail: string }[];
  photos?: { id: string; title: string; url: string }[];
  interviews?: { id: string; title: string; date: string; source: string; url: string }[];
})[] = [
  {
    id: "1",
    name: "Иванов Иван Иванович",
    rank: "Капитан",
    photo: "https://images.unsplash.com/photo-1560806665-963b41589de9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Проявил исключительное мужество при спасении раненых товарищей под огнем противника.",
    awards: ["Медаль «За отвагу»"],
    birthDate: "15.06.1990",
    birthPlace: "г. Красноярск",
    service: "Мотострелковые войска",
    fullDescription: "Капитан Иванов Иван Иванович, командир мотострелковой роты, в ходе выполнения боевой задачи обнаружил вражескую засаду. Благодаря решительным действиям и умелому командованию, сумел организовать оборону и предотвратить окружение подразделения. Лично вынес с поля боя трех раненых товарищей, оказав им первую медицинскую помощь, чем спас их жизни.",
    story: "В феврале 2023 года мотострелковая рота под командованием капитана Иванова выполняла задачу по освобождению населенного пункта. При продвижении вперед рота попала под перекрестный огонь противника. Несмотря на интенсивный обстрел, капитан Иванов организовал круговую оборону и руководил эвакуацией раненых. В критический момент, когда огонь усилился, он лично выдвинулся вперед и уничтожил огневую точку противника, после чего вынес из-под обстрела трех тяжелораненых бойцов. Его решительные действия позволили роте выполнить поставленную задачу и минимизировать потери личного состава.",
    videos: [
      {
        id: "v1",
        title: "Интервью с капитаном Ивановым после возвращения",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "v2",
        title: "Вручение медали «За отвагу»",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    photos: [
      {
        id: "p1",
        title: "На боевом посту",
        url: "https://images.unsplash.com/photo-1579912437766-19e7e79e5a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "p2",
        title: "С товарищами по службе",
        url: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "p3",
        title: "Во время вручения награды",
        url: "https://images.unsplash.com/photo-1551863863-e4e9bdd85611?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    interviews: [
      {
        id: "i1",
        title: "«Я просто выполнял свой долг»: интервью с капитаном Ивановым",
        date: "15.04.2023",
        source: "Красноярский рабочий",
        url: "#"
      },
      {
        id: "i2",
        title: "Герои среди нас: капитан Иванов рассказал о своем боевом пути",
        date: "23.05.2023",
        source: "Сибирские новости",
        url: "#"
      }
    ]
  },
  {
    id: "2",
    name: "Петров Петр Петрович",
    rank: "Старший лейтенант",
    photo: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Умело организовал оборону населенного пункта и обеспечил эвакуацию гражданского населения.",
    awards: ["Орден Мужества"],
    birthDate: "22.09.1988",
    birthPlace: "г. Ачинск, Красноярский край",
    service: "Инженерные войска",
    fullDescription: "Старший лейтенант Петров Петр Петрович, командир инженерно-саперного взвода, проявил исключительное мужество при разминировании транспортных путей и обеспечении безопасной эвакуации мирных жителей из населенного пункта. Под непрерывным обстрелом руководил работой саперов, лично обезвредил несколько самодельных взрывных устройств повышенной сложности.",
    story: "В марте 2023 года взвод под командованием старшего лейтенанта Петрова получил задачу обеспечить безопасную эвакуацию гражданского населения из населенного пункта, находящегося под контролем противника. Территория была плотно заминирована, включая жилые дома и пути эвакуации. В условиях постоянного обстрела Петров организовал систематическое разминирование территории, лично обезвредив несколько сложных взрывных устройств с дистанционным управлением. Благодаря его действиям удалось спасти более 200 мирных жителей, в том числе 48 детей.",
    videos: [
      {
        id: "v1",
        title: "Работа саперов под руководством старшего лейтенанта Петрова",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    photos: [
      {
        id: "p1",
        title: "Во время разминирования",
        url: "https://images.unsplash.com/photo-1517490232338-06e409d3c8c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "p2",
        title: "С спасенными мирными жителями",
        url: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    interviews: [
      {
        id: "i1",
        title: "Интервью со старшим лейтенантом Петровым о спасении мирных жителей",
        date: "12.04.2023",
        source: "Енисей-регион",
        url: "#"
      }
    ]
  },
  {
    id: "3",
    name: "Сидоров Алексей Николаевич",
    rank: "Сержант",
    photo: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Лично обезвредил несколько взрывных устройств, спасая жизни мирных жителей и сослуживцев.",
    awards: ["Медаль «За отвагу»", "Орден Мужества"],
    birthDate: "07.11.1995",
    birthPlace: "с. Шушенское, Красноярский край",
    service: "Разведка",
    fullDescription: "Сержант Сидоров Алексей Николаевич, командир разведывательного отделения, выполняя задачу по сбору информации о противнике, обнаружил подготовку вражеской диверсионной группы к нападению на позиции российских войск. Несмотря на численное превосходство противника, вступил в бой, уничтожив несколько боевиков и вынудив остальных отступить.",
    story: "В апреле 2023 года разведывательная группа под командованием сержанта Сидорова выполняла задачу по сбору информации о перемещениях противника в районе стратегически важного объекта. Во время наблюдения Сидоров обнаружил диверсионную группу, готовящуюся к атаке на российские позиции. Оценив ситуацию, он принял решение о немедленных действиях. Несмотря на превосходящие силы противника, разведгруппа под его командованием атаковала диверсантов. В ходе боя Сидоров лично уничтожил троих боевиков и был ранен, но продолжал руководить боем до полного отступления противника.",
    photos: [
      {
        id: "p1",
        title: "В полевых условиях",
        url: "https://images.unsplash.com/photo-1551867633-194f125bddfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "p2",
        title: "Подготовка к выполнению задачи",
        url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    interviews: [
      {
        id: "i1",
        title: "Честь и долг: интервью с сержантом Сидоровым",
        date: "05.06.2023",
        source: "Красноярский воин",
        url: "#"
      }
    ]
  }
];

const HeroDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [hero, setHero] = useState<(typeof allHeroesData)[0] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Имитация загрузки данных с сервера
    setTimeout(() => {
      const foundHero = allHeroesData.find(h => h.id === id);
      setHero(foundHero || null);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-pulse text-2xl">Загрузка данных о герое...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!hero) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <h1 className="text-3xl font-bold mb-4">Герой не найден</h1>
          <p className="text-lg mb-6 text-center">
            К сожалению, информация о запрашиваемом герое отсутствует в нашей базе данных.
          </p>
          <Button asChild>
            <Link to="/heroes">Вернуться к списку героев</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Breadcrumbs */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-4">
          <div className="text-sm text-gray-600">
            <Link to="/" className="hover:underline">Главная</Link> &raquo; <Link to="/heroes" className="hover:underline">Герои</Link> &raquo; <span className="font-medium">{hero.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Info */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left column - photo and basic info */}
            <div className="md:w-1/3">
              <div className="rounded-lg overflow-hidden shadow-lg mb-6">
                <img 
                  src={hero.photo} 
                  alt={hero.name} 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Информация</h2>
                <div className="space-y-3">
                  {hero.birthDate && (
                    <div>
                      <span className="font-semibold block">Дата рождения:</span>
                      <span>{hero.birthDate}</span>
                    </div>
                  )}
                  {hero.birthPlace && (
                    <div>
                      <span className="font-semibold block">Место рождения:</span>
                      <span>{hero.birthPlace}</span>
                    </div>
                  )}
                  <div>
                    <span className="font-semibold block">Звание:</span>
                    <span>{hero.rank}</span>
                  </div>
                  {hero.service && (
                    <div>
                      <span className="font-semibold block">Род войск:</span>
                      <span>{hero.service}</span>
                    </div>
                  )}
                  <div>
                    <span className="font-semibold block">Награды:</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {hero.awards.map((award, index) => (
                        <Badge key={index} variant="outline" className="bg-red-50">{award}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - details and tabs */}
            <div className="md:w-2/3">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{hero.name}</h1>
              
              <div className="prose max-w-none mb-8">
                <p className="text-lg font-medium">{hero.shortDescription}</p>
                {hero.fullDescription && <p>{hero.fullDescription}</p>}
              </div>

              <Tabs defaultValue="story" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="story">История подвига</TabsTrigger>
                  <TabsTrigger value="media">Фото и видео</TabsTrigger>
                  <TabsTrigger value="interviews">Интервью</TabsTrigger>
                </TabsList>
                
                <TabsContent value="story" className="mt-6">
                  {hero.story ? (
                    <div className="prose max-w-none">
                      <h3 className="text-2xl font-semibold mb-4">История подвига</h3>
                      <p>{hero.story}</p>
                    </div>
                  ) : (
                    <div className="p-6 text-center bg-gray-100 rounded-lg">
                      <p>Подробная история подвига готовится к публикации.</p>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="media" className="mt-6">
                  {/* Videos section */}
                  {hero.videos && hero.videos.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-2xl font-semibold mb-4">Видеоматериалы</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {hero.videos.map(video => (
                          <div key={video.id} className="rounded-lg overflow-hidden shadow-md">
                            <a href={video.url} target="_blank" rel="noopener noreferrer" className="block relative">
                              <img 
                                src={video.thumbnail} 
                                alt={video.title} 
                                className="w-full h-48 object-cover"
                              />
                              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                                  <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    className="w-8 h-8 text-red-600"
                                  >
                                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                  </svg>
                                </div>
                              </div>
                            </a>
                            <div className="p-4">
                              <h4 className="font-medium">{video.title}</h4>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Photos section */}
                  {hero.photos && hero.photos.length > 0 && (
                    <div>
                      <h3 className="text-2xl font-semibold mb-4">Фотоматериалы</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {hero.photos.map(photo => (
                          <div key={photo.id} className="rounded-lg overflow-hidden shadow-md">
                            <a href={photo.url} target="_blank" rel="noopener noreferrer" className="block">
                              <img 
                                src={photo.url} 
                                alt={photo.title} 
                                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                              />
                            </a>
                            <div className="p-3">
                              <p className="text-sm">{photo.title}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {(!hero.videos || hero.videos.length === 0) && (!hero.photos || hero.photos.length === 0) && (
                    <div className="p-6 text-center bg-gray-100 rounded-lg">
                      <p>Фото и видеоматериалы готовятся к публикации.</p>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="interviews" className="mt-6">
                  {hero.interviews && hero.interviews.length > 0 ? (
                    <div>
                      <h3 className="text-2xl font-semibold mb-4">Интервью и публикации</h3>
                      <div className="space-y-4">
                        {hero.interviews.map(interview => (
                          <div key={interview.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                            <a href={interview.url} className="block">
                              <h4 className="text-lg font-medium mb-2">{interview.title}</h4>
                              <div className="flex items-center text-sm text-gray-600">
                                <span className="mr-4">Дата: {interview.date}</span>
                                <span>Источник: {interview.source}</span>
                              </div>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="p-6 text-center bg-gray-100 rounded-lg">
                      <p>Интервью и публикации готовятся к размещению.</p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Related heroes */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Другие герои</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allHeroesData
              .filter(h => h.id !== hero.id)
              .slice(0, 3)
              .map(relatedHero => (
                <div key={relatedHero.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Link to={`/heroes/${relatedHero.id}`} className="block hover:opacity-90 transition-opacity">
                    <img 
                      src={relatedHero.photo} 
                      alt={relatedHero.name} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-1">{relatedHero.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{relatedHero.rank}</p>
                      <p className="line-clamp-2">{relatedHero.shortDescription}</p>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild>
              <Link to="/heroes">Смотреть всех героев</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HeroDetail;
