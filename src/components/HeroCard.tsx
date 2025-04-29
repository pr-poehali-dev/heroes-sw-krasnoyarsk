import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export interface HeroProps {
  id: string;
  name: string;
  rank?: string;
  photo: string;
  shortDescription: string;
  awards?: string[];
}

const HeroCard = ({ id, name, rank, photo, shortDescription, awards }: HeroProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img 
          src={photo} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{name}</CardTitle>
        {rank && <CardDescription>{rank}</CardDescription>}
      </CardHeader>
      <CardContent>
        <p className="line-clamp-3 text-sm text-gray-600">{shortDescription}</p>
        
        {awards && awards.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1">
            {awards.map((award, index) => (
              <Badge key={index} variant="secondary" className="text-xs">{award}</Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link to={`/heroes/${id}`}>Подробнее</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default HeroCard;
