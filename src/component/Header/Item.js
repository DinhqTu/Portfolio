import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function Item({ icon, to, title }) {
    return (
        <NavLink
            className={(nav) => cx('item', { active: nav.isActive })}
            to={to}
        >
            <span className={cx('title')}>{title}</span>
            <FontAwesomeIcon icon={icon} />
        </NavLink>
    );
}

export default Item;
