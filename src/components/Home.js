import React from 'react';
import axios from 'axios';
import Load from '../images/giphy.webp';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {

    const { t, i18n } = useTranslation(); // Используем хук для перевода

    const [admins, setAdmins] = useState(null); // Изначально null, чтобы показать загрузку
    const [error, setError] = useState(null);

    useEffect(() => {
        // Выполнение GET-запроса
        axios.get('https://nursultan.pythonanywhere.com/api/v1/glava/')
            .then(response => {
                setAdmins(response.data); // Сохраняем полученные данные в состояние
                console.log(response.data); // Сохраняем полученные данные в состояние
            })
            .catch(err => {
                setError('Ошибка при загрузке данных');
                console.error('Error:', err);
            });
    }, []);

    return (
        <div>
            {
                // Если нет данных и нет ошибки, показываем картинку загрузки
                admins === null && !error ? 
                    <img className='load' src={Load} alt="Загрузка..." />
                    :
                    // Если данные есть, отображаем их
                    error ? 
                    <div className="error">{error}</div>
                    :
                    <div className="container">
                        <div className="home_row">
                            <div className="home_col1">
                                <div className="glava_title">{t('glava')}</div>
                                <div className="glava">
                                    <img src={admins[0].image} alt="" />
                                </div>
                                <div className="glava_name">
                                <div className="glava_block">
                                <div className="">{admins[0].surname}</div> 
                                <div className="">{admins[0].name}</div>
                                </div>
                                <div className="">{admins[0].middle_name}</div>
                                </div>
                            </div>
                            <div className="home_col2"></div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Home;
