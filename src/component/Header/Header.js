import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHouse,
    faUser,
    faBriefcase,
    faEnvelope,
    faComment,
} from '@fortawesome/free-solid-svg-icons';
import Item from './Item';
import config from '~/config';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('navbar')}>
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
