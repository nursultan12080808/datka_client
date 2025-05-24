import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Load from '../images/giphy.webp';
import { useTranslation } from 'react-i18next';
import Flag from '../images/flag.avif';

const Home = ({ language, setLanguage }) => {
    const { t } = useTranslation();

    const [admins, setAdmins] = useState(null);
    const [news, setNews] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://datka-karasuu.gov.kg:8000/api/v1/glava/')
            .then(response => setAdmins(response.data))
            .catch(() => setError('Ошибка загрузки данных админов'));
    }, []);

    useEffect(() => {
        axios.get('https://datka-karasuu.gov.kg:8000/api/v1/news/')
            .then(response => {
                setNews(response.data.slice(0, 6));
            })
            .catch(() => setError('Ошибка загрузки данных новостей'));
    }, []);

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
            {news === null && admins === null && !error ? (
                <img className="load" src={Load} alt="Загрузка..." />
            ) : error ? (
                <img className="load" src={Load} alt="Ошибка загрузки данных" />
            ) : (
                <main className="container_2" role="main">
                    <section className="home_row" aria-label={t('glava')}>
                        <div className="home_col1">
                            <h1 className="glava_title">{t('glava')}</h1>
                            {admins && admins[0] && (
                                <article className="glava" aria-label={`${admins[0].surname} ${admins[0].name} ${admins[0].middle_name}`}>
                                    <figure>
                                        <img
                                            className='glava_img'
                                            src={admins[0].image}
                                            alt={`${admins[0].surname} ${admins[0].name}`}
                                            loading="lazy"
                                        />
                                        <figcaption className="glava_name">
                                            <div className="glava_block">
                                                <div>{admins[0].surname}</div>
                                                <div>{admins[0].name}</div>
                                            </div>
                                            <div>{admins[0].middle_name}</div>
                                        </figcaption>
                                    </figure>
                                </article>
                            )}
                        </div>

                        <section className="home_col2" aria-label={t('negizgi')}>
                            <h2 className="home_titl2">
                                <div className="home_title">— {t('negizgi')}</div>
                            </h2>
                            <div className="home_row2">
                                {news && news.length > 0 ? (
                                    news.map((item) => {
                                        const { day, month, year } = formatDate(item.published_date);
                                        return (
                                            <Link
                                                key={item.id}
                                                to={`/news/${item.id}/`}
                                                className='text_a'
                                                aria-label={language === "ru" ? item.title_ru : item.title_kg}
                                            >
                                                <article className="home_item">
                                                    <div className="home_image">
                                                        <div className="home_img">
                                                            <img
                                                                src={item.images[0]?.image || Flag}
                                                                alt={language === "ru"
                                                                    ? item.title_ru || 'Новость без заголовка'
                                                                    : item.title_kg || 'Новость без заголовка'}
                                                                loading="lazy"
                                                            />
                                                            <div className="home_block1">
                                                                <div className="date-container" aria-label={`Дата публикации: ${day} ${month} ${year}`}>
                                                                    <time dateTime={item.published_date}>
                                                                        <span className="date-number">{day}</span>
                                                                        <p className="date-month">{month}</p>
                                                                        <span className="date-year">{year}</span>
                                                                    </time>
                                                                </div>
                                                                
                                                                    <h3 className="home_title2">
                                                                        {language === "ru"
                                                                            ? item.title_ru || 'Новость без заголовка'
                                                                            : item.title_kg || 'Новость без заголовка'}
                                                                    </h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                            </Link>
                                        );
                                    })
                                ) : (
                                    <p className='home_title'>{t('Нет новостей для отображения')}</p>
                                )}
                            </div>
                        </section>
                    </section>
                </main>
            )}
        </header>
    );
};

export default Home;
