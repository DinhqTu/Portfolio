import {
    faEnvelope,
    faMapLocationDot,
    faPaperPlane,
    faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { IconFB, IconGithub, IconLinkedIn, IconTwitter } from '../Icon';
import styles from './Contact.module.scss';

const cx = classNames.bind(styles);

function Contact() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <h1>
                    GET IN <span>TOUCH</span>
                </h1>
                <span className={cx('contact')}>CONTACT</span>
            </header>
            <div className={cx('container')}>
                <div className={cx('left')}>
                    <h3 className={cx('title')}>DON'T BE SHY !</h3>
                    <p className={cx('content')}>
                        Feel free to get in touch with me. I am always open
                        <br /> to discussing new projects, creative ideas or
                        opportunities to be part of your visions.
                    </p>
                    <span className={cx('item')}>
                        <FontAwesomeIcon
                            className={cx('icon')}
                            icon={faMapLocationDot}
                        />
                        <span>
                            <p>ADDRESS POINT</p> 20/5 Tran Quoc Tuan, Phuong 1,
                            Go Vap, TP HCM
                        </span>
                    </span>
                    <span className={cx('item')}>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span>
                            <p>MAIL ME</p>
                            <a href={'mailto:dinhqtu861@gmail.com'}>
                                dinhqtu861@gmail.com
                            </a>
                        </span>
                    </span>
                    <span className={cx('item')}>
                        <FontAwesomeIcon icon={faPhone} />
                        <span>
                            <p>CALL ME</p>
                            <a href={'tel:038 2244 897'}>038 2244 897</a>
                        </span>
                    </span>
                    <span className={cx('social')}>
                        <a
                            href="https://www.facebook.com/dinhqtu861/"
                            alt="https://www.facebook.com/dinhqtu861/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <IconFB />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/dinhqtu861/"
                            alt="https://www.linkedin.com/in/dinhqtu861/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <IconLinkedIn />
                        </a>
                        <a
                            href="https://github.com/DinhqTu"
                            alt="https://github.com/DinhqTu"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <IconGithub className={cx('btn_github')} />
                        </a>
                        <a
                            href="https://twitter.com/DinhTu861"
                            alt="https://twitter.com/DinhTu861"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <IconTwitter />
                        </a>
                    </span>
                </div>
                <div className={cx('right')}>
                    <span>
                        <input
                            type={'text'}
                            className={cx('input_s')}
                            placeholder={'YOUR NAME'}
                        />
                        <input
                            type={'text'}
                            className={cx('input_s')}
                            placeholder={'YOUR EMAIL'}
                        />
                    </span>

                    <span>
                        <input
                            type={'text'}
                            className={cx('input_m')}
                            placeholder={'YOUR SUBJECT'}
                        />
                    </span>

                    <span>
                        <input
                            type={'text'}
                            className={cx('input_l')}
                            placeholder={'YOUR MESSAGE'}
                        />
                    </span>
                    <button className={cx('contact')}>
                        <span> SEND MESSAGE</span>
                        <span className={cx('btn_right')}>
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Contact;
