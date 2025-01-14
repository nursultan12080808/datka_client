// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Импортируем переводы
import ruTranslation from './locales/ru.json';
import kgTranslation from './locales/kg.json';  // Новый файл с переводом на кыргызский

i18n
  .use(initReactI18next) // Подключаем React
  .init({
    resources: {
      ru: {
        translation: ruTranslation,
      },
      kg: {
        translation: kgTranslation,
      },
    },
    lng: 'ru', // Язык по умолчанию (русский)
    fallbackLng: 'ru', // Если перевод на выбранном языке не найден, будет использован русский
    interpolation: {
      escapeValue: false, // React уже безопасно обрабатывает текст
    },
  });

export default i18n;
