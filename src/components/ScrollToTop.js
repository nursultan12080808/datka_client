import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Прокручивает страницу в верхний угол
  }, [location]); // Прокручивает при каждом изменении маршрута

  return null; // Компонент не рендерит ничего
};

export default ScrollToTop;
