import * as style from '@/app/home/styles/Recommends.css';

import Image from 'next/image';
import Thumbnail from '@/app/home/assets/dummyImage.png';

export default function Recommends() {
    return (
        <div className={style.recommends}>
            <div className={style.titleWrapper}>
                <p className={style.title}>추천 프로그램</p>
                <p className={style.seeAll}>전체보기</p>
            </div>
            <div className={style.contentsWrapper}>
                <div className={style.contents}>
                    <div className={style.contentImage}>
                        <p className={style.activeBadge}>모집중</p>
                        <Image
                                src={Thumbnail}
                                alt="Program Thumbnail"
                                width={330}
                                height={180}
                                style={{
                                    objectFit: 'cover',
                                    borderRadius: '1.5rem',
                                }}
                        />
                    </div>
                    <div className={style.contentText}>
                        <p className={style.contentTitle}>예비창업패키지 2주 완성</p>
                        <p className={style.contentBio}>프로그램 한줄 소개를 작성해 주세요. 두줄은 곤란해요.</p>
                    </div>
                </div>
                <div className={style.contents}>
                    <div className={style.contentImage}>
                        <p className={style.inactiveBadge}>모집예정</p>
                        <Image
                                src={Thumbnail}
                                alt="Program Thumbnail"
                                width={330}
                                height={180}
                                style={{
                                    objectFit: 'cover',
                                    borderRadius: '1.5rem',
                                }}
                            />
                    </div>
                    <div className={style.contentText}>
                        <p className={style.contentTitle}>예비창업패키지 2주 완성</p>
                        <p className={style.contentBio}>프로그램 한줄 소개를 작성해 주세요. 두줄은 곤란해요.</p>
                    </div>
                </div>
                <div className={style.contents}>
                    <div className={style.contentImage}>
                        <p className={style.inactiveBadge}>모집예정</p>
                        <Image
                                src={Thumbnail}
                                alt="Program Thumbnail"
                                width={330}
                                height={180}
                                style={{
                                    objectFit: 'cover',
                                    borderRadius: '1.5rem',
                                }}
                            />
                    </div>
                    <div className={style.contentText}>
                        <p className={style.contentTitle}>예비창업패키지 2주 완성</p>
                        <p className={style.contentBio}>프로그램 한줄 소개를 작성해 주세요. 두줄은 곤란해요.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}