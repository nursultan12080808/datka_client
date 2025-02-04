import React, { useState } from 'react';

const Electr = ({ language }) => {
    const [formData, setFormData] = useState({
        last_name: '',
        first_name: '',
        middle_name: '',
        email: '',
        phone: '',
        address: '',
        subject: '',
        message: ''
    });
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://datka-karasuu.gov.kg:8000/api/v1/contact/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            setSuccess(true);
            setFormData({
                last_name: '',
                first_name: '',
                middle_name: '',
                email: '',
                phone: '',
                address: '',
                subject: '',
                message: ''
            });
        } else {
            setSuccess(false);
        }
    };

    return (
        <header>
            <div className="container">
                <div className="elec_row">
                    <div className="elec_col1">
                        {language === "ru" ? (
                            <div className="elec_title">
                                <b>Уважаемые посетители!</b>
                                <br /><br />
                                Просим Вас внимательно ознакомиться с порядком приема и рассмотрения обращений граждан в адрес Датка айыл окмоту в электронном виде.
                                <br /><br />
                                <strong>Сроки рассмотрения обращений граждан:</strong>
                                <br />
                                - Максимальный срок рассмотрения письменного обращения не превышает 14 дней со дня регистрации.
                                <br /><br />
                                - Ответ на обращение направляется на электронный почтовый адрес, указанный в анкете.
                                <br /><br />
                                Информация о персональных данных хранится с соблюдением требований Кыргызского Законодательства.
                                <br /><br />
                                <strong>Закон Кыргызской Республики №67 «О порядке рассмотрения обращений граждан».</strong>
                            </div>
                        ) : (
                            <div className="elec_title">
                                <b>Урматтуу коноктор!</b>
                                <br /><br />
                                Датка айыл өкмөтүнө электрондук түрдө кайрылууларды кабыл алуу тартиби менен таанышып чыгыңыздар.
                                <br /><br />
                                <strong>Кайрылууларды кароо мөөнөттөрү:</strong>
                                <br />
                                - Жазуу түрүндөгү кайрылууну кароо максималдуу мөөнөтү – 14 күн.
                                <br /><br />
                                - Кайрылууга жооп көрсөтүлгөн электрондук почта дарегине жөнөтүлөт.
                                <br /><br />
                                Жеке маалыматтар Кыргыз Республикасынын мыйзамдарына ылайык сакталат.
                                <br /><br />
                                <strong>Кыргыз Республикасынын №67 Мыйзамы «Жарандардын кайрылууларын кароо тартиби жөнүндө».</strong>
                            </div>
                        )}
                    </div>
                    <div className="elec_col2">
                        <h3>{language === "ru" ? "Отправить сообщение" : "Билдирүү жөнөтүү"}</h3>
                        {success === true && <p style={{ color: 'green' }}>{language === "ru" ? "Сообщение отправлено!" : "Билдирүү жөнөтүлдү!"}</p>}
                        {success === false && <p style={{ color: 'red' }}>{language === "ru" ? "Ошибка отправки!" : "Жөнөтүү катасы!"}</p>}
                        <form onSubmit={handleSubmit} className="eleck_block">
                            <input type="text" name="last_name" placeholder={language === "ru" ? "Фамилия" : "Фамилия"} required onChange={handleChange} value={formData.last_name} />
                            <input type="text" name="first_name" placeholder={language === "ru" ? "Имя" : "Аты"} required onChange={handleChange} value={formData.first_name} />
                            <input type="text" name="middle_name" placeholder={language === "ru" ? "Отчество" : "Отчество"} onChange={handleChange} value={formData.middle_name} />
                            <input type="email" name="email" placeholder={language === "ru" ? "Электронная почта" : "Электрондук почта"} required onChange={handleChange} value={formData.email} />
                            <input type="text" name="phone" placeholder={language === "ru" ? "Телефон" : "Телефон номери"} required onChange={handleChange} value={formData.phone} />
                            <input type="text" name="address" placeholder={language === "ru" ? "Адрес проживания" : "Жашаган дарек"} required onChange={handleChange} value={formData.address} />
                            <input type="text" name="subject" placeholder={language === "ru" ? "Тема" : "Тема"} onChange={handleChange} value={formData.subject} />
                            <textarea name="message" placeholder={language === "ru" ? "Сообщение" : "Билдирүү"} required onChange={handleChange} value={formData.message}></textarea>
                            <button type="submit">{language === "ru" ? "Отправить" : "Жөнөтүү"}</button>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Electr;
