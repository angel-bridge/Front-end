import * as style from '@/app/home/styles/Contents.css';

import Recommends from './Recommends';

export default function Contents() {
    return (
        <div className={style.contents}>
            <Recommends />
        </div>
    );
}