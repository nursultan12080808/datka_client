import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Load from '../images/giphy.webp';



const Rucovodstvo = () => {

    const { t } = useTranslation();

    const [admins, setAdmins] = useState(null);

    useEffect(() => {
        fetch(`https://nursultan.pythonanywhere.com/api/v1/admins/`)
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
                <div className="row_admins">
                    {
                        admins.map(item => (
                            <div className="admin">
                                <div className="admin_img">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="admin_block">
                                    <div className="admin_name">
                                        {item.surname} {item.name} {item.middle_name}
                                    </div>
                                    <div className="admin_job">Должность: {item.job}</div>
                                    <div className="admin_job">Номер: {item.phone}</div>
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