import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">О проекте</h3>
            <p className="text-gray-300">
              Сайт создан для школьников Красноярского края с целью сохранения памяти 
              о героях Специальной военной операции и их подвигах.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Главная</Link></li>
              <li><Link to="/heroes" className="text-gray-300 hover:text-white">Герои</Link></li>
              <li><Link to="/stories" className="text-gray-300 hover:text-white">Истории</Link></li>
              <li><Link to="/media" className="text-gray-300 hover:text-white">Медиа</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">О проекте</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Контакты</h3>
            <p className="text-gray-300">
              Если вы хотите поделиться историей о герое СВО из Красноярского края, 
              пожалуйста, свяжитесь с нами:
            </p>
            <p className="text-gray-300 mt-2">
              Email: info@geroi-svo-krasnoyarsk.ru
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Герои СВО Красноярского края. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
