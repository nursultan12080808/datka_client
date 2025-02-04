import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { t } from "i18next";

// Координаты для центра карты
const center = { lat: 40.55736805727003, lng: 72.81457062208011 };

const Contakty = ({language}) => {

    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        fetch(`http://195.38.164.98:8000/api/v1/administrations/`)
            .then(response => response.json())
            .then(data => setAdmins(data))
            .catch(error => console.error('Ошибка загрузки:', error));
    }, []);

    const [mapLoaded, setMapLoaded] = useState(false);

    useEffect(() => {
        setMapLoaded(true);
    }, []);

    return (
        <header>
            <div className="container">
                <div className="cadr_h1">
                    <div className="tire">—</div>
                    {t("contact")}
                </div>
                <div className="row_contact">
                    <div className="col1_contact">
                    <div className="post_text" dangerouslySetInnerHTML={{ __html: t("cont")}} />
                    </div>
                    <div className="col2_contact">
                    {
                        admins.map(item => (
                            <div className="admin_item2">
                                <div className="admin_job12">{language == "ru" ? item.job_ru : item.job_kg}</div>
                                <div className="admin_name1">{item.surname_kg} {item.name_kg} {item.middle_name_kg}</div>
                                <div className="admin_phon1">{item.phone}</div>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Contakty;
