import { faBriefcase, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './About.module.scss';
const cx = classNames.bind(styles);

function About() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h1 className={cx('heading')}>
                    About <span className={cx('me')}>Me</span>
                </h1>
                <h1 className={cx('heading_opa')}>Resume</h1>
            </div>
            <div className={cx('container')}>
                <div className={cx('info')}>
                    <h3 className={cx('title')}>personal infos</h3>
                    <span>
                        <i>First Name:</i> Dinh
                    </span>
                    <span>
                        <i>Age:</i> 22
                    </span>

                    <span>
                        <i>Phone</i>: 038 2244 897
                    </span>
                    <span>
                        <i>GitHub</i>:{' '}
                        <a href="https://github.com/DinhqTu" target="_blank">
                            https://github.com/DinhqTu
                        </a>
                    </span>
                    <span>
                        <i>Linkedin</i>:{' '}
                        <a
                            href="https://linkedin.com/in/dinhqtu861/"
                            target="_blank"
                        >
                            linkedin.com/in/dinhqtu861/
                        </a>
                    </span>
                    <button className={cx('contact')}>
                        <span>DOWNLOAD CV</span>
                        <i className={cx('btn_right')}>
                            <FontAwesomeIcon icon={faDownload} />
                        </i>
                    </button>
                </div>
                <div className={cx('info')}>
                    <span className={cx('name')}>
                        <i>Last Name</i>: Quoc Tu
                    </span>
                    <span>
                        <i>Nationality</i>: Vietnamese
                    </span>
                    <span>
                        <i>Address</i>: Ho Chi Minh City
                    </span>
                    <span>
                        <i>Email</i>: dinhqtu861@gmail.com
                    </span>
                    <span>
                        <i>Language</i>: VietNamese
                    </span>
                </div>
                <div className={cx('info')}>
                    <div className={cx('block')}>
                        <span className={cx('count')}>0 </span>
                        <span className={cx('text')}>Years of experience </span>
                    </div>
                    <div className={cx('block')}>
                        <span className={cx('count')}>7 </span>
                        <span className={cx('text')}>Completed Projects </span>
                    </div>
                </div>
                <div className={cx('info')}>
                    <div className={cx('block')}>
                        <span className={cx('count')}>0 </span>
                        <span className={cx('text')}>Years of experience </span>
                    </div>
                    <div className={cx('block')}>
                        <span className={cx('count')}>0 </span>
                        <span className={cx('text')}>Years of experience </span>
                    </div>
                </div>
            </div>
            <div className={cx('my_skill')}>
                <h3 className={cx('header')}>My Skills</h3>
                <div className={cx('skills')}>
                    <div className={cx('skill')}>HTML</div>
                    <div className={cx('skill')}>CSS</div>
                    <div className={cx('skill')}>SCSS</div>
                    <div className={cx('skill')}>JAVASCRIPT</div>
                    <div className={cx('skill')}>REACT</div>
                    <div className={cx('skill')}>PHP</div>
                </div>
            </div>
            <div className={cx('exp_education')}>
                <h3 className={cx('header')}>EXPERIENCE & EDUCATION</h3>
                <div className={cx('list')}>
                    <div className={cx('item')}>
                        <span className={cx('icon')}>
                            <FontAwesomeIcon icon={faBriefcase} />
                        </span>
                        <div className={cx('info')}>
                            <span className={cx('time')}>2019 - Present</span>
                            <h3 className={cx('title')}>
                                Information Technology - Industrial University
                                of Ho Chi Minh City
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, tempor incididunt ut
                                laboreconsectetur elit, sed do eiusmod tempor
                                duntt
                            </p>
                        </div>
                    </div>

                    <div className={cx('item')}>
                        <span className={cx('icon')}>
                            <FontAwesomeIcon icon={faBriefcase} />
                        </span>
                        <div className={cx('info')}>
                            <span className={cx('time')}>2019 - Present</span>
                            <h3 className={cx('title')}>
                                Information Technology - Industrial University
                                of Ho Chi Minh City
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, tempor incididunt ut
                                laboreconsectetur elit, sed do eiusmod tempor
                                duntt
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
