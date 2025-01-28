import React from 'react';
import { useParams } from 'react-router-dom';
import Load from '../images/giphy.webp';
import { useState, useEffect } from 'react';
import BASE_URL from "./BaseUrl"


const Postanovlenieone = ({ language }) => {

    const { id } = useParams();
    const [newsItem, setNewsItem] = useState(null);


    useEffect(() => {
        fetch(`https://aylokmot.pythonanywhere.com/api/v1/resolutions/${id}/`)
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

                    <div className="post_text" dangerouslySetInnerHTML={{
                        __html: language == "ru"
                            ?
                            newsItem.content_ru || 'Новость без заголовка'
                            :
                            newsItem.content_kg || 'Новость без заголовка'
                    }} />

                    <div className="post_text" dangerouslySetInnerHTML={{
                        __html: language == "ru"
                            ?
                            newsItem.notes_ru || 'Новость без заголовка'
                            :
                            newsItem.notes_kg || 'Новость без заголовка'
                    }} />

                </div>
            </div>
        </header>
    );
};

export default Postanovlenieone;