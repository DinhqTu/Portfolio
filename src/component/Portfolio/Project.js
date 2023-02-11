import {
    faClose,
    faGlobe,
    faLanguage,
    faSheetPlastic,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './Portfolio.module.scss';

const cx = classNames.bind(styles);

function Project({ data }) {
    const [active, setActive] = useState('hide');

    const handleSetActive = () => {
        setActive('active');
    };

    const handleSetHide = () => {
        setActive('hide');
    };

    return (
        <div className={cx('item')}>
            <span className={cx('link')} onClick={handleSetActive}>
                <img src={data.image} alt={data.image} />
            </span>

            {active === 'active' && (
                <div className={cx('modal_mask')}>
                    <div className={cx('modal_wrapper')}>
                        <div
                            className={cx('modal_close')}
                            onClick={handleSetHide}
                        >
                            <FontAwesomeIcon icon={faClose} />
                        </div>

                        <div className={cx('modal_container')}>
                            <div className={cx('modal_title')}>
                                {data.title}
                            </div>
                            <div className={cx('modal_info')}>
                                <span>
                                    <p>
                                        {' '}
                                        <FontAwesomeIcon
                                            icon={faSheetPlastic}
                                        />{' '}
                                        Project: {data.project}
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon={faLanguage} />{' '}
                                        Languages: {data.languages}
                                    </p>
                                </span>
                                <span>
                                    <p>
                                        <FontAwesomeIcon icon={faUser} />{' '}
                                        Client: {data.client}
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon={faGlobe} />{' '}
                                        Preview:
                                        <a
                                            href={data.preview}
                                            target={'_blank'}
                                            rel="noreferrer"
                                        >
                                            {' '}
                                            https://dinhqtu.io
                                        </a>
                                    </p>
                                </span>
                            </div>
                            <div className={cx('modal_image')}>
                                <img src={data.image} alt={data.image} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Project;
