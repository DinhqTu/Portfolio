import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHouse,
    faUser,
    faBriefcase,
    faEnvelope,
    faComment,
    faGear,
} from '@fortawesome/free-solid-svg-icons';
import Item from './Item';
import config from '~/config';

const cx = classNames.bind(styles);

function Header() {
    const [show, setShow] = useState(false);
    const [light, setLight] = useState(false);

    const handleShow = () => {
        setShow(!show);
    };

    const handleLight = () => {
        setLight(!light);
    };

    useEffect(() => {
        if (light) {
            document.documentElement.style.setProperty('--main-color', '#fff');
            document.documentElement.style.setProperty('--white-color', '#111');
            document.documentElement.style.setProperty('--text-color', '#111');
            document.documentElement.style.setProperty('--input-color', '#fff');
        } else {
            document.documentElement.style.setProperty(
                '--main-color',
                '#111111',
            );
            document.documentElement.style.setProperty('--white-color', '#fff');
            document.documentElement.style.setProperty('--text-color', '#fff');
            document.documentElement.style.setProperty(
                '--input-color',
                '#252525',
            );
        }
    }, [light]);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('navbar')}>
                <div className={cx('btn_group')}>
                    <span className={cx('btn')}>
                        <FontAwesomeIcon
                            icon={faGear}
                            className={cx('btn_setting')}
                            onClick={handleShow}
                        />
                    </span>
                    {show && (
                        <div className={cx('wrapper_setting')}>
                            <h3 className={cx('mode')}>Light Mode:</h3>
                            <label className={cx('switch')}>
                                <input type="checkbox" onClick={handleLight} />
                                <span className={cx('slider')}></span>
                            </label>
                        </div>
                    )}
                </div>
                <ul className={cx('list_items')}>
                    <Item
                        icon={faHouse}
                        title={'Home'}
                        to={config.routes.home}
                    />
                    <Item
                        icon={faUser}
                        title={'About'}
                        to={config.routes.about}
                    />
                    <Item
                        icon={faBriefcase}
                        title={'Portfolio'}
                        to={config.routes.portfolio}
                    />
                    <Item
                        icon={faEnvelope}
                        title={'Contact'}
                        to={config.routes.contact}
                    />
                    {/* <Item
                        icon={faComment}
                        title={'Blog'}
                        to={config.routes.blog}
                    /> */}
                </ul>
            </div>
        </header>
    );
}

export default Header;
