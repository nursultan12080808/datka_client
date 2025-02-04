import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Load from '../images/giphy.webp';

const Cadr = ({ language, setLanguage }) => {
    const [cadr, setCadr] = useState(null);

    const { t } = useTranslation();

    useEffect(() => {
        fetch(`https://datka-karasuu.gov.kg:8000/api/v1/jobs/`)
            .then(response => response.json())
            .then(data => setCadr(data))
            .catch(error => console.error('Ошибка загрузки:', error));
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

    if (!cadr) {
        return <img className="load" src={Load} alt="Загрузка..." />;
    } else if (cadr.length < 1) {
        return (
            <div className="container">
                <div className="cadr_h1">— {t("cadyr")}</div>
                <div className='no'>{t('no')}</div>
            </div>
        )
    }
    return (
        <header>
            <div className="container">
                <div className="cadr_row">
                    {
                        cadr.map(item => {
                            const { day, month, year } = formatDate(item.published_date);
                            return (
                                <div className="cadr_item">
                                    {
                                        language == "ru" ?
                                            <div className="">
                                                <div className="cadr_h1"><div className='tire'>—</div> {item.job_ru}</div>
                                                <div className="cadr_content" dangerouslySetInnerHTML={{ __html: item.content_ru }}/>
                                            </div>
                                            :
                                            <div className="">
                                                <div className="cadr_h1"><div className='tire'>—</div> {item.job_kg}</div>
                                                <div className="cadr_content" dangerouslySetInnerHTML={{ __html: item.content_kg }}/>
                                            </div>
                                    }
                                    <div className="card_block">
                                        <div className="cadr_phone">Номер: {item.phone}</div>
                                        <div className="cadr_date">{day} {month} {year}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </header>
    );
};

export default Cadr;