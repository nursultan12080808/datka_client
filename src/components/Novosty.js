import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Load from '../images/giphy.webp';
import { useTranslation } from 'react-i18next';
import Flag from '../images/flag.avif';



const Novosty = ({language}) => {

    const { t } = useTranslation(); // Используем хук для перевода

    const [news, setNews] = useState(null);
    const [error, setError] = useState(null);



    useEffect(() => {
        // Загрузка данных новостей
        axios.get('https://datka-karasuu.gov.kg:8000/api/v1/news/')
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

    if (!news) {
        return <img className="load" src={Load} alt="Загрузка..." />;
    } else if (news.length < 1) {
        return (
            <div className="container">
                <div className="cadr_h1">— {t("new")}</div>
                <div className='no'>{t('no')}</div>
            </div>
        )
    }

    return (
        <header>
            <div className="container">
            <div className="cadr_h1"><div className='tire'>—</div> {t("new")}</div>
                <div className="home_row2">
                    {news && news.length > 0 ? (
                        news.map((item, index) => {
                            const { day, month, year } = formatDate(item.published_date);
                            return (
                                <Link to={`/news/${item.id}/`} className='text_a'>
                                    <div className="home_item" key={index}>
                                        <div className="home_image">
                                            <div className="home_img1">
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
        </header>
    );
};

export default Novosty;