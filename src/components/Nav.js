import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Gerb from '../images/gerb.png';
import Flag from '../images/flag.avif';
import Flag1 from '../images/flag1.jpg';

const Nav = ({ language, setLanguage }) => {
    const { t, i18n } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);


    const handleClick = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    const handleClick1 = (e) => {
        e.preventDefault();
        setIsOpen1(!isOpen1);
    };

    const closeMenu = () => {
        const burgerCheckbox = document.getElementById('burger-checkbox');
        if (burgerCheckbox) {
            burgerCheckbox.checked = false;
        }
        setIsOpen(false);
        setIsOpen1(false);
    };


    const changeLanguage = (lang) => {
        setLanguage(lang);
        i18n.changeLanguage(lang);
    };

    const toggleDropdown = (setState) => (e) => {
        e.preventDefault();
        setState((prev) => !prev);
    };



    return (
        <>
            <title>{t('title')} – {t('title1')}</title>
            <meta name="description" content="Официальный сайт муниципалитета" />
            <meta name="keywords" content="Кыргызстан, муниципалитет, сайт, новости, датка, айлокмот" />

            <label htmlFor="burger-checkbox" id="blur123" className=""></label>
            <div className="h100"></div>
            <nav aria-label="Главная навигация">
                <div className="container">
                    <div className="nav_row">
                        <div className="nav_col1">
                            <Link to="/">
                                <img className="gerb" src={Gerb} alt="Герб Кыргызской Республики" title="Герб" />
                            </Link>
                            <h1 className="nav_h1">{t('title')} <br /> {t('title1')}</h1>
                        </div>

                        <div className="nav_col2">
                            <div
                                onClick={() => changeLanguage('ru')}
                                className="nav_block nblock"
                                role="button"
                                title="Выбрать русский язык"
                            >
                                <div className="nav_title">РУ</div>
                                <img className="flag" src={Flag1} alt="Флаг России" />
                            </div>
                            <div
                                onClick={() => changeLanguage('kg')}
                                className="nav_block nblock"
                                role="button"
                                title="Выбрать кыргызский язык"
                            >
                                <div className="nav_title">КЖ</div>
                                <img className="flag" src={Flag} alt="Флаг Кыргызстана" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav2">
                    <div className="container">
                        <div className="link_row">
                            <div class="menu">
                                <input type="checkbox" id="burger-checkbox" class="burger-checkbox" />
                                <label for="burger-checkbox" class="burger"></label>
                                <ul class="menu-list" id='menu-list'>
                                    <li><Link onClick={() => closeMenu()} to={"/"} class="menu-item">{t('glvanoe')}</Link></li>
                                    <li>
                                        <Link
                                            to={"rucovodstvo/"}
                                            href="#"
                                            className={`menu-item ${isOpen ? 'active' : ''}`}
                                            onClick={handleClick}
                                        >
                                            {t('jet')} <i className="bx bxs-chevron-down white_box" style={{ color: "#ffffff" }}></i>
                                            {isOpen && (
                                                <div className="link_blockk1">
                                                    <Link onClick={() => closeMenu()} to={"/history/"} >{t('taryh')}</Link>
                                                    <Link onClick={() => closeMenu()} to={"/electronaya-priemnaya/"}>{t('kabyl')}</Link>
                                                </div>
                                            )}
                                        </Link>
                                    </li>
                                    <li><Link onClick={() => closeMenu()} to={"/cadr/"} class="menu-item">{t('cadyr')}</Link></li>
                                    <li>
                                        <Link
                                            to={"/earths/"}
                                            className={"menu-item okmot1"}
                                            onClick={handleClick1} // Обработчик клика
                                        >
                                            {t("earth")} <i className="bx bxs-chevron-down white_box" style={{ color: "#ffffff" }}></i>
                                            {isOpen1 && (
                                                <div className="link_blockk2">
                                                    <Link onClick={() => closeMenu()} to={"/selhoz/"}>{t('cow')}</Link>
                                                    <Link onClick={() => closeMenu()} to={"/gos_zemli/"}>{t('gov_earth')}</Link>
                                                </div>
                                            )}
                                        </Link>
                                    </li>
                                    <li><Link onClick={() => closeMenu()} to={"/postanovlenie/"} className={"menu-item"}>{t('toktom')}</Link></li>
                                    <li><Link onClick={() => closeMenu()} to={"/news/"} class="menu-item">{t('new')}</Link></li>
                                    <li><Link onClick={() => closeMenu()} to={"/contact/"} class="menu-item">{t('contact')}</Link></li>
                                </ul>
                            </div>

                            <div className="nav_col22">
                                <div
                                    onClick={() => changeLanguage('ru')}
                                    className="nav_block nblock1"
                                    role="button"
                                    title="Русский"
                                >
                                    <div className="nav_title">РУ</div>
                                    <img className="flag" src={Flag1} alt="Флаг России" />
                                </div>
                                <div
                                    onClick={() => changeLanguage('kg')}
                                    className="nav_block nblock1"
                                    role="button"
                                    title="Кыргызский"
                                >
                                    <div className="nav_title">КЖ</div>
                                    <img className="flag" src={Flag} alt="Флаг Кыргызстана" />
                                </div>
                            </div>

                            <div className="link_head"><Link to="/">{t('glvanoe')}</Link></div>
                            <div className="link_head link1">
                                <Link to="/rucovodstvo/">
                                    {t('jet')} <i className="bx bxs-chevron-down white_box" style={{ color: "#ffffff" }}></i>
                                </Link>
                                <div className="link_head link_block1">
                                    <Link to="/history/">{t('taryh')}</Link>
                                    <Link to="/electronaya-priemnaya/">{t('kabyl')}</Link>
                                </div>
                            </div>
                            <div className="link_head">
                                <Link to="/cadr/">{t('cadyr')}</Link>
                            </div>
                            <div className="link_head link2">
                                <Link to="/earths/">
                                    {t('earth')} <i className="bx bxs-chevron-down white_box" style={{ color: "#ffffff" }}></i>
                                </Link>
                                <div className="link_block2">
                                    <Link to="/selhoz/">{t('cow')}</Link>
                                    <Link to="/gos_zemli/">{t('gov_earth')}</Link>
                                </div>
                            </div>
                            <div className="link_head">
                                <Link to="/postanovlenie/">{t('toktom')}</Link>
                            </div>
                            <div className="link_head">
                                <Link to="/news/">{t('new')}</Link>
                            </div>
                            <div className="link_head">
                                <Link to="/contact/">{t('contact')}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nav;
