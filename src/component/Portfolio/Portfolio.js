import classNames from 'classnames/bind';

import styles from './Portfolio.module.scss';
import Shopee from '../Image/shopee.png';
import Anime from '../Image/animestore.png';
import Tiktok from '../Image/tiktok.png';
import Academy from '../Image/academy.png';
import Music from '../Image/music.png';

import Project from './Project';

const cx = classNames.bind(styles);

const INFO_PROJECT = [
    {
        title: 'Anime Store',
        project: 'E-Commerce Website',
        languages: 'HTML, CSS, JS, PHP',
        client: 'Anubius',
        preview: 'https://animes-shop.000webhostapp.com/',
        image: Anime,
    },
    {
        title: 'Clone TikTok',
        project: 'Website',
        languages: 'HTML, CSS, JS, REACT',
        client: 'Anubius',
        preview: '',
        image: Tiktok,
    },
    {
        title: 'Template Shopee Home',
        project: 'Template',
        languages: 'HTML, CSS ',
        client: 'Anubius',
        preview: 'https://dinhqtu.github.io/template_shopee_home/',
        image: Shopee,
    },
    {
        title: 'Academy Website',
        project: 'Website',
        languages: 'HTML, CSS, JS, NodeJS',
        client: 'Anubius',
        preview: 'https://nodecourses.onrender.com/',
        image: Academy,
    },
    {
        title: 'Music Play',
        project: 'Website',
        languages: 'HTML, CSS, JS',
        client: 'Anubius',
        preview: 'https://dinhqtu.github.io/Music_Play/',
        image: Music,
    },
];

function Portfolio() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <h1 className={cx('header_top')}>
                    MY <span className={cx('header_pri')}>PORTFOLIO</span>
                </h1>
                <h1 className={cx('header_opa')}>WORKS</h1>
            </header>
            <nav className={cx('nav')}>
                <ul>
                    <li className={cx('all')}>ALL</li>
                    <li>LOGO</li>
                    <li>VIDEO</li>
                    <li>GRAPHIC DESIGN</li>
                    <li>MOCKUP</li>
                </ul>
            </nav>
            <div className={cx('items')}>
                {INFO_PROJECT.map((item, index) => {
                    return <Project data={item} key={index} />;
                })}
                {/* <div className={cx('item')}>
                    <a href="#" className={cx('link')}>
                        <img src={Shopee} alt="shopee" />
                    </a>
                </div>
                <div className={cx('item')}>
                    <a href="#" className={cx('link')}>
                        <img src={Shopee} alt="shopee" />
                    </a>
                </div>
                <div className={cx('item')}>
                    <a href="#" className={cx('link')}>
                        <img src={Shopee} alt="shopee" />
                    </a>
                </div>
                <div className={cx('item')}>
                    <a href="#" className={cx('link')}>
                        <img src={Shopee} alt="shopee" />
                    </a>
                </div> */}
            </div>
        </div>
    );
}

export default Portfolio;
