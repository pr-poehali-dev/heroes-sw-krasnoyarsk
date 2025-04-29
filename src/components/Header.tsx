import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-primary to-accent text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex flex-col">
              <span className="text-2xl font-bold">Герои СВО</span>
              <span className="text-sm">Красноярский край</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="font-medium hover:underline">Главная</Link>
            <Link to="/heroes" className="font-medium hover:underline">Герои</Link>
            <Link to="/stories" className="font-medium hover:underline">Истории</Link>
            <Link to="/media" className="font-medium hover:underline">Медиа</Link>
            <Link to="/about" className="font-medium hover:underline">О проекте</Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              className="text-white hover:bg-white/20"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col space-y-3 animate-fade-in">
            <Link to="/" className="font-medium hover:bg-white/10 p-2 rounded" onClick={toggleMenu}>Главная</Link>
            <Link to="/heroes" className="font-medium hover:bg-white/10 p-2 rounded" onClick={toggleMenu}>Герои</Link>
            <Link to="/stories" className="font-medium hover:bg-white/10 p-2 rounded" onClick={toggleMenu}>Истории</Link>
            <Link to="/media" className="font-medium hover:bg-white/10 p-2 rounded" onClick={toggleMenu}>Медиа</Link>
            <Link to="/about" className="font-medium hover:bg-white/10 p-2 rounded" onClick={toggleMenu}>О проекте</Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
