import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

export interface HeroProps {
  id: string;
  name: string;
  rank: string;
  photo: string;
  shortDescription: string;
  awards: string[];
}

const HeroCard = ({ id, name, rank, photo, shortDescription, awards }: HeroProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/heroes/${id}`} className="block">
        <div className="h-64 overflow-hidden">
          <img
            src={photo}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <CardHeader className="pb-2">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-sm text-gray-500">{rank}</p>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-3 text-gray-700">{shortDescription}</p>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2 pt-0">
          {awards.map((award, index) => (
            <Badge key={index} variant="outline" className="bg-red-50">
              {award}
            </Badge>
          ))}
        </CardFooter>
      </Link>
    </Card>
  );
};

export default HeroCard;
