import { CanceledError } from 'axios';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Load from '../images/giphy.webp';

const GosZemli = ({ language, setLanguage }) => {
    const [cadr, setCadr] = useState(null);

    const { t } = useTranslation();

    useEffect(() => {
        fetch(`https://aylokmot.pythonanywhere.com/api/v1/statelands/`)
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

    const OWNERSHIP_STATUS_CHOICES = {
        'state': { 'ru': 'Государственная', 'kg': 'Мамлекеттик' },
        'municipal': { 'ru': 'Муниципальная', 'kg': 'Муниципалдык' },
        'private': { 'ru': 'Частная', 'kg': 'Жеке менчик' }
    };

    const USAGE_STATUS_CHOICES = {
        'available': { 'ru': 'Доступно', 'kg': 'Бар' },
        'reserved': { 'ru': 'Забронировано', 'kg': 'Броньда' },
        'in_use': { 'ru': 'Используется', 'kg': 'Колдонууда' },
        'under_construction': { 'ru': 'Строительство', 'kg': 'Курулушта' },
        'sold': { 'ru': 'Продано', 'kg': 'Сатылды' }
    };

    return (
        <header>
            <div className="container">
                <div className="cadr_row">
                    {
                        cadr.map(item => {
                            const { day, month, year } = formatDate(item.date_added);
                            return (
                                <div className="cadr_item">
                                    {
                                        language == "ru" ?
                                            <div className="cadr_block1">
                                                <div className="cadr_h"><span className='tire'>—</span> {item.name_ru}</div>
                                                <div className="cadr_content" dangerouslySetInnerHTML={{ __html: item.description_ru }} />
                                                <div className="cadr_title1">{item.purpose_ru}</div>
                                                <div className="card_123"><span>{t("status")}:</span> <div>{OWNERSHIP_STATUS_CHOICES[item.ownership_status]['ru']}</div></div>
                                                <div className="card_123"><span>{t("status1")}:</span> <div>{USAGE_STATUS_CHOICES[item.usage_status]['ru']}</div></div>
                                            </div>
                                            :
                                            <div className="cadr_block1">
                                                <div className="cadr_h"><span className='tire'>—</span> {item.name_kg}</div>
                                                <div className="cadr_content" dangerouslySetInnerHTML={{ __html: item.description_kg }} />
                                                <div className="cadr_title1">{item.purpose_kg}</div>
                                                <div className="card_123"><span>{t("status")}:</span> <div>{OWNERSHIP_STATUS_CHOICES[item.ownership_status]['kg']}</div></div>
                                                <div className="card_123"><span>{t("status1")}:</span> <div>{USAGE_STATUS_CHOICES[item.usage_status]['kg']}</div></div>
                                            </div>
                                    }
                                    {
                                        item.rental_price_per_year ?
                                            <div className="">
                                                <div className="cadr_price_year"><div className='fn500'>{t("selhoz_1")}:</div><div className="">{item.rental_price_per_year} сом</div></div>
                                                <br />
                                                <div className="card_block">
                                                    <div className="cadr_phone">Номер: {item.phone}</div>
                                                    <div className="cadr_date">{day} {month} {year}</div>
                                                </div>
                                            </div>
                                            :
                                            <div className="card_block">
                                                <div className="cadr_phone">Номер: {item.phone}</div>
                                                <div className="cadr_date">{day} {month} {year}</div>
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

export default GosZemli;
