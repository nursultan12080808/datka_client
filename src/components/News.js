import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Load from '../images/giphy.webp';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const News = () => {
    const { id } = useParams(); 
    const [newsItem, setNewsItem] = useState(null);

    useEffect(() => {
        fetch(`https://nursultan.pythonanywhere.com/api/v1/news/${id}/`)
            .then(response => response.json())
            .then(data => setNewsItem(data))
            .catch(error => console.error('Ошибка загрузки:', error));
    }, [id]);

    if (!newsItem) {
        return <img className="load" src={Load} alt="Загрузка..." />;
    }

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

    const { day, month, year } = formatDate(newsItem.published_date);

    return (
        <header>
            <div className="container">
                <div className="new_item">
                    <div className="new_block">
                        <div className="date-container">
                            <span className="date-number1">{day}</span>
                            <p className="date-month1">{month}</p>
                            <span className="date-year1">{year}</span>
                        </div>
                        <div className="new_title">{newsItem.title}</div>
                    </div>
                    <div className="new_block2">
                        <div className="new_img">
                            <Swiper
                                modules={[Navigation, Pagination]}
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                            >
                                {newsItem.images.map((img, index) => (
                                    <SwiperSlide key={index}>
                                        <img className="new_img1" src={img.image} alt="" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className="new_text" dangerouslySetInnerHTML={{ __html: newsItem.content }} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default News;
