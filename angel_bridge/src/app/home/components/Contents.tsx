import * as style from '@/app/home/styles/Contents.css';

import Recommends from './Recommends';
import BlogArticles from './BlogArticles';

export default function Contents() {
    return (
        <div className={style.contents}>
            <Recommends />
            <BlogArticles />
        </div>
    );
}