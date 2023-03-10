import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import config from '~/config';

import styles from './Home.module.scss';
const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('avatar')}></div>
            <div className={cx('info')}>
                <h1 className={cx('name')}>I am Dinh Tu</h1>
                <h1 className={cx('job')}>Front-end Developer</h1>
                <p className={cx('title')}>
                    I'm a front‑end developer focused on crafting clean &
                    user‑friendly experiences, I am passionate about building
                    excellent software that improves the lives of those around
                    me.
                </p>
                <NavLink to={config.routes.about}>
                    <button className={cx('contact')}>
                        <span> More About Me</span>
                        <span className={cx('btn_right')}>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                    </button>
                </NavLink>
            </div>
        </div>
    );
}

export default Home;
