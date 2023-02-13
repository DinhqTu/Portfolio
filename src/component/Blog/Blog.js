import classNames from 'classnames/bind';
import styles from './Blog.module.scss';
const cx = classNames.bind(styles);

function Blog() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <h1>
                    MY <span>BLOG</span>
                </h1>
                <span className={cx('contact')}>POSTS</span>
            </header>
        </div>
    );
}

export default Blog;
