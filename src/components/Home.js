import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Load from '../images/giphy.webp';    
import { useTranslation } from 'react-i18next';
import Flag from '../images/flag.avif';

const Home = ({ language, setLanguage }) => {
    const { t } = useTranslation(); // Используем хук для перевода

    const [admins, setAdmins] = useState(null);
    const [news, setNews] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Загрузка данных админов
        axios.get('https://aylokmot.pythonanywhere.com/api/v1/glava/')
            .then(response => setAdmins(response.data))
            .catch(err => setError('Ошибка загрузки данных админов'));
    }, []);

    useEffect(() => {
        // Загрузка данных новостей
        axios.get('https://aylokmot.pythonanywhere.com/api/v1/news/')
            .then(response => {
                setNews(response.data.slice(0, 6))
            })
            .catch(err => setError('Ошибка загрузки данных новостей'));
    }, []);

    // Функция для форматирования даты
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const monthNames = [
            'ЯНВАРЬ', 'ФЕВРАЛЬ', 'МАРТ', 'АПРЕЛЬ', 'МАЙ', 'ИЮНЬ',
            'ИЮЛЬ', 'АВГУСТ', 'СЕНТЯБРЬ', 'ОКТЯБРЬ', 'НОЯБРЬ', 'ДЕКАБРЬ'
        ];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();

        return { day, month, year };
    };

    return (
        <header>
            {
                news === null && admins === null && !error ? (
                    <img className="load" src={Load} alt="Загрузка..." />
                ) : error ? (
                    <img className="load" src={Load} alt="Загрузка..." />
                ) : (
                    <div className="container_2">
                        <div className="home_row">
                            <div className="home_col1">
                                <div className="glava_title">{t('glava')}</div>
                                {admins && admins[0] && (
                                    <div className="glava">
                                        <img src={admins[0].image} alt="" />
                                        <div className="glava_name">
                                            <div className="glava_block">
                                                <div>{admins[0].surname}</div>
                                                <div>{admins[0].name}</div>
                                            </div>
                                            <div>{admins[0].middle_name}</div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="home_col2">
                                <div className="home_titl2">
                                    <div className="home_title">— {t('negizgi')}</div>
                                </div>
                                <div className="home_row2">
                                    {news && news.length > 0 ? (
                                        news.map((item, index) => {
                                            const { day, month, year } = formatDate(item.published_date);
                                            return (
                                                <Link to={`/news/${item.id}/`} className='text_a'>
                                                    <div className="home_item" key={index}>
                                                        <div className="home_image">
                                                            <div className="home_img">
                                                                <img src={item.images[0]?.image || Flag} alt="" />
                                                                <div className="home_block1">
                                                                    <div className="date-container">
                                                                        <span className="date-number">{day}</span>
                                                                        <p className="date-month">{month}</p>
                                                                        <span className="date-year">{year}</span>
                                                                    </div>
                                                                    <div className="home_col4">
                                                                        <div className="home_title2">
                                                                            {language == "ru"
                                                                            ?
                                                                            item.title_ru || 'Новость без заголовка'
                                                                            :
                                                                            item.title_kg || 'Новость без заголовка'
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            );
                                        })
                                    ) : (
                                        <div className='home_title'>Нет новостей для отображения</div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </header>
    );
};

export default Home;
