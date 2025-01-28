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

    const handleClick = (e) => {
        // Преобразуем нажатие на ссылку в открытие или закрытие меню
        setIsOpen(!isOpen);
    };
    const [isOpen1, setIsOpen1] = useState(false);

    const handleClick1 = (event) => {
        setIsOpen1((prev) => !prev);  // Переключаем состояние
    };

    const [blur, setBlur] = useState(false)

    const defBLur = (blur1) => {
        if(!blur1){
            let blur2 = document.getElementById('blur')
            blur2.className = "blur"
            setBlur(!blur1)
        }else{
            let blur2 = document.getElementById('blur')
            blur2.className = ""
            setBlur(!blur1)
        }
    }
    const defBLur1 = (blur1) => {
        if(blur1){
            let blur2 = document.getElementById('blur')
            blur2.className = ""
            setBlur(!blur1)
        }else{
            let blur2 = document.getElementById('blur')
            blur2.className = "blur"
            setBlur(!blur1)
        }
    }
    return (
        <div>
            <label for="burger-checkbox" id='blur' onClick={() => defBLur1(blur)} className=""></label>
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
                            <label onClick={() => defBLur(blur)} for="burger-checkbox" class="burger"></label>
                            <ul class="menu-list" id='menu-list'>
                                <li><Link to={"/"} class="menu-item">{t('glvanoe')}</Link></li>
                                <li>
                                    <a
                                        href="#"
                                        className={`menu-item ${isOpen ? 'active' : ''}`}
                                        onClick={handleClick}
                                    >
                                        {t('okmot')} <box-icon className="white_box" color="#ffffff" type='solid' name='chevron-down'></box-icon>
                                        {isOpen && (
                                            <div className="link_blockk1">
                                                <Link to={"rucovodstvo/"}>
                                                    {t("jet")}
                                                </Link>
                                                <a href="#">{t('taryh')}</a>
                                                <a href="#">{t('kabyl')}</a>
                                            </div>
                                        )}
                                    </a>
                                </li>
                                <li><Link to={"/cadr/"} class="menu-item">{t('cadyr')}</Link></li>
                                <li>
                                    <Link
                                        to={"/earths/"}
                                        className={`menu-item okmot1`}
                                        onClick={handleClick1} // Обработчик клика
                                    >
                                        {t("earth")} <box-icon className="white_box" color="#ffffff" type='solid' name='chevron-down'></box-icon>
                                        {isOpen1 && (
                                            <div className="link_blockk2">
                                                <Link to={"/selhoz/"}>{t('cow')}</Link>
                                                <Link to={"/gos_zemli/"}>{t('gov_earth')}</Link>
                                            </div>
                                        )}
                                    </Link>
                                </li>
                                <li><Link to={"/postanovlenie/"} className={"menu-item"}>{t('toktom')}</Link></li>
                                <li><Link to={"/news/"} class="menu-item">{t('new')}</Link></li>
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
                            <a href="#">{t('okmot')} <box-icon className="white_box" color="#ffffff" type='solid' name='chevron-down'></box-icon></a>
                            <div className="link_head link_block1">
                                <Link to={"rucovodstvo/"}>{t('jet')}</Link>
                                <a href="#">{t('taryh')}</a>
                                <a href="#">{t('kabyl')}</a>
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
                        <div className="link_head"><a href="#">{t('contact')}</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
