import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CalendarIcon } from "lucide-react";

export interface StoryProps {
  id: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  heroId?: string;
}

const StoryCard = ({ id, title, date, image, excerpt, heroId }: StoryProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-video overflow-hidden bg-gray-100">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center text-sm text-gray-500 mb-1">
          <CalendarIcon size={16} className="mr-1" />
          <span>{date}</span>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="line-clamp-3 text-sm text-gray-600">{excerpt}</p>
      </CardContent>
      <CardFooter className="pt-1">
        <Button asChild variant="outline" className="w-full">
          <Link to={`/stories/${id}`}>Читать историю</Link>
        </Button>
        {heroId && (
          <Button asChild variant="ghost" className="w-full mt-2">
            <Link to={`/heroes/${heroId}`}>Перейти к герою</Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default StoryCard;
