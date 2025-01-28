import { CanceledError } from 'axios';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Load from '../images/giphy.webp';

const Selhoz = ({ language, setLanguage }) => {
    const [cadr, setCadr] = useState(null);

    const { t } = useTranslation();

    useEffect(() => {
        fetch(`https://aylokmot.pythonanywhere.com/api/v1/agriculturals/`)
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
                <div className="cadr_h1">— {t("cow")}</div>
                <div className='no'>{t('no')}</div>
            </div>
        )
    }

    const STATUS_CHOICES = {
        'available': { 'ru': 'Доступно', 'kg': 'Бар' },
        'rented': { 'ru': 'Сдано в аренду', 'kg': 'Арендада' },
        'sold': { 'ru': 'Продано', 'kg': 'Сатылды' },
        'reserved': { 'ru': 'Забронировано', 'kg': 'Броньдо' }
    };

    return (
        <header>
            <div className="container">
            {/* <div className="cadr_h1"><span className='tire'>—</span> {t("cow")}</div> */}
                <div className="cadr_row">
                    {
                        cadr.map(item => {
                            const { day, month, year } = formatDate(item.date_added);
                            return (
                                <div className="cadr_item">
                                    {
                                        language === "ru" ?
                                            <div className="">
                                                <div className="cadr_h1"><div className='tire'>—</div> {item.name_ru}</div>
                                                <div className="cadr_content" dangerouslySetInnerHTML={{ __html: item.description_ru }}/>
                                                <br />
                                                <div className="cadr_content dfjs"><div className=''>{t("status")}:</div> {STATUS_CHOICES[item.status]['ru']}</div>
                                                <br />
                                            </div>
                                            :
                                            <div className="">
                                                <div className="cadr_h1"><div className='tire'>—</div> {item.name_kg}</div>
                                                <div className="cadr_content" dangerouslySetInnerHTML={{ __html: item.description_kg }}/>
                                                <br />
                                                <div className="cadr_content dfjs"><div className=''>{t("status")}:</div> {STATUS_CHOICES[item.status]['kg']}</div>
                                                <br />
                                            </div>
                                    }
                                    {
                                        item.price_per_year ?
                                            <div className="">
                                                <div className="cadr_price_year "><div className=''>{t("selhoz_1")}:</div><div className="">{item.price_per_year} сом</div></div>
                                                <br />
                                                <div className="card_block">
                                                    <div className="cadr_phone">Номер: {item.phone}</div>
                                                    <div className="cadr_date">{day} {month} {year}</div>
                                                </div>
                                            </div>
                                            :
                                            <div className="">
                                            <div className="card_block">
                                                <div className="cadr_phone">Номер: {item.phone}</div>
                                                <div className="cadr_date">{day} {month} {year}</div>
                                            </div>
                                            </div>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </header>
    );
};

export default Selhoz;
