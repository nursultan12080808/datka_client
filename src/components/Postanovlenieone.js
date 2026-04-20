import React from 'react';
import { useParams } from 'react-router-dom';
import Load from '../images/giphy.webp';
import { useState, useEffect } from 'react';
import BASE_URL from "./BaseUrl"


const Postanovlenieone = ({ language }) => {

    const { id } = useParams();
    const [newsItem, setNewsItem] = useState(null);


    useEffect(() => {
        fetch(`https://datka-karasuu.gov.kg:8000/api/v1/resolutions/${id}/`)
            .then(response => response.json())
            .then(data => setNewsItem(data))
            .catch(error => console.error('Ошибка загрузки:', error));
    }, [id]);

    if (!newsItem) {
        return <img className="load" src={Load} alt="Загрузка..." />;
    }

    return (
        <header>
            <div className="container">
                <div className="post_row1">
                    {
                        language == "ru" ?
                            <div className="cadr_h1"><div className="tire">—</div>{newsItem.title_ru}</div>
                            :
                            <div className="cadr_h1"><div className="tire">—</div>{newsItem.title_kg}</div>
                    }
                    {
                        <div className='post_item'>
                            <h5>Номер постановление: {newsItem.resolution_number}</h5>
                            <h5>Дата публикации: {newsItem.resolution_date}</h5>
                        </div>
                    }
                    {
                        language == "ru" ?
                            newsItem.files.map(item => (
                                <a href={`${item.file}`}>{newsItem.title_ru}</a>
                            ))
                            :
                            newsItem.files.map(item => (
                                <a href={`${item.file}`}>{newsItem.title_kg}</a>
                            ))
                    }
                    
                </div>
            </div>
        </header>
    );
};

export default Postanovlenieone;