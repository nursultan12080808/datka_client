import React from 'react';
import Gerb from '../images/gerb.png';
import { Link } from 'react-router-dom';
import Flag from '../images/flag.avif';
import Flag1 from '../images/flag1.jpg';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';


const Nav = () => {

    const { t, i18n } = useTranslation(); // Используем хук для перевода

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang); // Изменяем язык
    };
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (e) => {
        // Преобразуем нажатие на ссылку в открытие или закрытие меню
        setIsOpen(!isOpen);
    };
    const [isOpen1, setIsOpen1] = useState(false);

    const handleClick1 = (event) => {
        event.preventDefault();  // Останавливаем переход по ссылке
        setIsOpen1((prev) => !prev);  // Переключаем состояние
    };

    return (
        <div>
            <div className="h100"></div>
            <div className="back"></div>
            <nav>
                <div className="container">
                    <div className="nav_row">
                        <div className="nav_col1">
                            <div className="">
                            <Link to={"/"}><img className='gerb' src={Gerb} alt="Герб" /></Link>
                            </div>
                            <div className="nav_h1">{t('title')} <br /> {t('title1')}</div>
                        </div>
                        <div className="nav_col2">
                            <div onClick={() => changeLanguage('ru')} className="nav_block nblock">
                                <div className="nav_title">РУ</div>
                                <img className='flag' src={Flag1} alt="Флаг РУ" />
                            </div>
                            <div onClick={() => changeLanguage('kg')} className="nav_block nblock">
                                <div className="nav_title">КЖ</div>
                                <img className='flag' src={Flag} alt="Флаг КЖ" />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="nav2">
                <div className="container">
                    <div className="link_row">
                        <div class="menu">
                            <input type="checkbox" id="burger-checkbox" class="burger-checkbox" />
                            <label for="burger-checkbox" class="burger"></label>
                            <ul class="menu-list">
                                <li><Link to={"/"} class="menu-item">{t('glvanoe')}</Link></li>
                                <li>
                                    <a
                                        href="#"
                                        className={`menu-item ${isOpen ? 'active' : ''}`}
                                        onClick={handleClick}
                                    >
                                        {t('okmot')} ⮟
                                        {isOpen && (
                                            <div className="link_blockk1">
                                                {/* Внутренние ссылки (если используются React Router) */}
                                                <Link to={"rucovodstvo/"}>
                                                    {t("jet")}
                                                </Link>
                                                <a href="#">{t('taryh')}</a>
                                                <a href="#">{t('kabyl')}</a>
                                            </div>
                                        )}
                                    </a>
                                </li>
                                <li><a href="#" class="menu-item">{t('cadyr')}</a></li>
                                <li>
                                    <a
                                        href="#"
                                        className={`menu-item okmot1`}
                                        onClick={handleClick1} // Обработчик клика
                                    >
                                        {t("earth")} ⮟
                                        {isOpen1 && (
                                            <div className="link_blockk2">
                                                <a href="#">{t('cow')}</a>
                                                <a href="#">{t('gov_earth')}</a>
                                            </div>
                                        )}
                                    </a>
                                </li>
                                <li><a href="#" class="menu-item">{t('toktom')}</a></li>
                                <li><a href="#" class="menu-item">{t('new')}</a></li>
                                <li><a href="#" class="menu-item">{t('contact')}</a></li>
                            </ul>
                        </div>
                        <div className="nav_col22">
                            <div onClick={() => changeLanguage('ru')} className="nav_block nblock1">
                                <div className="nav_title">РУ</div>
                                <img className='flag' src={Flag1} alt="Флаг РУ" />
                            </div>
                            <div onClick={() => changeLanguage('kg')} className="nav_block nblock1">
                                <div className="nav_title">КЖ</div>
                                <img className='flag' src={Flag} alt="Флаг КЖ" />
                            </div>
                        </div>
                        <div className="link_head"><Link to={"/"}>{t('glvanoe')}</Link></div>
                        <div className="link_head link1">
                            <a href="#">{t('okmot')} ⮟</a>
                            <div className="link_head link_block1">
                                <Link to={"rucovodstvo/"}>{t('jet')}</Link>
                                <a href="#">{t('taryh')}</a>
                                <a href="#">{t('kabyl')}</a>
                            </div>
                        </div>
                        <div className="link_head"><a href="#">{t('cadyr')}</a></div>
                        <div className="link_head link2">
                            <a href="#">{t("earth")} ⮟</a>
                            <div className="link_block2">
                                <a href="#">{t('cow')}</a>
                                <a href="#">{t('gov_earth')}</a>
                            </div>
                        </div>
                        <div className="link_head"><a href="#">{t('toktom')}</a></div>
                        <div className="link_head"><a href="#">{t('new')}</a></div>
                        <div className="link_head"><a href="#">{t('contact')}</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
