import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {

    const { t } = useTranslation();

    return (
        <footer>
            <div className='container'>
                <div className="footer_row">
                    <div className="footer_col1">
                        <div className="footer_title footer_head" dangerouslySetInnerHTML={{ __html: t("adres") }} />
                        <div className="footer_title" dangerouslySetInnerHTML={{ __html: t("kabylalu") }} />
                        <div className="footer_title footer_head">{t('coci')}</div>
                        <div className="footer_title1">
                            <a href="">Ютуб</a>
                            <a href="">Фейсбук</a>
                            <a href="">Инстаграм</a>
                        </div>
                    </div>
                    <div className="footer_col1">
                        <div className="footer_title footer_head">{t('ish')}</div>
                        <div className="footer_title " dangerouslySetInnerHTML={{ __html: t("rabota") }} />
                    </div>
                    <div className="footer_col3">
                        <div className="footer_title footer_head">{t('silka')}</div>
                        <div className="footer_col3-block">
                            <div className="footer_col3-col1">
                                <Link className="footer_title" to={"/"}>{t('glvanoe')}</Link>
                                <a href='#' className="footer_title">{t('okmot')}</a>
                                <Link className="footer_title" to={"/rucovodstvo"}>{t('jet')}</Link>
                                <Link to={"/history/"} className="footer_title">{t('taryh')}</Link>
                                <Link to={"/electronaya-priemnaya/"} className="footer_title">{t('kabyl')}</Link>
                                <Link to={"/cadr/"} className="footer_title">{t('cadyr')}</Link>
                            </div>
                            <div className="footer_col3-col1">
                                <Link to={"/earths/"} className="footer_title">{t("earth")}</Link>
                                <Link to={"/selhoz/"} className="footer_title">{t('cow')}</Link>
                                <Link to={"/gos_zemli/"} className="footer_title">{t('gov_earth')}</Link>
                                <Link to={"/postanovlenie/"} className="footer_title">{t('toktom')}</Link>
                                <Link to={"/news/"} className="footer_title">{t('new')}</Link>
                                <Link to={"/contact/"} className="footer_title">{t('contact')}</Link>
                            </div>
                        </div>
                    </div>
                    <div className="footer_col1">
                        <div className="footer_title footer_head">{t('tez')}</div>
                        <div className="footer_title" dangerouslySetInnerHTML={{ __html: t("tez1") }} />
                    </div>
                </div>
            </div>
            <div className="razrab">
                <div className="container">
                    <div className="nur_title">
                        Все права защищены © 2025 <br />
                        Сайт создал nursultan.top.game@gmail.com
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;