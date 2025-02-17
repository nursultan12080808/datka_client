import React from 'react';
import Gerb from '../images/gerb.png';
import { Link } from 'react-router-dom';
import Flag from '../images/flag.avif';
import Flag1 from '../images/flag1.jpg';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import 'boxicons'


const Nav = ({ language, setLanguage }) => {

    const { t, i18n } = useTranslation(); // Используем хук для перевода

    const changeLanguage = (lang) => {
        setLanguage(lang)
        i18n.changeLanguage(lang); // Изменяем язык
    };
    const [isOpen, setIsOpen] = useState(false);
    const [blur, setBlur] = useState(false)

    const handleClick = (e) => {
        if(isOpen == false){
            e.preventDefault();
            setIsOpen(true);  // Переключаем состояние
        }{
            setIsOpen(!isOpen);
        }
    };
    const [isOpen1, setIsOpen1] = useState(false);

    const handleClick1 = (e) => {
        if(isOpen1 == false){
            e.preventDefault();
            setIsOpen1(true);  // Переключаем состояние
        }{
            setIsOpen1(!isOpen1);
        }
    };

    const closeMenu = (blur) => {
        const burgerCheckbox = document.getElementById('burger-checkbox');
        if (burgerCheckbox) {
            burgerCheckbox.checked = false; // Закрываем бургер-меню
        }
        setIsOpen(false);  
        setIsOpen1(false); // Закрываем выпадающее меню "earth"
    };


    
    return (
        <div>
            <label for="burger-checkbox" id='blur123' className=""></label>
            <div className="h100"></div>
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
                            <ul class="menu-list" id='menu-list'>
                                <li><Link onClick={() => closeMenu()} to={"/"} class="menu-item">{t('glvanoe')}</Link></li>
                                <li>
                                    <Link
                                        to={"rucovodstvo/"}
                                        href="#"
                                        className={`menu-item ${isOpen ? 'active' : ''}`}
                                        onClick={handleClick}
                                    >
                                        {t('jet')} <box-icon className="white_box" color="#ffffff" type='solid' name='chevron-down'></box-icon>
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
                                        className={`menu-item okmot1`}
                                        onClick={handleClick1} // Обработчик клика
                                    >
                                        {t("earth")} <box-icon className="white_box" color="#ffffff" type='solid' name='chevron-down'></box-icon>
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
                            <Link to={"/rucovodstvo/"} href="#">{t('jet')} <box-icon className="white_box" color="#ffffff" type='solid' name='chevron-down'></box-icon></Link>
                            <div className="link_head link_block1">
                                <Link to={"/history/"}>{t('taryh')}</Link>
                                <Link to={"/electronaya-priemnaya/"}>{t('kabyl')}</Link>
                            </div>
                        </div>
                        <div className="link_head"><Link to={"/cadr/"}>{t('cadyr')}</Link></div>
                        <div className="link_head link2">
                            <Link to={'/earths'}>{t("earth")} <box-icon className="white_box" color="#ffffff" type='solid' name='chevron-down'></box-icon></Link>
                            <div className="link_block2">
                                <Link to={"/selhoz/"}>{t('cow')}</Link>
                                <Link to={"/gos_zemli/"}>{t('gov_earth')}</Link>
                            </div>
                        </div>
                        <div className="link_head"><Link to={"/postanovlenie/"}>{t('toktom')}</Link></div>
                        <div className="link_head"><Link to={"/news/"}>{t('new')}</Link></div>
                        <div className="link_head"><Link to={"/contact/"}>{t('contact')}</Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
