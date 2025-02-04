import { t } from 'i18next';
import React, { useState, useEffect } from 'react';
import Load from '../images/giphy.webp';



const Rucovodstvo = ({language, setLanguage}) => {

    const [admins, setAdmins] = useState(null);

    useEffect(() => {
        fetch(`http://195.38.164.98:8000/api/v1/admins/`)
            .then(response => response.json())
            .then(data => setAdmins(data))
            .catch(error => console.error('Ошибка загрузки:', error));
    }, []);

    if (!admins) {
        return <img className="load" src={Load} alt="Загрузка..." />;
    }
    return (
        <header>
            <div className="container">
                <div className="cadr_h1"><div className="tire">—</div>{t("jet")}</div>
                <div className="row_admins">
                    {
                        admins.map(item => (
                            <div className="admin123">
                                <div className="admin">
                                <div className="admin_job">{language == "ru" ? item.job_ru : item.job_kg}</div>
                                <div className="admin_img">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="admin_block">
                                    <div className="admin_name">
                                        {item.surname_ru} {item.name_ru} {item.middle_name_ru   }
                                    </div>
                                    <div className="admin_phone"><span className='job_'>Номер: </span>{item.phone}</div>
                                </div>
                            </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </header>
    );
};

export default Rucovodstvo;