import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Load from '../images/giphy.webp';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';



const Postanovlenie = ({ language, setLanguage }) => {

    const [resolutions, setResolutions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://aylokmot.pythonanywhere.com/api/v1/resolutions/`)
            .then(response => response.json())
            .then(data => setResolutions(data))
            .catch(error => console.error('Ошибка загрузки:', error));
    }, []);

    
    const { t } = useTranslation();

    if (!resolutions) {
        return <img className="load" src={Load} alt="Загрузка..." />;
    } else if (resolutions.length < 1) {
        return (
            <div className="container">
                <div className="cadr_h1">— {t("toktom")}</div>
                <div className='no'>{t('no')}</div>
            </div>
        )
    }
    const formatDate = (isoDateString) => {
        const date = new Date(isoDateString);
        const day = String(date.getDate()).padStart(2, '0'); // День с ведущим нулём
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяц с ведущим нулём
        const year = String(date.getFullYear()).slice(-2); // Последние две цифры года

        return `${day}-${month}-${year}`;
    };

    return (
        <header>
            <div className="container">
                <div className="cadr_h1"><span className="tire">—</span> {t("toktom")}</div>
                <div className="post_row">
                    <div className="post1 post_title">{t("date")}</div>
                    <div className="post2 post_title">{t("num")}</div>
                    <div className="post3 post_title">{t("zagol")}</div>
                    {
                        resolutions.map(item => (
                            <>
                                <div className="post1 post_date">{formatDate(item.resolution_date)}</div>
                                <div className="post2 post_date">{item.resolution_number}</div>
                                <div className="">
                                <Link to={`/postanovlenie/${item.id}/`} className="post3 post_link post_date">
                                    {language === "ru" ? item.title_ru : item.title_kg}
                                </Link>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </header>
    );
};

export default Postanovlenie;